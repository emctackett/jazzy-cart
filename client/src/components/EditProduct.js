import React, {useState} from "react";

const EditProduct = ({title, price, quantity, _id, handler, onUpdateProduct}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newPrice, setNewPrice] = useState(price);
  const [newQuantity, setNewQuantity] = useState(quantity);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    onUpdateProduct({_id, title: newTitle, price: newPrice, quantity: newQuantity});
  }
  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={newPrice} onChange={e => setNewPrice(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={newQuantity} onChange={e => setNewQuantity(e.target.value)}/>
        </div>

        <div class="actions form-actions">
          <a class="button" onClick={handleUpdateProduct}>Update</a>
          <a class="button" onClick={ handler }>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
