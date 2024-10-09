import React, { useState, useEffect } from "react";
import ImageZoomView from "./ImageZoomView";
import Logo from "../images/user.png"; // Keep this for fallback or default image

const ImageGallery = ({ title, subTitle, photos = [] }) => {
  const [zoomToggle, setZoomToggle] = useState(false);
  const [zoomToggleImage, setZoomToggleImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0); // Current index for the images
  const imagesToShow = 4; // Number of images to display at a time

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
    // Change the index every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Calculate next index
        const nextIndex = prevIndex + imagesToShow;
        // Reset to the beginning if we've reached the end
        return nextIndex >= photos.length ? 0 : nextIndex;
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [photos.length]);

  return (
    <div>
      {zoomToggle && (
        <ImageZoomView
          img={zoomToggleImage}
          zoomToggle={zoomToggle}
          setZoomToggle={setZoomToggle}
        />
      )}
      <section className="text-gray-600 body-font ">
        <div className="px-5 py-10 mx-auto ">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-600 hover:underline underline-offset-2 cursor-pointer">
              {title || "Title"}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
              {subTitle || "Sub Title"}
            </p>
          </div>
          {/* Fixed size container for images */}
          <div className="flex flex-wrap border-2 rounded-md w-[80vw] h-[20vw] overflow-hidden"> {/* Set fixed height */}
            {photos.length > 0 ? (
              photos.slice(currentIndex, currentIndex + imagesToShow).map((photo, index) => (
                <div key={index} className="w-1/4 h-full p-3 flex justify-center items-center"> {/* Center images */}
                  <img
                    onClick={(e) => {
                      setZoomToggle(!zoomToggle);
                      setZoomToggleImage(photo);
                    }}
                    title="Click to zoom in"
                    alt={`gallery ${index + 1}`} // More descriptive alt text
                    className="scale-100 hover:scale-105 transition-all duration-200 w-full h-full object-cover object-center rounded-md cursor-zoom-in ease-linear" // Ensure images fill the container
                    src={photo}
                  />
                </div>
              ))
            ) : (
              <div className="w-full text-center py-4">No images available</div> // Fallback when no photos
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallery;