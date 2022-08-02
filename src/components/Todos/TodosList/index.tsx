import { useTodosContext } from "components/Todos";
import styles from "components/Todos/styles/TodosList.module.css";
import TodosListItem from "components/Todos/TodosList/TodosListItem";
import type { FC } from "react";

const TodosList: FC = () => {
  const { todosList } = useTodosContext();

  return (
    <ul className={styles.todosListWrapper}>
      {todosList.map((todo) => (
        <TodosListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
