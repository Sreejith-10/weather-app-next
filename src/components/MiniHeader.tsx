import {MdOutlineWbSunny} from "react-icons/md";
import {BsMoon} from "react-icons/bs";

const MiniHeader = () => {
	return (
		<>
			<div className="w-full h-auto flex items-center justify-between p-2">
				<div>
					<a href="">Today</a>
					<a href="">Week</a>
				</div>
				<div className="flex gap-5 items-center">
					<div>
						<button className="btn btn-circle">C</button>
						<button className="btn btn-circle">F</button>
					</div>
					<div className="flex items-center">
						<label className="swap swap-rotate">
							<input type="checkbox" />
						</label>
						<input type="checkbox" className="toggle toggle-lg" />
					</div>
				</div>
			</div>
		</>
	);
};

export default MiniHeader;
