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
import Image from "next/legacy/image";
import { getPlaiceholder } from "plaiceholder";

export async function getStaticPaths() {
	const allSlugs = await getAllSlugs();
	return {
		paths: allSlugs.map(({ slug }) => `/work/${slug}`),
		fallback: false,
	};
}

export default function Posts({
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
	description,
	url_link,
}) {
	return (
		<div className="dark:bg-[#2C2C30]">
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

			<Meta
				pageTitle={title}
				pageDesc={description}
				pageImg={eyecatch.url}
				pageImgW={eyecatch.width}
				pageImgH={eyecatch.height}
			/>
			<article>
				<PostHeader title={title} en_title={en_title} productYear={productYear} role={role} />

				{url_link ? (
					<Container>
						<READMORE url={url} title="VIEW SITE" target></READMORE>
					</Container>
				) : (
					url && (
						<Container>
							<div className="mb-12 mt-8 text-right dark:text-white">
								<p className="text-sm md:text-2xl">↓以下のURLを検索して詳細をご覧ください</p>
								<p className="text-base md:text-3xl">{url}</p>
							</div>
						</Container>
					)
				)}

				<PostBody>
					<section className="py-12 md:py-16">
						<Container>
							<h3>
								<ConvertBody
									contentHTML={items01}
									className="mt-8 break-words font-futura !text-5xl dark:text-white md:mt-16"
								/>
							</h3>

							<ConvertBody
								contentHTML={content01}
								className="mt-8 break-words text-base !leading-loose dark:text-white md:!text-3xl [&>*]:font-noto [&>*]:text-2xl [&>*]:md:mt-16"
							/>
						</Container>
					</section>

					<section className="py-12 md:py-16">
						<Container>
							<h3 className="mt-4">
								<ConvertBody
									contentHTML={items02}
									className="break-words font-futura !text-5xl dark:text-white"
								/>
							</h3>

							<ConvertBody
								contentHTML={content02}
								className="mt-8 break-words text-base !leading-loose dark:!text-white md:!text-3xl [&>*]:font-noto [&>*]:text-2xl [&>*]:md:mt-16"
							/>
						</Container>
					</section>

					{items03 && content03 && (
						<section className="py-12 md:py-16">
							<Container>
								{items03 && (
									<h3 className="mt-4">
										<ConvertBody
											contentHTML={items03}
											className="mt-8 break-words font-futura !text-5xl dark:text-white md:mt-16"
										/>
									</h3>
								)}

								{content03 && (
									<ConvertBody
										contentHTML={content03}
										className="mt-8 break-words text-base !leading-loose dark:!text-white md:!text-3xl [&>*]:font-noto [&>*]:text-2xl [&>*]:md:mt-16"
									/>
								)}
							</Container>
						</section>
					)}

					{items04 && content04 && (
						<section className="py-12 md:py-16">
							<Container>
								{items04 && (
									<h3 className="mt-4">
										<ConvertBody
											contentHTML={items04}
											className="mt-8 break-words font-futura !text-5xl dark:!text-white md:mt-16"
										/>
									</h3>
								)}
								{content04 && (
									<ConvertBody
										contentHTML={content04}
										className="mt-8 break-words text-base !leading-loose dark:text-white md:!text-3xl [&>*]:font-noto [&>*]:text-2xl [&>*]:md:mt-16"
									/>
								)}
							</Container>
						</section>
					)}

					{eyecatch02.url && (
						<Container>
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
						</Container>
					)}
				</PostBody>
				<Container>
					<div className="mr-auto mt-6 flex w-fit items-center justify-start pb-16">
						<READMORE url="/work" title="BACK" />
					</div>
				</Container>
			</article>
		</div>
	);
}

export async function getStaticProps(context) {
	const slug = context.params.slug;
	const post = await getPostBySlug(slug);
	const eyecatch = post.eyecatch ?? eyecatchLocal;
	const { base64 } = await getPlaiceholder(eyecatch.url);
	eyecatch.blurDataURL = base64;
	const allSlugs = await getAllSlugs();
	const description = extractText(post.content01);
	return {
		props: {
			title: post.title,
			en_title: post.en_title,
			publish: post.publishDate,
			eyecatch: eyecatch,
			eyecatch02: post.eyecatch02 ? post.eyecatch02 : "",
			categories: post.categories,
			productYear: post.productYear,
			role: post.role,
			items01: post.items01,
			content01: post.content01,
			items02: post.items02,
			content02: post.content02,
			items03: post.items03 ? post.items03 : "",
			content03: post.content03 ? post.content03 : "",
			items04: post.items04 ? post.items04 : "",
			content04: post.content04 ? post.content04 : "",
			url: post.url ? post.url : "",
			description: description,
			url_link: post.url_link ? true : false,
		},
	};
}
