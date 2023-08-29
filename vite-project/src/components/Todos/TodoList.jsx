import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ lists, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.list}>
      {!lists.length && <p>Todo is empty</p>}
      {lists.map((list) => (
        <Todo
          key={list.id}
          todo={list}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
