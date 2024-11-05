import React, {useEffect, useState} from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";
import profile from "../../../resources/images/admin/profile.jpg";
import image1 from "../../../resources/images/phc1.png";
import image2 from "../../../resources/images/phc2.png";
import image3 from "../../../resources/images/phc3.png";

const MainPage = () => {

  const quickLinks = [
    { name: "Gymkhana", href: "/gymkhana" },
    { name: "Activities", href: "/activities" },
    // { name:"General Administration", href: "/generaladministration" },
    // { name:"Other Administration", href: "/otheradministration" },
    { name: "Counselling", href: "/counselling" },
    { name: "Hostels", href: "/hostels" },
    { name: "Alumni", href: "https://alumni.iiitdmj.ac.in/" },
    { name: "Students Mess", href: "https://www.iiitdmj.ac.in/mess.iiitdmj.ac.in/" },
    { name: "PHC", href: "/primaryhealthcentre" },
  ];
  const quickLinks2 = [
    { name: "Duty Roster for PHC Doctors & Counselor", href: "/" },
    { name: "Administration and Staff", href: "/" },
  ];

  const guidelines = [
    { name: "New Guidelines 12-12-2017", href: "/boardofgoverners" },
    { name: "Guidelines 29-11-2016", href: "/financecommittee" },
  ];

  const [data, setData] = useState({
    cardsData: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, key) => {
    try {
      const response = await fetch(`http://localhost:5000/people/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${key} data`);
      }
      const result = await response.json();
      setData((prevState) => ({ ...prevState, [key]: result }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const endpoints = [
      { key: "cardsData", endpoint: "doctors" },
    ];

    // Fetch all data
    endpoints.forEach(({ endpoint, key }) => {
      fetchData(endpoint, key);
    });
  }, []);


  return (
    <div>
      {/* Full-width image with centered heading */}
      <div
        className="relative w-full h-96 bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${college_img1})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          Primary Health Centre
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
              className="bi bi-hopital w-16 h-16 mr-5 -mt-6 inline-block"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
              <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
            </svg>
            <h2 className="text-3xl font-semibold mb-4">
              Primary Health Centre
            </h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
            <h3>Links</h3>
            <ul className="list-disc ml-5">
              {quickLinks2.map((link, index) => (
                <li key={index} className="-ml-3">
                  •{' '}
                  <a href={link.href} className="text-blue-500 no-underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <br />
            <h3>Doctors available for consultation:</h3>
            <ul className="list-disc ml-5">
              {data.cardsData.map((doctor, index) => (
                <li key={index} className="-ml-3">
                  • <strong>{doctor.name} - {doctor.role} </strong>
                </li>
              ))}
            </ul>

            {/* Adding images in a single row */}
            <div className="flex justify-center mt-4 mb-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
  <img
    src={image1}
    alt="Image 1"
    className="w-full h-full object-cover"
  />
  <img
    src={image2}
    alt="Image 2"
    className="w-full h-full object-cover"
  />
  <img
    src={image3}
    alt="Image 2"
    className="w-full h-full object-cover"
  />
</div>
            </div>
            <h3>Guidelines</h3>
            <ul className="list-disc ml-5">
              {guidelines.map((link, index) => (
                <li key={index} className="-ml-3">
                  •{' '}
                  <a href={link.href} className="text-blue-500 no-underline">
                    {link.name}
                  </a>
                </li>
              ))}
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