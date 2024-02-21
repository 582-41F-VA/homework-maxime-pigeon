import Section from "./Section.jsx";

export default function Gallery({sections}) {
	const sectionsMarkup = sections.map((section) => (
		<Section cards={section.cards}></Section>
	));
	return (
		<div>
			{sectionsMarkup}
		</div>
	);
}
