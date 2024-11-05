import React, { useState, useEffect, useRef } from 'react';
import axiosInstance from '../axios'; // Importing the axios instance
import { ChevronLeft, ChevronRight } from 'lucide-react';
import newsPlaceHolder from "../resources/images/newsPlaceHolder.png"
// Helper function to build Cloudinary image URLs
const buildImageUrl = (publicId) => {
  const cloudName = "djy2jlthj";
  return `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_300/${publicId}`;
};

const AchievementsCard = ({ title, imagePublicId, excerpt, createdAt, link }) => {
  // Define a placeholder image URL
  // const newsPlaceholder = "https://example.com/path-to-placeholder-image.jpg";

  // Build the Cloudinary image URL or use the placeholder if no valid imagePublicId is passed
  const imageUrl = imagePublicId ? buildImageUrl(imagePublicId) : newsPlaceHolder;
  
  return (
    <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 border-b border-black border-opacity-10">
      <img src={imageUrl} alt={title} className="w-full h-40 sm:h-48 object-cover" />
      <div className="p-3 sm:p-4 text-left h-56 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-base sm:text-lg font-semibold line-clamp-2 text-left">{title}</h3>
            <span className="text-xs sm:text-sm text-gray-500 ml-2 whitespace-nowrap">
              {new Date(createdAt).toLocaleDateString()}
            </span>
          </div>
          {/* Rendering excerpt with strong tags using dangerouslySetInnerHTML */}
          <p
            className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-left"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 text-sm hover:bg-gray-800 transition-colors duration-300 "
            style={{
              width: 'fit-content',
              textDecoration: 'none', // Remove underline
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};



const AchievementsCarousel = () => {
  const [newsData, setNewsData] = useState([]);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Fetch news data using Axios
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get('/achievements/achievements'); // Fetching news data
        const newsItems = response.data.map(item => ({
          ...item,
          imagePublicId: item.image_url, // Assume the API returns 'image' as publicId
        }));
        setNewsData(newsItems);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    
    fetchNews();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative max-w-full">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {newsData.map((item, index) => (
          <div key={`${item.id}-${index}`} className="snap-start px-2 py-4">
            <AchievementsCard {...item} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 sm:p-2 shadow-md hover:bg-opacity-75 transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 sm:p-2 shadow-md hover:bg-opacity-75 transition-all duration-300 z-10"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default AchievementsCarousel;

