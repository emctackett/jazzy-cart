import React, { useState } from 'react';
import {useDispatch} from "react-redux";

import { editProductSuccess } from '../lib/actions/productActions';
import axios from "axios";
import Form from './Form';

const EditProduct = ({ title, price, quantity, _id, handler }) => {
	const [ newTitle, setNewTitle ] = useState(title);
	const [ newPrice, setNewPrice ] = useState(price);
	const [ newQuantity, setNewQuantity ] = useState(quantity);

	const dispatch = useDispatch();

	const handleUpdateProduct = (e, formData) => {
		e.preventDefault();
		handler();

		const id = formData.id;
		axios
			.put(`/api/products/${id}`, formData)
			.then((response) => response.data)
			.then((updatedProduct) => {
				dispatch(editProductSuccess(updatedProduct))
			})
			.catch((status) => console.log(status));
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
				id={_id}
			/>
		</div>
	);
};

export default EditProduct;
