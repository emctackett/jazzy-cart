import React from "react";
import EditProduct from "./EditProduct";
import { useState } from "react";

const Product = ({id, title, price, quantity, addToCart}) => {
  const [showEdit, setEdit] = useState(false);

  const showForm = () => {
    setEdit(true);
  }

  const hideForm = () => {
    setEdit(false);
  }

  return (
    <div class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">{price}</p>
        <p class="quantity">{quantity} left in stock</p>
        <div class="actions product-actions">
          <a class="button add-to-cart" onClick={() => { addToCart({id, title, price, quantity: 1}) }}>Add to Cart</a>
          <a class="button edit" onClick={showForm}>Edit</a>
          {showEdit ? <EditProduct title={title} price={price} quantity={quantity} handler={hideForm}/> : <></>}
        </div>
        <a class="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
