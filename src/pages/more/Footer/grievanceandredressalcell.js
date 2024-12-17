import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import { Link } from "react-router-dom";


const MainPage = () => {
  const [data, setData] = useState({
    links: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, key) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_Backend}/links/${endpoint}`);;
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
 const renderLink = (item) =>
             item.href.startsWith("/") ? (
               <Link
                 to={item.href}
                 className="text-blue-500 no-underline"
               >
               
                 <span>{item.name}</span>
               </Link>
             ) : (
               <a
                 href={item.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-500 no-underline"
               >
               
                 <span>{item.name}</span>
               </a>
             );
  useEffect(() => {
    const endpoints = [{ key: "links", endpoint: "grievance_redressal_cell" }];
    endpoints.forEach(({ endpoint, key }) => {
      fetchData(endpoint, key);
    });
  }, []);

  //   const quickLinks = [
  //     { name:"Annual Report", href: "/annualreport" },
  //   ];
  const crumbs = [{crumb:"Grievance Redressal Cell",link:"#"}]
  return (
    <div>
      {/* Full-width image with centered heading */}
  <PageHeader  breadCrumbs={crumbs} title={"Grievance Redressal Cell"}/>

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
              Grievance Redressal Cell
            </h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
            <h4 className="text-xl font-medium mb-4">
              Grievance Redressal Mechanism of the Institute:
            </h4>
            <ul className="list-disc ml-5">
              {data.links.map((link, index) => (
                <li key={index} className="flex items-start mb-2">
                  <span className="w-2 h-2 mt-1.5 -ml-1 mr-2 bg-black rounded-full"></span>
                  <a
                    target="_blank"
                    href={link.href}
                    className="-mt-1 text-md font-medium text-blue-500 no-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <br></br>
            <ul className="list-none ml-4 mb-4 counter-list">
              <li className="flex items-start mb-1">
                <span className="number mr-2">1.</span>
                Institute level Grievance committee mail id is
                <div className="text-blue-500">grievance@iiitdmj.ac.in</div>
              </li>
              <li className="flex items-start mb-1">
                <span className="number mr-2">2.</span>
                Grievance Committee Level A mail id is
                <div className="text-blue-500">
                  grievance_level1@iiitdmj.ac.in
                </div>
              </li>
              <li className="flex items-start mb-1">
                <span className="number mr-2">3.</span>
                Grievance Committee Level B mail id is
                <div className="text-blue-500">
                  grievance_level2@iiitdmj.ac.in
                </div>
              </li>
            </ul>

            <p className="text-black mb-4 font-medium">
              You are requested to forward your grievance, if any, in above
              mentioned email id in accordance with the notification issued in
              this regard.
            </p>
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
          </div>
          <ul className="list-disc ml-5">
            {quickLinks.map((link, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a href={link.href} className="text-blue-500 no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
