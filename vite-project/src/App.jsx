import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import Button from "./components/Button";
import ResetButton from './components/ResetButton'
import * as React from "react";

function App() {
const texts= ['Go','Add', '+++']

  const [count, setCount]= useState(0)

 const incrementCount = () => {
    setCount(count + 1)
  }
  
  const resetCount = () => {
    setCount(0);
  }

  return (
    <>
      <Counter count={count} />
      {texts.map((text, id) => {
        return <Button onClick={incrementCount} key={id} text={text} />;
      })}
      <ResetButton onClick={resetCount} count={count} />
    </>
  );
}
export default App;
