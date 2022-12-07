import axios from "axios";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: "Client-ID mpj1OlFmNz0frVlAVASCm8PDrsUC6p_mUtLK6OzKwqc",
		},
		params: {
			query: term,
		},
	});

	console.log(response.data.results);
	return response.data.results;
};

export default searchImages;
