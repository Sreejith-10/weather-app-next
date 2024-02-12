import Image from "next/image";
import React from "react";
import WindSock from "../../../public/png/windsock.png";

const WindSpeed = ({speed}: {speed: number}) => {
	return (
		<div className="card bg-[rgba(255,255,255,.4)] w-[250px] h-auto sm:w-full sm:h-[200px] xls:w-[200px] lg:w-[180px] max-h-[200px]">
			<div className="card-body items-center justify-between">
				<div className="w-full h-10">
					<h1 className="font-semibold">Wind Speed</h1>
				</div>
				<div className="w-full h-full flex items-center justify-evenly">
					<Image alt="not found" src={WindSock} width={50} height={50} />
					<h3 className="font-bold text-3xl">{speed} Km/h</h3>
				</div>
			</div>
		</div>
	);
};

export default WindSpeed;
