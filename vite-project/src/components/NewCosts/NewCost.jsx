import React from "react";
import { useState } from "react";
import './NewCost.css'

const NewCost = (props) => {

  const [userInput, setUserInput] = useState({name:'', amount:'', date:''})
  
  const nameChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        name: e.target.value
      }
    })
  }

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: e.target.value
      };
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value
      }
    }) 
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const costData = {
      name: userInput.name,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };

    props.saveCostData(costData);

    setUserInput({name:'', amount:'', date:''})
    props.changeForm(false); 
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input
            type="text"
            value={userInput.name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Сума</label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            value={userInput.date}
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit"> Додати витрати</button>
          <button onClick={props.openForm}>Приховати</button>
        </div>
      </div>
    </form>
  );
};

export default NewCost;
