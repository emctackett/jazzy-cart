import React from "react";
import EmptyCart from "./EmptyCart";
import Cart from "./Cart";

const Header = ({cartItems, onCheckout}) => {
  return (
    <header>
      <h1>The Shop!</h1>
      {cartItems.length === 0 ? <EmptyCart /> : <Cart cartItems={cartItems} onCheckout={onCheckout}/>}
    </header>
  );
}


export default Header;
