import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../resources/images/IIIT_logo.png"; // Hamburger menu logo
import Logo2 from "../resources/images/IIIT_logo.png"; // Desktop view logo

const NavLink = [
  {
    id: "01",
    name: "Home",
    link: [{ "About": "/about" }],
  },
  {
    id: "02",
    name: "Administration",
    link: [
      { "Board of Governers": "/boardofgoverners" },
      { "Finance Committee": "/financecommittee" },
      { "General Administration": "/generaladministration" },
      { "Other Administration": "/otheradministration" },
      { "Senate": "/senate" },
      { "Building Works Committee": "/buildingworkscommittee" },
      { "Administrative Structure": "/administrativestructure" },
    ],
  },
  {
    id: "03",
    name: "Departments",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "04",
    name: "Academics",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "05",
    name: "Deans",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "06",
    name: "People",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "07",
    name: "Students",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "08",
    name: "Facilities",
    link: [
      { "Faculty": "/club" },
      { "Courses": "/courses" },
      { "About": "/about" },
      { "Contact": "/contact" },
      { "Gallery": "/" },
    ],
  },
  {
    id: "09",
    name: "Research",
    link: [], // Ensure this is an empty array
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const location = useLocation(); // For tracking active links
  const linkListRef = useRef(null); // Ref to measure link list width

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setOpenDropdowns([]);
    }
  };

  const handleDropdownClick = (index) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns(openDropdowns.filter((item) => item !== index));
    } else {
      setOpenDropdowns([...openDropdowns, index]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const linkListWidth = linkListRef.current ? linkListRef.current.scrollWidth : 0; // Total width of the link list
      const navbarWidth = linkListRef.current ? linkListRef.current.parentElement.offsetWidth : 0; // Width of the navbar container
  
      // Show hamburger menu if the link list width exceeds the available navbar width
      if (linkListWidth > navbarWidth) {
        setIsMenuOpen(true); // Show hamburger menu
      } else {
        setIsMenuOpen(false); // Hide hamburger menu if there is enough space
        setOpenDropdowns([]); // Close all dropdowns
      }
    };
  
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the correct state
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  const closeMenuOnClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setOpenDropdowns([]);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative sm:py-6 px-4 mx-auto lg:px-6">
      <nav className="relative flex items-center justify-between sm:h-12 sm:py-1 md:justify-center">
        <div className="flex lg:w-auto w-full items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full lg:w-auto py-3 mr-8">
            {/* Left-side logo for Desktop */}
            
            <Link to="/" className="w-48" onClick={closeMenuOnClick}> {/* Added margin right */}
              <span className="sr-only">IIITDMJ</span>
              <img className="w-48" src={Logo2} alt="logo" />
            </Link>

            {/* Right-side Links for Desktop */}
            <div className="hidden lg:flex flex-1 justify-center items-center ml-5 space-x-3" ref={linkListRef}> {/* Reduced space between links */}
              {NavLink.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="flex items-center px-3 py-2 text-black hover:text-blue-600 focus:outline-none">
                    {item.name}
                    {Array.isArray(item.link) && item.link.length > 0 && ( // Only render the SVG if there are sub-links
                      <svg
                        className="ml-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                  {Array.isArray(item.link) && item.link.length > 0 && (
                    <ul className="absolute left-0 mt-0 bg-white text-black shadow-lg hidden group-hover:block z-50 w-auto min-w-max">
                      {item.link.map((subItem, subIndex) => {
                        const subItemName = Object.keys(subItem)[0];
                        const subItemLink = subItem[subItemName];
                        return (
                          <li key={subIndex} className="w-full hover:bg-gray-200 px-5 py-2">
                            <Link
                              to={subItemLink}
                              className={`block no-underline ${isActive(subItemLink) ? "font-bold text-blue-600" : "text-black"}`}
                            >
                              {subItemName}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Hamburger Menu for Mobile View */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-opacity-90 z-40 md:hidden flex flex-col w-64 p-4 overflow-y-auto" style={{ backgroundColor: "white" }}>
          {/* Image above the list of links */}
          <div className="flex justify-center mb-4">
            <Link to="/" className="w-28" onClick={closeMenuOnClick}>
              <span className="sr-only">G-Campus</span>
              <img className="w-full" src={Logo1} alt="logo" />
            </Link>
          </div>
          <div className="flex items-start"> {/* Added this div to keep the logo and links together */}
            <ul className="space-y-1 flex-1"> {/* Flex to occupy remaining space */}
              {NavLink.map((item, index) => (
                <li key={index}>
                  <button
                    className="w-full text-left px-4 py-2 text-black hover:text-blue-600 focus:outline-none flex items-center justify-between font-semibold"
                    onClick={() => handleDropdownClick(index)}
                  >
                    {item.name}
                    <svg
                      className="ml-1 h-4 w-4 inline"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={openDropdowns.includes(index) ? "M19 15l-7-7-7 7" : "M5 9l7 7 7-7"}
                      />
                    </svg>
                  </button>
                  {openDropdowns.includes(index) && (
                    <ul className="bg-white text-black mt-0 rounded-b-lg shadow-none">
                      {item.link.map((subItem, subIndex) => {
                        const subItemName = Object.keys(subItem)[0];
                        const subItemLink = subItem[subItemName];
                        return (
                          <li key={subIndex} className="hover:bg-gray-200 px-4 py-1">
                            <Link
                              to={subItemLink}
                              className={`block no-underline ${isActive(subItemLink) ? "font-bold text-blue-600" : "text-black"}`}
                            >
                              {subItemName}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
