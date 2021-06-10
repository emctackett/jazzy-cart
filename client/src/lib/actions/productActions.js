export const productsReceivedSuccess = (products) => {
  return {
    type: "PRODUCTS_RECEIVED", payload: {products}
  }
};

export const deleteProduct = (productId) => {
  return {
    type: "PRODUCT_DELETE", payload: {productId}
  }
};
