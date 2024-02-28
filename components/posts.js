import Link from "next/link";
import Image from "next/legacy/image";

export default function Posts({ posts }) {
	return (
		<>
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
							<div className="relative w-full border-b border-solid border-black py-[4rem] dark:border-white md:static md:w-[48%]">
								<h2 className="break-words font-futura text-4xl dark:text-white md:text-6xl">
									{en_title}
								</h2>
								<h3 className="mt-4 font-noto text-2xl dark:text-white">{title}</h3>
								<h4 className="mt-6 font-noto text-base dark:text-white">{role}</h4>
							</div>
						</div>
					</Link>
				</article>
			))}
		</>
	);
}
