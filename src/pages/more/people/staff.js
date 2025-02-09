import React, {useEffect, useState} from 'react';
// import Card from '../../../components/CardNew';
// import college_img1 from "../../../resources/images/3.jpg";
import PageHeader from "../../../components/PageHeader";
import { Link } from 'react-router-dom';

const MainPage = () => {
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
  const [data, setData] = useState({
    cardsData: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, key) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_Backend}/people/${endpoint}`);
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
      { key: "cardsData", endpoint: "staff" },
    ];

    // Fetch all data
    endpoints.forEach(({ endpoint, key }) => {
      fetchData(endpoint, key);
    });
  }, []);

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const downloads = [
    { name: 'Annual Report 2023', href: '/downloads/annual_report_2023.pdf' },
    { name: 'Board Meeting Minutes', href: '/downloads/board_meeting_minutes.pdf' },
    { name: 'Governors List', href: '/downloads/governors_list.pdf' },
    { name: 'Policy Document', href: '/downloads/policy_document.pdf' },
  ];
  const crumbs = [{crumb:"Staff",link:"#"}]
  return (
    <div>
      {/* Full-width image with centered heading */}
      <PageHeader  breadCrumbs={crumbs} title={"Staff of IIITDM"}/>

      {/* Main content area with flex for side-by-side layout */}
      <div className="container mx-auto mt-8 mb- flex flex-col md:flex-row">
        {/* 70% section */}
        <div className="w-full md:w-9/12 px-4 mb-8 md:mb-0">
          <div className="flex flex-row mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-people w-16 h-16 mr-5 inline-block -mt-5"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
            <h2 className="text-3xl font-semibold mb-4">Staff of IIITDM</h2>
          </div>

          {/* Table for staff information */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl mb-5">
            <div className="overflow-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">S.No.</th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">Name</th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">Designation</th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">Department</th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {data.cardsData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-2 py-2 border border-gray-200">{index + 1}</td>
                      <td className="px-2 py-2 border border-gray-200">{row.first_name} {row.last_name}</td>
                      <td className="px-2 py-2 border border-gray-200">{row.role}</td>
                      <td className="px-2 py-2 border border-gray-200">{row.address}</td>
                      <td className="px-2 py-2 border border-gray-200">{row.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 30% section */}
        <div className="w-full md:w-3/12 px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">See Also</h2>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>{renderLink(link)}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Downloads
              </h2>
              <ul className="space-y-2">
                {downloads.map((form, index) => (
                  <li key={index}>{renderLink(form)}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
