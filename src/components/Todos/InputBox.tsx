import { useTodosContext } from "components/Todos";
import styles from "components/Todos/styles/InputBox.module.css";
import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react";

const genNewTodo = (value: string) => ({
  id: Date.now(),
  desc: value,
  isDone: false,
});

const InputBox: FC = () => {
  const { dispatch } = useTodosContext();
  const [value, setValue] = useState("");

  const onInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setValue(value);

  const onAddButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!value) return;
    dispatch({ type: "ADD_TODO", payload: genNewTodo(value) });
    setValue("");
  };

  return (
    <div className={styles.inputBoxWrapper}>
      <input
        type="text"
        value={value}
        onChange={onInputChange}
        className={styles.inputBox}
      />

      <button onClick={onAddButtonClick} className={styles.addButton}>
        ADD TODO
      </button>
    </div>
  );
};

export default InputBox;
