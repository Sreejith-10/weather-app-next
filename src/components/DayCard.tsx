import Image, {StaticImageData} from "next/image";
import React from "react";

type DayCardType = {
	day: string;
	icon: StaticImageData;
	temp: number;
};

const DayCard = ({data}: {data: DayCardType}) => {
	return (
		<div className="card bg-[rgba(255,255,255,.2)]">
			<div className="card-body flex flex-col items-center justify-evenly">
				<h1 className="font-bold">{data.day}</h1>
				<Image
					src={data.icon}
					alt="not found"
					width={50}
					height={50}
					priority
				/>
				<h1 className="font-semibold">{data.temp}</h1>
			</div>
		</div>
	);
};

export default DayCard;
