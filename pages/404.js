import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";

export default function custom404() {
	return (
		<Container>
			<Meta pageTitle="404 - Page not found" />
			<Hero title="404" subtitle="ページが見つかりません" />
		</Container>
	);
}
