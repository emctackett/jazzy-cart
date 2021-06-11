import React from 'react';
import {useSelector } from "react-redux";
import CartItem from './CartItem';


const Cart = () => {
	const getTotal = () => {
		return cartItems.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);
	};

	const handleCheckout = (e) => {
		e.preventDefault();
		//onCheckout();
	};

	const cartItems = useSelector(state => state.cart)

	return (
		<div className="cart">
			<h2>Your Cart</h2>
			<table className="cart-items">
				<tbody>
					<tr>
						<th>Item</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
					{cartItems.map((item) => <CartItem {...item} key={item._id} />)}
					<tr>
						<td colSpan="3" className="total">
							Total: ${getTotal()}
						</td>
					</tr>
				</tbody>
			</table>
			<a href="/#" className="button checkout" onClick={handleCheckout}>
				Checkout
			</a>
		</div>
	);
};

export default Cart;
