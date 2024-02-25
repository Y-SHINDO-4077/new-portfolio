import Container from "./container";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function PolicySetion({ title, ja__content }) {
	const textLeftFade = useRef();
	const textRightFade = useRef();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (textLeftFade.current) {
			gsap.fromTo(
				textLeftFade.current,
				{
					scrollTrigger: {
						trigger: textLeftFade.current,
						start: "bottom 50%",
						toggleActions: "restart none none none",
					},
					opacity: 0,
					xPercent: -100,
				},
				{
					scrollTrigger: {
						trigger: textLeftFade.current,
						start: "bottom 50%",
						toggleActions: "restart none none none",
					},
					opacity: 1,
					xPercent: 0,
				}
			);
		}
		if (textRightFade.current) {
			gsap.fromTo(
				textRightFade.current,
				{
					scrollTrigger: {
						trigger: textRightFade.current,
						start: "bottom bottom",
						toggleActions: "restart none none none",
					},
					opacity: 0,
					xPercent: 100,
				},
				{
					scrollTrigger: {
						trigger: textRightFade.current,
						start: "bottom bottom",
						toggleActions: "restart none none none",
					},
					opacity: 1,
					xPercent: 0,
				}
			);
		}
	});

	return (
		<>
			<section className="py-12 md:py-16">
				<Container>
					<h2 className="font-futura text-4xl dark:text-white  md:text-6xl" ref={textLeftFade}>
						{title}
					</h2>
					<p
						className="ml-auto mt-8 text-base !leading-loose dark:text-white md:mt-12  md:w-[60vw] md:text-2xl "
						ref={textRightFade}
					>
						{ja__content}
					</p>
				</Container>
			</section>
		</>
	);
}
