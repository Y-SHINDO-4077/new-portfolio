import Link from "next/link";
import { useState } from "react";

export default function Nav() {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const toggleNav = () => {
		setNavIsOpen((prev) => !prev);
	};
	const closeNav = () => {
		setNavIsOpen(false);
	};
	return (
		<nav
			className={
				navIsOpen
					? "[&_button>span]:scale-0 [&_button]:before:rotate-45 [&_button]:after:-rotate-45 [&_ul]:translate-x-0 [&_ul]:bg-black/80 "
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
				className="buttonClass bofore:content-[''] relative z-10 grid size-[40px] place-items-center before:absolute before:left-0 before:top-[20px] before:z-10 before:h-[2px] before:w-[32px] before:bg-white after:absolute after:left-0 after:top-[20px] after:z-10  after:h-[2px] after:w-[32px] after:bg-white after:content-[''] md:hidden"
				onClick={toggleNav}
			>
				<span className="absolute left-0 h-[2px] w-[32px] bg-white "></span>
				<span className="sr-only">MENU</span>
			</button>
			<ul className="fixed inset-[0_-100%] z-[-1] grid  place-content-center  gap-8 text-center transition-transform duration-300 ease-out md:static md:flex md:gap-10 md:bg-inherit">
				<li>
					<Link
						href="/me/"
						className="text-white hover:opacity-70 md:text-black"
						onClick={closeNav}
					>
						ME
					</Link>
				</li>
				<li>
					<Link
						href="/work/"
						className="text-white hover:opacity-70 md:text-black "
						onClick={closeNav}
					>
						WORKS
					</Link>
				</li>
				<li>
					<Link
						href="/other/"
						className="text-white hover:opacity-70 md:text-black "
						onClick={closeNav}
					>
						OTHER
					</Link>
				</li>
			</ul>
		</nav>
	);
}
