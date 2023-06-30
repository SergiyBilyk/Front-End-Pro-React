import { useMemo, useRef } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { isValidElement } from "react";
import { useState } from "react";
import "./App.css";
import CounterView from "./CounterView";
import List from "./List";

function App() {
  const [counter, setCounter] = useState(0)
  const [auth, isAuth] = useState(false)

  const hello = useCallback(() => {
    console.log(`Hellouuu ${counter}`)
  },[])

  const users = useMemo(() => {
    return [
      {id: 1, name: 'ivan'},
      {id: 2, name: 'ivan 2'},
      {id: 3, name: 'ivan 3'},
      {id: 4, name: 'ivan 4'}
    ]
  }, [])

  const inputRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect (() => {
    console.log(inputRef.current)
    if(!inputRef.current) return;
    const handleKeydown = () => {
      console.log('inputRef.current')
    }
    inputRef.current.addEventListener('keydown', handleKeydown)

    return () => {
      inputRef.current.removeEventListener('keydown', handleKeydown)
    }
    
  }, [isVisible])

  return (
    <div className="container">
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(prev => ++prev)}>Add</button>
        <button onClick={() => isAuth(!auth)}>Login</button>
      </div>

      <CounterView  greet={hello} value = {counter}/>
      <List person= {users}/>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>Go</button>
        {isVisible && <input type='text' placeholder="Poshuk" ref={inputRef}/>}

      </div>
    </div>
  );
}

export default App;
