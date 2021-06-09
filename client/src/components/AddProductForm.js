import React from "react";
import { useState } from "react";

const AddProductForm = ({onAddProduct}) => {
  const [visibility, setVisibility] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const showForm = () => {
    setVisibility(true)
  };

  const hideForm = () => {
    setVisibility(false)
  };

  const resetInputs = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    onAddProduct({title, price, quantity});
    resetInputs();
  }

  return (
    <div class={visibility ? "add-form visible" : "add-form"}>
      <p><a class="button add-product-button" onClick={showForm}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={e => setPrice(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>
        </div>

        <div class="actions form-actions">
          <a class="button" onClick={handleAddProduct}>Add</a>
          <a class="button" onClick={hideForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;
