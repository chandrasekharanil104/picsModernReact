const ImageShow = (props) => {
	console.log("IMAGE SHOW", props);
	return (
		<div>
			<img alt={props.alt} src={props.src} />
		</div>
	);
};

export default ImageShow;
