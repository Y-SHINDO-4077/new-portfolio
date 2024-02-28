import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function DNUTimeline() {
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
		<div className="overflow-x-hidden dark:bg-darkBaige">
			<h2 className="text-left font-futura text-4xl dark:text-white  md:text-6xl">DNU TIMELINE</h2>

			<section className="flex items-center justify-start p-2  md:p-16">
				<ul className="relative left-[1.5rem] top-0 border-l-2 border-solid border-black dark:border-white">
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:text-white dark:before:bg-white md:left-[4rem] md:w-[calc(100%_-_60px)] md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[0] = el)}
					>
						<h4 className="font-futura text-2xl md:text-3xl">2017</h4>
						<h3 className="mt-4 font-noto text-3xl md:text-4xl">インターンシップ生となる</h3>
						<p className="mt-6 font-noto text-base">
							大学進学で県外に出たのをきっかけに、「名古屋には何がある？」を知りたい、
							<br />
							そういう想いが強かった私は、インターンシップ生となりました。
							<br />
							<Link
								href="https://dai-nagoya.univnet.jp/subjects/detail/418"
								target="_blank"
								rel="noreferrer noopener"
								className="hover:opacity-70"
							>
								鶴舞公園の建造物に関する授業
							</Link>
							を課題として実施しました。反響がありました。
						</p>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:text-white dark:before:bg-white md:left-[4rem] md:w-[calc(100%_-_60px)] md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[1] = el)}
					>
						<h4 className="font-futura text-2xl md:text-3xl">2018</h4>
						<h3 className="mt-4 font-noto text-3xl md:text-4xl">総務メンバーとなる</h3>
						<p className="mt-4 font-noto text-base">
							社会人になった後も、総務メンバーとして活動に参加。ボランティアスタッフ説明会を実施しました。
						</p>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:text-white dark:before:bg-white md:left-[4rem] md:w-[calc(100%_-_60px)] md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[2] = el)}
					>
						<h4 className="font-futura text-2xl md:text-3xl">2019</h4>
						<h3 className="mt-4 font-noto text-3xl md:text-4xl">
							授業コーディネーターとして企画する
						</h3>
						<p className="mt-4 font-noto text-base">
							<Link
								href="https://dai-nagoya.univnet.jp/subjects/detail/474"
								target="_blank"
								rel="noreferrer noopener"
								className="hover:opacity-70"
							>
								松坂屋初代当主の国際交流についての授業
							</Link>
							や、
							<Link
								href="https://dai-nagoya.univnet.jp/subjects/detail/492"
								target="_blank"
								rel="noreferrer noopener"
								className="hover:opacity-70"
							>
								姉妹校の京都カラスマ大学とコラボ授業
							</Link>
							を企画しました。
						</p>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:text-white dark:before:bg-white md:left-[4rem] md:w-[calc(100%_-_60px)] md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[3] = el)}
					>
						<h4 className="font-futura text-2xl md:text-3xl">2020</h4>
						<h3 className="mt-4 font-noto text-3xl md:text-4xl">noteチーム立ち上げ</h3>
						<p className="mt-4 font-noto text-base">
							ボランティアスタッフさんのことをもっと発信したいとの声があり、
							<br />
							スタッフさんのインタビューを載せた
							<Link
								href="https://note.com/dainagoya/m/m6840810430ba"
								target="_blank"
								rel="noreferrer noopener"
								className="hover:opacity-70"
							>
								note
							</Link>
							を作る活動を立ち上げました。
							<br />
							校正係として現在も活動中です。
						</p>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:text-white dark:before:bg-white md:left-[4rem] md:w-[calc(100%_-_60px)] md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[4] = el)}
					>
						<h4 className="font-futura text-2xl md:text-3xl">2021</h4>
						<h3 className="mt-4 font-noto text-3xl md:text-4xl">
							やっとかめ文化祭まちあるきなごやで企画する
						</h3>
						<p className="mt-4 font-noto text-base">
							2017年よりやっとかめ大使としてお手伝いしていた
							<Link
								href="https://yattokame.jp/"
								target="_blank"
								rel="noreferrer noopener"
								className="hover:opacity-70"
							>
								やっとかめ文化祭
							</Link>
							。 <br />
							犬山城マイスターの方とまちあるき企画を実施しました。
						</p>
					</li>
					<li
						className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black dark:text-white dark:before:bg-white md:left-[4rem] md:w-[calc(100%_-_60px)] md:pl-[3rem] md:before:left-[-4.75rem]"
						ref={(el) => (textFade.current[5] = el)}
					>
						<h4 className="font-futura text-2xl md:text-3xl">2022</h4>
						<h3 className="mt-4 font-noto text-3xl md:text-4xl">まちシル立ち上げ</h3>

						<p className="mt-4 font-noto text-base">
							「歩くまちには何がある？」をコンセプトに、 <br />
							まちを歩いて発見するプロジェクト
							<Link
								href="https://dai-nagoya.univnet.jp/relations/machishiru/"
								target="_blank"
								rel="noreferrer noopener"
								className="hover:opacity-70"
							>
								「まちシル」
							</Link>
							を立ち上げました。
							<br />
							webサイト制作、企画や現場担当としても活動中です。
						</p>
					</li>
				</ul>
			</section>
		</div>
	);
}
