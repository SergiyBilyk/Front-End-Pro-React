import React from 'react'

const Person = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

export default Person