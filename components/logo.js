import Link from "next/link";

export default function Logo({ boxOn = false }) {
	return (
		<Link
			href="/"
			className={`text-5xl font-medium text-black dark:text-white  ${boxOn && "ml-6 inline-block"}`}
		>
			DO
		</Link>
	);
}
