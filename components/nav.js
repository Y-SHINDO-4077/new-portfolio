import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const toggleNav = () => {
		setNavIsOpen((prev) => !prev);
	};
	const closeNav = () => {
		setNavIsOpen(false);
	};
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				setNavIsOpen(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
	return (
		<nav
			className={
				navIsOpen
					? "[&_button>span]:scale-0 [&_button]:before:rotate-45 [&_button]:before:bg-white [&_button]:after:-rotate-45 [&_button]:after:bg-white [&_ul]:translate-x-0 [&_ul]:bg-black/80 "
					: "[&_button]:before:translate-y-[-0.5rem] [&_button]:after:translate-y-[0.5rem] [&_ul]:translate-x-full [&_ul]:bg-black/0 md:[&_ul]:translate-x-0"
			}
		>
			{navIsOpen && (
				<style jsx global>
					{`
						@media (max-width: 767px) {
							body {
							overflow: hidden;
							position: fixed;
							width: 100%;
							}
       					}
        			`}
				</style>
			)}
			<button
				className="bofore:content-[''] relative z-10 grid h-[40px] w-[32px] place-items-center  before:absolute before:left-0 before:top-[18px] before:z-10 before:h-[2px] before:w-[32px] before:bg-black after:absolute after:left-0 after:top-[20px] after:z-10 after:h-[2px]  after:w-[32px] after:bg-black after:content-[''] dark:before:bg-white dark:after:bg-white md:hidden"
				onClick={toggleNav}
				area-expanded={navIsOpen ? "true" : "false"}
				area-controls="nav"
			>
				<span className="absolute left-0 h-[2px] w-[32px] bg-black dark:bg-white"></span>
				<span className="sr-only">MENU</span>
			</button>
			<ul
				className="fixed inset-[0_-100%] z-[-1] grid  place-content-center  gap-8 bg-black/60 text-center transition-transform duration-300 ease-out md:static md:mr-8 md:flex md:gap-10  md:bg-inherit"
				area-hidden={navIsOpen ? "false" : "true"}
				id="nav"
			>
				<li>
					<Link
						href="/me/"
						className="text-white hover:opacity-70 dark:text-white md:text-black"
						onClick={closeNav}
					>
						ME
					</Link>
				</li>
				<li>
					<Link
						href="/work/"
						className="text-white hover:opacity-70 dark:text-white md:text-black"
						onClick={closeNav}
					>
						WORKS
					</Link>
				</li>
				<li>
					<Link
						href="/other/"
						className="text-white hover:opacity-70 dark:text-white md:text-black"
						onClick={closeNav}
					>
						OTHER
					</Link>
				</li>
			</ul>
		</nav>
	);
}
