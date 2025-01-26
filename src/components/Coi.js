import React from 'react';
import { Globe, Cpu, Rocket, Zap } from "lucide-react";

const FocusCard = ({
  title,
  icon: Icon,
  link,
  description = "IIITDMJ's annual flagship design workshop.",
  bgImage 
}) => (
  <a href={link} className="group block w-full">
    <div className="relative h-56 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 border border-gray-300 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Bottom Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg pointer-events-none"></div>

      {/* Overlay Text on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50"></div>

      {/* Description - Slides down from top */}
      <div className="absolute top-0 left-0 right-0 p-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-b from-black/80 to-transparent z-10">
        <p className="text-blue-50 text-sm">
          {description}
        </p>
      </div>

      {/* Bottom Content Container */}
      <div className="absolute bottom-3 left-3 z-10">
        <div className="flex items-center gap-2">
          <Icon className="w-8 h-8 text-blue-50 transition-colors" />
          <h1 className="font-bold text-blue-50 transition-colors text-lg">
            {title}
          </h1>
        </div>
        
        {/* Animated Underline */}
        <div className="h-[1px] w-0 group-hover:w-full bg-blue-600 transition-all duration-100 mt-1"></div>
      </div>

      {/* Arrow */}
      <div className="absolute bottom-4 right-0 translate-x-8 group-hover:-translate-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-blue-50"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  </a>
);

function Coi() {
  const focusAreas = [
    {
      title: 'DEW',
      icon: Globe,
      to: 'https://www.iiitdmj.ac.in/dew.iiitdmj.ac.in/Home.html',
      bgImage: `${process.env.REACT_APP_Backend}/public/WebsiteImages/Home/research.jpg`,
    },
    {
      title: 'Electronics & ICT',
      icon: Cpu,
      to: 'https://www.iiitdmj.ac.in/ict.iiitdmj.ac.in/',
      bgImage: `${process.env.REACT_APP_Backend}/public/WebsiteImages/Home/electronics.jpg`,
    },
    {
      title: 'Innovation',
      icon: Rocket,
      to: 'http://www.iiitdmj.ac.in/MIC.php',
      bgImage: `${process.env.REACT_APP_Backend}/public/WebsiteImages/Home/innovation.jpg`,
    },
    {
      title: 'Startup',
      icon: Zap,
      to: 'http://startup.iiitdmj.ac.in/',
      bgImage: `${process.env.REACT_APP_Backend}/public/WebsiteImages/Home/startup.jpg`,
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-gray-900">
          Centers Of{" "}
          <span className="text-blue-600 text-3xl">Excellence</span>
        </h1>
        <div className="w-20 h-0.5 bg-blue-600 mt-1"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {focusAreas.map((area) => (
          <FocusCard
            key={area.title}
            title={area.title}
            icon={area.icon}
            link={area.to}
            bgImage={area.bgImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Coi;