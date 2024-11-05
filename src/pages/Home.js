import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Newspaper } from "lucide-react";
import axios from "axios";
import home_img1 from "../resources/illustrations/home/Coding workshop-amico.svg";
import home_img3 from "../resources/illustrations/home/Modern life-rafiki.svg";
import home_img2 from "../resources/illustrations/home/college campus-amico.svg";
import college_img1 from "../resources/images/3.jpg";
import college_img2 from "../resources/images/college-image.jpg";
import college_img3 from "../resources/images/College-img.jpg";
import college_img4 from "../resources/images/College-img1.jpg";
import Logo from "../resources/images/IIITDMJ.jpg";
import Marquee from "./Marquee";
import Marquee2 from "./Marquee2";
import ImageSlider from "./ImageSlider";
import ImageGallery from "../components/ImageGallery";
import NewsSlider from "../components/NewsSlider/NewsSlider";
import AchievementsSlider from "../components/AchievementsSlider";
import Notices from "../components/Notices";
import AboutAndVisitors from "../components/AboutAndVisitor";
const slides = [
  {
    image: college_img1,
    text: {
      title: "Innovative Solutions",
      description: "We provide cutting-edge solutions tailored to your needs.",
    },
    readMoreUrl: "#",
  },
  {
    image: college_img2,
    text: {
      title: "Advanced Technologies",
      description: "Harness the power of technology for your business growth.",
    },
    readMoreUrl: "#",
  },
  {
    image: college_img3,
    text: {
      title: "Future-Ready Strategies",
      description: "Prepare for tomorrow with our forward-thinking strategies.",
    },
    readMoreUrl: "#",
  },
];

const achievements = [
  "Achievement 1",
  "Achievement 2",
  "Achievement 3",
  "Achievement 4",
  "Achievement 5",
  "Achievement 6",
];
const news = ["News 1", "News 2", "News 3", "News 4", "News 5", "News 6"];
const notice = [
  "Notice 1",
  "Notice 2",
  "Notice 3",
  "Notice 4",
  "Notice 5",
  "Notice 6",
];
const updates = [
  {
    title: "Achievements",
    announcements: achievements,
    bgColor: "#0384C1",
  },
  {
    title: "News & Events",
    announcements: news,
    bgColor: "#0384C1",
  },
  {
    title: "Notices",
    announcements: notice,
    bgColor: "#0384C1",
  },
];
const notices = [
  {
    text: "B-Tech Admissions started.",
    to: "#",
  },
  {
    text: "M-Tech Admissions started.",
    to: "#",
  },
  {
    text: "PHD Admissions started.",
    to: "#",
  },
];
const notis = [
  {
    text: "B-Tech Admissions started.",
    to: "#",
  },
  {
    text: "M-Tech Admissions started.",
    to: "#",
  },
  {
    text: "PHD Admissions started.",
    to: "#",
  },
];
const images = [college_img1, college_img2, college_img3, college_img4];
const photos = [
  college_img1,
  college_img2,
  college_img3,
  college_img4,
  home_img1,
  home_img2,
  home_img3,
  home_img1,
];
const CellArrayData = [
  {
    title: "International Relations",
    subTitle: "Collaberation with JAPAN",
    photos: photos,
  },
  {
    title: "A glimpse of institute activities",
    subTitle: "Students/Events/Visits",
    photos: photos,
  },
];

