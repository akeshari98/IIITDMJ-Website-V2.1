import React, { useState, useEffect, useRef } from 'react';
import axiosInstance from '../../axios';
import { ChevronLeft, ChevronRight, Clock, ExternalLink } from 'lucide-react';
import newsPlaceHolder from "../../resources/images/newsPlaceHolder.png";

const buildImageUrl = (publicId) => {
  const cloudName = "djy2jlthj";
  return `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_600/${publicId}`;
};

const NewsCard = ({ title, imagePublicId, excerpt, createdAt, link }) => {
  const imageUrl = imagePublicId ? buildImageUrl(imagePublicId) : newsPlaceHolder;
  
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

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([]);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isPaused && carouselRef.current) {
        const container = carouselRef.current;
        const isAtEnd = container.scrollLeft >= (container.scrollWidth - container.clientWidth);
        
        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get('/news/news');
        const newsItems = response.data.map(item => ({
          ...item,
          imagePublicId: item.image_url,
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
    setIsPaused(true);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 1000);
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
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <div className="relative px-4">
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing py-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => setIsPaused(true)}
        // onMouseLeave={() => setIsPaused(false)}
      >
        {newsData.map((item, index) => (
          <div key={`${item.id}-${index}`} className="snap-start">
            <NewsCard {...item} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default NewsCarousel;