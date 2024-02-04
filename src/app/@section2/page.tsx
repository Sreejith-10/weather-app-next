import MiniHeader from "@/components/MiniHeader";
import React from "react";
import Sunny from "../../../public/png/sunny.png";
import Rain from "../../../public/png/raining.png";
import Cloud from "../../../public/png/cloudy.png";
import Thunder from "../../../public/png/thunder.png";
import DayCard from "@/components/DayCard";
import UVIndex from "@/components/WeatherReport/UVIndex";
import WindSpeed from "@/components/WeatherReport/WindSpeed";
import Rise from "@/components/WeatherReport/Rise";
import Humidity from "@/components/WeatherReport/Humidity";
import Visibility from "@/components/WeatherReport/Visibility";
import AirQuality from "@/components/WeatherReport/AirQuality";

const Section2 = () => {
	const days = [
		{day: "Sun", icon: Sunny, temp: 13},
		{day: "Mon", icon: Rain, temp: 20},
		{day: "Tue", icon: Cloud, temp: 33},
		{day: "Wed", icon: Thunder, temp: 15},
		{day: "Thu", icon: Sunny, temp: 23},
		{day: "Fri", icon: Cloud, temp: 9},
		{day: "Sat", icon: Thunder, temp: 13},
	];
	return (
		<>
			<div className="w-auto h-full flex flex-col items-center pt-2 pl-4">
				<MiniHeader />
				<div className="w-full h-auto flex items-center justify-evenly">
					{days.map((item) => (
						<DayCard data={item} />
					))}
				</div>
				<div className="w-full h-auto mt-5">
					<h1 className="text-2xl">Todays Report</h1>
					<div className="w-auto h-full flex flex-wrap">
						<UVIndex />
						<WindSpeed />
						<Rise />
						<Humidity />
						<Visibility />
						<AirQuality />
					</div>
				</div>
			</div>
		</>
	);
};

export default Section2;
