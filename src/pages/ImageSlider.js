import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../axios";
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [slides, setSlidesData] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axiosInstance.get('/carousel/carousels')

        // const data = await response.json();
        setSlidesData(
          response.data.map((item) => ({
            image_url: item.image_url,
            title: item.title,
            subtext: item.subtext,
            link: item.link,
          }))
        );
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };
    fetchSlides();
  }, []);

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setTimeout(() => setTransitioning(false), 200);
  };

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setTransitioning(false), 200);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (slides.length === 0) {
    return <div>No slides available</div>;
  }
  const urlBuilder = (url)=>{
    return  url;
  }
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
     <div
  className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
    transitioning ? "opacity-0" : "opacity-100"
  }`}
  style={{
    backgroundImage: `url(${urlBuilder(slides[currentIndex].image_url)})`,
    backgroundAttachment: "fixed", // Makes the background image static
    backgroundPosition: "center", // Ensures the image is centered
    backgroundSize: "cover", // Ensures the image covers the entire area
  }}
>
  <div className="absolute inset-0 bg-black opacity-30"></div>
</div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-10 absolute inset-0 bg-gradient-to-b from-black/60 to-transparent">
        <motion.h1
          className="text-3xl md:text-8xl font-bold text-center"
          style={{
            fontFamily: "Canela Deck Web, serif",
            fontStyle: "normal",
            fontWeight: "400",
            letterSpacing: "-0.1px",
            lineHeight: "1.15",
          }}
          initial={{ opacity: 0, y: 50 }} // Initial state: fully transparent and 50px down
          animate={{ opacity: 1, y: 0 }} // End state: fully visible and in normal position
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
          {slides[currentIndex].title}
        </motion.h1>
        <p
          className="mt-2 text-lg md:text-2xl text-center max-w-[80%]"
          style={{ letterSpacing: "-.1px", lineHeight: "1.5",fontWeight:'light' }}
        >
          {slides[currentIndex].subtext}
        </p>
        {slides[currentIndex].link && (
          <a
            href={slides[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-2 px-6 py-1 bg-opacity-20 backdrop-blur-lg rounded-md text-white text-lg transform transition-transform duration-300 ease-in-out hover:scale-105">
              See More
            </button>
          </a>
        )}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 backdrop-blur-lg text-white p-4 rounded-full focus:outline-none hover:bg-opacity-40"
        onClick={prevSlide}
      >
        &#10094;
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-20 backdrop-blur-lg text-white p-4 rounded-full focus:outline-none hover:bg-opacity-40"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      {/* 
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
