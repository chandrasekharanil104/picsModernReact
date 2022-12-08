import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

const App = () => {
	const [images, setImages] = useState([]);

	const handleSubmit = async (term) => {
		const result = await searchImages(term);
		setImages(result);
	};

	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />{" "}
			{/* *CHILD TO PARENT COMMUNICATION*. Here we are passing handleSubmit as a prop to Search Bar component which is going to invoke a call when click happens in SearchBar component (which is a child.)*/}
			{/* NOTE!!! for custom component we can use any type of prop name we want. But for JSX tags like button there are only specific prop names likes onClick which are called event Handlers */}
			<ImageList images={images} />
		</div>
	);
};

export default App;
