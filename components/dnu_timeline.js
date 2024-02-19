//import styles from "../styles/scss/timeline.module.scss";
import Link from "next/link";

export default function DNUTimeline(title) {
	return (
		<>
			<h2 className="text-left font-futura text-4xl md:text-6xl">DNU TIMELINE</h2>

			<section className="flex items-center justify-start">
				<ul className="relative left-[1.5rem] top-0 border-l-2 border-solid border-black">
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-[calc(100%_-_60px)] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<h4 class="font-futura">2017</h4>
						<h3 className="mt-4 font-noto">インターンシップ生となる</h3>

						<p className="mt-6 font-noto">
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
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-[calc(100%_-_60px)] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<h4 className="font-futura">2018</h4>
						<h3 className="mt-4 font-noto">総務メンバーとなる</h3>
						<p className="mt-4 font-noto">
							社会人になった後も、総務メンバーとして活動に参加。ボランティアスタッフ説明会を実施しました。
						</p>
					</li>
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-[calc(100%_-_60px)] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<h4 className="font-futura">2019</h4>
						<h3 className="mt-4 font-noto">授業コーディネーターとして企画する</h3>
						<p className="mt-4 font-noto">
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
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-[calc(100%_-_60px)] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<h4 className="font-futura">2020</h4>
						<h3 className="mt-4 font-noto">noteチーム立ち上げ</h3>
						<p className="mt-4 font-noto">
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
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-[calc(100%_-_60px)] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<h4 className="font-futura">2021</h4>
						<h3 className="mt-4 font-noto">やっとかめ文化祭まちあるきなごやで企画する</h3>
						<p className="noto mt-4">
							2017年よりやっとかめ大使としてお手伝いしていた
							<Link
								href="https://yattokame.jp/"
								target="_blank"
								rel="noreferrer noopener"
								className="hover:opacity-70"
							>
								やっとかめ文化祭
							</Link>
							。犬山城マイスターの方とまちあるき企画を実施しました。
						</p>
					</li>
					<li className="relative w-[calc(100%_-_40px)] py-[1.5rem] pl-[1.5rem] text-3xl font-bold before:absolute before:left-[-0.75rem] before:top-8 before:size-[20px] before:rounded-3xl before:bg-black md:left-[4rem] md:w-[calc(100%_-_60px)] md:w-full md:pl-[3rem] md:before:left-[-4.75rem]">
						<h4 className="font-futura">2022</h4>
						<h3 className="mt-4 font-noto">まちシル立ち上げ</h3>

						<p className="mt-4 font-noto">
							「歩くまちには何がある？」をコンセプトに、まちを歩いて発見するプロジェクト
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
		</>
	);
}
