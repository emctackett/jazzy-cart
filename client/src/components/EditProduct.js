import React, { useState } from 'react';
import Form from './Form';

const EditProduct = ({ title, price, quantity, _id, handler, onUpdateProduct }) => {
	const [ newTitle, setNewTitle ] = useState(title);
	const [ newPrice, setNewPrice ] = useState(price);
	const [ newQuantity, setNewQuantity ] = useState(quantity);

	const handleUpdateProduct = (e) => {
		e.preventDefault();
		onUpdateProduct({ _id, title: newTitle, price: newPrice, quantity: newQuantity });
	};
	return (
		<div className="edit-form">
			<h3>Edit Product</h3>
			<Form
				title={newTitle}
				price={newPrice}
				quantity={newQuantity}
				buttonHandler={handleUpdateProduct}
				buttonType={'Update'}
				changeTitle={setNewTitle}
				changePrice={setNewPrice}
				changeQuantity={setNewQuantity}
				onCancel={handler}
			/>
		</div>
	);
};

export default EditProduct;
