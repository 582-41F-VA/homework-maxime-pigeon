import { useState } from "react";

export default function AddForm({ onSubmit, studentList }) {
	const [studentName, setStudentName] = useState("");

	function handleChange(event) {
		setStudentName(event.target.value);
	}

	function handleClick(event) {
		event.preventDefault();
		const newStudentList = [...studentList, studentName];
		setStudentName("");
		onSubmit(newStudentList);
	}
	return (
		<form>
			<label>
				Add student
				<input
					type="text"
					onChange={handleChange}
					value={studentName}
				/>
			</label>
			<button onClick={handleClick}>Save</button>
		</form>
	);
}
