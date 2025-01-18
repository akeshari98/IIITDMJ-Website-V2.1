import React from 'react';
import { Globe, Cpu, Rocket, Zap } from "lucide-react";

const FocusCard = ({ title, icon: Icon, link, bgImage }) => (
    <a href={link} className="block aspect-square">
      <div className="relative md:min-w-[240px] group overflow-hidden rounded-lg border border-gray-300">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 transition-transform duration-100 group-hover:scale-110">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-opacity duration-100 "
      style={{ 
      //   backgroundImage: `url(${bgImage})`,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    />
  </div>
  
        
        {/* Content */}
        <div className="relative h-full p-6 flex flex-col items-center justify-center text-center space-y-4 bg-opacity-90  to-transparent  transition-all duration-100">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-gray-600 group-hover:bg-blue-50 transition-all duration-100">
            <Icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-100" />
          </div>
          
          <h3 className="font-medium text-lg text-gray-600 group-hover:text-[#2563EB] transition-colors duration-100">
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
function Coi() {
    const focusAreas = [
        { title: 'DEW', icon: Globe, to: 'https://www.iiitdmj.ac.in/dew.iiitdmj.ac.in/Home.html' },
        { title: 'EC & ICT', icon: Cpu, to: 'https://www.iiitdmj.ac.in/ict.iiitdmj.ac.in/' },
        { title: 'Innovation', icon: Rocket, to: 'http://www.iiitdmj.ac.in/MIC.php' },
        { title: 'Startup', icon: Zap, to: 'http://startup.iiitdmj.ac.in/' }
    ];
    return (
        <div className="space-y-8 p-4">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col text-center">
              <h1 className="text-3xl font-medium text-gray-900">
                Center Of {" "}
                <span className="text-3xl text-blue-600">Excillence</span>
              </h1>
              <div className="w-72 h-0.5 bg-blue-600 mt-1 ml-auto mr-auto"></div>
            </div>
          </div>
    
          {/* Grid */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
        </div>
      );
    };
    
    export default Coi;