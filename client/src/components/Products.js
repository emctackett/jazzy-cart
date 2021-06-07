import React from "react";
import Product from "./Product";

const Products = ({products, addToCart}) => {
  return (
      <div class="product-listing">
        <h2>Products</h2>
        {products.map(product => <Product {...product} key={product.id} addToCart={addToCart} /> )}
      </div>

  );
}

export default Products
