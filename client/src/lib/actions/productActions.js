export const productsReceivedSuccess = (products) => {
  return {
    type: "PRODUCTS_RECEIVED", payload: {products}
  }
};

export const deleteProduct = (products, productId) => {
  return {
    type: "PRODUCT_DELETE", payload: {products, productId}
  }
};

export const addProductSuccess = (newProduct) => {
  return {
    type: "ADD_PRODUCT", payload: {newProduct}
  }
}
