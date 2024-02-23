import Drawer from "./Drawer.jsx";

export default function Sidebar() {
	return (
		<>
			<p>Sidebar</p>
			<Drawer name="Storage">
				<Drawer name="Bookcase">
					<a href="/">Brown</a>
					<a href="/">Black</a>
					<a href="/">Natural</a>
				</Drawer>
			</Drawer>
			<Drawer name="Beds"></Drawer>
		</>
	);
}
