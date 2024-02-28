import Meta from "components/meta";
import Link from "next/link";
import Container from "components/container";

import Hero from "components/hero";
import { getAllPosts, getAllCategories } from "lib/api";
import Posts from "components/posts";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

export async function getStaticProps() {
	const posts = await getAllPosts();
	const categories = await getAllCategories();

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
			categories: categories,
		},
	};
}

export default function Work({ posts, categories }) {
	return (
		<div className="dark:bg-darkBaige">
			<Container>
				<Meta pageTitle="WORKS" pageDesc="実績" />
				<section className="relative py-20 dark:bg-darkBaige md:pt-16 ">
					<Hero title="WORKS" subtitle="ALL" />
					<ul className="my-16 flex flex-col items-center justify-center gap-4 sm:flex-wrap md:flex-row md:gap-8">
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
									className="flex size-full overflow-hidden bg-gradient-to-l from-black/50 from-50% to-0% bg-[length:200%_4px] bg-[bottom_0_left_200%] bg-repeat-x font-futura text-2xl transition-all duration-300 ease-linear hover:bg-[bottom_0_left_100%] dark:from-white/50  md:text-3xl"
								>
									{categories.name}{" "}
								</Link>
							</li>
						))}
					</ul>
					<Posts posts={posts} />
				</section>
			</Container>
		</div>
	);
}
