import React, { useEffect, useState } from "react";
import Card from "../../../components/CardNew";
import college_img1 from "../../../resources/images/3.jpg";

import image1 from "../../../resources/images/gym-1.jpg";
import image2 from "../../../resources/images/gym-2.jpg";

import image3 from "../../../resources/images/senate1.jpg";
import image4 from "../../../resources/images/senate2.jpg";
import image5 from "../../../resources/images/senate3.jpg";
import image6 from "../../../resources/images/senate4.jpg";

const MainPage = () => {
  const links = [
    { name: "Various Clubs Working Under Gymkhana", href: "/" },
    { name: "Office Bearers & Committees of Gymkhana", href: "/" },
  ];

  const forms = [
    {
      name: "H_151_Form_Hostel Accommodation",
      href: "https://www.iiitdmj.ac.in/students/downloads/forms/H_151_Form_%20Hostel%20Accommodation.pdf",
    },
    {
      name: "H_152_Form_Passport Bonafinde",
      href: "https://www.iiitdmj.ac.in/students/downloads/forms/H_152_Form_Passport%20Bonafinde.pdf",
    },
    {
      name: "H_154_Requisition Form for Booking Cancellation of Accommodation of Guest Room in Hall of Residence",
      href: "https://www.iiitdmj.ac.in/students/downloads/forms/Form_H_154_Requisition%20Form%20for%20Booking%20Cancellation%20of%20Accommodation%20of%20Guest%20Room%20in%20Hall%20of%20Residence.pdf",
    },
    {
      name: "H_163_Self Declaration Form",
      href: "https://www.iiitdmj.ac.in/students/downloads/forms/H_163_Self%20Declaration%20Form.pdf",
    },
    {
      name: "G_191_Application for certificate of appreciation",
      href: "https://www.iiitdmj.ac.in/students/downloads/forms/Form_G_191_Application%20for%20certificate%20of%20appreciation.pdf",
    },
  ];

  const guidelines = [
    {
      name: "G-101_Guidelines for Student Senate Election",
      href: "https://www.iiitdmj.ac.in/students/downloads/guidelines/G-101_Guidelines%20for%20%20Student%20Senate%20%20Election.pdf",
    },
    {
      name: "G-102_Guidelines for Gymkhana Office Bearer",
      href: "https://www.iiitdmj.ac.in/students/downloads/guidelines/G-102_Guidelines%20for%20Gymkhana%20Office%20Bearer.pdf",
    },
    {
      name: "G-103_Guidelines For Funds Distribution While Organizing Gymkhana Events-Activities-Functions",
      href: "https://www.iiitdmj.ac.in/students/downloads/guidelines/G-103_Guidelines%20For%20Funds%20Distribution%20While%20Organizing%20Gymkhana%20Events-Activities-Functions.pdf",
    },
  ];

  const notifications = [
    {
      name: "Noitification 1",
      href: "https://www.iiitdmj.ac.in/students/downloads/Notifications/Notification%20regarding%20Convener%20and%20Co%20Convener%20of%20Student%20Senate%20-1(38921460593254).jpg",
    },
    {
      name: "Noitification 2",
      href: "https://www.iiitdmj.ac.in/students/downloads/Notifications/Notification%20regarding%20Convener%20and%20Co%20Convener%20of%20Student%20Senate%20-1(38921460593254).jpg",
    },
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
    const endpoints = [{ key: "cardsData", endpoint: "gymkhana" }];

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
          Students Gymkhana
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
            <h2 className="text-3xl font-semibold mb-4">Students Gymkhana</h2>
          </div>

          {/* Text content area with formatted text and circular bullets */}
          <div className="bg-white-200 p-7 rounded-lg shadow-2xl">
            <p className="text-gray-700 mb-4 font-medium">
              Students' Gymkhana is constituted to evolve a disciplined
              self-governance for carrying out various extracurricular in-campus
              activities and to establish a responsible and accountable student
              body. Students’ Gymkhana is governed by Student Senate which is
              constituted in democratic way through elections among each
              discipline and batch of the students. Student Senate members are
              elected through direct ballot voting, every year in the first week
              of January. Every registered student of the Institute is
              by-default member of student gymkhana and would have right to
              vote. All members of the student gymkhana who have their CPI &gt;
              6.5 will be eligible to make their candidature for the Student
              Senate.
            </p>

            {/* Adding images in a single row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 mb-4">
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
            </div>

            <p className="text-gray-700 mb-4 font-medium">
              The Students' Senate has 2-3 representatives from each class.
              There are around 40 members in the Student Senate. Various
              gymkhana clubs that are part of Cultural, Sports and Technical,
              work under Students gymkhana. Club coordinators and
              co-coordinators will be selected based on their skill and past
              performance in the Institute by the members of that club and duly
              ratified by the Student Senate. All members of the student
              gymkhana who have their CPI&gt;= 6.0 are eligible to become
              mentors, coordinators, co-coordinators for various clubs.
            </p>
            <p className="text-gray-700 mb-4 font-medium">
              Student gymkhana is headed by Dean, Students, who is nominated by
              Board of Governor of the Institute for three years. Dean
              (Students) chairs all the meetings of the Student Senate and
              guides student representatives in organizing gymkhana activities
              throughout the year. Apart from this, three faculty members
              designated as Sports, Cultural and Technical Counsellors, look
              after sports, cultural and technical activities respectively and
              respective major festivals organized by the students' gymkhana.
            </p>
            <hr></hr>
            <h2 className="font-semibold text-xl mb-2">Brief Information regarding Clubs</h2>
            <ul className="ml-5 space-y-4">
              <li className="flex items-start">
                <span className="font-bold mr-2"></span>
                <p className="text-gray-700 font-medium">
                  <b>Cultural Club:</b> The Institute has vibrant Cultural Clubs
                  that provide a platform for students to showcase their
                  creativity and talent. There are six clubs associated with our
                  cultural fraternity, namely: (i) Saaz (Music Club), (ii)
                  Jazbaat (Dramatics Society Club), (iii) Aavartan (Dance Club),
                  (iv) Abhivayakti (Arts & Craft Club), (v) Aakrti (The Film
                  Making & Photography Club), and (vi) Samvaad (Literature &
                  Quizzing Society Club). The activities of the cultural
                  committee are largely student-driven with proper guidance from
                  faculty members. These clubs are active throughout the year.
                  Besides helping students in honing their talent and skills,
                  they organize their respective annual festivals.
                </p>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2"></span>
                <p className="text-gray-700 font-medium">
                  <b>Science & Technology Club:</b> There are in all 7 different
                  Science and Technology Clubs which are mentored separately by
                  Faculty Members. Since the inception of the Institute, the
                  technical fest “Abhikalpan” held annually is a popular event
                  among different colleges of Jabalpur and the surrounding
                  regions. Apart from that, Hackathon, Racing, Programming,
                  Electronics, 3D printing, Business and Management, Fabrication
                  and Astronomy-related events are organized throughout the
                  year.
                </p>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2"></span>
                <p className="text-gray-700 font-medium">
                  <b>Sports Club:</b> Sports and games play a major role in
                  keeping a person fit and fine. Sports in general inculcates
                  teamwork, mental strength, and physical fitness along with
                  ethics, respect to the opponent, fair play in real life
                  aspects as well. At IIITDM Jabalpur, we provide facilities for
                  students to experience “above and beyond” academic experience,
                  to maintain their physical fitness and to excel as bright
                  students. IIITDM Jabalpur has excellent infrastructure
                  facilities for both outdoor and indoor games and sports. The
                  outdoor games include Volley Ball, Foot Ball, Cricket, Lawn
                  Tennis, Basket Ball, and Athletic ground. A Flood light
                  facility is provided for outdoor games like volleyball, lawn
                  tennis, basketball, and football. The Indoor-Students Activity
                  Center (SAC) provides facilities such as Shuttle Badminton,
                  Chess, Caroms, and Table Tennis with wooden flooring, as well
                  as other multi-gym activities. We prepare students by
                  organizing intramural and extramural competitions and
                  encourage student participation in inter-collegiate,
                  inter-IIIT, and other open tournaments across the country.
                </p>
              </li>
            </ul>
            <br></br>
            <p className="text-gray-700 mb-4 font-medium">
              Finally, IITDM Jabalpur sports fraternity has a unique ability to
              bring people from different backgrounds together, as well as teach
              valuable life lessons.
            </p>
            <hr></hr>
            <div className="overflow-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200 mt-4">
                <thead>
                  <tr>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      S.No.
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Name
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Designation
                    </th>
                    <th className="px-2 py-2 text-left border border-gray-200 bg-gray-100">
                      Contact
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
                        {index + 1}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        {row.first_name} {row.last_name}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        {row.role}
                      </td>
                      <td className="px-2 py-2 border border-gray-200">
                        {row.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4 mb-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                <img
                  src={image3}
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
                <img
                  src={image4}
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
                <img
                  src={image5}
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
                <img
                  src={image6}
                  alt="Image 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 30% Quick Links section */}
        <div className="w-full md:w-3/12 px-4">
          <div className="flex flex-row">
            <h2 className="text-2xl font-medium mb-2">Other Information</h2>
          </div>
          <ul className="list-disc ml-5">
            {links.map((link, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a href={link.href} className="text-blue-500 no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-row">
            <h2 className="text-2xl font-medium mb-2">Form Downloads</h2>
          </div>
          <ul className="list-disc ml-5">
            {forms.map((link, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a href={link.href} className="text-blue-500 no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-row">
            <h2 className="text-2xl font-medium mb-2">Guidelines</h2>
          </div>
          <ul className="list-disc ml-5">
            {guidelines.map((link, index) => (
              <li key={index} className="mb-2 -ml-3">
                <a href={link.href} className="text-blue-500 no-underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-row">
            <h2 className="text-2xl font-medium mb-2">Notifications</h2>
          </div>
          <ul className="list-disc ml-5">
            {notifications.map((link, index) => (
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
