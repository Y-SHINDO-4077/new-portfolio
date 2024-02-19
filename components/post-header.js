export default function PostHeader({ title, en_title, productYear, role }) {
	return (
		<section className="py-[clamp(1.25rem,1rem_+_0.98vw,1.875rem)]">
			<h1 className="text-center text-5xl font-bold md:text-8xl">{en_title}</h1>
			<section>
				<h2 className="text-center text-4xl font-bold">{title}</h2>
			</section>

			{productYear && <p className="mr-6 text-5xl font-bold">{productYear.slice(0, 4)}</p>}
			{role && <p className="text-5xl font-bold">{role}</p>}
		</section>
	);
}
