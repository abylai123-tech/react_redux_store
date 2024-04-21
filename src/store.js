import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './reducers/cartSlice.js'

export default configureStore({
  reducer: {
    cartSlice,
  },
});
