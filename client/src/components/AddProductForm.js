import React from "react";
import { useState } from "react";

const AddProductForm = () => {
  const [visibility, setVisibility] = useState(false);
  const showForm = () => {
    setVisibility(true)
  };

  const hideForm = () => {
    setVisibility(false)
  };

  return (
    <div class={visibility ? "add-form visible" : "add-form"}>
      <p><a class="button add-product-button" onClick={showForm}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value="" />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value="" />
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value="" />
        </div>

        <div class="actions form-actions">
          <a class="button">Add</a>
          <a class="button" onClick={hideForm}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm;
