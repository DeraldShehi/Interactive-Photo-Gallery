import React, { useCallback, useEffect, useState } from "react";

import categories from "../constants/categories";
import getImagesForCategory from "../helpers/getImagesForCategory";
import scrollToSelectedImage from '../helpers/scrollToSelectedImage';
import useKeyDownEventHandler from '../hooks/useKeyDownEventHandler';
import CategorySelector from './CategorySelector'
import ImageSelector from './ImageSelector'
import ImagesList from './ImagesList'

const Gallery = () => {
  // Define state for selectedImage (the index of the selected image)
  // Set the initial value to undefined
  const [selectedImage, setSelectedImage]=useState()

  // Define state for selectedCategory (the index of the selected category)
  // Set the initial value to 2 (the index of the "Sunset" category)
  const [selectedCategory, setSelectedCategory]=useState(2)

  // Define state for imagesByCategory (the object that will store the images for each category)
  // Set the initial value to an empty object
  const [imagesByCategory, setImagesByCategory]=useState({})

  // Define the total number of categories
  // Set its value to 5
  const totalNumberOfCategories = 5

  // Define the total number of images for the selected category
  // Set its value to the length of the array of images for the selected category or 0
  const totalNumberOfImagesForTheSelectedCategory = imagesByCategory[selectedCategory]?.length || 0;

  // Define the selectPreviousCategory function
  // It should decrement the selectedCategory by 1
  const selectPreviousCategory = useCallback (() => {
    setSelectedCategory((currentSelectedCategory) => {
      if(currentSelectedCategory !==0){
        return currentSelectedCategory - 1;
      }
        return currentSelectedCategory;
    });
  },[])

  // Define the selectNextCategory function
  // It should increment the selectedCategory by 1
  const selectNextCategory = useCallback(() => {
    setSelectedCategory((currentNextCategory)=>{
      if (currentNextCategory !== totalNumberOfCategories - 1) {
        return currentNextCategory + 1
      }
      return currentNextCategory;
    });
  }, []);

  // Define the selectCategory function
  // It should update the selectedCategory with the index of the clicked category
  // It should get the id of the clicked category from the event object
  // It should convert the id to a number before updating the selectedCategory
  const selectCategory =(event)=>{
    const id = Number(event.target.id)
    setSelectedCategory(id);
  }

  // Define the selectPreviousImage function
  // It should decrement the selectedImage by 1
  const selectPreviousImage = useCallback(()=>{
    setSelectedImage((currentSelectedImage)=>{
      if (currentSelectedImage) {
       return currentSelectedImage - 1
      }
       return currentSelectedImage;
    })
  },[]);


  // Define the selectNextImage function
  // It should increment the selectedImage by 1
  const selectNextImage = useCallback(()=>{
    setSelectedImage((currentSelectedImage)=>{
      if (currentSelectedImage !== undefined && currentSelectedImage !== totalNumberOfImagesForTheSelectedCategory - 1) {
        return currentSelectedImage + 1
      }
      return currentSelectedImage;
    })
  },[totalNumberOfImagesForTheSelectedCategory]);

  // Define the handleKeyPress function
  // It should be a callback function so that it persists between renders
  // If it doesn't persist, the event listener will be removed and added on every render
  // It should call the selectNextImage function when the "ArrowRight" key is pressed
  // It should call the selectPreviousImage function when the "ArrowLeft" key is pressed
  // It should call the selectPreviousCategory function when the "ArrowUp" key is pressed
  // It should call the selectNextCategory function when the "ArrowDown" key is pressed
  const handleKeyPress = useCallback((event)=>{
    switch (event.key){
      case "ArrowRight" : {
        selectNextImage();
        break;
      }
      case "ArrowLeft" : {
        selectPreviousImage();
        break;
      }
      case "ArrowUp" : {
        selectPreviousCategory();
        break;
      }
      case "ArrowDown" : {
        selectNextCategory();
        break;
      }
      default :{
        break;
      }
    }
  },[selectNextImage, selectPreviousImage,selectPreviousCategory,selectNextCategory]);

  // Call the useKeyDownEventHandler custom hook
  // Pass the handleKeyPress function as an argument
  // This will add an event listener for the "keydown" event to the document
  // The event listener will call the handleKeyPress function when a key is pressed
  // The event listener will be removed when the component is unmounted
  useKeyDownEventHandler(handleKeyPress);

  useEffect(() => {
    if (!imagesByCategory[selectedCategory]?.length) {
      getImagesForCategory(
        categories[selectedCategory],
        (imagesForCategory) => {
          // Update the imagesByCategory object with the images for the selected category
          // The imagesForCategory argument is an array of images
          // Each image has an id and a src property
          // We only need the src property to display the images
          setImagesByCategory((currentImagesByCategory)=>({
            ...currentImagesByCategory,
            [selectedCategory]: imagesForCategory.map((image)=> image.src)
          }));
        }
      );
    }
  }, [imagesByCategory, selectedCategory]);

  useEffect(() => {
    // If there are images for the selected category
    // Set the selectedImage to 0
    // Otherwise, set the selectedImage to undefined
    if (imagesByCategory[selectedCategory]?.length) {
      setSelectedImage(0)
    }else{
      setSelectedImage(undefined)
    }
  }, [imagesByCategory,selectedCategory ]);

  useEffect(() => {
    // If the selectedImage is defined
    // Call the scrollToSelectedImage function
    // Pass the selectedImage as an argument
    // This will scroll the selected image into view
    // It will be called when the component mounts and when the selectedImage changes
    if (selectedImage !== undefined) {
      scrollToSelectedImage(selectedImage)
    }
  }, [selectedImage]);

  return (
    <div className="gallery-container">
      <h1 className="title">COLLECTIONS</h1>
      {/* Include the CategorySelector component */}
      {/* Pass the selected category */}
      {/* Pass the function to select a category */}
      {/* Pass the function to select the previous category */}
      {/* Pass the function to select the next category */}
      <CategorySelector selectedCategory={selectedCategory} selectCategory={selectCategory} selectPreviousCategory={selectPreviousCategory} selectNextCategory={selectNextCategory}/>
      <div className="gallery">
        {/* Include the ImagesList component */}
        {/* Pass the images for the selected category */}
        {/* Pass the selected image */}
        <ImagesList imagesForTheSelectedCategory={imagesByCategory[selectedCategory]} selectedImage={selectedImage}/>
        {/* Include the ImageSelector component */}
        {/* Pass the selected image */}
        {/* Pass the function to select the previous image */}
        {/* Pass the function to select the next image */}
        {/* Pass the total number of images for the selected category */}
        <ImageSelector selectedImage={selectedImage} selectPreviousImage={selectPreviousImage} selectNextImage={selectNextImage} totalNumberOfImagesForTheSelectedCategory={totalNumberOfImagesForTheSelectedCategory}/>
      </div>
    </div>
  );
};

export default Gallery;
