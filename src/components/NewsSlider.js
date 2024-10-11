import React from "react";
import { useState } from "react";

const newsData = [
  {
    id: 1,
    title: "Exciting News Item 1",
    description: "A brief description of the news item goes here...",
    imageUrl: "https://via.placeholder.com/800x400",
    date: "2 days ago",
  },
  {
    id: 2,
    title: "Exciting News Item 2",
    description: "Another piece of breaking news that should grab attention...",
    imageUrl: "https://via.placeholder.com/800x400",
    date: "1 week ago",
  },
  {
    id: 3,
    title: "Exciting News Item 3",
    description: "A third exciting news piece description here...",
    imageUrl: "https://via.placeholder.com/800x400",
    date: "3 weeks ago",
  },
];

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { imageUrl, title, description, date } = newsData[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto p-4">
      {/* News Image */}
      <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-10 left-10 text-white z-10">
        <h2 className="text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-lg">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm opacity-75">{date}</span>
          <a
            href="#"
            className="text-sm bg-white text-black px-4 py-2 rounded-md shadow hover:bg-gray-100 transition duration-300"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2 hover:bg-gray-100 transition duration-300"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full shadow p-2 hover:bg-gray-100 transition duration-300"
      >
        &#8250;
      </button>
    </div>
  );
};

export default NewsSlider;
