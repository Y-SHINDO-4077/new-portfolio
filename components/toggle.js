import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import light from "images/light_icon.svg";
import dark from "images/dark_icon.svg";

export default function Toggle() {
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setDarkMode(true);
			document.querySelector("html")?.classList.add("dark");
		} else {
			setDarkMode(false);
			document.querySelector("html")?.classList.remove("dark");
		}
	}, [darkMode]);

	const handleChangeDarkMode = () => {
		if (darkMode) {
			localStorage.theme = "light";
			setDarkMode(false);
		} else {
			localStorage.theme = "dark";
			setDarkMode(true);
		}
	};
	return (
		<div className="ml-4 mr-8 flex items-center justify-center gap-1">
			<figure>
				<Image src={light} alt="" width={25} height={25} />
			</figure>
			<div className="relative h-[1rem] w-[2rem]">
				<input
					type="checkbox"
					id="switch"
					switch="true"
					checked={darkMode}
					className="pointer-events-auto absolute left-0 m-auto size-full opacity-0 [&:checked+label:after]:left-[17px]"
					aria-label="DarkModeToggle"
					onChange={handleChangeDarkMode}
				/>
				<label
					htmlFor="switch"
					className="relative block size-full rounded-[1rem] border border-solid after:absolute after:left-[1px]  after:top-[1px] after:z-10 after:block after:size-[0.75rem] after:rounded-[100%] after:bg-black after:content-[''] dark:border-white dark:bg-inherit dark:after:bg-white"
				></label>
			</div>
			<figure>
				<Image className="h-auto w-full" src={dark} alt="" width={23} height={23} />
			</figure>
		</div>
	);
}
