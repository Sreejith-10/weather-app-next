// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const UVIndex = () => {
	const styles = {
		"--value": 80,
	};
	return (
		<div className="card bg-[rgba(255,255,255,.4)] w-auto h-auto">
			<div className="card-body">
				<h1>UV Index</h1>
				<div
					className="radial-progress bg-slate-50 text-warning border-primary "
					role="progressbar"
					style={styles}>
					30%
				</div>
			</div>
		</div>
	);
};

export default UVIndex;
