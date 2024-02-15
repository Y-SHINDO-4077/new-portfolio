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
			<button className={styles.btn} onClick={toggleNav}>
				<span className={styles.bar}></span>
				<span className={styles.sr_only}>MENU</span>
			</button>
			<ul className={styles.list}>
				<li>
					<Link href="/me/" onClick={closeNav}>
						ME
					</Link>
				</li>
				<li>
					<Link href="/work/" onClick={closeNav}>
						WORKS
					</Link>
				</li>
				<li>
					<Link href="/other/" onClick={closeNav}>
						OTHER
					</Link>
				</li>
			</ul>
		</nav>
	);
}
