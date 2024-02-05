export const getCurrentDay = () => {
	const now = new Date();
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const dayofweek = days[now.getDay()];
	const time = now.toLocaleTimeString("en-IN", {
		hour: "numeric",
		minute: "numeric",
	});

	const result = `${dayofweek} ${time}`;

	return result;
};

export const convertTime = (t: number) => {
	return new Date(t).toLocaleTimeString();
};

export const singleDate = (t: number) => {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const d = new Date(t * 1000);
	const dw = d.getDay();
    const dname = days[dw]

    return dname
};

export const hourFormat = (t:number) =>{
    const d = new Date(t * 1000)
    const dformat = d.toLocaleTimeString('en-US',{hour:"numeric",minute:"2-digit",hour12:true})
    return dformat
}