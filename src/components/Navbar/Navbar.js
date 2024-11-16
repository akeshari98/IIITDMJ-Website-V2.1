import React, { useState, useEffect } from "react";
import DesktopMenu from "./components/DesktopMenu";
import MobMenu from "./components/MobMenu";
import { Menus } from "./utils";
import Logo from "../../resources/images/IIIT_logo.png";
import './Navbar.css'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 && window.innerWidth >= 768) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar w-full">
      <header 
        className={`h-20 text-[15px] ${
          isSticky
            ? "fixed top-0 z-10 bg-white backdrop-blur-md shadow-lg py-10"
            : "relative w-full"
        } inset-0 flex-center transition-all duration-300`}
      >
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 relative">
            <a href="/">
              <img
                className="w-48 opacity-100 transition-all duration-300 -ml-2"
                src={Logo}
                alt="logo"
              />
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