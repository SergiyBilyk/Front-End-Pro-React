import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";
import { login, logout } from "./redux/authSlice";
import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);

  const handleIncrement = () => {
    dispatch(increment(number));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const { isAuth } = useSelector((store) => store.auth);

  return (
    <div className="container">
      {isAuth ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
      Hello
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div>Counter: {value}</div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;
