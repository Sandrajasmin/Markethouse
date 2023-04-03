import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../../components/store/modules/productSlicer";
import { addItemToCart } from "../../components/store/modules/cartSlicer";
import DiscountProcenteg from "../../components/discountProcent";

function DetailPage() {
	const dispatch = useDispatch();
	const { singleProduct, isError } = useSelector((state) => state.products);
	let { id } = useParams();

	useEffect(() => {
		if (id) {
			dispatch(fetchSingleProduct(id));
		}
	}, [dispatch, id]);

	if (!singleProduct) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div>Loading...</div>
			</div>
		);
	}

	return (
		<>
			{singleProduct && !isError && (
				<div className="bg-white dark:bg-primaryblue">
					<div className="pt-10 py-10 flex flex-col lg:flex-row xl:justify-evenly items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-8 w-3/4">
							<img
								src={singleProduct.imageUrl}
								alt={singleProduct.title}
								className="object-fit object-center rounded-md md:max-h-60 lg:max-h-44 lg:w-44 self-end"
							/>
							{singleProduct.discountedPrice < singleProduct.price ? (
								<div className="w-16 h-16 rounded-full bg-red-600 top-[130px] md:left-[240px] lg:top-[190px] xl:left-[350px] xl:top-[130px] ml-3 lg:mb-3 absolute flex items-center justify-center">
									<p className="text-white text-sm sm:text-lg">
										-{DiscountProcenteg(singleProduct.discountedPrice, singleProduct.price)}%
									</p>
								</div>
							) : null}
							<img
								src={singleProduct.imageUrl}
								alt={singleProduct.title}
								className="hidden sm:block object-contain object-center md:row-span-2 md:col-span-2 md:col-start-2 md-col-end-3 rounded-md"
							/>
							<img
								src={singleProduct.imageUrl}
								alt={singleProduct.title}
								className="hidden md:max-h-60 lg:max-h-44 lg:w-44 sm:block object-fit object-center rounded-md "
							/>
						</div>
						{/*Product info*/}
						<div className="lg:px-10 pt-10 md:flex md:flex-row md:justify-between lg:flex-col w-full lg:w-auto">
							<div className="md:flex-col  lg:pr-8">
								<h1 className="text-2xl font-bold tracking-tight text-black dark:text-white sm:text-3xl">
									{singleProduct.title}
								</h1>
								<h2 className="text-xl font-medium tracking-tight text-black dark:text-white sm:text-2xl">
									{singleProduct.tags}
								</h2>
								{/*Description and details*/}
								<div className="my-5 lg:pr-8">
									<div>
										<h3 className="sr-only">Description</h3>

										<div className="space-y-6">
											<p className="text-base text-black dark:text-white">
												An apple mobile which is nothing like apple
											</p>
										</div>
									</div>

									<div className="my-10">
										<h3 className="text-sm font-medium text-black dark:text-white">Highlights</h3>

										<div className="mt-4">
											<ul className="list-disc space-y-2 pl-4 text-sm">
												<li className="text-black dark:text-white">
													<span className="text-black dark:text-white">rating: 2 stars</span>
												</li>

												<li className="text-black dark:text-white">
													<span className="text-black dark:text-white capitalize">stock: 100</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/*Options*/}
							<div className="py-11 md:px-10 border-t md:border-l md:border-t-0 lg:border-t-2 lg:border-l-0 border-6 border-black dark:border-green lg:mt-0">
								<h2 className="sr-only">Product information</h2>
								{singleProduct.discountedPrice < singleProduct.price ? (
									<div className="flex flex-col">
										<p className="text-xl tracking-tight text-black dark:text-white line-through">
											{singleProduct.price} NOK
										</p>
										<p className="text-red-600 text-3xl tracking-tight">{singleProduct.discountedPrice} NOK</p>
									</div>
								) : (
									<p className="text-3xl tracking-tight text-black dark:text-white my-10">{singleProduct.price} NOK</p>
								)}
								<div className="mt-10">
									<button
										onClick={() => dispatch(addItemToCart(singleProduct))}
										type="submit"
										className="mt-10 flex w-full items-center justify-center rounded-md bg-grey dark:bg-green py-3 px-8 text-base font-medium text-white dark:text-black hover:bg-beig hover:dark:bg-lightgreen hover:text-black"
									>
										Add to cart
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto max-w-7xl px-4 sm:px-0">
						<div className="border-t border-black dark:border-green md:mx-5 md:px-10 py-10 mb-10">
							<h2 className="font-body text-xl lg:text-2xl py-5 text-black dark:text-white">Reviews</h2>
							{singleProduct.reviews.length ? (
								singleProduct.reviews.map((review) => (
									<div key={review.id}>
										<div className="flex flex-row py-5 text-black dark:text-white items-center gap-2">
											<p className="bg-beig dark:bg-green rounded-full w-16 h-16 lg:w-20 lg:h-20 flex justify-center items-center text-sm font-light font-body">
												{review.username}
											</p>
											<p className="text-md font-light font-body border-b border-beig dark:border-green border-6">
												{review.description}
											</p>
										</div>
									</div>
								))
							) : (
								<p>No reviews for this product. Leave a review and earn credits!</p>
							)}
						</div>
					</div>
				</div>
			)}
			{isError && <h1>Sorry, an error accured </h1>}
		</>
	);
}

export default DetailPage;
