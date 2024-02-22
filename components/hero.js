import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Hero({ title, subtitle, className }) {
	const heroTitle = useRef();

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (heroTitle.current) {
			gsap.fromTo(
				heroTitle.current,
				{
					scrollTrigger: {
						trigger: heroTitle.current,
						start: "bottom bottom",
						toggleActions: "restart none none none",
					},
					opacity: 0,
					yPercent: 100,
				},
				{
					scrollTrigger: {
						trigger: heroTitle.current,
						start: "bottom bottom",
						toggleActions: "restart none none none",
					},
					opacity: 1,
					yPercent: 0,
				}
			);
		}
	});

	return (
		<section className={`flex flex-col text-center ${className && className}`} ref={heroTitle}>
			<h1 className="text-6xl font-black tracking-widest md:text-8xl">{title}</h1>
			{subtitle && (
				<section>
					<h4 className="text-sm md:text-3xl"> {subtitle}</h4>
				</section>
			)}
		</section>
	);
}
