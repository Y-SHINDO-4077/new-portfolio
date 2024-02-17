export default function Container({ children, large = false }) {
	return (
		<div className={`m-auto w-[92%] max-w-[75rem] ${large ? "!size-full !max-w-fit" : ""}`}>
			{children}
		</div>
	);
}
