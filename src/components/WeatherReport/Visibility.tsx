import React from "react";

const Visibility = ({vision}: {vision: number}) => {
	return (
		<div className="card bg-[rgba(255,255,255,.4)] w-[250px] h-auto sm:w-full sm:h-[200px] xls:w-[200px] lg:w-[180px] max-h-[200px]">
			<div className="card-body">
				<div className="w-full h-10">
					<h1 className="font-semibold">Visibility</h1>
				</div>
				<div className="w-full h-full flex items-center justify-center">
					<h3 className="font-bold text-3xl">{vision} m</h3>
				</div>
				<div>
					<h1 className="font-semibold">Average</h1>
				</div>
			</div>
		</div>
	);
};

export default Visibility;
