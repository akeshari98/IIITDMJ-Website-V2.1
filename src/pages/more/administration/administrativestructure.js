import React from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";

const MainPage = () => {

  const quickLinks = [
    { name:"Board of Governers", href: "/boardofgoverners" },
    { name:"Finance Committee", href: "/financecommittee" },
    // { name:"General Administration", href: "/generaladministration" },
    // { name:"Other Administration", href: "/otheradministration" },
    { name:"Senate", href: "/senate" },
    { name:"Building Works Committee", href: "/buildingworkscommittee" },
    // { name:"Administrative Structure", href: "/administrativestructure" },
  ];


  return (
    <div>
      {/* Full-width image with centered heading */}
      <div
        className="relative w-full h-96 bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${college_img1})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          Administrative Structure
        </h1>
      </div>

      {/* Main content area with flex for side-by-side layout */}
      <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
        {/* 70% section */}
        <div className="w-full md:w-9/12 px-4 mb-8 md:mb-0">
          <div className="flex flex-row mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-newspaper w-16 h-16 mr-5 -mt-2 inline-block"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
              <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
            </svg>
            <h2 className="text-3xl font-semibold mb-4">
              College Administrative Structure
            </h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
        <p className="text-gray-700 mb-4 font-semibold">
        The Institute was initially governed under MOA of the Institute, but after the enactment of the IIIT Act 2014, the Institute is now governed by it.  As per the said Act the following are authorities of the Institute:
        </p>

        {/* <h4 className="text-xl font-semibold mb-2">Key Points</h4> */}
        <ul className="list-none ml-4 mb-4 font-semibold">
            <li className="flex items-start mb-1">
            <span className="relative w-2 h-2 mt-1.5 mr-2 bg-black rounded-full flex-shrink-0"></span>
            Board of Governors
            </li>
            <li className="flex items-start mb-1">
            <span className="relative w-2 h-2 mt-1.5 mr-2 bg-black rounded-full flex-shrink-0"></span>
            Senate
            </li>
            <li className="flex items-start mb-1">
            <span className="relative w-2 h-2 mt-1.5 mr-2 bg-black rounded-full flex-shrink-0"></span>
            Finance Committee
            </li>
            <li className="flex items-start mb-1">
            <span className="relative w-2 h-2 mt-1.5 mr-2 bg-black rounded-full flex-shrink-0"></span>
            Building and Works Committee
            </li>
            <li className="flex items-start mb-1">
            <span className="relative w-2 h-2 mt-1.5 mr-2 bg-black rounded-full flex-shrink-0"></span>
            Research Council
            </li>
        </ul>
        <p className="text-gray-700 mb-4 font-semibold">
            The Board of Governors is the principle executive body of the Institute, with an eminent technologist or industrialist or educationist as its Chairman who is nominated by the Visitor. The other members of the Board consist of persons who are chosen as per clause 13 (2) of the said Act.
        </p>
        <p className="text-gray-700 mb-4 font-semibold">
        The Board is responsible for the general superintendence, direction and control of the affairs of the Institute and possesses the power to frame, amend, modify or rescind the Statutes and Ordinances governing the affairs of the Institute. The Director apart from being the Executive and Academic Head of the Institute is also a member of the Board with Registrar as its ex-officio Secretary. The day-to-day administration of the Institute is to be looked after by the Director of the Institute and his administrative team comprising of:
        </p>
        {/* <h4 className="text-xl font-semibold mb-2">Responsibilities of the Administration</h4> */}
        <ul className="list-none ml-4 mb-4">
            <li className="flex items-start mb-1">
            <span className="relative w-2 h-2 mt-1.5 mr-2 bg-black rounded-full flex-shrink-0"></span>
            The Deputy Director  (to be nominated on appointment)
            </li>
            <li className="flex items-start mb-1">
            <span className="relative w-2 h-2 mt-1.5 mr-2 bg-black rounded-full flex-shrink-0"></span>
            The Deans
            </li>
            <li className="flex items-start mb-1">
            <span className="relative w-2 h-2 mt-1.5 mr-2 bg-black rounded-full flex-shrink-0"></span>
            The Heads of various disciplines
            </li>
            <li className="flex items-start mb-1">
            <span className="relative w-2 h-2 mt-1.5 mr-2 bg-black rounded-full flex-shrink-0"></span>
            The Registrar
            </li>
        </ul>

        </div>
        
        </div>

        {/* 30% Quick Links section */}
        <div className="w-full md:w-3/12 px-4">
          <div className="flex flex-row">
            <h2 className="text-2xl font-semibold mb-2">See Also</h2>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-link-45deg w-8 h-8 ml-1 mt-1 inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
            </svg>
          </div>
          <ul className="list-disc ml-5">
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a href={link.href} className="text-blue-500 no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default MainPage;
