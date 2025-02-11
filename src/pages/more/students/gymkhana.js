import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/PageHeader";
import { Newspaper } from "lucide-react";
import axiosInstance from "../../../axios"
const MainPage = () => {
  const links = [
    { name: "Various Clubs Working Under Gymkhana", href: "/" },
    { name: "Office Bearers & Committees of Gymkhana", href: "/" },
  ];

  const images = {
    image1: process.env.REACT_APP_Backend + "/public/WebsiteImages/senate1.jpg",
    image2: process.env.REACT_APP_Backend + "/public/WebsiteImages/senate2.jpg",
    image3: process.env.REACT_APP_Backend + "/public/WebsiteImages/senate3.jpg",
    image4: process.env.REACT_APP_Backend + "/public/WebsiteImages/senate4.jpg",
    image5: process.env.REACT_APP_Backend + "/public/WebsiteImages/senate5.jpg",
    image6: process.env.REACT_APP_Backend + "/public/WebsiteImages/senate6.jpg",
  };

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

  // const notifications = [
  //   {
  //     name: "Notification 1",
  //     href: "https://www.iiitdmj.ac.in/students/downloads/Notifications/Notification%20regarding%20Convener%20and%20Co%20Convener%20of%20Student%20Senate%20-1(38921460593254).jpg",
  //   },
  //   {
  //     name: "Notification 2",
  //     href: "https://www.iiitdmj.ac.in/students/downloads/Notifications/Notification%20regarding%20Convener%20and%20Co%20Convener%20of%20Student%20Senate%20-1(38921460593254).jpg",
  //   },
  // ];
  const [notifications, setNotifications] = useState([]); 
  const [error, setError] = useState(null);   
  const [isLoading, setIsLoading] = useState(true);
  
  const fetchNotifs = async (showLoading = true) => {
    if (showLoading) setIsLoading(true);
    setError(null);
  
    try {
      const response = await axiosInstance.get("GymkhanaNotifications/GymkhanaNotifications");
      setNotifications(response.data); 
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching GymkhanaNotifications:", err);
      setError({
        message: "Failed to fetch GymkhanaNotifications",
        details: err.response?.data?.message || "Network error or server unavailable"
      });
      setIsLoading(false);
    }
  };   
  
  React.useEffect(() => {
    fetchNotifs();
  }, []);
  const [data, setData] = useState({ cardsData: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_Backend}/people/gymkhana`);
        const result = await response.json();
        setData({ cardsData: result });
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderLink = (item) => (
    item.href.startsWith("/") ? (
      <Link to={item.href} className="text-blue-600 hover:text-blue-800 transition-colors">
        <span>{item.name}</span>
      </Link>
    ) : (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        <span>{item.name}</span>
      </a>
    )
  );

  const crumbs = [{ crumb: "Gymkhana", link: "#" }];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader breadCrumbs={crumbs} title="Students Gymkhana" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="flex items-center gap-4 mb-6">
              <Newspaper className="w-10 h-10 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-800">Students Gymkhana</h1>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
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

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <img src={images.image1} alt="Senate 1" className="w-full h-64 object-cover rounded-lg shadow-md" />
                  <img src={images.image2} alt="Senate 2" className="w-full h-64 object-cover rounded-lg shadow-md" />
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

                <div className="space-y-6">
                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Brief Information regarding Clubs</h2>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">Cultural Club</h3>
                        <p className="text-gray-700"> <b>Cultural Club:</b> The Institute has vibrant Cultural Clubs
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
                  they organize their respective annual festivals.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">Science & Technology Club</h3>
                        <p className="text-gray-700"> <b>Science & Technology Club:</b> There are in all 7 different
                  Science and Technology Clubs which are mentored separately by
                  Faculty Members. Since the inception of the Institute, the
                  technical fest “Abhikalpan” held annually is a popular event
                  among different colleges of Jabalpur and the surrounding
                  regions. Apart from that, Hackathon, Racing, Programming,
                  Electronics, 3D printing, Business and Management, Fabrication
                  and Astronomy-related events are organized throughout the
                  year.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">Sports Club</h3>
                        <p className="text-gray-700"> <b>Sports Club:</b> Sports and games play a major role in
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
                  inter-IIIT, and other open tournaments across the country.</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Office Bearers</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No.</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {data.cardsData.map((row, index) => (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{`${row.first_name} ${row.last_name}`}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{row.role}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{row.email}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[images.image3, images.image4, images.image5, images.image6].map((img, index) => (
                      <img 
                        key={index}
                        src={img}
                        alt={`Senate ${index + 3}`}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Other Information</h2>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>{renderLink(link)}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Form Downloads</h2>
                <ul className="space-y-2">
                  {forms.map((form, index) => (
                    <li key={index}>{renderLink(form)}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Guidelines</h2>
                <ul className="space-y-2">
                  {guidelines.map((guideline, index) => (
                    <li key={index}>{renderLink(guideline)}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Notifications</h2>
                <ul className="space-y-2">
                  {notifications.map((notification, index) => (
                    <li key={index}><a
                    href={notification.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>{notification.title}</span>
                  </a></li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;