import React from 'react';
import { ArrowRight } from 'lucide-react';

const DirectorsMessage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Message from the Director
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      {/* Main Content Section */}
      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Director's Photo Column */}
        <div className="md:col-span-4 space-y-4">
          <div className="relative">
            <div className="aspect-[3/4] w-full">
              <img
                src="/api/placeholder/400/533"
                alt="Institute Director"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
              <h2 className="text-white text-xl font-semibold">Dr. Sarah Johnson</h2>
              <p className="text-gray-200 text-sm">Director, Institute of Technology</p>
            </div>
          </div>
          
          <button 
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit Profile
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Message Content Column */}
        <div className="md:col-span-8 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Dear Students, Faculty, and Visitors,
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              It gives me immense pleasure to welcome you to our institute, a center of excellence dedicated to nurturing talent and fostering innovation. Our journey began with a vision to create an educational environment that not only imparts knowledge but also shapes future leaders and innovators.
            </p>

            <p className="text-gray-600 leading-relaxed">
              In today's rapidly evolving technological landscape, we remain committed to providing cutting-edge education while maintaining our core values of academic excellence, research innovation, and ethical leadership. Our institute has consistently ranked among the top educational institutions, thanks to our distinguished faculty, state-of-the-art facilities, and most importantly, our brilliant students.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We believe in a holistic approach to education that goes beyond traditional classroom learning. Our curriculum is designed to encourage critical thinking, creativity, and practical problem-solving skills. Through various industry collaborations, research opportunities, and extracurricular activities, we ensure that our students are well-prepared for the challenges of the professional world.
            </p>

            <p className="text-gray-600 leading-relaxed">
              As we continue to grow and evolve, we remain focused on our mission to create responsible global citizens who can contribute meaningfully to society. I invite you to explore our website and learn more about the exciting opportunities that await you at our institute.
            </p>

            <div className="mt-8 space-y-2">
              <p className="text-gray-800 font-semibold">Best regards,</p>
              <p className="text-gray-800 font-semibold">Dr. Sarah Johnson</p>
              <p className="text-gray-600">Director</p>
              <p className="text-gray-600">Institute of Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage;