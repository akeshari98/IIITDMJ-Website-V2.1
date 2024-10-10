import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import Logo2 from "../resources/images/Logo2.svg";
import Logo1 from "../resources/images/IIIT_logo.png";
import Logo2 from "../resources/images/IIIT_logo.png";

function Navbar({ NavLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDetail, setOpenDetail] = useState(null); // State to track which detail is open
  const [isMoreOpen, setIsMoreOpen] = useState(false); // State to track if "More" is open
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    document.querySelector("body").style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.querySelector("body").style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleMouseEnterDetail = (index) => {
    setOpenDetail(index);
  };

  const handleMouseLeaveDetail = () => {
    setOpenDetail(null);
  };

  const handleToggleMore = () => {
    setIsMoreOpen((prev) => !prev);
  };

  const closeMenuOnClick = () => {
    setIsMenuOpen(false);
    setIsMoreOpen(false); // Close "More" dropdown when clicked on mobile
  };

  return ( 
    <div className="px-4 mx-auto lg:px-6 ">
      <div className="relative sm:py-6 ">
        <nav className="relative flex items-center justify-between sm:h-12 sm:py-5 md:justify-center" aria-label="Global">
          <div className="flex lg:w-auto w-full items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full lg:w-auto py-5 mr-8">
              <Link to="/" className="w-48" onClick={closeMenuOnClick}>
                <span className="sr-only">G-Campus</span>
                <img className="w-full" src={Logo2} alt="logo" />
              </Link>

              {/* Mobile menu toggle button */}
              <button
                className="lg:hidden p-2 text-gray-500 hover:text-blue-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>

              {/* Mobile view */}
              {isMenuOpen && (
                <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform bg-white shadow-lg">
                  <div className="py-4 flex justify-center items-center flex-col">
                    <Link to="/" className="w-28" onClick={closeMenuOnClick}>
                      <span className="sr-only">G-Campus</span>
                      <img className="w-full" src={Logo1} alt="logo" />
                    </Link>
                    <hr className="w-[90%] my-5" />
                    <div className="list-none flex justify-center items-start flex-col mt-5">
                      {NavLink.map((navlink, i) => {
                        if (navlink.name === "More") {
                          return (
                            <div
                              key={i}
                              className="mx-4 relative"
                              onClick={handleToggleMore} // Toggle More on click
                            >
                              <div className="flex justify-center items-center gap-2 cursor-pointer">
                                <span className="text-center leading-loose text-gray-200 hover:text-blue-500">
                                  More
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="currentColor"
                                  className="bi bi-chevron-down"
                                  viewBox="0 0 12 12"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                  />
                                </svg>
                              </div>
                              {isMoreOpen && (
                                <div className="top-5 -left-10 absolute z-50 min-w-[160px] min-h-[10vh] bg-gray-50 shadow-sm border border-slate-200 rounded-lg mt-3 p-2">
                                  <ul>
                                    {navlink.link.map((val, i) => {
                                      for (const key in val) {
                                        if (Object.hasOwnProperty.call(val, key)) {
                                          return (
                                            <li key={i} onClick={closeMenuOnClick}>
                                              <Link
                                                to={val[key]}
                                                className={path === val[key]
                                                  ? "no-underline mx-4 text-base font-bold pb-2 list-none text-blue-600 "
                                                  : "no-underline mx-4 text-center pb-2 leading-loose text-gray-500 hover:text-blue-600"}
                                              >
                                                {key}
                                              </Link>
                                            </li>
                                          );
                                        }
                                      }
                                    })}
                                  </ul>
                                </div>
                              )}
                            </div>
                          );
                        } else if (navlink.name !== "Research") {
                          return (
                            <details
                              key={i}
                              className="mx-4 relative"
                              onClick={() => !handleMouseEnterDetail(i)}
                              // onMouseEnter={() => handleMouseEnterDetail(i)}
                              // onMouseLeave={handleMouseLeaveDetail}
                              // open={openDetail === i}
                            >
                              <summary className="flex justify-start items-center gap-2 cursor-pointer">
                                <span className="text-left leading-loose text-gray-500 hover:text-blue-500">
                                  {navlink.name}
                                </span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="12"
                                  height="12"
                                  fill="currentColor"
                                  className="bi bi-chevron-down"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                  />
                                </svg>
                              </summary>

                              <div className="relative left-0 top-full z-50 inline-block min-w-[160px] min-h-[10vh] bg-gray-10 shadow-sm border border-slate-200 rounded-lg">
                                <ul>
                                  {navlink.link.map((val, i) => {
                                    return (
                                      <li key={i}>
                                        {Object.keys(val).map((key) => (
                                          <Link
                                            to={val[key]}
                                            className={
                                              path === val[key]
                                                ? "no-underline mx-4 text-base font-bold pb-2 list-none text-blue-600"
                                                : "no-underline mx-4 text-left pb-2 leading-loose text-gray-500 hover:text-blue-600"
                                            }
                                          >
                                            {key}
                                          </Link>
                                        ))}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>

                            </details>
                          );
                        } else {
                          return (
                            <li key={i}>
                              <Link
                                to={navlink.link}
                                className={path === navlink.link
                                  ? "no-underline mx-4 text-base font-bold pb-2 list-none hover:text-blue-600 text-blue-600"
                                  : "no-underline mx-4 text-center pb-2 leading-loose text-gray-500 hover:text-blue-600"}
                              >
                                {navlink.name}
                              </Link>
                            </li>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden lg:flex flex-1 justify-center items-center ">
            <div className="ml-20 flex space-x-10 p-10">
              {NavLink.map((navlink, i) => {
                if (navlink.name === "More") {
                  return (
                    <div
                      key={i}
                      className="relative"
                      onMouseEnter={handleToggleMore}
                      onMouseLeave={handleToggleMore}
                    >
                      <button className="flex items-center pb-4 text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-transform duration-200">
                        More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="ml-1 bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </button>
                      {isMoreOpen && (
                        <div className="absolute top-8 left-0 z-50 bg-white border border-gray-300 rounded-lg shadow-lg py-2 w-40">
                          <ul>
                            {navlink.link.map((val, i) => {
                              for (const key in val) {
                                if (Object.hasOwnProperty.call(val, key)) {
                                  return (
                                    <li key={i} className="px-4 py-2 hover:bg-gray-100">
                                      <Link
                                        to={val[key]}
                                        className={path === val[key]
                                          ? "font-bold text-blue-600"
                                          : "text-gray-700 hover:text-blue-600"}
                                      >
                                        {key}
                                      </Link>
                                    </li>
                                  );
                                }
                              }
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                } else if (navlink.name !== "Research") {
                  return (
                    <div
                      key={i}
                      className="relative"
                      onMouseEnter={() => handleMouseEnterDetail(i)}
                      onMouseLeave={handleMouseLeaveDetail}
                    >
                      <button className="flex items-center pb-4 text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-transform duration-200">
                        {navlink.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          className="ml-1 bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </button>
                      {openDetail === i && (
                        <div className="absolute top-8 left-0 z-50 bg-white border border-gray-300 rounded-lg shadow-lg py-4 w-60">
                          <ul>
                            {navlink.link.map((val, i) => {
                              for (const key in val) {
                                if (Object.hasOwnProperty.call(val, key)) {
                                  return (
                                    <li key={i} className="px-6 py-3 hover:bg-gray-100">
                                      <Link
                                        to={val[key]}
                                        className={path === val[key]
                                          ? "no-underline font-bold text-blue-600"
                                          : "no-underline text-gray-700 hover:text-blue-600"}
                                      >
                                        {key}
                                      </Link>
                                    </li>
                                  );
                                }
                              }
                            })}
                          </ul>
                        </div>
                      )}

                    </div>
                  );
                } else {
                  return (
                    <button className="flex items-center pb-4 text-gray-700 hover:text-blue-600 transform hover:scale-110 transition-transform duration-200"><Link
                      key={i}
                      to={navlink.link}
                      className={path === navlink.link
                        ? "no-underline text-base font-bold text-blue-600"
                        : "no-underline text-base font-normal text-gray-700 hover:text-blue-600"}
                    >
                      {navlink.name}
                    </Link></button>

                  );
                }
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
