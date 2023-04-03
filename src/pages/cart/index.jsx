import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../components/store/modules/cartSlicer";
import { clearCart } from "../../components/store/modules/cartSlicer";
import { Link } from "react-router-dom";

const CartCheckOutPage = () => {
	const dispatch = useDispatch();
	const { itemsInCart } = useSelector((state) => state.cart);

	const getTotal = (itemsInCart) => {
		return itemsInCart.reduce((total, item) => {
			const price = item.discountedPrice ? item.discountedPrice : item.price;
			return total + price;
		}, 0);
	};

	const handleCheckout = () => {
		dispatch(clearCart());
	};

	return (
		<div className="dark:bg-primaryblue">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{itemsInCart.length > 0 ? (
					<div className="flex h-full flex-col overflow-y-scroll">
						<div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
							<div className="flex items-start justify-between">
								<h2 className="text-lg font-body font-medium text-black dark:text-green" id="slide-over-title">
									Shopping cart
								</h2>
							</div>
							<div className="mt-8">
								<div className="flow-root">
									<ul role="list" className="-my-6 divide-y divide-grey">
										{itemsInCart.map((item, index) => (
											<li key={index} className="flex py-6">
												<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-grey">
													<img
														src={item.imageUrl}
														alt={item.title}
														className="h-full w-full object-contain object-center"
													/>
												</div>

												<div className="ml-4 flex flex-1 flex-col">
													<div>
														<div className="flex justify-between text-black dark:text-white">
															<a href="/" className="font-body text-sm md:text-md">
																{item.title}
															</a>

															{item.discountedPrice < item.price ? (
																<div className="flex flex-col">
																	<p className="text-sm tracking-tight text-black dark:text-white line-through">
																		{item.price} NOK
																	</p>
																	<p className="text-red-600 text-sm tracking-tight">{item.discountedPrice} NOK</p>
																</div>
															) : (
																<p className="text-sm tracking-tight text-black dark:text-white my-10">
																	{item.price} NOK
																</p>
															)}
														</div>
													</div>
													<div className="flex flex-1 items-end justify-between text-sm">
														<p className="text-gray-500 font-body dark:text-white">Qty 1</p>

														<div className="flex">
															<button
																type="button"
																className="font-medium font-body text-indigo-600 dark:text-green hover: hover:text-indigo-500"
																onClick={() => dispatch(removeItemFromCart(item.id))}
															>
																Remove
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

						<div className="border-t border-gray-200 dark:border-green py-6 px-4 sm:px-6">
							<div className="flex justify-between text-base font-medium font-body text-gray-900 dark:text-white">
								<p>Subtotal</p>
								<p>${getTotal(itemsInCart).toFixed(2)}</p>
							</div>
							<p className="mt-0.5 text-sm text-gray-500 font-body dark:text-green">
								Shipping and taxes calculated at checkout.
							</p>
							<div className="mt-6">
								<Link to="/checkout">
									<button
										onClick={handleCheckout}
										className="flex w-full items-center justify-center font-body rounded-lg border border-transparent bg-grey px-6 py-3 text-base font-light text-white shadow-sm"
									>
										Checkout
									</button>
								</Link>
							</div>
							{/* GOING TO ADD LATER A CAROUSEL, BUT NOT ON THIS CA  */}
							{/* <div className=" my-10 flex items-center justify-center font-body rounded-lg border border-transparent bg-grey px-6 py-3 text-base font-light text-white shadow-sm">
                                <p>
                                    or
                                    <button type="button">
                                        <Link to="/products" className='font-medium ml-1 hover:text-indigo-500'>Continue Shopping</Link>
                                    </button>
                                </p>
                            </div> */}
						</div>
					</div>
				) : (
					<div className=" flex  flex-col text-center p-8 shadow-lg">
						<p className="text-grey text-xl mb-4 font-body">Your basket is empty</p>
						<div className=" my-10 flex items-center justify-center font-body rounded-lg border border-transparent bg-grey px-6 py-3 text-base font-light text-white shadow-sm">
							<button type="button">
								<Link to="/products" className="font-medium ml-1">
									Continue Shopping
								</Link>
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartCheckOutPage;
