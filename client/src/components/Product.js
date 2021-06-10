import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import EditProduct from "./EditProduct";
import { useState } from "react";
import { deleteProduct } from "../lib/actions/productActions"


const Product = ({_id, title, price, quantity, addToCart, onUpdateProduct, onDeleteProduct, onAddToCart}) => {
  const [showEdit, setEdit] = useState(false);

  const showForm = () => {
    setEdit(true);
  }

  const hideForm = () => {
    setEdit(false);
  }

  const handleAddToCart = (e) => {
    e.preventDefault();
    onAddToCart({productId: _id, _id, title, price, quantity});
  }

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleDeleteProduct = (e) => {
  e.preventDefault();
    axios
      .delete(`/api/products/${_id}`)
      .then(() => {
        console.log(_id);
        dispatch(deleteProduct(products, _id))
      })
      .catch((error) => console.log(error));
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
