import React from "react";

const CartItem = ({title, quantity, price}) => {
  return (
      <tr>
        <th>{title}</th>
        <th>{quantity}</th>
        <th>${price}</th>
      </tr>
  );
}

export default CartItem;
