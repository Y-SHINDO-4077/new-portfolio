export default function ContentBody({ Year, heading4, heading5 }) {
	return (
		<>
			<li>
				{Year && <h3 className="">{Year}</h3>}

				<h4 className="text-base md:text-2xl">{heading4}</h4>
			</li>
		</>
	);
}
