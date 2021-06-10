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
			<div className="input-group">
				<label htmlFor="product-name">Product Name</label>
				<input type="text" id="product-name" value={title} onChange={(e) => changeTitle(e.target.value)} />
			</div>

			<div className="input-group">
				<label htmlFor="product-price">Price</label>
				<input type="text" id="product-price" value={price} onChange={(e) => changePrice(e.target.value)} />
			</div>

			<div className="input-group">
				<label htmlFor="product-quantity">Quantity</label>
				<input type="text" id="product-quantity" value={quantity} onChange={(e) => changeQuantity(e.target.value)} />
			</div>

			<div className="actions form-actions">
				<a href="/#" className="button" onClick={buttonHandler}>
					{buttonType}
				</a>
				<a href="/#" className="button" onClick={onCancel}>
					Cancel
				</a>
			</div>
		</form>
	);
};

export default Form;
