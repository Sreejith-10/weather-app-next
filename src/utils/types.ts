export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type ThemeContextType = {
	theme: string;
	setTheme: SetState<string>;
	mount: boolean;
	setMount: SetState<boolean>;
};

export type CityType = {
	coord: {
		lat: number;
		lon: number;
	};

	country: string;
	id: number;
	name: string;
	population: number;
	sunrise: number;
	sunset: number;
	timezone: number;
};

export type ListType = {
	clouds: {
		all: number;
	};
	dt: number;
	dt_text: string;
	main: {
		feels_like: number;
		grnd_level: number;
		humidity: number;
		pressure: number;
		sea_level: number;
		temp: number;
		temp_kf: number;
		temp_max: number;
		temp_min: number;
	};
	pop: number;
	sys: {
		pop: string;
	};
	visibility: number;
	wind: {
		deg: number;
		gust: number;
		speed: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
};

export type WeatherDataType = {
	cod: string;
	message: number;
	cnt: number;
	list: ListType[];
	city: CityType;
};
