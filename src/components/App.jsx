import Gallery from "./gallery/Gallery.jsx";

import sections from "../data/sections.json"

export default function App() {
	return (
		<>
			<h1>App</h1>
			<Gallery sections={sections}></Gallery>
		</>
	);
}
