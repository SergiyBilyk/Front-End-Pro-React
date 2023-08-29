import React from "react";
import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from "./TodosAction.module.css";

const TodosAction = ({ resetTodo, clearComplited, complitedTodoCount }) => {
  console.log(complitedTodoCount);
  return (
    <div className={styles.wrap}>
      <Button title="Reset Todos" onClick={resetTodo}>
        <RiRefreshLine className={styles.icon} />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={clearComplited}
        disabled={!complitedTodoCount}
      >
        <RiDeleteBin2Line className={styles.icon} />
      </Button>
    </div>
  );
};

export default TodosAction;
