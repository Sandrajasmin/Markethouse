import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import productSlicer from './modules/productSlicer';
import cartSlicer from './modules/cartSlicer';

const reducer = combineReducers({
    products: productSlicer,
    cart: cartSlicer,
});

const index = configureStore({
    reducer
})

export default index