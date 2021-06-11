import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProductSuccess } from "../lib/actions/productActions"
import Form from './Form';

const AddProductForm = ({ onAddProduct }) => {
	const [ visibility, setVisibility ] = useState(false);
	const [ title, setTitle ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ quantity, setQuantity ] = useState('');

  const dispatch = useDispatch();

	const showForm = () => {
		setVisibility(true);
	};

	const hideForm = () => {
		setVisibility(false);
	};

	const resetInputs = () => {
		setTitle('');
		setPrice('');
		setQuantity('');
	};

	const handleAddProduct = (e, formData) => {
		console.log(formData);
		e.preventDefault();
    axios
      .post('/api/products', formData)
      .then((response) => response.data)
      .then((data) => dispatch(addProductSuccess(data)))
		resetInputs()
  }

	return (
		<div className={visibility ? 'add-form visible' : 'add-form'}>
			<p>
				<a href="/#" className="button add-product-button" onClick={showForm}>
					Add A Product
				</a>
			</p>
			<h3>Add Product</h3>
			<Form
				title={title}
				price={price}
				quantity={quantity}
				buttonHandler={handleAddProduct}
				buttonType={'Add'}
				changeTitle={setTitle}
				changePrice={setPrice}
				changeQuantity={setQuantity}
				onCancel={hideForm}
			/>
		</div>
	);
};

export default AddProductForm;
