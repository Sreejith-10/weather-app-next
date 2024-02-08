"use client";

import {SetState, WeatherDataType} from "@/utils/types";
import axios from "axios";
import {createContext, useState, useEffect} from "react";

export type WeatherContextType = {
	data: WeatherDataType;
	setData: SetState<WeatherDataType>;
	searchKey: string;
	setSearchKey: SetState<string>;
};

export const WeatherDatas = createContext<WeatherContextType | null>(null);

export const WeatherContext = ({children}: any) => {
	const [data, setData] = useState<WeatherDataType>({
		city: {
			coord: {
				lat: 0,
				lon: 0,
			},
			country: "",
			id: 0,
			population: 0,
			name: "",
			sunrise: 0,
			sunset: 0,
			timezone: 0,
		},
		cnt: 0,
		cod: "",
		list: [
			{
				wind: {
					deg: 0,
					gust: 0,
					speed: 0,
				},
				clouds: {all: 0},
				dt: 0,
				dt_text: "",
				main: {
					feels_like: 0,
					grnd_level: 0,
					humidity: 0,
					pressure: 0,
					sea_level: 0,
					temp: 0,
					temp_kf: 0,
					temp_max: 0,
					temp_min: 0,
				},
				pop: 0,
				sys: {pop: ""},
				visibility: 0,
				weather: [{description: "", icon: "", id: 0, main: ""}],
			},
		],
		message: 0,
	});
	const [searchKey, setSearchKey] = useState<string>("aluva");
	useEffect(() => {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/forecast?q=${searchKey}&appid=13f30c9d60e23953aaca432b31cfa69f&cnt=56`
			)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, [searchKey]);

	return (
		<WeatherDatas.Provider value={{data, setData, searchKey, setSearchKey}}>
			{children}
		</WeatherDatas.Provider>
	);
};
