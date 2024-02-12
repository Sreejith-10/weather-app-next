import {WeatherContextType, WeatherDatas} from "@/context/WeatherContext";
import {SetState} from "@/utils/types";
import React, {useContext} from "react";
import {BsX} from "react-icons/bs";

const Suggestions = ({
	setCity,
	places,
	setSuggestions,
}: {
	setCity: SetState<string>;
	places: string[];
	setSuggestions: SetState<string[]>;
}) => {
	const {setSearchKey, err, setErr, errMessage} = useContext(
		WeatherDatas
	) as WeatherContextType;
	const clickHandler = (item: string) => {
		setSearchKey(item);
		setCity(item);
		setSuggestions([]);
	};
	return (
		<>
			{err ? (
				<div className="w-full p-3 z-50 mt-3 absolute bg-red-300 border border-red-500 font-bold text-center text-red-500 right-0 rounded-[.5rem]">
					{errMessage}
					<BsX
						onClick={() => setErr(false)}
						size={40}
						className="absolute right-1 top-[50%] translate-y-[-50%]"
					/>
				</div>
			) : (
				places.length != 0 && (
					<div className="w-full z-50 mt-3 absolute bg-slate-50 right-0 rounded-[.5rem]">
						{places.map((item, id) => (
							<li
								key={id}
								onClick={() => clickHandler(item)}
								className="list-none pl-5 py-4 font-semibold hover:bg-slate-200 hover:rounded-[.5rem]">
								{item}
							</li>
						))}
					</div>
				)
			)}
		</>
	);
};

export default Suggestions;
