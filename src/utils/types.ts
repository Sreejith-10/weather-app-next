export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type ThemeContextType = {
	theme: string;
	setTheme: SetState<string>;
	mount: boolean;
	setMount: SetState<boolean>;
};