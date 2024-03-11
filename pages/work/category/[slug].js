import Meta from "components/meta";
import Container from "components/container";
import Link from "next/link";

import Hero from "components/hero";
import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Posts from "components/posts";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export async function getStaticPaths() {
	const allCats = await getAllCategories();
	return {
		paths: allCats.map(({ slug }) => `/work/category/${slug}`),
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const catSlug = context.params.slug;
	const allCats = await getAllCategories();
	const cat = allCats.find(({ slug }) => slug === catSlug);

	const posts = await getAllPostsByCategory(cat.id);

	for (const post of posts) {
		if (!post.hasOwnProperty("eyecatch")) {
			post.eyecatch = eyecatchLocal;
		}
		const { base64 } = await getPlaiceholder(post.eyecatch.url);
		post.eyecatch.blurDataURL = base64;
	}

	return {
		props: {
			posts: posts,
			categories: allCats,
			name: cat.name,
			ja_name: cat.ja_name,
		},
	};
}

export default function Work({ name, posts, categories, ja_name }) {
	const dialog = useRef();
	const openHandler = () => {
		dialog.current.showModal();
		dialog.current.overScrollBehavor = "contain";
		document.body.style.top = `${window.scrollY * -1}px`;
		document.body.style.overflowY = "hidden";
		document.body.style.position = "fixed";
		document.body.style.width = "100%";
		document.body.style.height = "auto";
	};
	const closeHandler = () => {
		dialog.current.close();
		const { top } = document.body.style;
		document.body.style.overflowY = "auto";
		document.body.style.position = "";
		document.body.style.top = "";
		document.body.style.height = "";

		window.scrollTo(0, parseInt(window.scrollY || "0", 10) * -1);
	};
	const filterButton = useRef();
	const workArea = useRef();
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const mq = window.matchMedia("(max-width: 768px)");

		const handleResize = () => {
			if (mq.matches && filterButton.current && workArea.current) {
				gsap.to(filterButton.current, {
					scrollTrigger: {
						trigger: workArea.current,
						start: "bottom bottom",
						toggleActions: "play none none reverse",
						scrub: true,
						onEnter: () => {
							gsap.to(filterButton.current, { opacity: 0, display: "none", duration: 0.5 });
						},
						onLeave: () => {
							gsap.to(filterButton.current, { opacity: 1, display: "flex", duration: 0.5 });
						},
						onEnterBack: () => {
							gsap.to(filterButton.current, { opacity: 0, display: "none", duration: 0.5 });
						},
						onLeaveBack: () => {
							gsap.to(filterButton.current, { opacity: 1, display: "flex", duration: 0.5 });
						},
					},
				});
			} else {
				ScrollTrigger.refresh();
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<button
				id="showModal"
				className="fixed bottom-0 left-0 z-10 inline-flex h-8 w-screen items-center justify-center bg-beige py-8 text-2xl font-bold underline dark:bg-black dark:text-white md:hidden"
				onClick={openHandler}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
				ref={filterButton}
			>
				カテゴリで絞り込む
			</button>
			<div className="dark:bg-darkBaige" ref={workArea}>
				<Container>
					<Meta pageTitle={`${name} 実績カテゴリ | WORKS | DO`} pageDesc={`実績カテゴリ${name}`} />
					<section className="relative py-20 dark:bg-darkBaige md:pt-16 ">
						<Hero title="WORKS" subtitle={`${name}`} />
						<p className="mt-8 text-center text-sm dark:text-white md:text-base">{ja_name}</p>

						<dialog
							id="modal"
							className="relative px-12 text-center text-sm dark:bg-black md:hidden"
							ref={dialog}
							onClick={closeHandler}
						>
							<button
								className="absolute right-4 top-4 text-3xl font-bold dark:text-white"
								onClick={closeHandler}
							>
								<span>×</span>
							</button>
							<div
								onClick={(e) => {
									e.stopPropagation();
								}}
							>
								<span
									className="block pt-14 text-2xl font-bold  dark:text-white md:text-3xl"
									id="modal-modal-title"
								>
									カテゴリで絞り込む
								</span>
								<ul
									className="my-12 flex flex-col items-center justify-center gap-4 sm:flex-wrap md:flex-row md:gap-8"
									id="modal-description"
								>
									<li>
										<Link
											href="/work/"
											className="flex size-full overflow-hidden bg-gradient-to-l from-black/50 from-50% to-0% bg-[length:200%_4px] bg-[bottom_0_left_200%] bg-repeat-x font-futura text-2xl transition-all duration-300 ease-linear hover:bg-[bottom_0_left_100%] dark:from-white/50  dark:text-white md:text-3xl"
										>
											ALL
										</Link>
									</li>
									{categories.map((categories) => (
										<li key={categories.id}>
											<Link
												href={`/work/category/${categories.slug}`}
												className="flex size-full overflow-hidden bg-gradient-to-l from-black/50 from-50% to-0% bg-[length:200%_4px] bg-[bottom_0_left_200%] bg-repeat-x font-futura text-2xl transition-all duration-300 ease-linear hover:bg-[bottom_0_left_100%] dark:from-white/50  dark:text-white md:text-3xl"
											>
												{categories.name}{" "}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</dialog>
						<ul className="my-16  hidden items-center justify-center gap-4 sm:flex-wrap md:flex md:flex-row md:gap-8">
							<li>
								<Link
									href="/work/"
									className="flex size-full overflow-hidden bg-gradient-to-l from-black/50 from-50% to-0% bg-[length:200%_4px] bg-[bottom_0_left_200%] bg-repeat-x font-futura text-2xl transition-all duration-300 ease-linear hover:bg-[bottom_0_left_100%] dark:from-white/50  dark:text-white md:text-3xl"
								>
									ALL
								</Link>
							</li>
							{categories.map((categories) => (
								<li key={categories.id}>
									<Link
										href={`/work/category/${categories.slug}`}
										className="flex size-full overflow-hidden bg-gradient-to-l from-black/50 from-50% to-0% bg-[length:200%_4px] bg-[bottom_0_left_200%] bg-repeat-x font-futura text-2xl transition-all duration-300 ease-linear hover:bg-[bottom_0_left_100%] dark:from-white/50  dark:text-white md:text-3xl"
									>
										{categories.name}{" "}
									</Link>
								</li>
							))}
						</ul>
						{posts.length === 0 ? (
							<div className="text-center">
								<p>記事がありません。</p>
							</div>
						) : (
							<Posts posts={posts} />
						)}
					</section>
				</Container>
			</div>
		</>
	);
}
