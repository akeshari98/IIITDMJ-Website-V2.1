import React from 'react';
import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";

function PageHeader({ image, title, breadCrumbs }) {
  // Animation Variants
  const titleAnimation = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const college_img1 = process.env.REACT_APP_Backend + "/public/websiteImages/3.jpg";
  return (
    <div>
      <div className="h-[50vh] relative">
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${image || college_img1})` }}
          role="img"
          aria-label="Background image for the page header"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            {/* Animated Title */}
            <motion.h1
              className="text-5xl text-white mb-5"
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
            >
              {title}
            </motion.h1>

            {/* Breadcrumb Navigation */}
            <nav className="flex text-sm items-center mb-4 text-white" role="navigation">
              <Link to="/">Home</Link>
              {breadCrumbs.map(({ crumb, link }, index) => (
                <div className="flex items-center" key={index}>
                  <ChevronRight size={16} className="mx-2" />
                  <Link to={link}>
                    <span>{crumb}</span>
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
