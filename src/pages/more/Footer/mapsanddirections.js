import React from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";


const MainPage = () => {
  const quickLinks = [
    { name: "Contact Us", href: "/contact" },
    {
      name: "Bus Timings",
      href: "https://www.iiitdmj.ac.in/downloads/time%20table%20Detailed.pdf",
    },
  ];

  return (
    <div>
      {/* Full-width image with centered heading */}
      <div
        className="relative w-full h-96 bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${college_img1})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          Maps & Directions
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
            <h2 className="text-3xl font-semibold mb-4">How to Reach</h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
            <p className="text-black mb-4 font-medium">
              Jabalpur has good access to all three means of transport, viz,
              Road, Rail and Air.
            </p>
            <p className="text-black mb-4 font-medium">
              <bold>Roadways</bold> : Jabalpur is well connected by road
              route.The national highway 7 connects Jabalpur to Bhopal, the
              capital of Madhya Pradesh.
            </p>
            <p className="text-black mb-4 font-medium">
              <bold>Railways</bold> : Jabalpur is also well connected by Train.
              Direct trains are available for major destinations of India from
              Jabalpur.To know your train to Jabalpur{" "}
              <a
                href="https://www.indianrail.gov.in/enquiry/StaticPages/StaticEnquiry.jsp?StaticPage=index.html"
                className="text-blue-500 no-underline"
              >
                click here
              </a>
              .
            </p>
            <p className="text-black mb-4 font-medium">
              <bold>Airways</bold> : The Dumna airport connects few major
              airports of country.The flight from all major Indian cities
              reaches to Dumna airport via Delhi & Gwalior at regular basis. To
              know your connectivity to Jabalpur by Air{" "}
              <a
                href="https://indiaeducation.net/usefulresources/maps/airmap.asp"
                className="text-blue-500 no-underline"
              >
                click here
              </a>
              .
            </p>
            <h4 className="text-xl font-semibold mb-2">
              Reaching the Institute
            </h4>
            <p className="text-black mb-1 font-medium">
              The institute is situated at{" "}
              <strong>
                Meghawa, Dumna Airport Road, P.O Khamaria, Jabalpur 482005
              </strong>
            </p>
            <p className="text-black mb-4 font-medium">
              The Institute is approximately 13 km from the bus terminus, 10 km
              from the railway station and 3 km from the airport. Once you reach
              the city, you can hire a taxi (24 hours service taxi contact
              number : +91-9425160466) or auto (Approx. fare from railway
              station is Rs 130/-) to reach the campus. Institute runs bus
              service from campus to city. The bus timing can be see and
              downloaded from the below link.
            </p>
            <div className="mt-5 mb-5 bg-gray-300 rounded-lg">
              <iframe
                width="100%"
                height="300px"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="map"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.829250050693!2d80.02273867491695!3d23.17643127906625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a94397365dd3%3A0x5f9aeb812c2678c9!2sIIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1728232138635!5m2!1sen!2sin"
                style={{
                  filter: "contrast(1.2) opacity(0.5)",
                }}
              ></iframe>
            </div>
            <p className="text-black mb-4 font-medium">
              To know more about <strong>Jabalpur city </strong>
              <a
                href="https://jabalpur.nic.in/"
                className="text-blue-500 no-underline"
              >
                click here
              </a>
            </p>
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
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
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
