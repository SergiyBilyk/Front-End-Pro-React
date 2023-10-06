import React from 'react'
import CostDate from './CostDate'
import Card from "./Card";
import './CostItem.css'

const CostItem = (props) => {
  return (
    <Card className='cost-item'>
        <CostDate date={props.date}/>
        <div className='cost-item__description'>
            <h2>{props.name}</h2>
            <div className='cost-item__price'>{props.amount}</div>
        </div>
    </Card>
  )
}

export default CostItem