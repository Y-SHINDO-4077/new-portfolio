import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import READMORE from "components/readmore";

export default function custom404() {
	return (
		<Container>
			<Meta pageTitle="404 - Page not found" />
			<div className="py-20">
				<Hero title="404" subtitle="ページが見つかりません" />
				<div className="!mx-auto mt-16 flex w-fit pb-16">
					<READMORE url="/" title="BACK TO TOP" />
				</div>
			</div>
		</Container>
	);
}
