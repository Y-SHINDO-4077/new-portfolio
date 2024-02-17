import Meta from "components/meta";

import Container from "components/container";
import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

import styles from "../styles/scss/Home.module.scss";
import Hero from "components/hero";
import MVSwiper from "components/swiper";
import CANVAS from "components/canvas";
import MeSetion from "components/me_section";
import DNUSetion from "components/dnu_section";
import READMORE from "components/readmore";
import Image from "next/legacy/image";
import topwork from "images/topwork.webp";

export default function Home({ posts }) {
	const typewrite = useRef();
	const typewrite02 = useRef();
	const jsDot = typewrite.current;
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

		return () => ctx.revert();
	}, []);

	return (
		<>
			<Meta />
			<Container large>
				<section className="relative h-screen py-0 dark:mix-blend-difference dark:after:bg-darkBaige">
					<div className="absolute left-1/4 top-1/3  z-10 md:left-8 md:top-64 lg:left-24">
						<h1
							className="max-w-full text-8xl font-bold leading-none text-white  mix-blend-hard-light  sm:max-w-[calc(100%_-_30%)] lg:text-9xl"
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
							className="mt-6 text-2xl font-bold tracking-wider text-white mix-blend-hard-light md:mt-8 md:text-3xl lg:text-4xl"
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
					<div className="absolute top-[15%] m-auto size-full sm:right-[15%] sm:top-[10%] ">
						<CANVAS />
					</div>
				</section>
			</Container>

			<MeSetion linkOn />

			<section className="py-12 md:py-24">
				<Container>
					<Hero title="WORKS" subtitle="" />
					<Image src={topwork} alt="" layout="responsive" priority />
					<READMORE url="/work" />
				</Container>
			</section>
			<DNUSetion linkOn />
		</>
	);
}
