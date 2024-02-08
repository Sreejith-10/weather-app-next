"use client";

import {WeatherContextType, WeatherDatas} from "@/context/WeatherContext";
import axios from "axios";
import {useContext} from "react";
import {FaLocationCrosshairs} from "react-icons/fa6";

type SearchBoxProps = {
	city: string;
	inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchBox = ({city, inputHandler, onKeyDownHandler}: SearchBoxProps) => {
	const {setData} = useContext(WeatherDatas) as WeatherContextType;
	const getCurrentPostition = () => {
		// if (navigator.geolocation) {
		// 	navigator.geolocation.getCurrentPosition(async (positon) => {
		// 		const {latitude, longitude} = positon.coords;
		// 		console.log(latitude, longitude);
		// 		try {
		// 			const respose = await axios.get(
		// 				`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=13f30c9d60e23953aaca432b31cfa69f&cnt=56`
		// 			);
		// 			console.log(respose.data);
		// 			// setData(respose.data);
		// 		} catch (error) {}
		// 	});
		// }
	};

	return (
		<div className={`flex items-center justify-center gap-5 `}>
			<FaLocationCrosshairs size={30} onClick={getCurrentPostition} />
			<input
				type="text"
				placeholder="Enter a city"
				onChange={inputHandler}
				onKeyDown={onKeyDownHandler}
				value={city}
				className="input input-ghost w-full max-w-xs border-none outline-none bg-inherit focus:bg-slate-50"
			/>
		</div>
	);
};

export default SearchBox;
