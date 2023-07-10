import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice';
import styles from './Product.module.scss'

const Product = ({product}) => {

    const dispatch  = useDispatch();

    const handleAddToCart = ()=> {
        dispatch(addToCart(product))
    }
   const {name, image, price, id} = product
  return (
    <div className={styles.Product}>
        <img src={image} alr={name} />
        <p>{name}<span>  {price}$</span></p>
        <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  )
}

export default Product