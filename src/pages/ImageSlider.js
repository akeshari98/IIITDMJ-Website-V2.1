import { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide logic: Change image every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(autoSlide);
  }, [currentIndex]); // The effect runs whenever the currentIndex changes

  return (
    <div className="relative mt-5 md:px-2 max-w-[90%] mx-auto">
      <div className="w-full h-[40vw] overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full rounded-lg transition-transform duration-500"
        />
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
