import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Timeline() {
	gsap.registerPlugin(ScrollTrigger);
	const textFade = useRef([]);
	useEffect(() => {
		textFade.current.forEach((ref) => {
			gsap.fromTo(
				ref,
				{
					scrollTrigger: {
						trigger: ref,
						start: "bottom bottom",
						toggleActions: "restart none none none",
					},
					opacity: 0,
					yPercent: 50,
				},
				{
					scrollTrigger: {
						trigger: ref,
						start: "bottom bottom",
						toggleActions: "restart none none none",
					},
					opacity: 1,
					yPercent: 0,
				}
			);
		});
	}, []);
	return (
		<>
			<h2 className="mb-12 text-left text-4xl dark:text-white md:text-6xl">TIMELINE</h2>
			<section className="flex items-center justify-start">
				<ul className="relative left-[1.5rem] top-0 border-l-2 border-solid border-black dark:border-white">
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:before:bg-white md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[0] = el)}
					>
						<p className="font-futura text-2xl dark:text-white md:text-3xl">1994</p>
						<h3 className="mt-6 text-3xl leading-8 dark:text-white md:text-4xl">誕生</h3>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:before:bg-white md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[1] = el)}
					>
						<p className="font-futura text-2xl dark:text-white md:text-3xl">2018</p>
						<h3 className="mt-6 text-3xl leading-8 dark:text-white md:text-4xl">
							同志社大学文学部文化史学科日本史専攻卒業
						</h3>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:before:bg-white md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[2] = el)}
					>
						<p className="font-futura text-2xl dark:text-white md:text-3xl">2018</p>
						<h3 className="mt-6 text-3xl leading-8 dark:text-white md:text-4xl">
							業務システム会社でプログラマーとして働く
						</h3>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:before:bg-white md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[3] = el)}
					>
						<p className="font-futura text-2xl dark:text-white md:text-3xl">2020</p>
						<h3 className="mt-6 text-3xl leading-8 dark:text-white md:text-4xl">
							ベンチャーWeb広告代理店で
							<br />
							フロントエンジニアとして働く
						</h3>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:before:bg-white md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[4] = el)}
					>
						<p className="font-futura text-2xl dark:text-white md:text-3xl">2022</p>
						<h3 className="mt-6 text-3xl leading-8 dark:text-white md:text-4xl">
							京都芸術大学通信教育部デザイン学科
							<br />
							グラフィックデザインコースに入学
						</h3>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:before:bg-white md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[5] = el)}
					>
						<h4 className="font-futura text-2xl dark:text-white md:text-3xl">2023</h4>
						<h3 className="mt-6 text-3xl leading-8 dark:text-white md:text-4xl">
							老舗Web制作会社で
							<br />
							フロントエンジニアとして働く
						</h3>
					</li>
				</ul>
			</section>
		</>
	);
}
