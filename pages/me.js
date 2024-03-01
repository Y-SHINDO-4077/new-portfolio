import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import MeSetion from "components/me_section";
import PolicySetion from "components/policy_section";
import ContentBody from "components/content__body";
import Timeline from "components/timeline";
import CHART from "components/chart";
import READMORE from "components/readmore";

import Image from "next/legacy/image";
import topwork from "images/topwork.webp";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ME() {
	const textFade = useRef();
	if (textFade.current) {
		texteFade = gsap.fromTo(
			textFade.current,
			{
				scrollTrigger: {
					trigger: textFade.current,
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
	return (
		<>
			<Meta pageTitle="ME" pageDesc="About ME | DO" />
			<div className="overflow-x-hidden dark:bg-darkBaige">
				<MeSetion />
				<section className="bg-[#0efeb]">
					<PolicySetion
						title="POLICY"
						en__content=""
						ja__content="全体を把握して、分からない仕様・箇所などはすぐに確認する。
      曖昧にしない。
      よりよいクリエイティブを作るためには当たり前ですが、
      いつも徹底しています。"
					/>
					<PolicySetion
						title="FUTURE"
						en__content=""
						ja__content="フロントエンドを極めたい。
      動くサイトや、ユーザー視点の使いやすいWebサイトを作っていきたい。
      そのためにデザインの素養を磨き中です。

      DNUというプラットフォームを使って、
      さまざまな人がまちをもっと楽しめるように仕掛けていきたい。"
					/>
				</section>
			</div>
			<section className="overflow-x-hidden py-12 dark:bg-[#2C2C30] md:py-24">
				<Container>
					<Timeline />
				</Container>
			</section>

			<section className="overflow-x-hidden py-12 dark:bg-[#2C2C30] md:py-24">
				<Container>
					<h2 className="text-4xl dark:text-white md:text-6xl">Skills</h2>
					<CHART />
				</Container>
			</section>
			<section className="overflow-x-hidden  py-12 dark:bg-[#2C2C30] md:py-24 " ref={textFade}>
				<Container>
					<h2 className="text-4xl dark:text-white md:text-6xl">Qualification</h2>
					<ul className="mt-16 flex flex-col gap-4 dark:text-white">
						<ContentBody heading4="マイクロソフトオフィススペシャリスト" />
						<ContentBody heading4="ITパスポート" />
						<ContentBody heading4="色彩検定3級・2級" />
						<ContentBody heading4="HTML5 認定資格" />
						<ContentBody heading4="校正検定初級（日本エディタースクール）" />
					</ul>
				</Container>
			</section>
			<section className="overflow-x-hidden py-12 dark:bg-[#2C2C30] md:py-24">
				<Container>
					<Hero title="WORKS" subtitle="" />
					<Image
						src={topwork}
						alt=""
						priority
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
					<READMORE url="/work" />
				</Container>
			</section>
		</>
	);
}
