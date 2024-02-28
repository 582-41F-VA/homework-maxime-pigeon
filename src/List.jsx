export default function List({ students }) {
	const studenList = students.map((s) => <li>{s}</li>);

	return <ul>{studenList}</ul>;
}
