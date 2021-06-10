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
    }

    default:
      return state;
  }
}
