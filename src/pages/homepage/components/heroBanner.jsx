import hero from "../components/hero.png";
import heroDark from "../components/heroDark.png";

const HeroBanner = () => {
	return (
		<div>
			<div className="bg-beig dark:bg-primaryblue mt-5 dark:pt-5 dark:mt-0 flex flex-col lg:flex-row lg:justify-evenly px-9">
				<div className="max-w-7xl px-4 sm:px-6 lg:px-20 py-20 flex flex-col justify-center">
					<h1 className="font-body text-white font-light text-2xl lg:text-6xl">Samsung Galaxy S21</h1>
					<h2 className="font-heading dark:text-green pb-5 lg:pb-8 text-xl lg:text-3xl">Everyday just got epic.</h2>
					<ul className="font-body text-white font-light lg:text-md">
						<li>Super high-resolution camera and 8K video.</li>
						<li>A blazing fast processor.</li>
						<li>First ever S Pen compatibility.</li>
					</ul>
				</div>
				<img src={hero} alt="heroimg" className="max-w-lg lg:my-10 dark:hidden" />
				<img src={heroDark} alt="heroimg" className="max-w-lg lg:my-10 hidden dark:block" />
			</div>
		</div>
	);
};

export default HeroBanner;
