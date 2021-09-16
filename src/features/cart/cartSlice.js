import { createSlice } from "@reduxjs/toolkit";
Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};
const initialState = {
  cartItems: localStorage.getObj("cart") ? localStorage.getObj("cart") : [],
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const found = state.cartItems.find((x) => x.uuid === action.payload.uuid);
      if (!found) {
        localStorage.setObj("cart", [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ]);
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.isLoading = false;
      } else {
        const chosenIndex = state.cartItems.findIndex(
          (x) => x.uuid === action.payload.uuid
        );
        state.cartItems[chosenIndex].quantity += 1;
        localStorage.removeItem("cart");
        localStorage.setObj("cart", state.cartItems);
        state.isLoading = false;
      }
    },
    clearCart: (state) => {
      console.log(
        state.cartItems.map((x) => ({ uuid: x.uuid, quantity: x.quantity }))
      );
      state.cartItems = [];
      localStorage.removeItem("cart");
    },
    clearCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x.uuid !== action.payload.uuid
      );
      localStorage.removeItem("cart");
      localStorage.setObj(
        "cart",
        state.cartItems.filter((x) => x.uuid !== action.payload.uuid)
      );
    },
    updateCartItemQuantity: (state, action) => {
      const chosenIndex = state.cartItems.findIndex(
        (x) => x.uuid === action.payload.uuid
      );
      if (parseInt(action.payload.quantity) - 1 === 0) {
        state.cartItems = state.cartItems.filter(
          (x) => x.uuid !== action.payload.uuid
        );
        localStorage.removeItem("cart");
        localStorage.setObj(
          "cart",
          state.cartItems.filter((x) => x.uuid !== action.payload.uuid)
        );
      } else {
        state.cartItems[chosenIndex].quantity =
          parseInt(action.payload.quantity) - 1;
        localStorage.removeItem("cart");
        localStorage.setObj("cart", state.cartItems);
      }
    },
  },
});
export const { clearCart, clearCartItem, addCartItem, updateCartItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
