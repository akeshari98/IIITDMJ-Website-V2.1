import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsCardSkeleton = () => (
  <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
    <div className="bg-gray-300 h-48 sm:h-52"></div>
    <div className="p-5 space-y-4">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div className="h-10 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);

const NewsSliderSkeleton = () => {
  return (
    <div className="relative px-4">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="snap-start">
            <NewsCardSkeleton />
          </div>
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg z-10">
        <ChevronLeft className="w-6 h-6 text-gray-300" />
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg z-10">
        <ChevronRight className="w-6 h-6 text-gray-300" />
      </button>
    </div>
  );
};

export default NewsSliderSkeleton;