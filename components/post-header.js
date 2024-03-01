import Container from "./container";

export default function PostHeader({ title, en_title, productYear, role }) {
	return (
		<section className="py-[clamp(1.25rem,1rem_+_0.98vw,1.875rem)]">
			<Container>
				<h1 className="text-center text-5xl font-bold dark:text-white md:text-8xl">{en_title}</h1>
				{title && (
					<section className="pt-12 md:pt-16">
						<h2 className="text-center text-3xl font-bold dark:text-white md:text-4xl">{title}</h2>
					</section>
				)}

				{productYear && (
					<p className="mt-16 text-right font-futura text-2xl font-bold dark:text-white md:text-3xl">
						{productYear.slice(0, 4)}
					</p>
				)}
				{role && (
					<p className="mt-2 text-right text-base font-bold tracking-widest dark:text-white md:text-2xl">
						{role}
					</p>
				)}
			</Container>
		</section>
	);
}
