import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === item.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quentity: 1,
          totalPrice: newItem.price,
          name: newItem.title
        });
      }
      else{
        existingItem.quentity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;

      }
    },
    removeItemFromCartn() {},
  },
});
