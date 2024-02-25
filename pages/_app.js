import "../styles/scss/globals.scss";
import "../styles/main.css";
//import Layout from "components/layout";

// function MyApp({ Component, pageProps }) {
// 	return (
// 		<Layout>
// 			<Component {...pageProps} />
// 		</Layout>
// 	);
// }

import Header from "components/header";
import Toggle from "components/toggle";
import Footer from "components/footer";
import { gsap } from "gsap";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		let cursor = document.getElementById("stalker"),
			link = document.getElementsByClassName("link"),
			pos = { x: 0, y: 0 }, // カーソル要素の座標
			mouse = { x: pos.x, y: pos.y }, // マウスカーソルの座標
			speed = 0.5; // 0.01〜1 数値が大きほど早い

		// カーソルの座標を設定する
		var cursorSetX = gsap.quickSetter(cursor, "x", "px");
		var cursorSetY = gsap.quickSetter(cursor, "y", "px");

		// マウスカーソル座標を取得する
		document.addEventListener("mousemove", function (event) {
			mouse.x = event.pageX;
			mouse.y = event.pageY;
		});

		// レンダリングする
		gsap.ticker.add(function () {
			var dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

			pos.x += (mouse.x - pos.x) * dt;
			pos.y += (mouse.y - pos.y) * dt;
			cursorSetX(pos.x);
			cursorSetY(pos.y);
		});
	}, []);
	return (
		<>
			<Header>
				<Toggle />
			</Header>
			<div id="stalker" style={{ pointerEvents: "none" }}></div>
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}

export default MyApp;
