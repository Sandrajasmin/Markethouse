import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/index";
import AllProducts from "../pages/allProducts/index"
import DetailsPage from "../pages/detailPage/index";
import CartCheckOutPage from "../pages/cart/index"
// import ContactUsPage from "../components/views/ContactUsPage";
// import PageNotFound from "../components/views/PageNotFound";

function Router() {
    return (

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<AllProducts/>} />
                <Route path="/product/:id" element={<DetailsPage />} />
                <Route path="/cart" element={<CartCheckOutPage />} />
                {/* <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="*" element={<PageNotFound />} />  */}
            </Routes>

    );
}

export default Router;