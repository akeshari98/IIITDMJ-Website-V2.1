// import React, { useState, useEffect } from "react";
// import DesktopMenu from "./components/DesktopMenu";
// import MobMenu from "./components/MobMenu";
// import { Menus } from "./utils";
// import Logo from "../../resources/images/IIIT_logo.png";
// import './Navbar.css';
// import InstituteBanner from "../InstiLogo";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isBannerVisible, setIsBannerVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Sticky behavior only for desktop/tablet (width >= 768px)
//       if (window.scrollY > 200 && window.innerWidth >= 768) {
//         setIsSticky(true);
//         setIsBannerVisible(false);
//       } else {
//         // For mobile or when not scrolled enough, reset sticky state
//         setIsSticky(false);
//         setIsBannerVisible(true);
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="navbar w-full absolute">
//       {/* Institute Banner - Positioned above Navbar */}
//       <InstituteBanner isVisible={isBannerVisible} />

//       <header
//         className={`
//           h-20 text-[15px]
//           ${isSticky
//             ? "fixed top-0 z-10 bg-white shadow-lg py-10 transition-all duration-300 opacity-100 border-b border-b-2 border-blue-500"
//             : "relative w-full text-white opacity-100 transition-all duration-300 relative -top-10"
//           }
//           inset-0 flex-center
//         `}
//       >
//         <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
//           <div className="flex-center gap-x-3 relative">
//             <Link to="/">
//               {/* Conditionally render logo based on banner visibility */}
//               {!isBannerVisible && (
//                 <img
//                   className="w-48 opacity-100 transition-all duration-300 -ml-2"
//                   src={Logo}
//                   alt="logo"
//                 />
//               )}
//             </Link>
//           </div>

//           <ul className="gap-x-1 lg:flex-center hidden">
//             {Menus.map((menu) => (
//               <DesktopMenu menu={menu} key={menu.name} />
//             ))}
//           </ul>

//           <div className="flex-center gap-x-5">
//             <div className="lg:hidden">
//               <MobMenu
//                 Menus={Menus}
//                 logo={Logo}
//               />
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import DesktopMenu from "./components/DesktopMenu";
import MobMenu from "./components/MobMenu";
import { Menus } from "./utils";
import Logo from "../../resources/images/IIIT_logo.png";
import { Link } from "react-router-dom";
import './Navbar.css';
import InstituteBanner from "../InstiLogo";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && window.innerWidth >= 768) {
        
        setIsSticky(true);
        setIsBannerVisible(false);
        setIsAnimating(true);
      } else {
        setIsSticky(false);
        setIsBannerVisible(true);
        setIsAnimating(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar w-full absolute">
      <InstituteBanner isVisible={isBannerVisible} />
      
      <header
        className={`
          h-20 text-[15px]
          ${isSticky
            ? "fixed top-0 z-10 bg-white shadow-lg py-10 transition-all duration-300 opacity-100"
            : "relative w-full text-white opacity-100 transition-all duration-300 relative -top-10 z-10"
          }
          inset-0 flex-center
        `}
      >
        {/* Animated border element */}
        <div 
          className={`
            absolute bottom-0 left-1/2 h-0.5 bg-blue-500
            transition-all duration-700 ease-in-out
            ${isSticky ? 'animate-expand-border' : 'animate-contract-border'}
          `}
          onAnimationEnd={() => setIsAnimating(false)}
        />

        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 relative">
            <Link to="/">
              {!isBannerVisible && (
                <img
                  className="w-48 opacity-100 transition-all duration-300 -ml-2"
                  src={Logo}
                  alt="logo"
                />
              )}
            </Link>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="flex-center gap-x-5">
            <div className="lg:hidden">
              <MobMenu
                Menus={Menus}
                logo={Logo}
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;