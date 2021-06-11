export const addToCartSuccess = (cartItem) => {
  return {
    type: "ADD_TO_CART", payload: {cartItem}
  }
};
