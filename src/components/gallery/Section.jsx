import Card from "./Card.jsx";

export default function Section({ cards }) {
	const cardsMarkup = cards.map((card) => (
		<Card
			src={card.src}
			alt={card.alt}
			title={card.title}
			price={card.price}
			description={card.description}
		></Card>
	));
	return (
		<section>
			<h2>Section</h2>
			{cardsMarkup}
		</section>
	);
}
