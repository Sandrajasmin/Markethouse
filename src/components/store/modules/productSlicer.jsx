import { createSlice } from "@reduxjs/toolkit"
import { setLoadingState } from "./loaderSlicer"
import { setError } from "./errorSlice";


const productsSlicer = createSlice({
    name: "products",
    initialState: {
        products: [],
        singleProduct: null
    },
    reducers: {
        SET_PRODUCTS: (state, action) => {
            state.products = action.payload
        },
        SET_SINGLE_PRODUCT: (state, action) => {
            state.singleProduct = action.payload
        },
    }
})

export default productsSlicer.reducer

const { SET_PRODUCTS } = productsSlicer.actions
const { SET_SINGLE_PRODUCT } = productsSlicer.actions

export const fetchAllProducts = () => async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
        const response = await fetch('https://api.noroff.dev/api/v1/online-shop')
        const data = await response.json()
        dispatch(SET_PRODUCTS(data))
    } catch (e) {
        return console.error(e)
    }
}

export const fetchSingleProduct = (id) => async (dispatch) => {
    let response
    try {
        response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
        const data = await response.json()
        dispatch(SET_SINGLE_PRODUCT(data))
    } catch (e) {
        console.error(e)
    }
}