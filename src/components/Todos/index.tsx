import InputBox from "components/Todos/InputBox";
import styles from "components/Todos/styles/Todos.module.css";
import TodosList from "components/Todos/TodosList";
import useTodosReducer from "hooks/useTodosReducer";
import { createContext, FC, useContext } from "react";

interface ContextType {
  todosList: ReturnType<typeof useTodosReducer>[0];
  dispatch: ReturnType<typeof useTodosReducer>[1];
}

const initialValue = {} as ContextType;
const context = createContext(initialValue);
const { Provider } = context;

const Todos: FC = () => {
  const [todosList, dispatch] = useTodosReducer();

  return (
    <Provider value={{ todosList, dispatch }}>
      <div className={styles.todosWrapper}>
        <InputBox />
        <TodosList />
      </div>
    </Provider>
  );
};

export const useTodosContext = () => useContext(context);
export default Todos;
