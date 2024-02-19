import Link from "next/link";
import Container from "components/container";
import Logo from "components/logo";

export default function Footer() {
	return (
		<footer className="bg-black pb-[24px] pt-[16px]">
			<Container>
				<div className="block items-center justify-between gap-8 text-center md:flex">
					<Logo />
					<ul className="mt-6 flex flex-col items-center justify-center gap-8 md:mt-0 md:flex-row">
						<li>
							<Link href="/me/" className="text-white">
								ME
							</Link>
						</li>
						<li>
							<Link href="/work/" className="text-white">
								WORKS
							</Link>
						</li>
						<li>
							<Link href="/other/" className="text-white">
								OTHER
							</Link>
						</li>
					</ul>
				</div>

				<p className="mt-12 text-center">
					<small className="text-sm text-white">©️ YUTARO SHINDO</small>
				</p>
			</Container>
		</footer>
	);
}
