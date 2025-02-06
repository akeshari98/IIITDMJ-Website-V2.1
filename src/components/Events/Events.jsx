import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative min-w-[260px] md:min-w-[295px] h-[200px] rounded-xl overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.05),4px_4px_8px_rgba(0,0,0,0.1)] group bg-white"
  >
    <Link to={`/event/${event.id}`}>
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${event.cover_image})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-[0_2px_4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)]">
        <div className="text-center">
          <span className="block text-sm font-semibold text-gray-800">
            {format(new Date(event.date), 'MMM')}
          </span>
          <span className="block text-2xl font-bold text-gray-900">
            {format(new Date(event.date), 'd')}
          </span>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
          {event.name}
        </h3>
        <p className="text-white/80 text-sm line-clamp-2">
          {event.description}
        </p>
      </div>
    </Link>
  </motion.div>
);

const EventsSection = ({ events }) => {
  const scrollRef = React.useRef(null);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current && !isScrolling) {
      setIsScrolling(true);
      const scrollAmount = direction === 'left' ? -350 : 350;
      
      const isAtEnd = Math.abs(
        current.scrollLeft + current.offsetWidth - current.scrollWidth
      ) < 10;
      
      const isAtStart = current.scrollLeft <= 0;

      if (direction === 'right' && isAtEnd) {
        current.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === 'left' && isAtStart) {
        current.scrollTo({ left: current.scrollWidth - current.offsetWidth, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }

      // Reset scrolling state after animation
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  React.useEffect(() => {
    const { current } = scrollRef;
    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (current && !isScrolling) {
          const isAtEnd = Math.abs(
            current.scrollLeft + current.offsetWidth - current.scrollWidth
          ) < 10;

          if (isAtEnd) {
            current.scrollTo({ left: 0, behavior: 'auto' });
            // Small delay before continuing the scroll
            setTimeout(() => {
              current.scrollBy({ left: 350, behavior: 'smooth' });
            }, 50);
          } else {
            current.scrollBy({ left: 350, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    startAutoScroll();

    // Pause auto-scroll on hover
    const pauseScroll = () => clearInterval(interval);
    
    current?.addEventListener('mouseenter', pauseScroll);
    current?.addEventListener('mouseleave', startAutoScroll);

    return () => {
      clearInterval(interval);
      current?.removeEventListener('mouseenter', pauseScroll);
      current?.removeEventListener('mouseleave', startAutoScroll);
    };
  }, [isScrolling]);

  return (
    <div className="w-[90vw] bg-gray-100 py-16 px-8 rounded-lg shadow-lg mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Events Gallery</h2>
            <p className="text-gray-600 mt-2">Discover our recent and upcoming events</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              disabled={isScrolling}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              disabled={isScrolling}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          {events.map((event) => (
            <div key={event.id} className="snap-start">
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;