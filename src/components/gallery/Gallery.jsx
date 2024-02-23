import Section from "./Section.jsx";

export default function Gallery({ sections }) {
	const sectionsMarkup = sections.map((section) => (
		<Section title={section.title} cards={section.cards}></Section>
	));
	return <div>{sectionsMarkup}</div>;
}
