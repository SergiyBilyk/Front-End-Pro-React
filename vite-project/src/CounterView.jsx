import { useState, memo } from "react";


const CounterView = (props) => {
    const {greet} = props
    const [counter, setCounter] = useState(0)
    return (
        <div>Box
            <p>Main counter {props.value}</p>
                  <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(prev => ++prev)}>Add</button>
        <button onClick={greet}>Greet</button>
      </div>
        </div>
    )
}

export default memo(CounterView)