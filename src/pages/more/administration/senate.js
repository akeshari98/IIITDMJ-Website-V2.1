import React from "react";
import InfoDiv from "../../../components/InfoDiv";
import college_img1 from "../../../resources/images/3.jpg";
import profile from "../../../resources/images/admin/profile.jpg";

const MainPage = () => {
  const director=[
    {
        name:"Prof. Bhartendu K Singh",
        designation:"Director",
        mail:["director@iiitdmj.ac.in"],
    },
  ]; 
  const ddirector=[
    {
        name:"",
        designation:"",
        mail:[],
    },
  ];
  const deans=[
    {
        name:"Dr. Mukesh Kumar Roy",
        designation:"Faculty-in-Charge (Student Affairs)",
        mail:["mkroy@iiitdmj.ac.in"],
    },
    {
        name:" Prof. V. K. Gupta",
        designation:"Professor In-charge (Academic)",
        mail:["dean.acad@iiitdmj.ac.in"],
    },
    {
        name:"Prof. Pritee Khanna",
        designation:"Professor In-charge (RSPC)",
        mail:["dean.research@iiitdmj.ac.in"],
    },
  ];
  const heads=[
    {
        name:"Dr. M. Zahid Ansari",
        designation:"Head, ME Discipline",
        mail:["headme@iiitdmj.ac.in"],
    },
    {
        name:"Dr. Matadeen Bansal",
        designation:"Head, ECE Discipline",
        mail:["headece@iiitdmj.ac.in"],
    },
    {
      name:"Dr. Prabir MukhopadhyayDesign",
      designation:"Head, ECE Discipline",
      mail:["headsedign@iiitdmj.ac.in"],
  },
  {
        name:"Dr. Vinod Kumar Jain",
        designation:"Head, CSE Discipline",
        mail:["headcse@iiitdmj.ac.in"],
    },
    {
      name:"Dr. Lokendra Balyan",
      designation:"Head, NS Discipline",
      mail:["headns@iiitdmj.ac.in"],
  },
  {
    name:"Dr. Mamta Anand",
    designation:"Head, Liberal Arts (With merging of Humanities)",
    mail:["headla@iiitdmj.ac.in"],
},
  ];
  const profs=[
    {
        name:"Prof. Aparajita Ojha",
        mail:["aojha@iiitdmj.ac.in"],
    },
    {
      name:"Prof. Puneet Tandon",
      mail:["ptandon@iiitdmj.ac.in"],
  },
  {
    name:"Prof. Tanuja Sheorey",
    mail:["tanush@iiitdmj.ac.in"],
},
{
  name:"Prof. P. N. Kondekar",
  mail:["pnkondekar@iiitdmj.ac.in"],
},
{
  name:"Prof. Dinesh Kumar V.",
  mail:["dineshk@iiitdmj.ac.in"],
},
{
  name:"Prof. Prashant K. Jain",
  mail:["pkjain@iiitdmj.ac.in"],
},
{
  name:"Prof. Prabin K Padhy",
  mail:["prabin16@iiitdmj.ac.in"],
},
{
  name:"Prof. Atul Gupta",
  mail:["atul@iiitdmj.ac.in"],
},
{
  name:"Prof. S. N. Sharma",
  mail:["snsharma@iiitdmj.ac.in"],
},
  ];
  const special=[
    {
      name:"Shri Rajeev Kumar Singh",
      designation:"Global Head Talent Acquisition",
      address:"Wipro Ltd., 118 Crescent,Forest Trail, Bhugaon, District-Pune 412115",
      mail:["rajeev.singhkumar@wipro.com"]
    }
  ];
  const secretary=[
    {
      name:"Mrs. Swapnali Gadekar",
      mail:["registrar@iiitdmj.ac.in"]
    }
  ];
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

  return (
    <div>
      {/* Full-width image with centered heading */}
      <div
        className="relative w-full h-96 bg-[length:100%_100%] bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${college_img1})` }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
          Senate
        </h1>
      </div>

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
                            {director.map((info, index) => (
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
                            {deans.map((info, index) => (
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
                            {heads.map((info, index) => (
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
                            {profs.map((info, index) => (
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
                            {special.map((info, index) => (
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
                            {secretary.map((info, index) => (
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

          {/* Downloads Section */}
          <div className="flex flex-row">
            <h2 className="text-2xl font-semibold mt-6 mb-2">Downloads</h2>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="black"
                  className="bi bi-download w-7 h-7 ml-3 mt-4 inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
            </svg>
          </div>
          <ul className="list-disc ml-5">
            {downloads.map((download, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a
                  href={download.href}
                  className="text-blue-500 no-underline"
                >
                  {download.name}
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
