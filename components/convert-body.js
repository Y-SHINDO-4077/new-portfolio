import parse from "html-react-parser";
import Image from "next/image";
export default function ConvertBody({ contentHTML }) {
	const contentReact = parse(contentHTML, {
		replace: (node) => {
			if (node.name === "img") {
				const { src, alt, width, height } = node.attribs;
				return (
					<Image
						src={src}
						width={width}
						height={height}
						alt={alt}
						sizes="(min-width: 768px) 768px, 100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
						className="mt-8"
					/>
				);
			}
		},
	});
	return (
		<>
			<div className="mt-8 text-2xl md:text-4xl">{contentReact}</div>
		</>
	);
}
