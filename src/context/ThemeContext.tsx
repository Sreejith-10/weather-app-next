"use client";

import {SetState} from "@/utils/types";
import {createContext, useState, useEffect} from "react";

export type ThemeContextType = {
	theme: string;
	setTheme: SetState<string>;
	mount: boolean;
	setMount: SetState<boolean>;
};

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}: any) => {
	const [theme, setTheme] = useState("light");
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
		const storedTheme = localStorage.getItem("theme") || "light";
		setTheme(storedTheme);
	}, []);

	if (!mount) {
		return <h1>Loading . . .</h1>;
	}

	const changeTheme = (t: string) => {
		setTheme(t);
		localStorage.setItem("theme", t);
	};

	return (
		<ThemeContext.Provider value={{theme, changeTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};
