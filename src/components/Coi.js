import React, { useRef } from "react";
import Lottie from "react-lottie";
import { SiApachenetbeanside, SiAmazonec2, SiApacheairflow, SiElectron } from 'react-icons/si';
import research from '../resources/Vectors/research.json';
import electronics from '../resources/Vectors/electronics.json';
import innovation from '../resources/Vectors/innovation.json';
import startup from '../resources/Vectors/startup.json';

const FocusCard = ({ title, link, animation }) => {
  const lottieRef = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <a 
      href={link} 
      className="block group"
      onMouseEnter={() => lottieRef.current?.play()} 
      onMouseLeave={() => {
        lottieRef.current?.stop();
        // lottieRef.current?.goToAndStop(0, true);
      }}
    >
      <div className="shadow-lg relative h-full p-8 flex flex-col items-center justify-center rounded-lg text-center bg-opacity-90 transition-all duration-300 hover:shadow-2xl overflow-hidden">
        <div className="w-26 h-26 cursor-pointer">
          <Lottie
            options={defaultOptions}
            height={100}
            width={100}
            isClickToPauseDisabled={true}
            ref={lottieRef}
          />
        </div>
        <h3 className="font-light text-lg text-black group-hover:text-blue-800 transition-colors duration-300 mt-4">
          {title}
        </h3>
      </div>
    </a>
  );
};

const FocusOn = () => {
  const focusAreas = [
    {
      title: 'RESEARCH',
      animation: research,
      to: 'https://www.iiitdmj.ac.in/dew.iiitdmj.ac.in/Home.html',
    },
    {
      title: 'ELECTRONICS & ICT',
      animation: electronics,
      to: 'https://www.iiitdmj.ac.in/ict.iiitdmj.ac.in/',
    },
    {
      title: 'INNOVATION',
      animation: innovation,
      to: 'http://www.iiitdmj.ac.in/MIC.php',
    },
    {
      title: 'STARTUP',
      animation: startup,
      to: 'http://startup.iiitdmj.ac.in/',
    }
  ];

  return (
    <div className="space-y-8 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl  font-medium text-gray-900">
            Centers Of{" "}
            <span className="text-3xl text-blue-600">Excellence</span>
          {/* <div className="w-full h-[1px] bg-blue-600 mt-1 mx-auto"></div> */}
          </h1>
        </div>
      </div>

      <div className="max-w-[82vw] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {focusAreas.map((area) => (
            <FocusCard
              key={area.title}
              title={area.title}
              link={area.to}
              animation={area.animation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FocusOn;