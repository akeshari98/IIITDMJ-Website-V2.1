import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../resources/images/IIIT_logo.png"; // Hamburger menu logo
import Logo2 from "../resources/images/IIIT_logo.png"; // Desktop view logo
import TranslateButton from "./Gtranslate";
const NavLink = [
  {
    id: "01",
    name: "Home",
    href: "/",
    link: [{name: "About", href: "/about", isExternal: false }],
  },
  {
    id: "02",
    name: "Administration",
    link: [
      {name: "Board of Governers", href: "/boardofgoverners", isExternal: false },
      {name: "Finance Committee", href: "/financecommittee", isExternal: false },
      {name: "General Administration", href: "/generaladministration", isExternal: false },
      {name: "Other Administration", href: "/otheradministration", isExternal: false },
      {name: "Senate", href: "/senate", isExternal: false },
      {name: "Building Works Committee", href: "/buildingworkscommittee", isExternal: false },
      {name: "Administrative Structure", href: "/administrativestructure", isExternal: false },
    ],
  },
  {
    id: "03",
    name: "Departments",
    link: [
      {name: "Computer Science & Engineering (CSE)", href: "http://cse.iiitdmj.ac.in/", isExternal: true },
      {name: "Electronics & Communication Engineering (ECE)", href: "https://www.iiitdmj.ac.in/ece.iiitdmj.ac.in/", isExternal: true },
      {name: "Design (Des)", href: "http://design.iiitdmj.ac.in/", isExternal: true },
      {name: "Mechanical Engineering (ME)", href: "https://www.iiitdmj.ac.in/me.iiitdmj.ac.in/", isExternal: true },
      {name: "Natural Sciences (NS)", href: "https://www.iiitdmj.ac.in/ns.iiitdmj.ac.in/", isExternal: true },
      {name: "Liberal Arts (LA)", href: "https://www.iiitdmj.ac.in/la.iiitdmj.ac.in/", isExternal: true },
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
      {name: "Dean Academics", href: "/deanacademics", isExternal: false },
      {name: "Dean Students", href: "/deanstudents", isExternal: false },
      {name: "Dean RSPC", href: "/", isExternal: false },
      {name: "Dean P&D", href: "/", isExternal: false },
    ],
  },
  {
    id: "06",
    name: "People",
    link: [
      {name: "Faculty", href: "http://faculty.iiitdmj.ac.in/", isExternal:true },
      {name: "Research Staff", href: "/researchstaff", isExternal:false },
      {name: "Office Administration", href: "/officeadministration", isExternal:false },
      {name: "Staff", href: "/staff", isExternal:false },
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
    href: "https://www.iiitdmj.ac.in/rspc.iiitdmj.ac.in/",
    link: [], 
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
      const linkListWidth = linkListRef.current
        ? linkListRef.current.scrollWidth
        : 0; // Total width of the link list
      const navbarWidth = linkListRef.current
        ? linkListRef.current.parentElement.offsetWidth
        : 0; // Width of the navbar container

      // Show hamburger menu if the link list width exceeds the available navbar width
      if (linkListWidth> navbarWidth) {
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
        <div className="flex  w-full items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full  py-3 mr-8">
            {/* Left-side logo for Desktop */}

            <Link to="/" className="w-48" onClick={closeMenuOnClick}>
              {" "}
              {/* Added margin right */}
              <span className="sr-only">IIITDMJ</span>
              <img className="w-48" src={Logo2} alt="logo" />
            </Link>

            {/* Right-side Links for Desktop */}
            <div
              className="hidden [@media(min-width:1400px)]:flex flex-1 justify-center items-center ml-5 space-x-3"
              ref={linkListRef}
            >
              {" "}
              {/* Reduced space between links */}
              {NavLink.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="font-semibold flex items-center px-3 py-2 text-black hover:text-blue-600 focus:outline-none">
                  <a
                      href={item.href}
                      rel="noopener noreferrer"
                      className={"block no-underline text-black"}
                      key={index}
                    >
                      {item.name}
                    </a>
                    {Array.isArray(item.link) &&
                      item.link.length > 0 && ( // Only render the SVG if there are sub-links
                        <svg
                          className="ml-1 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                  </button>
                  {Array.isArray(item.link) && item.link.length > 0 && (
                    <ul className="absolute left-0 mt-0 bg-white text-black shadow-lg hidden group-hover:block z-50 w-auto min-w-max">
                      {item.link.map((subItem, subIndex) => {
  return subItem.isExternal ? (
    <a
      href={subItem.href}
      rel="noopener noreferrer"
      className={`block no-underline ${
        isActive(subItem.href) ? "font-bold text-blue-600" : "text-black"
      }`}
      key={subIndex}
    >
      <li className="font-normal w-full hover:bg-blue-200 px-5 py-2">
        {subItem.name}
      </li>
    </a>
  ) : (
    <Link
      to={subItem.href}
      className={`block no-underline ${
        isActive(subItem.href) ? "font-bold text-blue-600" : "text-black"
      }`}
      key={subIndex}
      onClick={closeMenuOnClick}
    >
      <li className="font-normal w-full hover:bg-blue-200 px-5 py-2">
        {subItem.name}
      </li>
    </Link>
  );
})}

                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Hamburger Menu for Mobile View */}
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-blue-600 focus:outline-none
      md:hidden [@media(max-width:1399px)]:block [@media(min-width:1400px)]:hidden"
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
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-90 z-40 flex flex-col w-64 p-4 overflow-y-auto 
        sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden
        [@media(max-width:1399px)]:block [@media(min-width:1400px)]:hidden"
          style={{ backgroundColor: "white" }}
        >
          {/* Image above the list of links */}
          <div className="flex justify-center mb-4">
            <Link to="/" className="w-28" onClick={closeMenuOnClick}>
              <span className="sr-only">IIITDMJ</span>
              <img className="w-full" src={Logo1} alt="logo" />
            </Link>
          </div>
          <div className="flex items-start">
            {" "}
            {/* Added this div to keep the logo and links together */}
            <ul className="space-y-1 flex-1">
              {" "}
              {/* Flex to occupy remaining space */}
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
                        d={
                          openDropdowns.includes(index)
                            ? "M19 15l-7-7-7 7"
                            : "M5 9l7 7 7-7"
                        }
                      />
                    </svg>
                  </button>
                  {openDropdowns.includes(index) && (
                    <ul className="bg-white text-black mt-0 rounded-b-lg shadow-none">
                      {item.link.map((subItem, subIndex) => {
                        const subItemName = Object.keys(subItem)[0];
                        const subItemLink = subItem[subItemName];
                        return (
                          
                            <Link
                              to={subItemLink}
                              className={`block no-underline ${
                                isActive(subItemLink)
                                  ? "font-bold text-blue-600"
                                  : "text-black"
                              }`}
                              onClick={closeMenuOnClick}
                            >
                              <li
                            key={subIndex}
                            className="font-normal hover:bg-blue-200 px-4 py-1"
                          >{subItemName}</li>
                              
                            </Link>
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