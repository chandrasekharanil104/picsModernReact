import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState("");

	const handleFormSubmit = (event) => {
		event.preventDefault();

		onSubmit(term);
	};

	const handleInputChange = (event) => {
		setTerm(event.target.value);
	};

	return (
		<div className="search-bar">
			<form onSubmit={handleFormSubmit}>
				<label>Enter Search Term: </label>
				<input value={term} onChange={handleInputChange} />{" "}
				{/* value prop in input forces the input to always display what was specified in the value and nothing else. */}
			</form>
		</div>
	);
};

export default SearchBar;

/* CHILD TO PARENT COMMUNICATION STEPS: 
    1. Declare a function in Parent component and pass it as a prop to Child Component.
    2. Usually it would be an event which would trigger the function passed down as prop. Consider click event for example. On click event onClick calls the handleClick function (callback function) which has the function passed as a prop by Parent Component.
    This is how CHILD to PARENT communication happens.


*/

/* Any time we wire up an event handler on plain JSX element, the event handler(call back function) receives the event object */
