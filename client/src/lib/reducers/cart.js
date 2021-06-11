export const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let matched = false;
      console.log("payload: ", action.payload.cartItem)

      const updatedCartItems = state.map((item) => {
        if (item.productId === action.payload.cartItem._id) {
          matched = true;
          //item.quantity += 1
        }
        return item
      });
      if (!matched) {
        updatedCartItems.push({...action.payload.cartItem});
      }

      return updatedCartItems;
    }

    default:
      return state;
  }
}
