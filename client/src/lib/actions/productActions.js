export const productsReceivedSuccess = (products) => {
  return {
    type: "PRODUCTS_RECEIVED", payload: {products}
  }
};
