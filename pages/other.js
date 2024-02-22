import Meta from "components/meta";
import Link from "next/link";
import Container from "components/container";
import DNUSetion from "components/dnu_section";
import PolicySetion from "components/policy_section";
import DNUTimeline from "components/dnu_timeline";

export default function OTHER({ posts }) {
	return (
		<>
			<Meta pageTitle="OTHER" pageDesc="大ナゴヤ大学での活動について紹介します。" />
			<DNUSetion />
			<Container>
				<PolicySetion
					title="What’s DNU?"
					ja__content="2009年に開校した、
  「ナゴヤ(東海三県)のまちがまるごとキャンパス」を謳い、学びの場を提供するNPO。毎月第二土曜日に「大ナゴヤの日」を開催したり、「歩くまちには何がある？」というコンセプトを掲げた「まちシル」など、さまざまな活動を行っている。"
				/>

				<div className="ml-auto mt-6 flex w-fit justify-end">
					<Link
						href="https://dai-nagoya.univnet.jp/"
						className="flex size-full overflow-hidden bg-gradient-to-l from-black/50 from-50% to-0% bg-[length:200%_4px] bg-[bottom_0_left_200%] bg-repeat-x transition-all duration-300 ease-linear hover:bg-[bottom_0_left_100%]  dark:from-white/50"
						target="_blank"
						rel="noreferrer noopener"
					>
						<span className="text-3xl md:text-6xl">HPはこちら</span>
					</Link>
				</div>
			</Container>
			<Container>
				<PolicySetion
					title="Why involve DNU?"
					ja__content="大学時代、地元名古屋のことを聞かれて何も答えられなかったのをきっかけに、「名古屋の魅力ってなんだろう？」と思い、Google検索して見つけたのが大ナゴヤ大学。世代や職種を超えたボランティアスタッフのみなさんとの交流や授業への参加により、みずからの視野が広がったり、ナゴヤの街を楽しく暮らすことができたりするようになりました。「自分のやりたいこと、好きなことを堂々と言ってよい」という気づきを与えられたり、人生の選択に多大な影響を与えてくれたりするなど、この団体にはお世話になっています。"
				/>
			</Container>
			<Container>
				<DNUTimeline />
			</Container>
		</>
	);
}
