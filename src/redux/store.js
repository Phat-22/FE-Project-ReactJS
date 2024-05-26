import { configureStore } from '@reduxjs/toolkit';
import productListSlice from './products-list/product-list.slice';
import accountUserSlice from './account-user/user.slice';
import cartSlice from './cart/cart.slice';

const store = configureStore({
  reducer: {
    productList: productListSlice,
    accountUser: accountUserSlice,
    carts: cartSlice,
  },
});

export default store;