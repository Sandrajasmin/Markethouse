import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productSlicer from "./modules/productSlicer";
import cartSlicer from "./modules/cartSlicer";
import errorSlice from "./modules/errorSlice";
import loaderSlice from "./modules/loaderSlicer";

const reducer = combineReducers({
	products: productSlicer,
	cart: cartSlicer,
	error: errorSlice,
	loader: loaderSlice,
});

const index = configureStore({
	reducer,
});

export default index;
