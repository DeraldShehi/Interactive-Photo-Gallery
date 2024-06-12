const scrollToSelectedImage = (selectedImage) => {
  const newSelectedImage = document.querySelector(
    `.image[id="${selectedImage}"]`
  );

  if (newSelectedImage?.parentElement) {
    newSelectedImage.parentElement.scrollTo({
      left: (newSelectedImage.offsetWidth + 16) * selectedImage,
      behavior: "smooth",
    });
  }
};

export default scrollToSelectedImage;
