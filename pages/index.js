import Meta from "components/meta";
import Container from "components/container";
import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

import Hero from "components/hero";
import MVSwiper from "components/swiper";
import CANVAS from "components/canvas";
import MeSetion from "components/me_section";
import DNUSetion from "components/dnu_section";
import READMORE from "components/readmore";
import Image from "next/legacy/image";
import topwork from "images/topwork.webp";

export default function Home() {
	const typewrite = useRef();
	const typewrite02 = useRef();
	const imageWork = useRef();
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		let ctx = gsap.context(() => {
			gsap.set([typewrite.current, typewrite02.current], {
				opacity: 0,
				y: 20,
			});
			gsap.to([typewrite.current, typewrite02.current], {
				opacity: 1,
				y: 0,
				duration: 0.8,
				delay: 0.8,
				stagger: {
					amount: 0.5,
					from: "start",
					ease: "power4.inOut",
				},
			});
		}, typewrite);

		let imageFade;

		if (imageWork.current) {
			imageFade = gsap.fromTo(
				imageWork.current,
				{
					scrollTrigger: {
						trigger: imageWork.current,
						start: "50% bottom",
						toggleActions: "restart none none none",
					},
					opacity: 0,
					yPercent: 10,
				},
				{
					scrollTrigger: {
						trigger: imageWork.current,
						start: "50% bottom",
						toggleActions: "restart none none none",
					},
					opacity: 1,
					yPercent: 0,
				}
			);
		}

		return () => {
			ctx.revert();
			if (imageFade) {
				imageFade.revert();
			}
		};
	}, []);

	return (
		<>
			<Meta />
			<section className="relative h-screen w-screen overflow-hidden py-0 dark:mix-blend-difference dark:after:bg-black/30">
				<Container large>
					<div className="absolute left-[15%] top-1/3 z-10  sm:left-[10%] md:left-8 md:top-64 lg:left-24">
						<h1
							className="w-fit max-w-full text-8xl font-bold leading-none  text-white  mix-blend-hard-light dark:text-white sm:max-w-[calc(100%_-_30%)] lg:text-9xl"
							ref={typewrite}
						>
							<span>Y</span>
							<span>U</span>
							<span>T</span>
							<span>A</span>
							<span>R</span>
							<span>O</span>
							<span>&nbsp;</span>
							<br className="sm:hidden" />
							<span>S</span>
							<span>H</span>
							<span>I</span>
							<span>N</span>
							<span>D</span>
							<span>O</span>
						</h1>

						<h4
							className="mt-6 w-fit text-2xl font-bold tracking-wider text-white mix-blend-hard-light md:mt-8 md:text-3xl lg:text-4xl"
							ref={typewrite02}
						>
							<span>I</span>
							<span>&rsquo;</span>
							<span>m</span>
							<span>&nbsp;</span>
							<span>a</span>
							<span>&nbsp;</span>
							<span>w</span>
							<span>e</span>
							<span>b</span>
							<span className="sm:hidden">&nbsp;</span>
							<span>E</span>
							<span>n</span>
							<span>g</span>
							<span>i</span>
							<span>n</span>
							<span>n</span>
							<span>e</span>
							<span>r</span>
							<span>,</span>
							<br className="sm:hidden" />
							<span>&nbsp;</span>
							<span>a</span>
							<span>n</span>
							<span>d</span>
							<span>&nbsp;</span>
							<span>s</span>
							<span>o</span>
							<span>&nbsp;</span>
							<span>o</span>
							<span>n</span>
							<span>&nbsp;</span>
							<span>...</span>
						</h4>
					</div>
					<div>
						<MVSwiper />
					</div>
				</Container>
				<div className="absolute top-[15%] m-auto h-svh w-full sm:right-[15%] sm:top-[10%] ">
					<CANVAS />
				</div>
			</section>

			<MeSetion linkOn />

			<section className="py-12 dark:bg-black dark:text-white md:py-24">
				<Container>
					<Hero title="WORKS" />
					<div ref={imageWork} className="mt-6">
						<Image src={topwork} alt="" layout="responsive" priority width={1200} height={795} />
					</div>
					<READMORE url="/work" />
				</Container>
			</section>
			<DNUSetion linkOn />
		</>
	);
}
