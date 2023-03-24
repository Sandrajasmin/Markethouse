import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeSingleProductFromCart } from "../../store/modules/cartSlice";
import { fetchProducts } from '../../store/modules/productsSlice';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const CartCheckOutPage = () => {
    const dispatch = useDispatch();
    const { productsInCart } = useSelector(state => state.cart);
    const { products } = useSelector(state => state.products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    console.log("productsInCart: ", productsInCart);
    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {productsInCart && productsInCart.length > 0 && <div className="flex h-full flex-col overflow-y-scroll bg-white">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                            <h2 className="text-lg font-medium font-body text-gray-900"
                                id="slide-over-title">Shopping cart</h2>
                        </div>
                        <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {productsInCart.map((product) => (
                                        <li className="flex py-6">
                                            <div
                                                className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                <img
                                                    src={product.thumbnail}
                                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                    className="h-full w-full object-contain object-center" />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div
                                                        className="flex justify-between text-base font-medium text-gray-900">
                                                        <h3 className='font-heading'>
                                                            <a href="#">{product.title}</a>
                                                        </h3>
                                                        <h3 key={product.id} className='font-heading font-bold'>
                                                            <Link to={`product/${product.id}`}>
                                                                <span aria-hidden="true" className="absolute  inset-0" />
                                                                {product.title}
                                                            </Link>
                                                        </h3>
                                                        <p className="ml-4 font-body">NOK{product.price}</p>
                                                    </div>
                                                    <p className="mt-1 font-body text-sm text-gray-500">{product.brand}</p>
                                                </div>
                                                <div
                                                    className="flex flex-1 items-end justify-between text-sm">
                                                    <p className="text-gray-500 font-body">Qty 1</p>
                                                    {product.id}
                                                    <div className="flex">
                                                        <button type="button"
                                                            className="font-medium font-body text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => dispatch(removeSingleProductFromCart(product.id))}
                                                        >Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p className='font-body'>Subtotal</p>
                            <p className='font-body'>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm font-body italic text-gray-500">Shipping and taxes calculated at
                            checkout.</p>
                        <div className="mt-6">
                            <a href="#"
                                className="flex items-center font-body justify-center rounded-md border border-transparent bg-emerald-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-900">Checkout</a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p className='font-body'>
                                or
                                <button type="button"
                                    className="font-medium font-body text-indigo-600 ml-1 hover:text-indigo-500">
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>}
                {productsInCart && productsInCart.length === 0 && <h1 className='font-body text-xl font-light py-10 flex flex-col justify-center text-center align-middle'> No products in cart <a href='/' className='font-body font-bold pl-1'>continue shopping</a></h1>}
            </div>
        </div>
    );
};

export default CartCheckOutPage;
