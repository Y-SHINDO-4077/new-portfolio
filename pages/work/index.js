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
					<Hero title="WORKS" subtitle="" />
					<ul>
						{categories.map((categories) => (
							<li key={categories.id}>
								<Link href={`/category/${categories.slug}`}>{categories.name}</Link>
							</li>
						))}
					</ul>
					<Posts posts={posts} />
				</section>
			</Container>
		</div>
	);
}
