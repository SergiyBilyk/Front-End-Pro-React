import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import styles from "./TodoForm.module.css";

const TodoForm = ({ addList }) => {
  const [data, setData] = useState("");

  const handleInputChange = (e) => {
    setData(e.target.value);
  };

  const handleAddData = (e) => {
    e.preventDefault();
    addList(data);
    setData("");
  };
  return (
    <div>
      <form className={styles.form} onSubmit={handleAddData}>
        <input
          className={styles.input}
          type="text"
          value={data}
          onChange={handleInputChange}
        ></input>
        <Button type="submit" title="Submit">Submit</Button>
      </form>
    </div>
  );
};

export default TodoForm;
