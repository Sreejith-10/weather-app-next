"use client";

import MiniHeader from "@/components/MiniHeader";
import React, {useContext, useState} from "react";
import DayCard from "@/components/DayCard";
import UVIndex from "@/components/WeatherReport/UVIndex";
import WindSpeed from "@/components/WeatherReport/WindSpeed";
import Rise from "@/components/WeatherReport/Rise";
import Humidity from "@/components/WeatherReport/Humidity";
import Visibility from "@/components/WeatherReport/Visibility";
import AirQuality from "@/components/WeatherReport/AirQuality";
import {WeatherContextType, WeatherDatas} from "@/context/WeatherContext";
import CurrentForcast from "@/components/CurrentForcast";

const Section2 = () => {
	const {data} = useContext(WeatherDatas) as WeatherContextType;

	const [today, setToday] = useState(false);

	const len = data.list.length;

	const uniqueDate = [
		...new Set(
			data.list.map(
				(entry) => new Date(entry.dt * 1000).toISOString().split("T")[0]
			)
		),
	];

	const firstDataForEach = uniqueDate.map((date) => {
		return data.list.find((entry) => {
			const everyDate = new Date(entry.dt * 1000).toISOString().split("T")[0];
			const entryTime = new Date(entry.dt * 1000).getHours();
			return everyDate === date && entryTime >= 6;
		});
	});

	const currentDate = new Date();
	currentDate.setHours(0, 0, 0, 0);

	const currentDayForecast = data.list.filter((item) => {
		const forecastDate = new Date(item.dt * 1000);
		forecastDate.setHours(0, 0, 0, 0);
		return forecastDate.getTime() === currentDate.getTime();
	});

	return (
		<>
			<div className="w-auto h-full flex flex-col items-center px-6 sm:p-0">
				<div className="w-full h-auto pb-2 sm:mt-5">
					<MiniHeader today={today} setToday={setToday} />
				</div>
				<div className="w-full h-auto flex items-center space-x-5 overflow-auto sm:w-full sm:overflow-scroll lg:overflow-auto xl:overflow-auto xl:justify-normal lg:justify-normal sm:justify-normal">
					{today
						? firstDataForEach?.map((item, id) => (
								<DayCard data={item} key={id} />
						  ))
						: currentDayForecast.map((item, id) => {
								return <CurrentForcast data={item} key={id} />;
						  })}
				</div>
				<div className="w-full h-auto mt-5">
					<h1 className="text-2xl mb-5">Todays Report</h1>
					<div className="w-full h-1/2 flex justify-between px-2 sm:hidden md:overflow-auto">
						<WindSpeed speed={data.list[len - 1].wind.speed} />
						<Rise time={data.city} />
						<Humidity humidity={data.list[len - 1].main.humidity} />
					</div>
					<div className="w-full h-1/2 flex mt-5 justify-between px-2 sm:hidden md:overflow-auto">
						<AirQuality pressure={data.list[len - 1].main.pressure} />
						<Visibility vision={data.list[len - 1].visibility} />
						<div className="invisible">
							<Visibility vision={data.list[len - 1].visibility} />
						</div>
					</div>
					<div className="hidden sm:flex sm:flex-col gap-5 ">
						<WindSpeed speed={data.list[len - 1].wind.speed} />
						<Rise time={data.city} />
						<Humidity humidity={data.list[len - 1].main.humidity} />
						<Visibility vision={data.list[len - 1].visibility} />
						<AirQuality pressure={data.list[len - 1].main.pressure} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Section2;
