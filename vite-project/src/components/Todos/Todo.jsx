import React from "react";
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import styles from "./Todo.module.css";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`${styles.wrap} ${
        todo.isComplited ? styles.complitedTodo : ""
      }`}
    >
      <RiTodoFill className={styles.icon + " " + styles.todoIcon}/>
      <div className={styles.todo}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.icon + " " + styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        onClick={() => toggleTodo(todo.id)}
        className={styles.icon + " " + styles.checkIcon}
      />
    </div>
  );
};

export default Todo;
