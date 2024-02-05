import React from "react";

const Humidity = ({humidity}: {humidity: number}) => {
	return (
		<div className="card bg-[rgba(255,255,255,.4)] w-[250px] sm:w-full xls:w-[200px] lg:w-[180px] h-auto max-h-[200px]">
			<div className="card-body">
				<div className="w-full h-10">
					<h1 className="font-semibold">Humidity</h1>
				</div>
				<div className="w-full h-full flex items-center justify-center">
					<h3 className="font-bold text-3xl">{humidity} %</h3>
				</div>
				<div>
					<h1 className="font-semibold">Normal</h1>
				</div>
			</div>
		</div>
	);
};

export default Humidity;
