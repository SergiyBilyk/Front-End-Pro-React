import React from 'react'
import "./RandomNumber.css"
import { useState } from 'react';
import generateRandomNum from './generateRandomNum'

const RandomNumber = ({maxNumber}) => {

  const [number, setNumber] = useState(0)

  const generateNumber = () => {
    setNumber(generateRandomNum(maxNumber))
  }

  return (
    <div className='card-container'>
        <h2>{number}</h2>
        <button onClick={generateNumber}>Generate number</button>
    </div>
  )
}

export default RandomNumber