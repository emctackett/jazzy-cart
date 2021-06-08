import React from "react";
import axios from "axios";
import Header from './Header';
import Products from './Products';
import AddProductForm from './AddProductForm';


import {useState, useEffect} from "react";

import data from '../lib/data';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getProducts = () => {
    return axios
      .get("/api/products")
      .then(response => response.data)
      .then(data => setProducts(data));
  }

  const handleAddProduct = (formData) => {
    axios
      .post("/api/products", formData)
      .then(response => response.data)
      .then(data => setProducts(products.concat(data)));
  }

  useEffect(() => {
    getProducts();
    axios
      .get("/api/cart")
      .then(response => response.data)
      .then(data => setCartItems(data));
  }, []);

  const addToCart = (item) => {
    setCartItems(cartItems.concat(item));
  };

  const handleUpdateProduct = (formData) => {
    const id = formData._id;
    axios
      .put(`/api/products/${id}`)
      .then(response => response.data)
      .then(updatedProduct => {
        const updatedProducts = products.map(product => {
          if (product._id == updatedProduct._id) {
            return formData;
          } else {
            return product;
          }
        });
        setProducts(updatedProducts);
      })
      .catch(status => console.log(status));
  }

  const handleDeleteProduct = (id) => {
    axios
      .delete(`/api/products/${id}`)
      .then(() => {
        const updatedProducts = products.filter(product => product._id !== id);
        setProducts(updatedProducts);
      })
      .catch(error => console.log(error));
  }

  const handleAddToCart = (formData) => {
    if (formData.quantity === 0) {
      return;
    }
    const id = formData.productId;
    formData.quantity--;
    axios
      .put(`/api/products/${id}`, formData);
    axios
      .post("/api/cart", formData)
      .then(response => response.data)
      .then(item => {
        let matched = false;
        const updatedCartItems = cartItems.map(cartItem => {
          if (cartItem._id === item._id) {
            matched = true;
            return item;
          } else {
            return cartItem;
          }
        });
        if (!matched) {
          updatedCartItems.push(item);
        }
        setCartItems(updatedCartItems);
      });
  }

  const handleCheckout = () => {
    axios
      .post("/api/cart/checkout")
      .then(response => response.data)
      .then(data => {
        setCartItems([]);
      });
  }

  return (
    <div id="app">
      <Header cartItems={cartItems} onCheckout={handleCheckout}/>
      <main>
        <Products products={products} addToCart={addToCart} onUpdateProduct={handleUpdateProduct} onDeleteProduct={handleDeleteProduct} onAddToCart={handleAddToCart}/>
        <AddProductForm onAddProduct={handleAddProduct}/>
      </main>
    </div>
  );
};

export default App;
