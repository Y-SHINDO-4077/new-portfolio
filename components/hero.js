import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function Hero({ title, subtitle, className }) {
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
		<section className={`flex flex-col text-center ${className && className}`}>
			<h1 className="text-6xl font-black tracking-widest md:text-8xl">{title}</h1>
			{subtitle && <h4 className="text-sm md:text-3xl"> {subtitle}</h4>}
		</section>
	);
}
