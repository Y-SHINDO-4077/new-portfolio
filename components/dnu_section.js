import Hero from "./hero";
import Container from "./container";
import READMORE from "./readmore";
import Image from "next/legacy/image";
import dmask from "images/dnu_photo.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function DNUSetion({ linkOn = false }) {
	const textLeftFade = useRef();
	const imgRightFade = useRef();
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		if (textLeftFade.current) {
			gsap.fromTo(
				textLeftFade.current,
				{
					scrollTrigger: {
						trigger: textLeftFade.current,
						start: "bottom bottom",
						toggleActions: "restart none none none",
					},
					opacity: 0,
					xPercent: -100,
				},
				{
					scrollTrigger: {
						trigger: textLeftFade.current,
						start: "bottom bottom",
						toggleActions: "restart none none none",
					},
					opacity: 1,
					xPercent: 0,
				}
			);
		}
		if (imgRightFade.current) {
			gsap.fromTo(
				imgRightFade.current,
				{
					scrollTrigger: {
						trigger: imgRightFade.current,
						start: "bottom bottom",
						toggleActions: "restart none none none",
					},
					opacity: 0,
					xPercent: 100,
				},
				{
					scrollTrigger: {
						trigger: imgRightFade.current,
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
			<section className="overflow-x-hidden bg-lightOrange/30 py-16 dark:bg-darkBaige md:py-24">
				<Container>
					<Hero title="OTHER" subtitle="" className="text-center  dark:text-white" />

					<div className="mt-6 items-center justify-start md:flex">
						<p
							className="max-w-[650px] grow text-lg !leading-loose dark:text-white md:w-[46vw] md:text-2xl"
							ref={textLeftFade}
						>
							2017年の大学在籍時より、
							<br />
							大ナゴヤ大学に関わり続けています。
							<br />
							私の活動を紹介します。
						</p>
						<div className="w-full md:w-[53.5833vw] md:max-w-[643px]" ref={imgRightFade}>
							<figure className="w-full">
								<Image src={dmask} alt="" priority sizes="(min-width: 1200px) 643px, 50vw" />
							</figure>
						</div>
					</div>
					{linkOn && <READMORE url="/other" />}
				</Container>
			</section>
		</>
	);
}
