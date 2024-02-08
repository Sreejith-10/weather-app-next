import {WeatherContextType, WeatherDatas} from "@/context/WeatherContext";
import {SetState} from "@/utils/types";
import React, {useContext} from "react";

const Suggestions = ({
	places,
	setSuggestions,
}: {
	places: string[];
	setSuggestions: SetState<string[]>;
}) => {
	const {setSearchKey} = useContext(WeatherDatas) as WeatherContextType;
	const clickHandler = (item: string) => {
		setSearchKey(item);
		setSuggestions([]);
	};
	return (
		<>
			{places.length != 0 && (
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
			)}
		</>
	);
};

export default Suggestions;
