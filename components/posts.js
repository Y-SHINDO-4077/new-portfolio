import styles from "../styles/scss/posts.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Posts({ posts }) {
	return (
		<div>
			{posts.map(({ title, slug, eyecatch, en_title, role }) => (
				<article className="relative" key={slug}>
					<Link href={`/work/${slug}`} className="group">
						<div className="block items-center justify-center gap-[4%] md:flex">
							<div className="relative mx-auto mt-16 w-full md:static md:mt-0 md:w-[48%]">
								<figure className="block size-fit md:hidden md:group-hover:block">
									<Image
										src={eyecatch.url}
										alt=""
										placeholder="blur"
										blurDataURL={eyecatch.blurDataURL}
										layout="intrinsic"
										width={600}
										height={300}
										sizes="(min-width: 600px) 50vw, 600px"
										style={{
											maxHeight: "300px",
											objectFit: "cover",
											objectPosition: "center",
										}}
									/>
								</figure>
							</div>
							<div className="relative w-full border-b border-solid border-black py-[4rem] md:static md:w-[48%] dark:border-white">
								<h2 className="font-futura text-6xl">{en_title}</h2>
								<h3 className="mt-4 font-noto text-2xl">{title}</h3>
								<h4 className="mt-6 font-noto text-base">{role}</h4>
							</div>
						</div>
					</Link>
				</article>
			))}
		</div>
	);
}
