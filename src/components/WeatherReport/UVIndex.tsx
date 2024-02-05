
const UVIndex = () => {
	// const styles = {
	// 	"--value": 80,
	// };
	return (
		<div className="bg-[rgba(255,255,255,.4)] w-[250px] h-auto sm:w-full sm:h-auto xls:w-[200px] lg:w-[180px] max-h-[200px] rounded-[1rem]">
			<div className="card-body h-auto flex items-center justify-start">
				<div className="w-full h-10">
					<h1 className="font-semibold">Wind Speed</h1>
				</div>
				<div className="w-full h-auto flex items-center justify-center">
					<div
						className="radial-progress w-20 h-20 bg-slate-50 text-warning border-primary "
						role="progressbar"
						// style={styles}
						>
						30%
					</div>
				</div>
			</div>
		</div>
	);
};

export default UVIndex;
