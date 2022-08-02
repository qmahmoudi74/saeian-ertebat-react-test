import { Reducer, useReducer } from "react";

export interface Todo {
  id: number;
  desc: string;
  isDone: boolean;
}

type TodoActionType = "ADD_TODO" | "TOGGLE_DONE_TODO" | "DELETE_TODO";
export type TodosActions = { type: TodoActionType; payload: Todo };

const initialState: Todo[] = [];

const reducer: Reducer<Todo[], TodosActions> = (state, { type, payload }) => {
  const todoIndex = state.findIndex(({ id }) => id === payload.id);
  const stateCopy = [...state];

  switch (type) {
    case "ADD_TODO":
      return [...state, payload];

    case "TOGGLE_DONE_TODO":
      stateCopy[todoIndex].isDone = !payload.isDone;
      return stateCopy;

    case "DELETE_TODO":
      return state.filter(({ id }) => id !== payload.id);

    default:
      return stateCopy;
  }
};

const useTodosReducer = () => useReducer(reducer, initialState);

export default useTodosReducer;
