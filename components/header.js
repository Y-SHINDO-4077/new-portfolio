import Logo from "components/logo";
import Nav from "components/nav";
import Toggle from "components/toggle";
import React, { useState, useEffect } from "react";

export default function Header() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
	};
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);
	return (
		<header className={`fixed z-30 h-[64px] w-full ${isVisible && "bg-black/10 dark:bg-black/25"}`}>
			<div className="flex h-full items-center justify-between">
				<Logo boxOn />
				<div className="flex flex-row-reverse items-center justify-start md:flex-row ">
					<Nav />
					<Toggle />
				</div>
			</div>
		</header>
	);
}
