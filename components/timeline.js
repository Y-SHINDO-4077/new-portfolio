import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline(title) {
	return (
		<>
			<h2 className="text-left text-4xl md:text-6xl">TIMELINE</h2>

			<section className="flex items-center justify-start">
				<ul className="relative left-[1.5rem] top-0 border-l-2 border-solid border-black">
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<p className="text-2xl md:text-3xl">1994</p>
						<h3 className="mt-6 text-3xl leading-8 md:text-4xl">誕生</h3>
					</li>
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<p className="text-2xl md:text-3xl">2018</p>
						<h3 className="mt-6 text-3xl leading-8 md:text-4xl">
							同志社大学文学部文化史学科日本史専攻卒業
						</h3>
					</li>
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<p className="text-2xl md:text-3xl">2018</p>
						<h3 className="mt-6 text-3xl leading-8 md:text-4xl">
							業務システム会社でプログラマーとして働く
						</h3>
					</li>
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<p className="text-2xl md:text-3xl">2020</p>
						<h3 className="mt-6 text-3xl leading-8 md:text-4xl">
							ベンチャーWeb広告代理店で
							<br />
							フロントエンジニアとして働く
						</h3>
					</li>
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<p className="text-2xl md:text-3xl">2022</p>
						<h3 className="mt-6 text-3xl leading-8 md:text-4xl">
							京都芸術大学通信教育部デザイン学科
							<br />
							グラフィックデザインコースに入学
						</h3>
					</li>
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<h4 className="text-2xl md:text-3xl">2023</h4>
						<h3 className="mt-6 text-3xl leading-8 md:text-4xl">
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
