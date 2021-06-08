import React from "react";
import Product from "./Product";

const Products = ({products, addToCart, onUpdateProduct, onDeleteProduct, onAddToCart}) => {
  return (
      <div class="product-listing">
        <h2>Products</h2>
        {products.map(product => <Product {...product} key={product._id} addToCart={addToCart} onUpdateProduct={onUpdateProduct} onDeleteProduct={onDeleteProduct} onAddToCart={onAddToCart}/> )}
      </div>
  );
}

export default Products
