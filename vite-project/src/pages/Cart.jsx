import React from "react";
import { useSelector } from "react-redux";
import CardProduct from "../components/CardProduct";

const Cart = () => {
  const { products, amount, total } = useSelector((state) => state.cart);

  return (
    <div>
      <p>Cart</p>
      <ul>
        {products &&
          products.map((product) => (
          <CardProduct key={product.id} product={product} />))}
      </ul>
      <div>
        <h2>Total:</h2>
        <p>Final price:{total.toFixed(2)} </p>
        <p>Items: {amount}</p>
      </div>
    </div>
  );
};

export default Cart;
