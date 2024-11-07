import React, { useEffect, useState } from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";
import profile from "../../../resources/images/admin/profile.jpg";
import image1 from "../../../resources/images/vasishtha.jpg";
import image2 from "../../../resources/images/aryabhatta.jpg";
import image3 from "../../../resources/images/vivekananda.jpg";
import image4 from "../../../resources/images/nagarjuna.jpg";
import image5 from "../../../resources/images/panini.jpg";
import image6 from "../../../resources/images/maa-saraswati.jpg";

const MainPage = () => {
  const notifications = [
    {
      name: "Notification regarding constitution of Council of Wardens, dated: August 24, 2023 | Corrigendum, dated: August 25, 2023",
      href: "https://www.iiitdmj.ac.in/students/downloads/Corrigendum%20of%20notification%20regarding%20constitution%20of%20Council%20of%20Wardens..pdf",
    },
    {
      name: "Notification regarding Council of Wardens, dated: February 01, 2023",
      href: "https://www.iiitdmj.ac.in/students/downloads/Notification%20regarding%20Council%20of%20Wardens.pdf",
    },
    {
      name: "Noitification 1",
      href: "https://www.iiitdmj.ac.in/students/downloads/Notifications/Notification%20regarding%20Convener%20and%20Co%20Convener%20of%20Student%20Senate%20-1(38921460593254).jpg",
    },
    {
      name: "Noitification 2",
      href: "https://www.iiitdmj.ac.in/students/downloads/Notifications/Notification%20regarding%20Convener%20and%20Co%20Convener%20of%20Student%20Senate%20-1(38921460593254).jpg",
    },
  ];

  const info = [
    {
      name: "CODE OF CONDUCT",
      href: "https://www.iiitdmj.ac.in/students/downloads/Imp_Info/CODE%20OF%20CONDUCT.pdf",
    },
    {
      name: "Unauthorized Conduct in the Campus",
      href: "https://www.iiitdmj.ac.in/students/downloads/Imp_Info/Unauthorized%20Conduct%20in%20the%20Campus.pdf",
    },
    {
      name: "Guidelines for Entry, Exit at Main Gate",
      href: "https://www.iiitdmj.ac.in/students/downloads/Imp_Info/Guidelines%20for%20Entry,%20Exit%20at%20Main%20Gate.pdf",
    },
  ];

  const amenities = [
    {
      name: "Barber Shop & Laundry Shop Vasishtha Hostel (Hall-I)",
      href: null,
    },
    { name: "One cafeteria(2:00P.M to 12:00A.M)", href: null },
    { name: "Stationary shop", href: null },
    { name: "Wi-Fi internet facility", href: null },
    { name: "Guest Room", href: null },
    { name: "Printing and photocopy facility", href: null },
    { name: "24*7 ambulance facility", href: null },
    { name: "Gymnasium", href: null },
    {
      name: "Reading room(all most all news papers,employment news and magzines)",
      href: null,
    },
    { name: "Stadium for outdoor games", href: null },
    { name: "Indoor games like carom,T.T.tabeles etc.", href: null },
    {
      name: "Bus facility (Time Table)",
      href: "https://www.iiitdmj.ac.in/downloads/time%20table%20Detailed.pdf",
    },
  ];

  const vasishtha=[
    {name:"B.TECH BATCH-2019", href:"https://www.iiitdmj.ac.in/students/downloads/allotment/Vasishtha%20Hostel%20(HALL-I)/B.TECH%20BATCH-2019.pdf"},
    {name:"B.TECH BATCH-2022", href:"https://www.iiitdmj.ac.in/students/downloads/allotment/Vasishtha%20Hostel%20(HALL-I)/B.TECH%20BATCH-2022.pdf"},
  ];
  const aryabhatta=[
    {name:"2020 BATCH", href:"https://www.iiitdmj.ac.in/students/downloads/allotment/Aryabhatta%20Hostel%20(HALL-III)/2020%20BATCH.pdf"},
  ];
  const vivekananda=[
    {name:"B.TECH BATCH-2021", href:"https://www.iiitdmj.ac.in/students/downloads/allotment/Vivekananda%20Hostel%20(HALL-IV)/B.TECH%20BATCH-2021.pdf"},
  ];
  const nagarjuna=[
    {name:"Nagarjuna Hostel (Block A&B)", href:"https://www.iiitdmj.ac.in/students/downloads/allotment/Nagarjuna%20Hostel%20(PG%20Married)/Nagarjuna%20Hostel%20(Block%20A&B).pdf"},
    {name:"Nagarjuna_C Block Girls UG 2022", href:"https://www.iiitdmj.ac.in/students/downloads/allotment/Nagarjuna%20Hostel%20(PG%20Married)/Nagarjuna_C%20Block%20Girls%20UG22.pdf"},
  ];
  const panini=[
    {name:"Panini Hostel Block A", href:"https://www.iiitdmj.ac.in/students/downloads/allotment/Panini%20Hostel%20(PG%20Unmarried)/Block-A/"},
    {name:"Panini Hostel Block B", href:"https://www.iiitdmj.ac.in/students/downloads/allotment/Panini%20Hostel%20(PG%20Unmarried)/Panini%20Hostel%20%20Block%20B.pdf"},
  ];
  const saraswati=[
    
  ];
  const rewa=[
    {name:"Rewa Residency Block (A&B)", href:"https://www.iiitdmj.ac.in/students/downloads/allotment/Rewa%20Residency%20Block%20(A&B)/Rewa%20Residency%20Block%20(A&B).pdf"},
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
    const endpoints = [{ key: "cardsData", endpoint: "hostels" }];

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
          Hostels @ IIITDM Jabalpur
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
            <h2 className="text-3xl font-semibold mb-4">Hostels</h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
            <p className="text-gray-700 mb-4 font-semibold">
              IIITDM Jabalpur is a fully residential Institute. All the students
              are required to be reside in the campus. The hostel environment
              and available amenities play a very important role in the overall
              development of student during his/ her stay at the campus.
              Presently Institute having total six hostels VASISHTHA HOSTEL
              (Formerly Hall-I) "single seater", ARYABHATTA HOSTEL (Formerly
              Hall-3) “triple seater" and VIVEKANANDA HOSTEL (Formerly Hall-4)
              “triple seater" PANINI HOSTEL "single seater" MAA SARASWATI GIRLS
              HOSTEL “triple & single seater "single seater", and NAGARJUNA
              HOSTEL (For PG Married students). In addition, some flats of REWA
              residency are also available for the married students. The central
              mess facility is also available to the students which is managed
              by mess wardens and student mess committee. For the overall
              development of students are encouraged to participate in various
              activities such as sports, cultural, science and technology. Each
              hostel has a Hall Executive Committee (HEC), where students
              members are elected by hall residents and it is headed by the
              respective hall Warden.
            </p>

            {/* Adding images in a single row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
              <div className="mb-3">
                <img
                  src={image1}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-center font-semibold">
                  Vasishtha Hostel
                </p>
              </div>
              <div className="mb-3">
                <img
                  src={image2}
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-center font-semibold">
                  Aryabhatta Hostel
                </p>
              </div>
              <div className="mb-3">
                <img
                  src={image3}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-center font-semibold">
                  Vivekananda Hostel
                </p>
              </div>
              <div className="mb-3">
                <img
                  src={image4}
                  alt="Image 4"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-center font-semibold">
                  Nagarjuna Hostel
                </p>
              </div>
              <div className="mb-3">
                <img
                  src={image5}
                  alt="Image 5"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-center font-semibold">Panini Hostel</p>
              </div>
              <div className="mb-3">
                <img
                  src={image6}
                  alt="Image 6"
                  className="w-full h-full object-cover"
                />
                <p className="mt-2 text-center font-semibold">
                  Maa Saraswati Hostel
                </p>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <h2 className="text-2xl">Hostel Administration</h2>
            <div className="overflow-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Name
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Designation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.cardsData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-2 py-2 border border-gray-200">
                        {row.name}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        <a
                          href={row.href}
                          className={
                            row.href
                              ? "text-blue-600 no-underline"
                              : "text-black no-underline"
                          }
                        >
                          {row.role}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br></br>
            <h3 className="text-2xl mb-4">Notifications</h3>
            <ul className="list-disc ml-5">
              {notifications.map((link, index) => (
                <li key={index} className="mb-2 -ml-3">
                  <a href={link.href} className="text-blue-500 no-underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <hr></hr>
            <h3 className="text-2xl">Hostel Allotment Information</h3>
            <br></br>
            <h6>Hostel Allotment in Vasishtha Hostel (HALL-I)</h6>
            <ul className="list-disc ml-5">
                {vasishtha.map((link, index) => (
                <li key={index} className="mb-2 -ml-3">
                    <a href={link.href} className="text-blue-500 no-underline">
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
            <h6>Hostel Allotment in Aryabhatta Hostel (HALL-III)</h6>
            <ul className="list-disc ml-5">
                {aryabhatta.map((link, index) => (
                <li key={index} className="mb-2 -ml-3">
                    <a href={link.href} className="text-blue-500 no-underline">
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
            <h6>Hostel Allotment in Vivekananda Hostel (HALL-IV)</h6>
            <ul className="list-disc ml-5">
                {vivekananda.map((link, index) => (
                <li key={index} className="mb-2 -ml-3">
                    <a href={link.href} className="text-blue-500 no-underline">
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
            <h6>Hostel Allotment in Nagarjuna Hostel (PG Married)</h6>
            <ul className="list-disc ml-5">
                {nagarjuna.map((link, index) => (
                <li key={index} className="mb-2 -ml-3">
                    <a href={link.href} className="text-blue-500 no-underline">
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
            <h6>Hostel Allotment in Panini Hostel (PG Unmarried)</h6>
            <ul className="list-disc ml-5">
                {panini.map((link, index) => (
                <li key={index} className="mb-2 -ml-3">
                    <a href={link.href} className="text-blue-500 no-underline">
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
            <h6>Hostel Allotment in Maa Saraswati Girls Hostel</h6>
            <ul className="list-disc ml-5">
                {saraswati.map((link, index) => (
                <li key={index} className="mb-2 -ml-3">
                    <a href={link.href} className="text-blue-500 no-underline">
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
            <h6>Hostel Allotment in Rewa Residency Block (A&B)</h6>
            <ul className="list-disc ml-5">
                {rewa.map((link, index) => (
                <li key={index} className="mb-2 -ml-3">
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
            <h2 className="text-2xl font-semibold mb-2">
              Important Information
            </h2>
          </div>
          <ul className="list-disc ml-5">
            {info.map((link, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a href={link.href} className="text-blue-500 no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-row">
            <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
          </div>
          <ul className="list-disc ml-5">
            {amenities.map((link, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a
                  href={link.href}
                  className={
                    link.href
                      ? "text-blue-600 no-underline"
                      : "text-black no-underline"
                  }
                >
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
