import {convertTemperatureInKelvin} from "@/utils/convertTemperature";
import {singleDate} from "@/utils/getCurrentDay";
import {ListType, WeatherDataType} from "@/utils/types";
import React from "react";
import WeatherIcon from "./WeatherIcon";

const DayCard = ({data}: {data: ListType | undefined}) => {
	return (
		<div className="card bg-[rgba(255,255,255,.2)] max-w-[200px] w-[130px]">
			<div className="card-body flex flex-col items-center justify-evenly">
				<h1 className="font-bold">{singleDate(data ? data?.dt : 1)}</h1>
				<WeatherIcon icon={data ? data?.weather[0].main : ""} />
				<h1 className="font-semibold">
					{convertTemperatureInKelvin(data ? data.main.temp : 1)}&deg; C
				</h1>
			</div>
		</div>
	);
};

//thunderstorm,drizzle,rain,snow,clear,clouds

export default DayCard;
