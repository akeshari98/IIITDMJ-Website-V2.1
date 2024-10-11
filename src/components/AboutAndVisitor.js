import React, { useState, useEffect } from 'react';

// DirectorCard Component
const DirectorCard = ({ title, content, media, buttons }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3">
      <div className="p-6 bg-pink-50 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-left">
            {title.split(' ').map((word, index) => (
              <span key={index} className={index === title.split(' ').length - 1 ? "text-red-600" : ""}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <div className="w-12 h-1 bg-red-600 mb-4"></div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex flex-col justify-between mr-10">
              <div>
                <h3 className="font-bold text-lg mb-2">Prof. Rangan Banerjee</h3>
                <p className="text-gray-700 text-sm">
                  {content.slice(0, 150)}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
              <img
                src={media}
                alt="Director"
                className="rounded-lg w-full h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-4">
          {buttons.map((button, index) => (
            <button 
              key={index}
              className={`px-4 py-2 ${
                button.primary 
                  ? "bg-red-600 text-white hover:bg-red-700" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              } transition-colors duration-300`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// InfoCard Component (for non-director content)
const InfoCard = ({ title, content, buttons, media, isVideo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (media.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % media.length);
      }, 5000); // Change image every 5 seconds
      return () => clearInterval(interval);
    }
  }, [media]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-2/3">
      <div className="p-6 h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-left">
            {title.split(' ').map((word, index) => (
              <span key={index} className={index === title.split(' ').length - 1 ? "text-red-600" : ""}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <div className="w-12 h-1 bg-red-600 mb-4"></div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
              <p className="text-gray-700 mb-4 text-left">{content}</p>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              {isVideo ? (
                <div className="relative w-full" style={{paddingBottom: "56.25%"}}>
                  <iframe 
                    src="/api/placeholder/560/315" 
                    className="absolute top-0 left-0 w-full h-full" 
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                    title="IIT Delhi video"
                  ></iframe>
                </div>
              ) : (
                <img
                  src={media[currentImageIndex]}
                  alt={`IIT Delhi ${currentImageIndex + 1}`}
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-4">
          {buttons.map((button, index) => (
            <button 
              key={index}
              className={`px-4 py-2 ${
                button.primary 
                  ? "bg-red-600 text-white hover:bg-red-700" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
              } transition-colors duration-300`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component to render both DirectorCard and InfoCard
const IITDelhiInfoCards = () => {
  const dummyData = [
    {
      title: "ABOUT IIT DELHI",
      content: "Indian Institute of Technology Delhi is one of the Twenty Three IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India. Established as College of Engineering in 1961, the Institute was later declared as an Institution of... ",
      buttons: [
        { text: "Read more", primary: false },
        { text: "Newsletter", primary: true }
      ],
      media: [
        "https://picsum.photos/400/300?random=1",
        "https://picsum.photos/400/300?random=2",
        "https://picsum.photos/400/300?random=3"
      ],
      isVideo: false,
      isDirector: false
    },
    {
      title: "DIRECTOR'S CORNER",
      content: "Prof. Rangan Banerjee has taken over the charge as Director, Indian Institute of Technology Delhi (IIT Delhi) with effect from the forenoon of 15th February, 2022. He brings with him a wealth of experience and a vision for enhancing the institute's global standing and research impact.",
      buttons: [{ text: "Read more", primary: false }],
      media: "https://picsum.photos/200/300?random=4",
      isVideo: false,
      isDirector: true
    }
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {dummyData.map((card, index) => 
            card.isDirector ? (
              <DirectorCard 
                key={index}
                title={card.title}
                content={card.content}
                media={card.media}
                buttons={card.buttons}
              />
            ) : (
              <InfoCard 
                key={index}
                title={card.title}
                content={card.content}
                media={card.media}
                buttons={card.buttons}
                isVideo={card.isVideo}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default IITDelhiInfoCards;
