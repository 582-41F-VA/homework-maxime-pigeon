export default function Card({ src, alt, title, price, description }) {
	return (
		<article>
			<img src={src} alt={alt} />
			<dl>
				<dt>Title</dt>
				<dd>{title}</dd>
				<dt>Price</dt>
				<dd>{price}</dd>
				<dt>Description</dt>
				<dd>{description}</dd>
			</dl>
		</article>
	);
}
