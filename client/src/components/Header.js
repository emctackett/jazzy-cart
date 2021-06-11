import React from "react";
import {useSelector, useDispatch} from "react-redux";

import EmptyCart from "./EmptyCart";
import Cart from "./Cart";

const Header = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);

  return (
    <header>
      <h1>The Shop!</h1>
      {cart.length === 0 ? <EmptyCart /> : <Cart />}
    </header>
  );
}


export default Header;
