import Hero from "./hero";
import Container from "./container";
import READMORE from "./readmore";

import Image from "next/image";
import dicon from "images/dyuicon1.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function MeSetion({ linkOn = false }) {
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
			<section className="bg-beige py-24 dark:bg-darkBaige">
				<Container>
					<Hero title="ME" className="text-center" />
					<div className="items-center justify-between md:flex">
						<p className="text-lg !leading-loose md:text-2xl" ref={textLeftFade}>
							進藤雄太朗です。
							<br />
							Webエンジニアをしています。
							<br />
							名古屋のベンチャー広告代理店、
							<br />
							老舗Web制作会社で
							<br />
							大手企業のHPを多数実装してきました。
							<br />
							また、京都芸術大学通信教育部にて
							<br />
							グラフィックデザインも勉強中。
						</p>
						<div className="hidden md:block" ref={imgRightFade}>
							<Image src={dicon} alt="" priority />
						</div>
						<div className="block md:hidden" ref={imgRightFade}>
							<Image
								src={dicon}
								alt=""
								priority
								sizes="400px"
								style={{
									width: "100%",
									height: "auto",
								}}
							/>
						</div>
					</div>

					{linkOn && <READMORE url="/me" />}
				</Container>
			</section>
		</>
	);
}
