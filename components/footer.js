import Link from "next/link";
import Container from "components/container";
import Logo from "components/logo";
import styles from "../styles/scss/footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles.wrapper}>
			<Container>
				<div className={styles.flexContainer}>
					<Logo />
					<ul className={styles.list}>
						<li>
							<Link href="/me/">ME</Link>
						</li>
						<li>
							<Link href="/work/">WORKS</Link>
						</li>
						<li>
							<Link href="/other/">OTHER</Link>
						</li>
					</ul>
				</div>

				<p className={styles.t_center}>
					<small className={styles.copyright}>©️ YUTARO SHINDO</small>
				</p>
			</Container>
		</footer>
	);
}
