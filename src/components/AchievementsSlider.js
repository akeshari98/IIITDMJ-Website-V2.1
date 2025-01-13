import React, { useState, useEffect, useRef } from 'react';
import axiosInstance from '../axios'; // Importing the axios instance
import { ChevronLeft, ChevronRight,Clock, ExternalLink  } from 'lucide-react';
import newsPlaceHolder from "../resources/images/newsPlaceHolder.png"
import NewsSliderSkeleton from './Skeletons/NewsSkeleton';
// Helper function to build Cloudinary image URLs
// const buildImageUrl = (publicId) => {
//   const cloudName = "djy2jlthj";
//   return `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_600/${publicId}`;
// };

const AchievementsCard = ({ title, imagePublicId, excerpt, createdAt, link }) => {
  const imageUrl = imagePublicId ? imagePublicId : newsPlaceHolder;
  
  return (
    <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-100">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 sm:h-52 object-cover" />
        <div className="absolute top-0 right-0 bg-black bg-opacity-60 text-white text-xs px-3 py-1 m-3 rounded-full flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          {new Date(createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className="p-5 text-left h-56 flex flex-col justify-between">
        <div>
          <h3 className="text-lg  mb-3 line-clamp-2 text-gray-800 leading-snug">
            {title}
          </h3>
          <p
            className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Read More
            {/* <ExternalLink className="w-4 h-4" /> */}
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
  const [loading,setLoading] = useState(null);
    const [activeTab, setActiveTab] = useState('current');
  // Fetch news data using Axios
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/achievements/achievements', { params: { type: activeTab } }); // Fetching news data
        const newsItems = response.data.map(item => ({
          ...item,
          imagePublicId: item.image_url, // Assume the API returns 'image' as publicId
        }));
        setLoading(false)
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
        {loading?<NewsSliderSkeleton/>:newsData.map((item, index) => (
          <div key={`${item.id}-${index}`} className="snap-start px-2 py-4">
            <AchievementsCard {...item} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('left')}
        className="hidden md:block  absolute left-0 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 sm:p-2 shadow-md hover:bg-opacity-75 transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="hidden md:block absolute right-0 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 sm:p-2 shadow-md hover:bg-opacity-75 transition-all duration-300 z-10"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default AchievementsCarousel;

