import { useState, useEffect } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [transitioning, setTransitioning] = useState(false); // for managing smooth transitions

  // Function to go to the previous slide
  const prevSlide = () => {
    setTransitioning(true); // Set transitioning to true
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
      setTransitioning(false); // Reset after transition
    }, 200); // Adjust timeout for transition duration
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setTransitioning(true); // Set transitioning to true
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setTransitioning(false); // Reset after transition
    }, 200); // Adjust timeout for transition duration
  };

  // Auto-slide logic: Change image every 5 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(autoSlide);
  }, [currentIndex]);

  // Parallax effect: Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Parallax Image with Tint and Smooth Transition */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          transitioning ? "opacity-0" : "opacity-100"
        }`} // Smooth transition effect
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
          transform: `translateY(${scrollY * 0.4}px)`, // Parallax effect (moves slower than scroll)
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Tint effect */}
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {slides[currentIndex].text.title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-center max-w-[80%]">
          {slides[currentIndex].text.description}
        </p>

        {/* Read More Button */}
        <a
          href={slides[currentIndex].readMoreUrl} // Linking to the readMoreUrl
          target="_blank" // Open in new tab
          rel="noopener noreferrer"
        >
          <button
  className="mt-6 px-6 py-1 bg-opacity-20 backdrop-blur-lg rounded-md text-white text-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
>
  Read More
</button>

        </a>
      </div>

      {/* Previous Button with transparency and blur */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 backdrop-blur-lg text-white p-4 rounded-full focus:outline-none hover:bg-opacity-40"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      {/* Next Button with transparency and blur */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 backdrop-blur-lg text-white p-4 rounded-full focus:outline-none hover:bg-opacity-40"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Dots */}
    </div>
  );
};

export default ImageSlider;
