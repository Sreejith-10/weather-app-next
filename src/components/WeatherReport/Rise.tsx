import React from "react";
import Up from "../../../public/png/sunrise.png";
import Set from "../../../public/png/sunsets.png";
import Image from "next/image";
import {CityType} from "@/utils/types";
import { convertTime } from "@/utils/getCurrentDay";

const Rise = ({time}: {time: CityType}) => {
	return (
		<div className=" bg-[rgba(255,255,255,.4)] w-[250px] h-auto sm:w-full sm:h-[200px] xls:w-[200px] lg:w-[180px] max-h-[200px] rounded-[1rem] flex flex-col items-center justify-center">
			<div className="w-full h-10">
				<h1 className="font-semibold ml-8">Sunrise & Sunset</h1>
			</div>
			<div className="w-full hfull flex items-center justify-center flex-col gap-3">
				<div className="flex items-center justify-center gap-5">
					<Image
						src={Up}
						alt="not found"
						width={50}
						height={50}
						className="bg-blue-500 rounded-full"
					/>
					{convertTime(time.sunrise)}
				</div>
				<div className="flex items-center justify-center gap-5">
					<Image
						src={Set}
						alt="not found"
						width={50}
						height={50}
						className="bg-orange-500 rounded-full"
					/>
					{convertTime(time.sunset)}
				</div>
			</div>
		</div>
	);
};

export default Rise;
