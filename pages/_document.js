import { Html, Head, Main, NextScript } from "next/document";
import { siteMeta } from "lib/constants";
const { siteLang } = siteMeta;
import { Analytics } from "@vercel/analytics/react";
export default function Document() {
	return (
		<Html lang={siteLang}>
			<Head>
				<Analytics />
			</Head>
			<body className="overflow-x-hidden">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
