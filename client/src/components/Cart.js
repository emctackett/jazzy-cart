import React from "react";
import CartItem from "./CartItem";

const Cart = ({cartItems}) => {
  const getTotal = () => {
      return cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
      }, 0);
  };

  return (
    <div class="cart">
      <h2>Your Cart</h2>
      <table class="cart-items">
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cartItems.map(item => <CartItem {...item} key={item.id}/>)}
          <tr>
            <td colSpan="3" class="total">Total: ${getTotal()}</td>
          </tr>
        </tbody>
      </table>
      <a class="button checkout">Checkout</a>
    </div>
  );
}

export default Cart;
