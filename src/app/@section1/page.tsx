"use client";

import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import React, {useContext} from "react";
import Sunny from "../../../public/png/sunny.png";
import Rain from "../../../public/png/raining.png";
import {WeatherContextType, WeatherDatas} from "@/context/WeatherContext";
import {WeatherDataType} from "@/utils/types";
import {convertTemperatureInKelvin} from "@/utils/convertTemperature";
import {getCurrentDay} from "@/utils/getCurrentDay";

const Section1 = () => {
	const {data}: {data: WeatherDataType} = useContext(
		WeatherDatas
	) as WeatherContextType;
	const l = data.list.length;
	return (
		<>
			<div className="w-auto h-full flex flex-col justify-between sm:justify-evenly">
				<SearchBox />
				<div className="card flex items-center">
					<div className="card-body">
						<Image
							src={Sunny}
							alt="not found"
							width={150}
							height={150}
							priority
						/>
					</div>
				</div>
				<div className="w-full h-auto flex flex-col items-center justify-center">
					<h1 className="text-[4rem]">
						{convertTemperatureInKelvin(data?.list[l - 1]?.main?.temp)}&deg; C
					</h1>
					<h4 className="font-bold">{getCurrentDay()}</h4>
				</div>
				<div className="card bg-[rgba(255,255,255,.2)] shadow-xl flex items-center sm:mt-5 sm:mb-5">
					<div className="card-body">
						<div className="w-full h-auto flex items-center gap-5">
							<Image
								src={Sunny}
								alt="not found"
								width={50}
								height={50}
								priority
							/>
							<p className="w-auto font-bold">
								{data?.list[l - 1]?.weather[0]?.main}
							</p>
						</div>
						<div className="w-full h-auto flex items-center gap-5">
							<Image
								src={Rain}
								alt="not found"
								width={50}
								height={50}
								priority
							/>
							<p className="w-auto font-bold">Rain - 30%</p>
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
