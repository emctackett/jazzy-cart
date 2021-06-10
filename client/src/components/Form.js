import React from 'react';

const Form = ({
	title,
	price,
	quantity,
	buttonHandler,
	buttonType,
	changeTitle,
	changePrice,
	changeQuantity,
	onCancel
}) => {
	return (
		<form>
			<div class="input-group">
				<label for="product-name">Product Name</label>
				<input type="text" id="product-name" value={title} onChange={(e) => changeTitle(e.target.value)} />
			</div>

			<div class="input-group">
				<label for="product-price">Price</label>
				<input type="text" id="product-price" value={price} onChange={(e) => changePrice(e.target.value)} />
			</div>

			<div class="input-group">
				<label for="product-quantity">Quantity</label>
				<input type="text" id="product-quantity" value={quantity} onChange={(e) => changeQuantity(e.target.value)} />
			</div>

			<div class="actions form-actions">
				<a href="/#" class="button" onClick={buttonHandler}>
					{buttonType}
				</a>
				<a href="/#" class="button" onClick={onCancel}>
					Cancel
				</a>
			</div>
		</form>
	);
};

export default Form;
