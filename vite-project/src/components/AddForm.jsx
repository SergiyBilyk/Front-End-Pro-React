import React from "react";
import { useState } from "react";
import "./AddForm.css";
import Button from "@mui/material/Button";

const AddForm = (props) => {
  const { onUpdate } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const newProduct = { name, image, price };

    const res = await fetch(
      "https://64a7da98dca581464b84e4d7.mockapi.io/Products/",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newProduct),
      }
    );
    await onUpdate();
  };

  return (
    <>
      <p>AddForm</p>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="img url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Add product
        </Button>
      </form>
    </>
  );
};

export default AddForm;
