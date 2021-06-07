import React from "react";
import Header from './Header';
import Products from './Products';
import AddProductForm from './AddProductForm';


import {useState, useEffect} from "react";

import data from '../lib/data';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProducts(data);
    //setCartItems(cartItems.concat({id: 5, item: "Kyle", price: 5.70, quantity: 2}));

  }, []);

  const addToCart = (item) => {
    setCartItems(cartItems.concat(item));
  };

  return (
    <div id="app">
      <Header cartItems={cartItems}/>
      <main>
        <Products products={products} addToCart={addToCart} />
        <AddProductForm />
      </main>
    </div>
  );
};

export default App;
