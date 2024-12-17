import { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [slides, setSlidesData] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_Server_Name}/carousel/carousels`);
        const data = await response.json();
        setSlidesData(
          data.map((item) => ({
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

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${slides[currentIndex].image_url})`,
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {slides[currentIndex].title}
        </h1>
        <p className="mt-2 text-lg md:text-2xl text-center max-w-[80%]">
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

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-40">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
