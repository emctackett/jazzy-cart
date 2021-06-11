import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import EditProduct from "./EditProduct";
import { useState } from "react";
import { deleteProduct } from "../lib/actions/productActions"

import {editProductSuccess} from '../lib/actions/productActions';
import {addToCartSuccess} from '../lib/actions/cartActions';

const Product = ({_id, title, price, quantity, addToCart, onUpdateProduct, onDeleteProduct}) => {
  const [showEdit, setEdit] = useState(false);

  const showForm = () => {
    setEdit(true);
  }

  const hideForm = () => {
    setEdit(false);
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

  const handleAddToCart = (productData) => {
    if (productData.quantity === 0) {
      return;
    }

    const id = productData._id;
    productData.quantity--;

    axios.put(`/api/products/${id}`, productData).then((res) => {
      // console.log("product data: ", productData);
      // console.log("res.data", res.data)
      dispatch(editProductSuccess(res.data));
    });

    axios.post('/api/cart', productData).then((response) => response.data).then((item) => {
      dispatch(addToCartSuccess(productData))
    });
  };

  const onAddToCart = (e) => {
    e.preventDefault();
    handleAddToCart({_id, title, price, quantity})
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a href="/#" className="button add-to-cart" onClick={onAddToCart}>Add to Cart</a>
          <a href="/#" className="button edit" onClick={showForm}>Edit</a>
          {showEdit ? <EditProduct title={title} price={price} quantity={quantity} _id={_id} handler={hideForm} /> : <></>}
        </div>
        <a href="/#" className="delete-button" onClick={handleDeleteProduct}><span>X</span></a>
      </div>
    </div>
  )
}

export default Product;
