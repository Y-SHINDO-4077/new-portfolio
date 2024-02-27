import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function MVSwiper() {
	const params = {
		slidesPerView: 1,
		effect: "fade",
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	};
	return (
		<>
			<Splide
				options={{
					autoplay: true,
					type: "fade",
					rewind: true,
					arrows: false,
					pagination: false,
					interval: 5000,
					pauseOnFocus: false,
					intersection: {
						inView: {
							autoplay: true,
						},
						outView: {
							autoplay: false,
						},
					},
				}}
				aria-label="mvfade"
				className="relative h-screen w-screen overflow-hidden"
			>
				<SplideSlide>
					<div className="aspect-video h-screen w-screen bg-swipe01 bg-cover bg-center bg-no-repeat "></div>
				</SplideSlide>
				<SplideSlide>
					<div className="aspect-video h-screen w-screen bg-swipe02 bg-cover bg-center bg-no-repeat"></div>
				</SplideSlide>
				<SplideSlide>
					<div className="aspect-video h-screen w-screen bg-swipe03 bg-cover bg-center bg-no-repeat"></div>
				</SplideSlide>
			</Splide>
			<div className="relative bottom-[368px] right-[-95%] hidden h-[224px] w-[40px] flex-col flex-wrap [writing-mode:vertical-rl] before:absolute before:bottom-[-64%] before:left-2/4 before:z-10 before:m-auto before:h-[4.53846em] before:w-1 before:bg-white  before:content-[''] md:flex">
				<div className="flex items-center justify-center gap-1 font-medium leading-none text-white ">
					<div className="flex items-center justify-center text-white">
						<span className="absolute bottom-0 left-2/4 ml-[-4px] h-0 w-[16px]  after:bg-white dark:bg-white dark:text-white">
							SCROLL
						</span>
					</div>
					<div className="absolute bottom-[-5%] left-2/4 ml-[-4px] size-[12px]"></div>
				</div>
			</div>
		</>
	);
}