function App() {
  return (
    <div className="App">
      <ImageSlider images={images} />
    </div>
  );
}
function Home() {
  // const StudentCount = useLoaderData();
  const [StudentCount, setStudentCount] = useState({
    Total: 12,
    BTech: 4,
    BDes: 4,
    MTech: 4,
    MDes: 4,
    PHD: 12,
  });

  useEffect(() => {
    setTimeout(() => {
      loader()
        .then((response) => {
          console.log(response);
          setStudentCount(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }, []);

  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (selectedCourse) {
      navigate(`/courses/${selectedCourse}`);
    }
  };

  return (
    <div>
      <main>
        {/* Hero section */}
        {/* <div className="border-2 w-full px-0 mt-0">
          <Marquee data={notices} />
        </div> */}
        <div>
          <ImageSlider slides={slides} />
        </div>
        <br></br>
        <div className="flex flex-row items-center w-[90vw] ml-auto mr-auto">
          <h4 className="h-8 w-auto whitespace-nowrap font-semibold">
            Impotant Updates:
          </h4>
          <div className="w-full px-0 mt-0 ml-4">
            <Marquee2 data={notis} />
          </div>
        </div>

        <section className="px-8  pt-6 pb-2 text-center md:py-16">
          {/*  */}
          <div className="container  pt-2 mx-auto mt-10">
            <div className="flex flex-col w-full text-left">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Latest <span style={{ color: "#2563EB" }}>Updates</span>
              </h1>
              {/* Horizontal line */}

              <p className="lg:w-2/3 leading-relaxed text-base">
                Get all the latest information here
              </p>
              <div className="w-12 h-1 bg-[#2563EB] my-2"></div>
            </div>
            <div className="bg-white">
            <NewsSlider />
            </div>
            <div className="bg-white py-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex flex-col w-full text-left">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                        Recent{" "}
                        <span style={{ color: "#2563EB" }}>Announcements</span>
                      </h1>
                      {/* Horizontal line */}
                      <div className="w-12 h-1 bg-[#2563EB] my-2"></div>
                    </div>

                    {/* <div className="w-12 h-1 bg-[#2563EB] my-2"></div> */}
                    {/* <Newspaper className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" /> */}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                  <div className="lg:w-2/3">
                    <div className="bg-white rounded-lg shadow-md ">
                      <h3 className="text-2xl font-semibold mb-4">
                        Achievements
                      </h3>
                      <AchievementsSlider/>
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <div className="bg-white rounded-lg shadow-md pt-1">
                      <Notices />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full p-4"> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {updates.map((update, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg shadow-lg"
                  >
                    <div
                      className="text-white text-lg font-bold p-4 rounded-t-lg flex items-center justify-center"
                      style={{ backgroundColor: update.bgColor }}
                    >
                      
                      {update.title === "Achievements" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          className="bi bi-award w-6 h-6 mr-3 inline-block"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                        </svg>
                      )}
                      {update.title === "News & Events" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          className="bi bi-calendar w-6 h-6 mr-3 inline-block"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-1h12a1 1 0 0 1 1 1v1H1V4a1 1 0 0 1 1-1z" />
                        </svg>
                      )}
                      {update.title === "Notices" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          className="bi bi-newspaper w-6 h-6 mr-3 inline-block"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                          <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                        </svg>
                      )}
                      {update.title}
                    </div>
                    <div className="h-64 overflow-y-auto p-4 bg-gray-100 rounded-b-lg space-y-2">
                      {update.announcements.map((announcement, i) => (
                        <a
                          key={i}
                          href="#"
                          className="no-underline text-black bg-white p-2 rounded block cursor-pointer hover:bg-gray-300"
                        >
                          {announcement}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            <AboutAndVisitors/>
           
          </div>
        </section>

        {/* Testimonial section */}
        {/* Features section */}
        <section className="px-2 pt-20 md:p-10">
          <div className="mx-auto max-w-6xl space-y-8 md:space-y-20">
            {/* 1/3 and 2/3 */}

            {/* 2/3 and 1/3 */}

            {/* 1/3 and 2/3 */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3"></div>
          </div>
          <div className="flex justify-center items-center flex-col gap-10 ">
            {CellArrayData.map((item, key) => {
              return (
                <ImageGallery
                  key={key}
                  title={item.title}
                  subTitle={item.subTitle}
                  photos={item.photos}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

// export function loader() {
//   let data = { Total: 0, BCOM: 0, BBA: 0, BCA: 0 };
//   try {
//     return axios
//       .get("http://localhost:5000/students/coursewisestudents")
//       .then((res) => res.data)
//       .then(async (response) => {
//         if (!response.isSuccess) {
//           return data;
//         } else {
//           let responseData = await response.data;
//           responseData.map((row) => {
//             data.Total = row.Total;
//             switch (row.deptId.toString()) {
//               case "101":
//                 data.BCOM += row.StudentCount === null ? 0 : row.StudentCount;
//                 break;
//               case "102":
//                 data.BCOM += row.StudentCount === null ? 0 : row.StudentCount;
//                 break;
//               case "103":
//                 data.BBA += row.StudentCount === null ? 0 : row.StudentCount;
//                 break;
//               default:
//                 data.BCA += row.StudentCount === null ? 0 : row.StudentCount;
//                 break;
//             }
//             return data;
//           });
//           return data;
//         }
//       })
//       .catch((err) => {
//         return [];
//       });
//   } catch (error) {
//     console.error(error);
//     return data;
//   }
// }

async function loader() {
  const data = { Total: 12, BCOM: 4, BBA: 4, BCA: 4 };
  try {
    const response = await axios.get(
      "http://localhost:5000/students/coursewisestudents"
    );
    return response.data.data || data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return data;
  }
}
