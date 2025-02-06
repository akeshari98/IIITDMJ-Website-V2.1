import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative min-w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg group"
  >
    <Link to={/event/${event.id}}>
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ 
          backgroundImage: url(${event.cover_image}),
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
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

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Events Gallary</h2>
            <p className="text-gray-600 mt-2">Discover our recent and upcoming events</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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