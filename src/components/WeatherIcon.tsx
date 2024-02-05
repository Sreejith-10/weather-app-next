import Image, {StaticImageData} from "next/image";
import React from "react";
import Sunny from "../../public/png/sunny.png";
import Rain from "../../public/png/raining.png";
import Cloud from "../../public/png/cloudy.png";
import Thunder from "../../public/png/thunder.png";
import Drizzele from "../../public/png/drizzle.png";
import Snows from "../../public/png/overcast.png";

const WeatherIcon = ({icon}: {icon: string}) => {
	const icons: {main: string; icon: StaticImageData}[] = [
		{main: "Clear", icon: Sunny},
		{main: "Rain", icon: Rain},
		{main: "Clouds", icon: Cloud},
		{main: "Thunderstorm", icon: Thunder},
		{main: "Drizzle", icon: Drizzele},
		{main: "Snow", icon: Snows},
	];
	const inludedIcon = icons.filter((item) => {
		if (item.main === icon) return item;
	});
	return (
		<Image
			src={inludedIcon[0]?.icon}
			alt="not found"
			width={50}
			height={50}
			priority
		/>
	);
};

export default WeatherIcon;
