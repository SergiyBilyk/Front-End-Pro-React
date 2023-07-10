import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { fetchAllProducts } from "../redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {isLoading, error, homeProducts} = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <div className="home">
      {isLoading && <h2>Loading ...</h2>}
      {error && <h2>{error}</h2>}
      {homeProducts && homeProducts.map((product) => (
        <Product  product= {product} key={product.id}/>
      ))}
    </div>
  );
};

export default Home;
