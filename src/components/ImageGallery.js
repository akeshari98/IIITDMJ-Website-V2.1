import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ title, subTitle, photos = [] }) => {
  const [zoomToggle, setZoomToggle] = useState(false);
  const [zoomToggleImage, setZoomToggleImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 4;

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.querySelector("body").style.overflowY = "scroll";
      document.querySelector("body").style.overflowX = "hidden";
      document.querySelector("body").style.scrollBehavior = "smooth";
    };

    if (zoomToggle) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      handleBodyOverflow();
    }
  }, [zoomToggle]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + imagesToShow;
        return nextIndex >= photos.length ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, [photos.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!photos.length) {
    return (
      <div className="text-center p-4">
        <h2 className="text-xl font-semibold">{title || "Title"}</h2>
        <p className="text-gray-600">{subTitle || "Sub Title"}</p>
        <p className="mt-4">No images available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {zoomToggle && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setZoomToggle(false)}
        >
          <img
            src={zoomToggleImage}
            alt="Zoomed view"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}

      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold">{title || "Title"}</h2>
        <p className="text-gray-600">{subTitle || "Sub Title"}</p>
      </div>

      {/* Mobile view (single image slideshow) */}
      <div className="md:hidden relative">
        <div className="aspect-square">
          <img
            src={photos[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-lg"
            onClick={() => {
              setZoomToggle(true);
              setZoomToggleImage(photos[currentIndex]);
            }}
          />
        </div>
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={handlePrevious}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-1 mx-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={handleNext}
            className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-1 mx-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Desktop view (original grid layout) */}
      <div className="hidden md:flex flex-wrap gap-4 h-[200px]">
        {photos.slice(currentIndex, currentIndex + imagesToShow).map((photo, index) => (
          <div
            key={index}
            className="flex-1 min-w-[200px] h-full"
            style={{ flex: '1 1 200px' }}
          >
            <img
              src={photo}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg cursor-zoom-in 
                       scale-100 hover:scale-105 transition-all duration-200"
              onClick={() => {
                setZoomToggle(true);
                setZoomToggleImage(photo);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;