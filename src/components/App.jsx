import Gallery from "./gallery/Gallery.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";

import sections from "../data/sections.json"

export default function App() {
	return (
		<>
			<h1>App</h1>
			<Sidebar></Sidebar>
			<Gallery sections={sections}></Gallery>
		</>
	);
}
