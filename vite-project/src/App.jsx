import Product from "./components/Product";
import "./App.css";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import * as React from "react";
import Button from "@mui/material/Button";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("name");
  const [search, setsearch] = useState("");
  const [editProduct, setEditProduct] = useState({});

  const fetchAllProducts = useCallback(async () => {
    const url = new URL("https://64a7da98dca581464b84e4d7.mockapi.io/Products");
    url.searchParams.append("limit", 4);
    url.searchParams.append("page", page);
    url.searchParams.append("sortBy", sort);
    url.searchParams.append("name", search);

    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  }, [page, sort, search]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchAllProducts();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [fetchAllProducts]);

  return (
    <div className="container">
      <div className="add-form">
        <AddForm onUpdate={fetchAllProducts} />
      </div>
      <div className="edit-form">
        {editProduct.id && <EditForm editProduct={editProduct} />}
      </div>

      <div className="filter">
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search"
          ></input>
        </div>
        <p>Sort</p>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="price">Price</option>
          <option value="name">Name</option>
          <option value="id">Id</option>
        </select>
      </div>
      <div className="products">
        {products.length > 0 &&
          products.map((i) => (
            <Product
              key={i.id}
              product={i}
              onEdit={setEditProduct}
              onUpdate={fetchAllProducts}
            />
          ))}
      </div>
      <div className="btn-nav">
        <Button
          variant="contained"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev page
        </Button>
        <Button
          variant="contained"
          disabled={products.length < 2}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next page
        </Button>
      </div>
    </div>
  );
}
export default App;
