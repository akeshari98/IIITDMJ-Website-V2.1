import React from 'react';
import { motion } from 'framer-motion';

const FocusOn = () => {
  const cards = [
    {
      title: "Research",
      description: "Explore groundbreaking research initiatives and discoveries done on IIITDM Jabalpur",
      link: "https://www.iiitdmj.ac.in/rspc.iiitdmj.ac.in/",
      bgImage: `${process.env.REACT_APP_Backend}/public/WebsiteImages/Home/research.jpg`,
    },
    {
      title: "Electronics and ICT",
      description: "The Ministry of Electronics and Information Technology (MeitY), Government of India has instituted Electronics and ICT Academies in the year 2015. The academy at PDPM IIITDM Jabalpur aims at scalable training programmes in niche areas of Electronics and ICT for the development of the required knowledge base, skills and tools.",
      link: "https://www.iiitdmj.ac.in/ict.iiitdmj.ac.in/",
      bgImage: `${process.env.REACT_APP_Backend}/public/WebsiteImages/Home/electronics.jpg`,
    },
    {
      title: "Innovation",
      description: "An Institute Innovation Council (IIC) has been established at IITDM Jabalpur as per the norms and directives of Ministry of Human Resource Development (MHRD) Innovation Cell (MIC). Ministry of Human Resource Development, Govt. of India has established MIC at AICTE with a purpose to systematically foster the culture of Innovation in all Higher Education Institutions (HEIs) across the country.",
      link: "http://www.iiitdmj.ac.in/MIC.php",
      bgImage: `${process.env.REACT_APP_Backend}/public/WebsiteImages/Home/innovation.jpg`,
    },
    {
      title: "Startup",
      description: "Supporting next-generation entrepreneurs and visionaries under the guidance of esteemed faculties and industry experts, IIITDMJ forsters a vibrant startup culture",
      link: "http://startup.iiitdmj.ac.in/",
      bgImage: `${process.env.REACT_APP_Backend}/public/WebsiteImages/Home/startup.jpg`,
    }
  ];

  return (
    <div className="w-full overflow-x-auto md:overflow-x-visible">
      <div className="flex flex-row md:flex-row space-x-0 min-w-max md:min-w-0">
        {cards.map((card, index) => (
          <motion.a 
            key={index}
            href={card.link}
            className="relative w-64 h-96 flex-shrink-0 md:w-1/4 group overflow-visible font-sans"
            whileHover="hover"
            initial="initial"
            variants={{
              initial: { zIndex: 1, scale: 1 },
              hover: { zIndex: 10, scale: 1.01 }
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card.bgImage})`
              }}
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.01 }
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="absolute inset-0 bg-black"
                variants={{
                  initial: { opacity: 0.4 },
                  hover: { opacity: 0.7 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <div className="relative p-4 h-full flex flex-col justify-between">
              <div>
                <div className="relative">
                  <motion.h3 
                    className="text-white text-[30px] font-light tracking-wide leading-tight"
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-white"
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <motion.p
                  className="text-white mt-4 text-sm font-light leading-relaxed tracking-wide"
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {card.description}
                </motion.p>
              </div>

              <motion.span 
                className="text-white text-base font-light tracking-wider uppercase"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  hover: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Explore →
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default FocusOn;