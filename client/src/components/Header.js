import React from "react";
import EmptyCart from "./EmptyCart";
import Cart from "./Cart";

const Header = ({cartItems}) => {
  return (
    <header>
      <h1>The Shop!</h1>
      {cartItems.length === 0 ? <EmptyCart /> : <Cart cartItems={cartItems} />}
    </header>
  );
}


export default Header;
