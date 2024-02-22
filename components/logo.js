import Link from "next/link";

export default function Logo({ boxOn = false, colorWhite = false }) {
	return (
		<Link
			href="/"
			className={`text-5xl font-medium  dark:text-white  ${boxOn && "ml-6 inline-block text-black"} ${colorWhite && "!text-white"}`}
		>
			DO
		</Link>
	);
}
