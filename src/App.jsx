import { useState } from "react";

import AddForm from "./AddForm.jsx";
import List from "./List.jsx";

export default function App() {
	const [studentList, setStudentList] = useState(["Haitham", "Maiko"]);
	function handleSubmit(newStudentList) {
		setStudentList(newStudentList);
	}
	return (
		<>
			<AddForm
				studentList={studentList}
				onSubmit={handleSubmit}
			></AddForm>
			<List students={studentList}></List>
		</>
	);
}
