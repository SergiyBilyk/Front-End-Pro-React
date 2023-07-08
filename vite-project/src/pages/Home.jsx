import React from "react";
import { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        "https://64a7da98dca581464b84e4d7.mockapi.io/Products"
      );
      const data = await res.json();
      setProducts(data);
      console.log(data)
    };
    getProducts();
  }, []);

  return (
    <div className="home">
      Home
      {products && products.map((product) => (
        <Product  product= {product} key={product.id}/>
      ))}
    </div>
  );
};

export default Home;
