import SearchBar from "./components/SearchBar";

const App = () => {
	const handleSubmit = (term) => {
		console.log("This is the term you are searching for: ", term);
	};

	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />{" "}
			{/* *CHILD TO PARENT COMMUNICATION*. Here we are passing handleSubmit as a prop to Search Bar component which is going to invoke a call when click happens in SearchBar component (which is a child.)*/}
			{/* NOTE!!! for custom component we can use any type of prop name we want. But for JSX tags like button there are only specific prop names likes onClick which are called event Handlers */}
		</div>
	);
};

export default App;
