import React from 'react'
import { useDispatch } from 'react-redux';
import { increaseAmount, decreaseAmount, removeAmount} from '../redux/cartSlice'

const CardProduct = ({product}) => {
    const {name, image, price, id, amount} = product;
    const dispatch = useDispatch();
    const handleIncrease = () => {
      dispatch(increaseAmount({id}))
    }
    const handleDecrease = () => {
      dispatch(decreaseAmount({id}))
    }
    const handleRemove = () => {
      dispatch(removeAmount({id}))
    }


  return (
    <div>CardProduct
         <img src={image} alr={name} />
        <p>{name}<span> {price}$</span></p>
        <div>
            <button onClick={handleIncrease}>+</button>
            <div>Amount: {amount}</div>
            <button onClick={handleDecrease}>-</button>
        </div>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default CardProduct