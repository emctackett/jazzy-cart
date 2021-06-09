import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onCheckout }) => {
	const getTotal = () => {
		return cartItems.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);
	};

	const handleCheckout = (e) => {
		e.preventDefault();
		onCheckout();
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
					{cartItems.map((item) => <CartItem {...item} key={item.productId} />)}
					<tr>
						<td colSpan="3" class="total">
							Total: ${getTotal()}
						</td>
					</tr>
				</tbody>
			</table>
			<a class="button checkout" onClick={handleCheckout}>
				Checkout
			</a>
		</div>
	);
};

export default Cart;
