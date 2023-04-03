import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		e.preventDefault();
		onSearch(searchTerm);
	};

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="flex justify-center mx-auto mt-5 ">
			<form onSubmit={handleSearch} className="flex items-center w-full xl:gap-x-8 mx-auto max-w-7xl lg:px-10">
				<input
					type="text"
					value={searchTerm}
					onChange={handleChange}
					className="border border-beig dark:border-green rounded-l px-4 py-2 w-full font-body focus:outline-none focus:border-secondary"
					placeholder="Search..."
				/>
				<button
					type="submit"
					className="bg-beig dark:bg-green dark:text-black text-white px-4 py-2 font-body border border-transparent focus:outline-none hover:bg-lightblue"
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
