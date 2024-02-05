import type {Config} from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
	theme: {
		screens: {
			sc:{max:"1700px"},
			xls: {max: "1536px"},
			xl: {max: "1280px"},
			lg: {max: "1024px"},
			md: {max: "768px"},
			sm: {max: "640px"},
		},
		extend: {},
	},
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	daisyui: {
		themes: ["light", "dark"],
	},
	plugins: [daisyui],
};
export default config;
