import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Breaking News: Major Scientific Discovery",
    image: "https://picsum.photos/200/300",
    excerpt: "Scientists have made a groundbreaking discovery that could revolutionize our understanding of the universe.",
    date: "2024-10-11"
  },
  {
    id: 2,
    title: "Tech Giant Unveils New Product Line",
    image: "https://picsum.photos/200/300",
    excerpt: "A leading tech company has announced a new range of innovative products set to hit the market next month.",
    date: "2024-10-10"
  },
  {
    id: 3,
    title: "Global Climate Summit Reaches Historic Agreement",
    image: "https://picsum.photos/200/300",
    excerpt: "World leaders have come to a consensus on ambitious climate goals at the latest international summit.",
    date: "2024-10-09"
  },
  // Add more news items as needed
];

const NewsCard = ({ title, image, excerpt, date }) => (
  <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 border-b border-black border-opacity-10">
    <img src={image} alt={title} className="w-full h-40 sm:h-48 object-cover" />
    <div className="p-3 sm:p-4 text-left">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-base sm:text-lg font-semibold line-clamp-2 text-left">{title}</h3>
        <span className="text-xs sm:text-sm text-gray-500 ml-2 whitespace-nowrap">{new Date(date).toLocaleDateString()}</span>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-left">{excerpt}</p>
      <button className="bg-black text-white px-3 py-1 sm:px-4 sm:py-2 text-sm hover:bg-gray-800 transition-colors duration-300">
        Read More
      </button>
    </div>
  </div>
);

const NewsCarousel = () => {
  const [newsData, setNewsData] = useState([...newsItems, ...newsItems]);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          setNewsData(prev => [...prev, ...newsItems]);
        }
      }
    };

    const carousel = carouselRef.current;
    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
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
            <NewsCard {...item} />
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

export default NewsCarousel;