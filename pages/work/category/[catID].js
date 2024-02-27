import Meta from "components/meta";
import Container from "components/container";
import Link from "next/link";

import Hero from "components/hero";
import { getAllCategories, getAllPostsByCategory } from "lib/api";
import Posts from "components/posts";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

export async function getStaticPaths() {
	const data = await getAllCategories();
	const paths = data.map((post) => ({
		params: { catID: post.slug },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps(post) {
	const posts = await getAllPostsByCategory(post.slug);
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
