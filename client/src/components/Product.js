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
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a href="/#" className="button add-to-cart" onClick={handleAddToCart}>Add to Cart</a>
          <a href="/#" className="button edit" onClick={showForm}>Edit</a>
          {showEdit ? <EditProduct title={title} price={price} quantity={quantity} _id={_id} handler={hideForm} onUpdateProduct={onUpdateProduct}/> : <></>}
        </div>
        <a href="/#" className="delete-button" onClick={handleDeleteProduct}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
