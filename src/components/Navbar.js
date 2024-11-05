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
    { 
      name: "Faculty",
      href: "/faculty",
      column: 1
    },
    {
      name: "Courses",
      href: "/courses",
      column: 1
    },
    {
      name: "About",
      href: "/about",
      column: 1
    },
    {
      name: "Contact",
      href: "/contact",
      column: 1
    },
    {
      name: "Gallery",
      href: "/gallery",
      column: 1
    },
    {
      name: "Research",
      href: "/research",
      column: 2
    },
    {
      name: "Publications",
      href: "/publications",
      column: 2
    },
    {
      name: "Labs",
      href: "/labs",
      column: 2
    },
    {
      name: "Projects",
      href: "/projects",
      column: 2
    },
    {
      name: "Events",
      href: "/events",
      column: 2
    }
  ]
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
      {name: "Student's Portal", href: "https://iiitdm.iweb.ltd/Account/LoginMVC", isExternal: true },
      {name: "Placement", href: "https://www.iiitdmj.ac.in/placement.iiitdmj.ac.in/", isExternal: true },
      {name: "Gymkhana", href: "/gymkhana", isExternal: false },
      {name: "Activities", href: "/activities", isExternal: false },
      {name: "Hostels", href: "/hostels", isExternal: false },
      {name: "Counselling", href: "/counselling", isExternal: false },
      {name: "Alumni Cell", href: "https://alumni.iiitdmj.ac.in/", isExternal: true },
      {name: "Students Mess", href: "https://www.iiitdmj.ac.in/mess.iiitdmj.ac.in/", isExternal: true },
    ],
  },
  {
    id: "08",
    name: "Facilities",
    link: [
      {name: "Primary Health Centre", href: "/primaryhealthcentre", isExternal: false },
      {name: "Computer Centre", href: "https://www.iiitdmj.ac.in/cc.iiitdmj.ac.in/", isExternal: true },
      {name: "Library", href: "http://web.iiitdmj.ac.in/library.html", isExternal: true },
      {name: "Bank & ATM", href: "https://www.iiitdmj.ac.in/downloads/Banking%20Facilities%20in%20PDPM.pdf", isExternal: true },
      {name: "Shops in Campus", href: "/shopsincampus", isExternal: false },
      {name: "Downloads", href: "/", isExternal: false },
    ],
  },
  {
    id: "09",
    name: "Research",
    href: "https://www.iiitdmj.ac.in/rspc.iiitdmj.ac.in/",
    link: [], 
  },
];
const AcademicDropdown = () => {
  return (
    <div className="academic-dropdown">
      {/* This is where you can customize the academic section */}
      <div className="dropdown-heading">Academic Programs</div>
      <ul>
        <li><a href="/undergraduate">Undergraduate Programs</a></li>
        <li><a href="/postgraduate">Postgraduate Programs</a></li>
        <li><a href="/phd">PhD Programs</a></li>
      </ul>

      <div className="dropdown-heading">Resources</div>
      <ul>
        <li><a href="/library">Library</a></li>
        <li><a href="/labs">Laboratories</a></li>
        <li><a href="/research">Research Centers</a></li>
      </ul>
    </div>
  );
};
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [isLogoHidden, setIsLogoHidden] = useState(false);
  const location = useLocation();
  const linkListRef = useRef(null);
  const [academicOpen, setAcademicOpen] = useState(false);

  const handleAcademicToggle = () => {
    setAcademicOpen(!academicOpen);
  };

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
    const handleScroll = () => {
      if (window.scrollY > 200 && window.innerWidth >= 768) {
        setIsSticky(true);
        setIsLogoHidden(true);
      } else {
        setIsSticky(false);
        setIsLogoHidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenuOnClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setOpenDropdowns([]);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative sm:py-6">
      <nav
        className={`${
          isSticky && window.innerWidth >= 1440
            ? "fixed top-0 z-50 bg-transparent backdrop-blur-md shadow-lg"
            : "relative"
        } w-full flex items-center justify-between sm:h-12 sm:py-1 md:justify-center transition-all duration-300`}
      >
        <div className="flex w-full items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div className="flex items-center justify-between w-full py-3 mr-8">
            <Link to="/" onClick={closeMenuOnClick}>
              <span className="sr-only">IIITDMJ</span>
              <img
                className={`${
                  isLogoHidden ? "w-0 opacity-0" : "w-48 opacity-100"
                } transition-all duration-300 ml-4`}
                src={Logo2}
                alt="logo"
              />
            </Link>
            <div
              className={`hidden [@media(min-width:1400px)]:flex flex-1 justify-center items-center ml-5 space-x-3 transition-all duration-300 ${
                isLogoHidden ? "space-x-8" : "space-x-3"
              }`}
              ref={linkListRef}
            > 
              {NavLink.map((item, index) => (
                <div key={index} className="relative group">
                  <button className="font-semibold flex items-center px-3 py-2 text-black hover:text-blue-600 focus:outline-none">
                    <a
                      href={item.href}
                      rel="noopener noreferrer"
                      className={"block no-underline text-black"}
                    >
                      {item.name}
                    </a>
                    {Array.isArray(item.link) && item.link.length > 0 && (
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
                    <ul
                      className={`absolute left-0 mt-0 bg-white text-black shadow-lg ${
                        item.name === "Academics" ? "grid grid-cols-2 gap-4" : ""
                      } hidden group-hover:block z-50 w-auto min-w-max`}
                    > 
                      {item.link.map((subItem, subIndex) => (
                        <Link
                          to={subItem.href}
                          className={`block no-underline ${
                            isActive(subItem.href)
                              ? "font-bold text-blue-600"
                              : "text-black"
                          }`}
                          key={subIndex}
                          onClick={closeMenuOnClick}
                        >
                          <li
                            className={`font-normal w-full hover:bg-blue-200 px-5 py-2 ${
                              item.name === "Academics"
                                ? `col-span-${subItem.column || 1}`
                                : ""
                            }`}
                          >
                            {subItem.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="text-black hover:text-blue-600 focus:outline-none md:hidden [@media(max-width:1399px)]:block [@media(min-width:1400px)]:hidden"
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

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-90 z-40 flex flex-col w-64 p-4 overflow-y-auto sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden [@media(max-width:1399px)]:block [@media(min-width:1400px)]:hidden"
          style={{ backgroundColor: "white" }}
        >
          <div className="flex justify-center mb-4">
            <Link to="/" className="w-28" onClick={closeMenuOnClick}>
              <span className="sr-only">IIITDMJ</span>
              <img className="w-full ml-4" src={Logo1} alt="logo" />
            </Link>
          </div>
          <div className="flex items-start">
            <ul className="space-y-1 flex-1">
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
                            ? "M6 18L18 6M6 6l12 12"
                            : "M4 6h16M4 12h16M4 18h16"
                        }
                      />
                    </svg>
                  </button>
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
