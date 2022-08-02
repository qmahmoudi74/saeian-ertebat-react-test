import { useTodosContext } from "components/Todos";
import styles from "components/Todos/styles/TodosList.module.css";
import type { Todo } from "hooks/useTodosReducer";
import type { ChangeEventHandler, FC, MouseEventHandler } from "react";

interface Props {
  todo: Todo;
}

const TodosListItem: FC<Props> = ({ todo: { desc, id, isDone } }) => {
  const { dispatch } = useTodosContext();

  const onCheckBoxChange: ChangeEventHandler<HTMLInputElement> = () =>
    dispatch({
      type: "TOGGLE_DONE_TODO",
      payload: { desc, id, isDone },
    });

  const onRemoveButtonClick: MouseEventHandler<HTMLDivElement> = () =>
    dispatch({
      type: "DELETE_TODO",
      payload: { desc, id, isDone },
    });

  const isDoneStyle = `${isDone ? styles.isDone : ""} ${styles.todosText}`;

  return (
    <li className={styles.todosListItem}>
      <span className={isDoneStyle}>{desc}</span>

      <input
        type="checkbox"
        checked={isDone}
        onChange={onCheckBoxChange}
        className={styles.todosCheckBox}
      />
      <div className={styles.removeButton} onClick={onRemoveButtonClick}>
        ×
      </div>
    </li>
  );
};

export default TodosListItem;
