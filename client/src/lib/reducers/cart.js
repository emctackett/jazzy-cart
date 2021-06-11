export const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let matched = false;

      const updatedCartItems = state.map((item) => {
        if (item._id === action.payload.cartItem._id) {
          matched = true;
          item.quantity += 1
        }
        return {...item}
      });
      if (!matched) {
        updatedCartItems.push({...action.payload.cartItem, quantity: 1});
      }

      return updatedCartItems;
    }

    default:
      return state;
  }
}
