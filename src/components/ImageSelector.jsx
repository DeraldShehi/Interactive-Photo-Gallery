// It should receive selectedImage, selectPreviousImage,
// selectNextImage, and totalImages as props
const ImageSelector = (
  {
    selectedImage, selectPreviousImage,selectNextImage, totalNumberOfImagesForTheSelectedCategory
  }
) => (
  <div className="image-selector">
    <div className="selected-image-number">
      {/* Create a span element for the current image number */}
      {/* Give it the class "current" */}
      {/* Display the selectedImage + 1 */}
      {/* If there is no selectedImage, display 0 */}
      <span className="current">{selectedImage !== undefined ? selectedImage + 1 : 0 }</span>
      {/* Create a span element for the total number of images */}
      {/* Give it the class "total" */}
      {/* Display the totalImages */}
      <span className="total">/{totalNumberOfImagesForTheSelectedCategory}</span>
    </div>
    <div className="arrows">
      {/* Create a button element for the left arrow */}
      {/* Give it the classes "arrow" and "left-arrow" */}
      {/* Call the selectPreviousImage function on click */}
      {/* Display the text "←" */}
      <button className="arrow left-arrow" onClick={selectPreviousImage}>←</button>
      {/* Create a button element for the right arrow */}
      {/* Give it the classes "arrow" and "right-arrow" */}
      {/* Call the selectNextImage function on click */}
      {/* Display the text "→" */}
      <button className="arrow right-arrow" onClick={selectNextImage}>→</button>
    </div>
  </div>
);

export default ImageSelector;
