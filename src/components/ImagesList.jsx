import LoadingIndicator from './LoadingIndicator'
// Should receive imagesForSelectedCategory and selectedImage as props
const ImagesList = (
  {
    imagesForTheSelectedCategory , selectedImage
  }
) => (
  <div className="images-list">
    {/* If there are no images for the category display a loading indicator */}
    {/* Use the LoadingIndicator component */}
    {/* Place it inside a div with the class "loading-container" */}
    {/* Otherwise, map over the imagesForTheSelectedCategory array */}
    {/* Create a div element for each image */}
    {/* Use the index as the key */}
    {/* Use the index as the id */}
    {/* Give the div the class "image" */}
    {/* If the index is equal to the selectedImage, add the class "selected" */}
    {/* Set the backgroundImage style property to the image's src */}
    {!imagesForTheSelectedCategory ? (
      <div className="loading-container">
        <LoadingIndicator />
      </div>
    ) : imagesForTheSelectedCategory.map((imageUrl,index)=> 
    (<div key={index} id={index} className={`image ${index === selectedImage ? "selected" : ""}`} style={{backgroundImage:`url("${imageUrl}")`}}/>))}
  </div>
);

export default ImagesList;
