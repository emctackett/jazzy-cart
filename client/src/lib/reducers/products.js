export const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload.products;
    } case "PRODUCT_DELETE": {
      return action.payload.products.filter(product => {
        return product._id !== action.payload.productId
      });
    } case "ADD_PRODUCT": {
      return state.concat(action.payload.newProduct);
    } case "EDIT_PRODUCT": {
      const updatedProducts = state.map(product => {
        	if (product._id === action.payload.product._id) {
        		return action.payload.product;
        	} else {
        		return product;
        	}
      });
      return updatedProducts;
    }

    default:
      return state;
  }
}
