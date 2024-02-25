export default function PostHeader({ title, en_title, productYear, role }) {
	return (
		<section className="py-[clamp(1.25rem,1rem_+_0.98vw,1.875rem)]">
			<h1 className="text-center text-5xl font-bold dark:text-white md:text-8xl">{en_title}</h1>
			{title && (
				<section className="pt-12 md:pt-16">
					<h2 className="text-center text-4xl font-bold dark:text-white">{title}</h2>
				</section>
			)}

			{productYear && (
				<p className="mr-6 text-5xl font-bold dark:text-white">{productYear.slice(0, 4)}</p>
			)}
			{role && <p className="text-5xl font-bold dark:text-white">{role}</p>}
		</section>
	);
}
