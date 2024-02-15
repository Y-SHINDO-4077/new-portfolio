import styles from "styles/scss/post-categories.module.scss";
import Link from "next/link";

export default function PostCategories({ categories }) {
	return (
		<div className={styles.flexContainer}>
			<h3 className={styles.heading}>
				<span className="sr-only">Categories</span>
			</h3>
			<ul className={styles.list}>
				{categories.map(({ name, slug }) => (
					<li key={slug}>
						<Link href={`/work/category/${slug}`}>{name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
