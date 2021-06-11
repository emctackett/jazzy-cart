import React from 'react';
import Header from './Header';
import Products from './Products';
import AddProductForm from './AddProductForm';


const App = () => {
/*

  const handleCheckout = () => {
    axios.post('/api/cart/checkout').then((response) => response.data).then((data) => {
      setCartItems([]);
    });
  };
*/
  return (
    <div id="app">
      <main>
       <Header />
        <Products />
        <AddProductForm />
      </main>
    </div>
  );
};

export default App;
