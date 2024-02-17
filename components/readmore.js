import styles from "../styles/scss/readmore.module.scss";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function READMORE({ url, none = false }) {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (process.browser) {
			gsap.utils.toArray(".animation").forEach(function (target) {
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
						xPercent: 10,
					},
					{
						scrollTrigger: {
							trigger: target,
							start: "bottom bottom",
							// toggleActions: "restart none none none",
							// markers: true,
						},
						opacity: 1,
						xPercent: 0,
					}
				);
			});
		}
	});

	return (
		<div className="animation ml-auto mt-6 flex w-fit justify-end">
			<Link
				href={url}
				className="transition-color flex size-full overflow-hidden bg-gradient-to-l from-black bg-[length:200%_4px] bg-[bottom_0_left_-200%] bg-repeat-x duration-500 ease-linear hover:bg-[bottom_0_left_0]  dark:from-white/50"
			>
				<span className="text-3xl md:text-6xl">READ MORE</span>
			</Link>
		</div>
	);
}
