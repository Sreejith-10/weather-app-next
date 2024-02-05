"use client";

import {useState} from "react";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {text} from "stream/consumers";

const SearchBox = () => {
	const [color, setColor] = useState(false);
	const [err, setErr] = useState(false);
	const [key, setKey] = useState("");
	const focushandler = () => {
		setColor(true);
	};

	const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErr(false);
		let text = e.target.value;
		text = text.trim();
		setKey(text);
	};

	const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			if (key.length === 0) setErr(true);
		}
	};

	return (
		<div className={`flex items-center justify-center gap-5 `}>
			<FaMagnifyingGlass size={30} />
			<input
				onFocus={() => setColor(true)}
				type="text"
				placeholder="Enter a city"
				onChange={inputHandler}
				onKeyDown={onKeyDownHandler}
				value={key}
				className="input input-ghost w-full max-w-xs border-none outline-none bg-inherit focus:bg-slate-50"
			/>
		</div>
	);
};

export default SearchBox;
