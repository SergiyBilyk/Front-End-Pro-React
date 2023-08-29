import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosAction from "./components/Todos/TodosAction";
import { useState } from "react";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [lists, setLists] = useState([]);

  const handleAddList = (item) => {
    const newTodo = {
      text: item,
      isComplited: false,
      id: uuidv4(),
    };
    item && setLists([...lists, newTodo]);
  };

  const deleteTodoHandler = (index) => {
    setLists(lists.filter((todo) => todo.id !== index));
  };

  const toggleTodoHandler = (id) => {
    setLists(
      lists.map((list) => {
        return id === list.id
          ? { ...list, isComplited: !list.isComplited }
          : { ...list };
      })
    );
  };

  const resetTodoHandler = () => {
    setLists([]);
  };

  const clearComplitedHandler = () => {
    setLists(lists.filter((list) => !list.isComplited));
  };
  const complitedTodoCount = lists.filter((list) => list.isComplited).length;

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm addList={handleAddList} />
      {lists.length > 0 && (
        <TodosAction
          resetTodo={resetTodoHandler}
          clearComplited={clearComplitedHandler}
          complitedTodoCount={!!complitedTodoCount}
        />
      )}
      <TodoList
        lists={lists}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {complitedTodoCount > 0 && (
        <p>
          You have complited {complitedTodoCount} {complitedTodoCount<2 ? 'todo' : 'todos'}
        </p>
      )}
    </>
  );
}
export default App;
