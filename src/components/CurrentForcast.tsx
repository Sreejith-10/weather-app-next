import {convertTemperatureInKelvin} from "@/utils/convertTemperature";
import {hourFormat} from "@/utils/getCurrentDay";
import {ListType} from "@/utils/types";
import React from "react";
import WeatherIcon from "./WeatherIcon";

const CurrentForcast = ({data}: {data: ListType}) => {
	return (
		<div className="card bg-[rgba(255,255,255,.2)] max-w-[200px] w-[130px]">
			<div className="card-body flex flex-col items-center justify-evenly">
				<h1 className="font-bold w-[130px] text-center">
					{hourFormat(data?.dt)}
				</h1>
				<WeatherIcon icon={data.weather[0].main} />
				<h1 className="font-semibold w-[130px] text-center">
					{convertTemperatureInKelvin(data ? data.main.temp : 1)}&deg; C
				</h1>
			</div>
		</div>
	);
};

export default CurrentForcast;
