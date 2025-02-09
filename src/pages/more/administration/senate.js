import React, {useState,useEffect} from "react";
import InfoDiv from "../../../components/InfoDiv";
// import college_img1 from "../../../resources/images/3.jpg";
import PageHeader from "../../../components/PageHeader";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [data, setData] = useState({
    director: [],
    deans: [],
    hods: [],
    profs: [],
    special: [],
    secretary: [],
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
    const endpoints = [
      { key: "director", endpoint: "director" },
      { key: "deans", endpoint: "deans" },
      { key: "hods", endpoint: "hods" },
      { key: "profs", endpoint: "profs" },
      { key: "special", endpoint: "special" },
      { key: "secretary", endpoint: "registrar" },
    ];

    // Fetch all data
    endpoints.forEach(({ endpoint, key }) => {
      fetchData(endpoint, key);
    });
  }, []);
  const quickLinks = [
    { name:"Board of Governers", href: "/boardofgoverners" },
    { name:"Finance Committee", href: "/financecommittee" },
    // { name:"General Administration", href: "/generaladministration" },
    // { name:"Other Administration", href: "/otheradministration" },
    // { name:"Senate", href: "/senate" },
    { name:"Building Works Committee", href: "/buildingworkscommittee" },
    { name:"Administrative Structure", href: "/administrativestructure" },
  ];

  // Downloads data
  const downloads = [
    { name: "Senate Minutes", href: "/senateminutes" },
    { name: "Senate Agenda", href: "/senateagenda" },
  ];
  const crumbs = [{crumb:"Senate",link:"#"}]
  return (
    <div>
      {/* Full-width image with centered heading */}
      <PageHeader  breadCrumbs={crumbs} title={"Senate"} />
      {/* Main content area with flex for side-by-side layout */}
      <div className="container mx-auto mt-8 mb-8 flex flex-col md:flex-row">
        {/* 70% section */}
        <div className="w-full md:w-9/12 mb-8 md:mb-0">
          <div className="flex flex-row mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="black"
              className="bi bi-newspaper w-16 h-16 mr-5 inline-block"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
              <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7zm-3 2h2v1H7zm3 0h2v1H7z" />
            </svg>
            <h2 className="text-3xl font-semibold mb-4">
            Constitution Of The Following New Senate Under Clause 16(I) Of The IIIT Act 2014
            </h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
        <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
            {/* Table content */}
            <div className="overflow-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead>
                <tr>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100 align-top" style={{ whiteSpace: 'nowrap' }}>
                    S.No
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100 align-top" style={{ whiteSpace: 'nowrap' }}>
                    Designation
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100 align-top" style={{ whiteSpace: 'nowrap' }}>
                    Information
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white">
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    1.
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    Director as Chairperson (Ex-officio)
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                        <div className="flex justify-start">
                            <div className="grid grid-cols-1">
                            {data.director.map((info, index) => (
                                <InfoDiv key={index} {...info} />
                            ))}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="bg-gray-50">
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    2.
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    Deputy Director
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                      To be nominated on appointment
                    </td>
                </tr>
                <tr className="bg-white">
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    3.
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    Deans (Ex-officio)
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    <div className="flex justify-start">
                            <div className="grid grid-cols-1">
                            {data.deans.map((info, index) => (
                                <InfoDiv key={index} {...info} />
                            ))}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="bg-gray-50">
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    4.
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    Heads of the Departments/Disciplines* (Ex-officio)
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    <div className="flex justify-start">
                            <div className="grid grid-cols-1">
                            {data.hods.map((info, index) => (
                                <InfoDiv key={index} {...info} />
                            ))}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="bg-white">
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    5.
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    All Professors other than Deans/Heads
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    <div className="flex justify-start">
                            <div className="grid grid-cols-1">
                            {data.profs.map((info, index) => (
                                <InfoDiv key={index} {...info} />
                            ))}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="bg-gray-50">
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    6.
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    Three persons from amongst educationists of repute or persons from another field related to the activities of the institute who are not in service of the Institute nominated by the Board of Governors
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    Name of the following persons were approved by the Chairman, BOG, the same are proposed for the approval of the Chairman and to be ratified in the subsequent meeting of the Board
                    </td>
                </tr>
                <tr className="bg-white">
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    7.
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    	Three members who are not members of teaching staff co-opted by the Senate for their specialized knowledge
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    <div className="flex justify-start">
                            <div className="grid grid-cols-1">
                            {data.special.map((info, index) => (
                                <InfoDiv key={index} {...info} />
                            ))}
                            </div>
                        </div>
                    </td>
                </tr>
                <tr className="bg-gray-50">
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    8.
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    Secretary - Acting Registrar of the Institute (Ex-Officio)
                    </td>
                    <td className="px-2 py-2 border border-gray-200 break-words align-top" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
                    <div className="flex justify-start">
                            <div className="grid grid-cols-1">
                            {data.secretary.map((info, index) => (
                                <InfoDiv key={index} {...info} />
                            ))}
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>

        </div>
        
        </div>

        {/* 30% Quick Links section */}
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

            // {/* Table content */}
            // <div className="overflow-auto">
            // <table className="min-w-full table-auto border-collapse border border-gray-200">
            //     <thead>
            //     <tr>
            //         <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100" style={{ whiteSpace: 'nowrap' }}>
            //         S.No
            //         </th>
            //         <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100" style={{ whiteSpace: 'nowrap' }}>
            //         Designation
            //         </th>
            //         <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100" style={{ whiteSpace: 'nowrap' }}>
            //         Information
            //         </th>
            //     </tr>
            //     </thead>
            //     <tbody>
            //     <tr className="bg-white">
            //         {/* rows merging - rowspan */}
            //         <td className="px-2 py-2 border border-gray-200 break-words" rowSpan="2" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
            //         1
            //         </td>
            //         <td className="px-2 py-2 border border-gray-200 break-words" rowSpan="2" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
            //         Row 1, Col 2
            //         </td>
            //         <td className="px-2 py-2 border border-gray-200 break-words" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
            //         Row 1, Col 3
            //         </td>
            //     </tr>
            //     <tr className="bg-white">
            //         <td className="px-2 py-2 border border-gray-200 break-words" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
            //         Row 2, Col 2 (New row content)
            //         </td>
            //         {/* <td className="px-2 py-2 border border-gray-200 break-words" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
            //         Row 2, Col 3 (New row content)
            //         </td> */}
            //     </tr>
            //     <tr className="bg-gray-50">
            //         <td className="px-2 py-2 border border-gray-200 break-words" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
            //         2
            //         </td>
            //         <td className="px-2 py-2 border border-gray-200 break-words" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
            //         Row 3, Col 2
            //         </td>
            //         <td className="px-2 py-2 border border-gray-200 break-words" style={{ maxWidth: '200px', whiteSpace: 'normal' }}>
            //         Row 3, Col 3 Row 3, Col 3 Row 3, Col 3 Row 3, Col 3 Row 3, Col 3
            //         </td>
            //     </tr>
            //     </tbody>
            // </table>
            // </div>
