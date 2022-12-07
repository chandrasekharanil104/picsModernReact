import App from "../App";

const SearchBar = ({ onSubmit }) => {
	const handleClick = () => {
		onSubmit("cars");
	};

	return (
		<div>
			<input />
			<button onClick={handleClick}>Search</button>{" "}
			{/* *CHILD TO PARENT COMMUNICATION when the click happens onClick event is going to call handleClick function which inturn calls onSubmit function(which is a prop passed from APP.js) onSubmit then calls handleSubmit and invokes it which is specified in APP.js* */}
		</div>
	);
};

export default SearchBar;

/* CHILD TO PARENT COMMUNICATION STEPS: 
    1. Declare a function in Parent component and pass it as a prop to Child Component.
    2. Usually it would be an event which would trigger the function passed down as prop. Consider click event for example. On click event onClick calls the handleClick function (callback function) which has the function passed as a prop by Parent Component.
    This is how CHILD to PARENT communication happens.


*/
