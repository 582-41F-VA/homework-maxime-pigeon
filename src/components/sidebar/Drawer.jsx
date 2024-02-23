export default function Drawer({name, children}) {
	return (
		<details style={{paddingLeft: "1rem "}}>
			<summary>{name}</summary>
			{children}
		</details>
	)
}