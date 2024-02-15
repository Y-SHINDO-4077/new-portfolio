import styles from "styles/scss/social.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import login from "images/login.svg";
import Link from "next/link";

export default function Social({ iconSize = "initial" }) {
	return (
		<ul className={styles.list} style={{ "--icon-size": iconSize }}>
			<li>
				<Link href="https://github.com/Y-SHINDO-4077">
					<FontAwesomeIcon icon={faGithub} />
					<span className="sr-only">GitHub</span>
				</Link>
			</li>
		</ul>
	);
}
