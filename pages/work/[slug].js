import { getPostBySlug, getAllSlugs } from "lib/api";
import { extractText } from "lib/extract-text";
import Meta from "components/meta";
import Link from "next/link";
import Container from "components/container";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";
import READMORE from "components/readmore";

import ConvertBody from "components/convert-body";

import { eyecatchLocal } from "lib/constants";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { prevNextPost } from "lib/prev-next-post";
import Pagination from "components/pagination";
import PostCategories from "components/post-categories";

import styles from "../../styles/scss/work_single.module.scss";

export async function getStaticPaths() {
	const allSlugs = await getAllSlugs();
	return {
		paths: allSlugs.map(({ slug }) => `/work/${slug}`),
		fallback: false,
	};
}

export default function Schedule({
	title,
	publish,
	en_title,
	eyecatch,
	eyecatch02,
	categories,
	productYear,
	role,
	items01,
	content01,
	items02,
	content02,
	items03,
	content03,
	items04,
	content04,
	url,
	prevPost,
	nextPost,
	description,
}) {
	return (
		<>
			<figure className="pt-16">
				<Image
					key={eyecatch.url}
					src={eyecatch.url}
					alt=""
					width={eyecatch.width}
					height={eyecatch.height}
					priority
					placeholder="blur"
					blurDataURL={eyecatch.blurDataURL}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
						objectFit: "cover",
					}}
				/>
			</figure>
			<Container>
				<Meta
					pageTitle={title}
					pageDesc={description}
					pageImg={eyecatch.url}
					pageImgW={eyecatch.width}
					pageImgH={eyecatch.height}
				/>
				<article>
					<PostHeader title={title} en_title={en_title} />
					{url && (
						<div className="mb-12 mt-8 text-right text-2xl">
							<p className={styles.url_caution}>↓以下のURLを検索して詳細をご覧ください</p>
							<p className="text-2xl md:text-3xl">{url}</p>
						</div>
					)}

					<PostBody>
						<section className="p-12 md:p-16">
							<h3>
								<ConvertBody
									contentHTML={items01}
									className="mt-8 font-futura !text-5xl md:mt-16"
								/>
							</h3>

							<ConvertBody
								contentHTML={content01}
								className="mt-8 !leading-loose md:!text-3xl [&>*]:font-noto [&>*]:text-2xl [&>*]:md:mt-16"
							/>
						</section>

						<section className="p-12 md:p-16">
							<h3 className="mt-4">
								<ConvertBody contentHTML={items02} className="font-futura !text-5xl" />
							</h3>

							<ConvertBody
								contentHTML={content02}
								className="mt-8 !leading-loose md:!text-3xl [&>*]:font-noto [&>*]:text-2xl [&>*]:md:mt-16 "
							/>
						</section>

						{items03 && content03 && (
							<section className="p-12 md:p-16">
								{items03 && (
									<h3 className="mt-4">
										<ConvertBody
											contentHTML={items03}
											className="mt-8 font-futura !text-5xl md:mt-16"
										/>
									</h3>
								)}

								{content03 && (
									<ConvertBody
										contentHTML={content03}
										className="mt-8 !leading-loose md:!text-3xl [&>*]:font-noto [&>*]:text-2xl [&>*]:md:mt-16 "
									/>
								)}
							</section>
						)}

						{items04 && content04 && (
							<section className="p-12 md:p-16">
								{items04 && (
									<h3 className="mt-4">
										<ConvertBody
											contentHTML={items04}
											className="mt-8 font-futura !text-5xl md:mt-16"
										/>
									</h3>
								)}
								{content04 && (
									<ConvertBody
										contentHTML={content04}
										className="mt-8 !leading-loose md:!text-3xl [&>*]:font-noto [&>*]:text-2xl [&>*]:md:mt-16 "
									/>
								)}
							</section>
						)}

						<figure>
							<Image
								key={eyecatch02.url}
								src={eyecatch02.url}
								alt=""
								width={eyecatch02.width}
								height={eyecatch02.height}
								priority
								sizes="100%"
								style={{
									width: "100%",
									height: "auto",
									objectFit: "cover",
								}}
							/>
						</figure>
					</PostBody>

					{/* <PostCategories categories={categories} /> */}

					{/* <Pagination
            prevText={prevPost.title}
            prevUrl={`/work/${prevPost.slug}`}
            nextText={nextPost.title}
            nextUrl={`/work/${nextPost.slug}`}
            /> */}
					<div className="mb-8 mr-auto mt-6 flex w-fit items-center justify-start md:mb-16">
						<READMORE url="/work" title="BACK" />
					</div>
				</article>
			</Container>
		</>
	);
}

export async function getStaticProps(context) {
	const slug = context.params.slug;
	const post = await getPostBySlug(slug);
	//const description = extractText(post.content)
	const eyecatch = post.eyecatch ?? eyecatchLocal;
	const { base64 } = await getPlaiceholder(eyecatch.url);
	eyecatch.blurDataURL = base64;

	const allSlugs = await getAllSlugs();
	const [prevPost, nextPost] = prevNextPost(allSlugs, slug);
	const description = extractText(post.content01);
	return {
		props: {
			title: post.title,
			en_title: post.en_title,
			publish: post.publishDate,
			// content: post.content,
			eyecatch: eyecatch,
			eyecatch02: post.eyecatch02 ? post.eyecatch02 : "",
			categories: post.categories,
			productYear: post.productYear,
			role: post.role,
			items01: post.items01,
			content01: post.content01,
			items02: post.items02,
			content02: post.content02,
			items03: post.items03,
			content03: post.content03,
			items04: post.items04 ? post.items04 : "",
			content04: post.content04 ? post.content04 : "",
			url: post.url ? post.url : "",
			description: description,
			prevPost: prevPost,
			nextPost: nextPost,
		},
	};
}
