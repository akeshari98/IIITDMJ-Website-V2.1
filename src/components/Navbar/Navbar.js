import React, { useState, useEffect } from "react";
import DesktopMenu from "./components/DesktopMenu";
import MobMenu from "./components/MobMenu";
import { Menus } from "./utils";
import Logo from "../../resources/images/IIIT_logo.png";
import './Navbar.css';
import InstituteBanner from "../InstiLogo";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky behavior only for desktop/tablet (width >= 768px)
      if (window.scrollY > 200 && window.innerWidth >= 768) {
        setIsSticky(true);
        setIsBannerVisible(false);
      } else {
        // For mobile or when not scrolled enough, reset sticky state
        setIsSticky(false);
        setIsBannerVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar w-full absolute">
      {/* Institute Banner - Positioned above Navbar */}
      <InstituteBanner isVisible={isBannerVisible} />

      <header
        className={`
          h-20 text-[15px]
          ${isSticky
            ? "fixed top-0 z-10 bg-white shadow-lg py-10 transition-all duration-300 opacity-100"
            : "relative w-full text-white opacity-100 top-12 transition-all duration-300 relative -top-6"
          }
          inset-0 flex-center
        `}
      >
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 relative">
            <a href="/">
              {/* Conditionally render logo based on banner visibility */}
              {!isBannerVisible && (
                <img
                  className="w-48 opacity-100 transition-all duration-300 -ml-2"
                  src={Logo}
                  alt="logo"
                />
              )}
            </a>
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