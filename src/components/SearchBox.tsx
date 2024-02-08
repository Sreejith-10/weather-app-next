"use client";

import {WeatherContextType, WeatherDatas} from "@/context/WeatherContext";
import axios from "axios";
import {useContext} from "react";
import {FaSearch} from "react-icons/fa";

type SearchBoxProps = {
	city: string;
	inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDownHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchBox = ({city, inputHandler, onKeyDownHandler}: SearchBoxProps) => {
	const {setSearchKey} = useContext(WeatherDatas) as WeatherContextType;

	const clickHandler = (t: string) => {
		setSearchKey(t);
	};

	return (
		<div className={`flex items-center justify-center gap-5 `}>
			<input
				type="text"
				placeholder="Enter a city"
				onChange={inputHandler}
				onKeyDown={onKeyDownHandler}
				value={city}
				className="input input-ghost w-full bg-[rgba(0,0,0,.2)] font-bold max-w-xs border-none outline-none focus:bg-slate-50"
			/>
			<FaSearch size={30} onClick={() => clickHandler(city)} />
		</div>
	);
};

export default SearchBox;
