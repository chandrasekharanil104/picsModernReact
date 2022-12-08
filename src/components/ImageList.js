import "./ImageList.css";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
	const renderedImages = images.map((image) => {
		return (
			<div key={image.id}>
				<ImageShow alt={image.alt_description} src={image.urls.small} />{" "}
				{/* Keys should always be added to the top most element in JSX */}
			</div>
		);
	});

	return <div className="image-list">ImageList: {renderedImages}</div>;
};

export default ImageList;
