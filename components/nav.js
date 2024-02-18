import Link from "next/link";
import styles from "../styles/scss/nav.module.scss";
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
		<nav className={navIsOpen ? styles.open : styles.close}>
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
				className="relative z-40 grid size-[42px] place-items-center before:h-[1px] before:w-[32px] after:h-[1px]  after:w-[32px] md:hidden"
				onClick={toggleNav}
			>
				<span className={styles.bar}></span>
				<span className="sr-only">MENU</span>
			</button>
			<ul className="fixed inset-[0_-100%] z-50 grid place-content-center gap-8 bg-black/80 text-center md:static md:flex md:gap-10 md:bg-inherit">
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
