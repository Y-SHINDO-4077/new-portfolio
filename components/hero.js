import styles from "../styles/scss/hero.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function Hero({ title, subtitle, imageOn = false }) {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (process.browser) {
			gsap.utils.toArray(".hero_title__5HuPB").forEach(function (target) {
				gsap.fromTo(
					target,
					{
						scrollTrigger: {
							trigger: target,
							start: "top top",
							toggleActions: "restart none none none",
							// markers: true,
						},
						opacity: 0,
						yPercent: 100,
					},
					{
						scrollTrigger: {
							trigger: target,
							start: "bottom bottom",
							toggleActions: "restart none none none",
							// markers: true,
						},
						opacity: 1,
						yPercent: 0,
					}
				);
			});
		}
	});

	return (
		<div className="flex flex-col text-center">
			<h1 className={styles.title}>{title}</h1>
			{subtitle && <h4 className={styles.subtitle}> {subtitle}</h4>}
		</div>
	);
}
