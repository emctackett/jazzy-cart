import React from "react";
import EditProduct from "./EditProduct";
import { useState } from "react";

const Product = ({_id, title, price, quantity, addToCart, onUpdateProduct, onDeleteProduct, onAddToCart}) => {
  const [showEdit, setEdit] = useState(false);

  const showForm = () => {
    setEdit(true);
  }

  const hideForm = () => {
    setEdit(false);
  }

  const handleDeleteProduct = (e) => {
    e.preventDefault();
    onDeleteProduct(_id);
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart({productId: _id, _id, title, price, quantity});
  }

  return (
    <div class="product">
      <div class="product-details">
        <h3>{title}</h3>
        <p class="price">{price}</p>
        <p class="quantity">{quantity} left in stock</p>
        <div class="actions product-actions">
          <a href="/#" class="button add-to-cart" onClick={handleAddToCart}>Add to Cart</a>
          <a href="/#" class="button edit" onClick={showForm}>Edit</a>
          {showEdit ? <EditProduct title={title} price={price} quantity={quantity} _id={_id} handler={hideForm} onUpdateProduct={onUpdateProduct}/> : <></>}
        </div>
        <a href="/#" class="delete-button" onClick={handleDeleteProduct}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
