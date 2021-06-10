import React from 'react';
import { useState } from 'react';
import Form from './Form';

const AddProductForm = ({ onAddProduct }) => {
	const [ visibility, setVisibility ] = useState(false);
	const [ title, setTitle ] = useState('');
	const [ price, setPrice ] = useState('');
	const [ quantity, setQuantity ] = useState('');
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

	const handleAddProduct = (e) => {
		e.preventDefault();
		onAddProduct({ title, price, quantity });
		resetInputs();
	};

	return (
		<div class={visibility ? 'add-form visible' : 'add-form'}>
			<p>
				<a href="/#" class="button add-product-button" onClick={showForm}>
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
