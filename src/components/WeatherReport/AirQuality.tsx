import React from "react";

const AirQuality = ({pressure}:{pressure:number}) => {
	return (
		<div className="card bg-[rgba(255,255,255,.4)] w-[250px] h-auto sm:w-full xls:w-[200px] lg:w-[180px] max-h-[200px] md:w-[200px]">
			<div className="card-body">
				<div className="w-full h-10">
					<h1 className="font-semibold">Air Quality</h1>
				</div>
				<div className="w-full h-full flex items-center justify-center">
					<h3 className="font-bold text-3xl">{pressure}</h3>
				</div>
				<div>
					<h1 className="font-semibold">Bad</h1>
				</div>
			</div>
		</div>
	);
};

export default AirQuality;
