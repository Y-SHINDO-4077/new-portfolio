import Meta from "components/meta";
import Container from "components/container";
import Link from "next/link";

import Hero from "components/hero";
import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Posts from "components/posts";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

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

	console.log(posts);

	return {
		props: {
			posts: posts,
			categories: allCats,
			name: cat.name,
		},
	};
}

export default function Work({ name, posts, categories }) {
	return (
		<div className="dark:bg-darkBaige">
			<Container>
				<Meta pageTitle={`${name} 実績カテゴリ | WORKS | DO`} pageDesc={`実績カテゴリ${name}`} />
				<section className="relative py-20 dark:bg-darkBaige md:pt-16 ">
					<Hero title="WORKS" subtitle={`${name}`} />
					<ul className="my-12 flex flex-col items-center justify-center gap-4 sm:flex-wrap md:gap-8">
						<li>
							<Link
								href="/work/"
								className="flex size-full overflow-hidden bg-gradient-to-l from-black/50 from-50% to-0% bg-[length:200%_4px] bg-[bottom_0_left_200%] bg-repeat-x font-futura text-2xl transition-all duration-300 ease-linear hover:bg-[bottom_0_left_100%] dark:from-white/50  md:text-3xl"
							>
								ALL
							</Link>
						</li>
						{categories.map((categories) => (
							<li key={categories.id}>
								<Link
									href={`/work/category/${categories.slug}`}
									className="flex size-full overflow-hidden bg-gradient-to-l from-black/50 from-50% to-0% bg-[length:200%_4px] bg-[bottom_0_left_200%] bg-repeat-x font-futura text-2xl transition-all duration-300 ease-linear hover:bg-[bottom_0_left_100%]  dark:from-white/50  md:text-3xl"
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
	);
}
