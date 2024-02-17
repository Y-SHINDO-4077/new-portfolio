import styles from "styles/scss/toggle.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import light from "images/light_icon.svg";
import dark from "images/dark_icon.svg";

export default function Toggle() {
	const [darkTheme, setDarkTheme] = useState("");

	const handleToggle = (e) => {
		setDarkTheme(e.target.checked);
	};

	useEffect(() => {
		if (darkTheme !== undefined) {
			if (darkTheme) {
				document.documentElement.setAttribute("data-theme", "dark");
				window.localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.removeAttribute("data-theme");
				window.localStorage.setItem("theme", "light");
			}
		}
	}, [darkTheme]);

	useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue("--initial-color-mode");
		setDarkTheme(initialColorValue === "dark");
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("dark").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}

		// Whenever the user explicitly chooses light mode
		localStorage.theme = "light";

		// Whenever the user explicitly chooses dark mode
		localStorage.theme = "dark";

		// Whenever the user explicitly chooses to respect the OS preference
		localStorage.removeItem("theme");
	}, []);
	return (
		<div className={styles.toggle__flex}>
			<figure>
				<Image className="" src={light} alt="" width={25} height={25} />
			</figure>
			<div className={styles.toggle_Input}>
				<input
					type="checkbox"
					id="switch"
					switch="true"
					checked={darkTheme}
					onChange={handleToggle}
					className={styles.header_toggleInput}
				/>
				<label htmlFor="switch" className={styles.header_toggleLabel}></label>
			</div>
			<figure>
				<Image className="" src={dark} alt="" width={23} height={23} priority />
			</figure>
		</div>
	);
}
