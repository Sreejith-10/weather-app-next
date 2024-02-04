import {FaMagnifyingGlass} from "react-icons/fa6";

const SearchBox = () => {
	return (
		<div className="flex items-center justify-center gap-5">
			<FaMagnifyingGlass size={30} />
			<input
				type="text"
				placeholder="Enter a city"
				className="bg-inherit focus:bg-slate-50 input input-ghost w-full max-w-xs"
			/>
		</div>
	);
};

export default SearchBox;
