import Link from "next/link";

export default function Logo({ boxOn = false }) {
	return (
		<Link
			href="/"
			className={`text-5xl font-medium text-white dark:text-white  ${boxOn && "ml-6 inline-block text-black"}`}
		>
			DO
		</Link>
	);
}
