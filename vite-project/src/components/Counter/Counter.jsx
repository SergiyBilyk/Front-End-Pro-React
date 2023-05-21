import { useState } from "react"
import { Button } from "../Buttons/Button";
import './Counter.css'

const Counter = () => {

    const [value, setValue] = useState(0);

    const handleDecrement = () => {
        setValue((prevState) => --prevState);
    };
    const handleIncrement = () => {
        setValue((prevState) => ++prevState);
    };

    return (
        <>
            <h2>Counter</h2>
            <h2 className="number-counter">{value}</h2>
            <Button onClick={handleDecrement}>Remove </Button>
            <Button onClick={handleIncrement}>Add</Button>
        </>

    )
}

export default Counter