export const convertTemperatureInKelvin = (temp: number) => {
	const celius = temp - 273.15;
	return Math.floor(celius);
};
