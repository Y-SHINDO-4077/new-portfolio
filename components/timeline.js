import styles from "../styles/scss/timeline.module.scss";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap, Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline(title) {
	return (
		<>
			<div className={styles.t_left}>
				<h2 className={styles.t__left}>TIMELINE</h2>
			</div>

			<section className={styles.side_scroll}>
				<div className={styles.side_scroll_container}>
					<div className={styles.side_scroll_list_wrapper}>
						<ul className={styles.side_scroll_list}>
							<li className={styles.side_scroll_item}>
								<h4>1994</h4>
								<h3>誕生</h3>
							</li>
							<li className={styles.side_scroll_item}>
								<h4>2018</h4>
								<h3>同志社大学文学部文化史学科日本史専攻卒業</h3>
							</li>
							<li className={styles.side_scroll_item}>
								<h4>2018</h4>
								<h3>業務システム会社でプログラマーとして働く</h3>
							</li>
							<li className={styles.side_scroll_item}>
								<h4>2020</h4>
								<h3>ベンチャーWeb広告代理店でフロントエンジニアとして働く</h3>
							</li>
							<li className={styles.side_scroll_item}>
								<h4>2022</h4>
								<h3>
									京都芸術大学通信教育部デザイン学科
									<br />
									グラフィックデザインコースに入学
								</h3>
							</li>
							<li className={styles.side_scroll_item}>
								<h4>2023</h4>
								<h3>大手Web制作会社でフロントエンジニアとして働く</h3>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
