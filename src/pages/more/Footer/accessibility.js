import React from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";


const MainPage = () => {

//   const quickLinks = [
//     { name:"Board of Governers", href: "/boardofgoverners" },
//     { name:"Finance Committee", href: "/financecommittee" },
//     // { name:"General Administration", href: "/generaladministration" },
//     // { name:"Other Administration", href: "/otheradministration" },
//     { name:"Senate", href: "/senate" },
//     { name:"Building Works Committee", href: "/buildingworkscommittee" },
//     // { name:"Administrative Structure", href: "/administrativestructure" },
//   ];


  return (
    <div>
      {/* Full-width image with centered heading */}
      <div
        className="relative w-full h-96 bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${college_img1})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          Accessibility
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
            Accessibility
            </h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
        <p className="text-gray-700 mb-4 font-medium">
        This page provides help for challenged computer users, to enable them to make the most of this and other websites.
        </p>
        <h4 className="text-xl font-semibold mb-4">
        Commonly Used Methods
            </h4>
        <p className="text-gray-700 mb-4 font-medium">
        You can change the settings of your browser or your operating system, and add plugins to help you access the internet better.
        </p>
        <p className="text-gray-700 mb-4 font-medium">
        If you can't see well you can change the size of the display easily in most browsers.
        </p>
        <p className="text-gray-700 mb-4 font-medium">
        For Firefox and Chrome the size of the display can be increased or decreased by the Ctrl + (press control and plus key simultaneously) and Ctrl - (press control and minus key simultaneously) commands.
        </p>
        <p className="text-gray-700 mb-4 font-medium">
        To reset to original size please use the Ctrl 0 (press control and zero key simultaneously) command.
        </p>
        <p className="text-gray-700 mb-4 font-medium">
        For text to speech you can use the ChromeVox extension on Google Chrome which will read out the text for you.
        </p>
        <h4 className="text-xl font-semibold mb-4">
        Detailed Information
            </h4>
            <p className="text-gray-700 mb-4 font-medium">
            There is a lot more that you can do. Here are some examples:
        </p>
        <ul className="list-none ml-4 mb-4">
            <li className="flex items-start mb-1">
            <span className="relative w-1.5 h-1.5 mt-2 mr-2 bg-black rounded-full flex-shrink-0"></span>
            You can change the size of the fonts
            </li>
            <li className="flex items-start mb-1">
            <span className="relative w-1.5 h-1.5 mt-2 mr-2 bg-black rounded-full flex-shrink-0"></span>
            You can change the colour of the fonts
            </li>
            <li className="flex items-start mb-1">
            <span className="relative w-1.5 h-1.5 mt-2 mr-2 bg-black rounded-full flex-shrink-0"></span>
            You can change the settings to make a keyboard or a mouse easier to use
            </li>
        </ul>
        <p className="text-gray-700 mb-4 font-medium">
        For detailed information on how to make these changes and for much more to help you make the most of the internet please visit this <a href="https://www.bbc.co.uk/accessibility/" className="text-blue-500 no-underline">My Web My Way website.</a></p>
        </div>
        
        </div>

        {/* 30% Quick Links section */}
        <div className="w-full md:w-3/12 px-4">
          {/* <div className="flex flex-row">
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
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default MainPage;
