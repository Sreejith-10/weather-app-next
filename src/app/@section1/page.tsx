"use client";

import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import React, {useContext, useState} from "react";
import Sunny from "../../../public/png/sunny.png";
import Rain from "../../../public/png/raining.png";
import {WeatherContextType, WeatherDatas} from "@/context/WeatherContext";
import {WeatherDataType} from "@/utils/types";
import {convertTemperatureInKelvin} from "@/utils/convertTemperature";
import {getCurrentDay} from "@/utils/getCurrentDay";
import axios from "axios";
import Suggestions from "@/components/Suggestions";
import WeatherIcon from "@/components/WeatherIcon";

const api = process.env.API_KEY;

const Section1 = () => {
	const {data, setSearchKey} = useContext(WeatherDatas) as WeatherContextType;
	const [city, setCity] = useState("");
	const [suggesctions, setSuggestions] = useState<string[]>([]);
	const [showSuggesctions, setShowSuggestions] = useState<boolean>(false);
	const ListLength = data.list.length;

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		let text = e.target.value;
		text = text.trim();
		setCity(text);
		if (text.length >= 3) {
			fetchPlace(text);
		}
	};

	const fetchPlace = (city: string) => {
		try {
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/find?q=${city}&appid=13f30c9d60e23953aaca432b31cfa69f`
				)
				.then((res: any) => {
					const sug = res.data.list.map((item: any) => {
						return item.name;
					});
					setSuggestions(sug);
					setShowSuggestions(true);
				});
		} catch (err) {
			console.log(err);
		}
	};

	const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.keyCode === 13) {
			setSearchKey(city);
			setSuggestions([]);
		}
	};
	const time = Math.floor(Date.now() / 1000);
	const closestForecast = data.list.reduce((closest, forecast) => {
		const forecarTime = forecast.dt;
		const timeD = Math.abs(time - forecarTime);
		if (timeD < Math.abs(time - closest.dt)) {
			return forecast;
		}
		return closest;
	});
	return (
		<>
			<div className="w-auto h-full flex flex-col justify-between sm:justify-evenly">
				<div className="w-auto h-auto relative">
					<SearchBox
						city={city}
						inputHandler={inputHandler}
						onKeyDownHandler={onKeyDownHandler}
					/>
					<Suggestions places={suggesctions} setSuggestions={setSuggestions} />
				</div>
				<div className="card flex items-center">
					<div className="card-body">
						{closestForecast && (
							<WeatherIcon icon={closestForecast?.weather[0]?.main} key={1} />
						)}
					</div>
				</div>
				<div className="w-full h-auto flex flex-col items-center justify-center">
					<h1 className="text-[4rem]">
						{convertTemperatureInKelvin(closestForecast.main.temp)}
						&deg; C
					</h1>
					<h4 className="font-bold">{getCurrentDay()}</h4>
				</div>
				<div className="card bg-[rgba(255,255,255,.2)] shadow-xl flex items-center sm:mt-5 sm:mb-5">
					<div className="card-body">
						<div className="w-full h-auto flex items-center gap-5">
							{closestForecast && (
								<WeatherIcon icon={closestForecast?.weather[0]?.main} key={1} />
							)}
							<p className="w-auto font-bold">
								{closestForecast.weather[0].description}
							</p>
						</div>
					</div>
				</div>
				<div className="card bg-[rgba(255,255,255,.2)] shadow-xl flex items-center justify-center">
					<div className="card-body">
						<p className="font-bold">
							{data.city.name}, {data.city.country}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section1;
