import {MdOutlineWbSunny} from "react-icons/md";
import {BsMoon} from "react-icons/bs";
import {SetState} from "@/utils/types";

const MiniHeader = ({
	today,
	setToday,
}: {
	today: boolean;
	setToday: SetState<boolean>;
}) => {
	return (
		<>
			<div className="w-full h-auto flex items-center justify-between p-2">
				<div>
					<button
						onClick={() => setToday(false)}
						className={`${!today ? "font-bold" : "font-normal"}`}>
						Today
					</button>{" "}
					/{" "}
					<button
						onClick={() => setToday(true)}
						className={`${today ? "font-bold" : "font-normal"}`}>
						Week
					</button>
				</div>
				<div className="flex gap-5 items-center">
					<div className="w-auto space-x-4">
						<button className="btn btn-circle btn-warning text-white">
							&deg;C
						</button>
					</div>
					{/* <div className="flex items-center">
						<label className="swap swap-rotate">
							<input type="checkbox" />
						</label>
						<input type="checkbox" className="toggle toggle-lg" />
					</div> */}
				</div>
			</div>
		</>
	);
};

export default MiniHeader;
