import styles from "../styles/scss/dnusection.module.scss";
import Hero from "./hero";
import Container from "./container";
import READMORE from "./readmore";
import Image from "next/image";
import dmask from "images/dnu_photo.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function DNUSetion({ linkOn = false }) {
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
							//markers: true,
						},
						opacity: 0,
						xPercent: -100,
					},
					{
						scrollTrigger: {
							trigger: target,
							start: "top bottom",
							toggleActions: "restart none none none",
							//markers: true,
						},
						opacity: 1,
						xPercent: 0,
					}
				);
			});
		}
	});
	return (
		<>
			<section className="bg-lightOrange/30 py-12 md:py-24 dark:bg-darkBaige">
				<Container>
					<Hero title="OTHER" subtitle="" className="text-center" />

					<div className="items-center justify-start md:flex ">
						<p className="animation max-w-[650px] grow text-lg !leading-loose md:w-[46vw] md:text-2xl ">
							2017年の大学在籍時より、
							<br />
							大ナゴヤ大学に関わり続けています。
							<br />
							私の活動を紹介します。
						</p>
						<div className="w-full md:w-[53.5833vw] md:max-w-[643px]">
							<figure className="w-full">
								<Image
									src={dmask}
									alt=""
									priority
									sizes="(min-width: 1200px) 643px, 50vw"
									style={{
										width: "100%",
										height: "auto",
									}}
								/>
							</figure>
						</div>
					</div>
					{linkOn && <READMORE url="/other" />}
				</Container>
			</section>
		</>
	);
}
