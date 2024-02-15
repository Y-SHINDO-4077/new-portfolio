import styles from "../styles/scss/posts.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Posts({ posts }) {
	return (
        <div className={styles.gridContainer}>
			{posts.map(({ title, slug, eyecatch, en_title, role }) => (
				<article className={styles.post} key={slug}>
					<Link href={`/work/${slug}`}>
						<div className={styles.flexLayout}>
							<div className={styles.left}>
								<figure>
									<Image
                                        src={eyecatch.url}
                                        alt=""
                                        placeholder="blur"
                                        width="1152"
                                        height="768"
                                        blurDataURL={eyecatch.blurDataURL}
                                        sizes="(min-width: 1152px) 576px, 50vw"
                                        style={{
                                            width: "100%",
                                            height: "auto"
                                        }} />
								</figure>
							</div>
							<div className={styles.right}>
								<h2 className={styles.heading2}>{en_title}</h2>
								<h3 className={styles.heading3}>{title}</h3>
								<h4 className={styles.heading4}>{role}</h4>
							</div>
						</div>
					</Link>
				</article>
			))}
		</div>
    );
}
