import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";
import {productsReceivedSuccess} from "../lib/actions/productActions"


const Products = ({addToCart, onUpdateProduct, onDeleteProduct, onAddToCart}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    axios
      .get('/api/products')
      .then((response) => response.data)
      .then(data => dispatch(productsReceivedSuccess(data)))
  }, [])


  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => <Product {...product} key={product._id} addToCart={addToCart} onUpdateProduct={onUpdateProduct} onDeleteProduct={onDeleteProduct}  />)}
    </div>
  );
}

export default Products
