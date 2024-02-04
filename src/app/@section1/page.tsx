import SearchBox from "@/components/SearchBox";
import Image from "next/image";
import React from "react";
import Sunny from "../../../public/png/sunny.png";
import Rain from "../../../public/png/raining.png";

const Section1 = () => {
	return (
		<>
			<div className="w-auto h-full flex flex-col justify-evenly">
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
					<h1 className="text-2xl">12 C</h1>
					<h4>Monday,04:00</h4>
				</div>
				<div className="card bg-[rgba(255,255,255,.2)] shadow-xl flex items-center">
					<div className="card-body">
						<div className="w-full h-auto flex items-center gap-5">
							<Image
								src={Sunny}
								alt="not found"
								width={50}
								height={50}
								priority
							/>
							<p className="w-auto">Mostly cloudy</p>
						</div>
						<div className="w-full h-auto flex items-center gap-5">
							<Image
								src={Rain}
								alt="not found"
								width={50}
								height={50}
								priority
							/>
							<p className="w-auto">Rain - 30%</p>
						</div>
					</div>
				</div>
				<div className="card bg-[rgba(255,255,255,.2)] shadow-xl flex items-center justify-center">
					<div className="card-body">
						<p>New York,NY,USA</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section1;
