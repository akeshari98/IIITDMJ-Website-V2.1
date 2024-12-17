import React, { useState, useEffect } from "react";
import PageHeader from "../../../components/PageHeader";

const MainPage = () => {
  const [data, setData] = useState({
    links: [],
  });
  const [selectedCalendar, setSelectedCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, key) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_Server_Name}/links/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${key} data`);
      }
      const result = await response.json();
      setData((prevState) => ({ ...prevState, [key]: result }));

      // Automatically select first calendar if available
      if (result.length > 0) {
        setSelectedCalendar(result[0]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const endpoints = [{ key: "links", endpoint: "academiccalander" }];
    endpoints.forEach(({ endpoint, key }) => {
      fetchData(endpoint, key);
    });
  }, []);

  const crumbs = [{ crumb: "Academic Calendars", link: "#" }];
  return (
    <div>
      <PageHeader breadCrumbs={crumbs} title={"Academic Calendars"} />
      <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
        <div className="w-full md:w-12/12 px-4 mb-8 md:mb-0">
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
            <h2 className="text-3xl font-semibold mb-4">Academic Calendars</h2>
          </div>

          <div className="flex">
            <div className="w-full bg-white-200 p-7 rounded-lg shadow-2xl">
              <ul className="mb-4">
                {data.links.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedCalendar(link)}
                    className={`cursor-pointer rounded ${
                      selectedCalendar === link
                        ? "text-blue-600"
                        : "hover:text-black"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
              <hr></hr>
              <br></br>
              {selectedCalendar && (
                <div>
                  <h3 className="font-bold text-xl mb-4">
                    {selectedCalendar.name}
                  </h3>
                  <iframe
                    src={selectedCalendar.href}
                    width="100%"
                    height="600px"
                    className="border rounded"
                    style={{ 
                        pointerEvents: 'none',
                        overflow: 'auto' 
                      }}
                  />
                </div>
              )}
            </div>
            {/* <div className="w-1/4 bg-white-200 p-4 rounded-lg shadow-lg ml-4">
              <h3 className="font-bold text-xl mb-4">Calendar List</h3>
              <ul className="space-y-2">
                {data.links.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedCalendar(link)}
                    className={`cursor-pointer p-2 rounded ${
                      selectedCalendar === link
                        ? "bg-blue-100"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
