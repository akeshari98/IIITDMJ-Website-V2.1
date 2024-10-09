import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
const achievements = [
  "Achievement 1",
  "Achievement 2",
  "Achievement 3",
  "Achievement 4",
  "Achievement 5",
  "Achievement 6",
];
const news = [
  "News 1",
  "News 2",
  "News 3",
  "News 4",
  "News 5",
  "News 6",
];
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
    bgColor: "#0384C1"
  },
  {
    title: "News & Events",
    announcements: news,
    bgColor: "#0384C1"
  },
  {
    title: "Notices",
    announcements: notice,
    bgColor: "#0384C1"
  }
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
const images = [
  college_img1,
  college_img2,
  college_img3,
  college_img4,
];
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
    photos: photos
  },
  {
    title: "A glimpse of institute activities",
    subTitle: "Students/Events/Visits",
    photos: photos
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
        <hr></hr>
        <div className="w-full px-0 mt-0">
          <Marquee data={notices} />
        </div>
        <hr></hr>
        <div className="App">
          <ImageSlider images={images} />
        </div>
        <br></br>
        <div className="flex flex-row items-center w-[90vw] ml-auto mr-auto">
          <h2 className="h-8 w-auto whitespace-nowrap font-semibold">
            Course Update:
          </h2>
          <div className="w-full px-0 mt-0 ml-4">
            <Marquee2 data={notis} />
          </div>
        </div>

        <section className="px-8 pt-6 pb-2 text-center md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center" >
              {/* ProductHunt badge - Product of the month - 1st */}

              <img className="aspect-square w-1/6" src={Logo} alt="logo" />

              <h1 className="text-center text-3xl font-semibold text-heading md:max-w-4xl lg:text-5xl xl:text-6xl">
                Indian Institute Of Informtion Techonology Design And Manufacturing Jabalpur.
              </h1>
              <p className="mt-6 max-w-3xl text-xl">
              IIIT Jabalpur fosters a vibrant and dynamic learning environment where students pursue degrees in various engineering disciplines, including Computer Science, Electronics, Mechanical, and Information Technology.
              </p>
              
              {/* <form className="mt-6 flex flex-col gap-2 sm:flex-row">
                <div>
                  <label
                    htmlFor="email"
                    className="sr-only block text-sm font-semibold text-heading">
                    Courses
                  </label>
                  <input
                    id="Courses"
                    name="courses"
                    type="text"
                    list="courses"
                    placeholder="Seach"
                    onChange={(event) => setSelectedCourse(event.target.value)}
                    className="block  w-full rounded-xl border-2 border-layer-3 bg-muted-1 px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  />
                  <datalist id="courses">
                    <option value="BTech" />
                    <option value="BDes" />
                    <option value="Mdes" />
                    <option value="MTech" />
                    <option value="Phd" />
                  </datalist>
                </div>
                <button
                  onClick={handleSearch}
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border-none bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-white dark:focus:ring-white/80">
                  Search
                </button>
              </form> */}
            </div>
            {/* <div className="mt-12 md:px-2">
              <img
                className="h-auto w-full rounded-lg"
                src={college_img1}
                alt="college"
              />
            </div> */}
          </div>
          <div className="container px-5 pt-2 mx-auto mt-10">
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Latest Updates
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Get all the latest information here
        </p>
      </div>
      <div className="w-full p-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {updates.map((update, index) => (
      <div key={index} className="border border-gray-300 rounded-lg shadow-lg">
        <div
          className="text-white text-lg font-bold p-4 rounded-t-lg flex items-center justify-center"
          style={{ backgroundColor: update.bgColor }}
        >
          {/* Conditionally render different SVG icons */}
          {update.title === "Achievements" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className="bi bi-award w-6 h-6 mr-3 inline-block"
              viewBox="0 0 16 16"
            >
              <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/>
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
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
  <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
</svg>
          )}
          {update.title}
        </div>
        <div className="h-64 overflow-y-auto p-4 bg-gray-200 rounded-b-lg space-y-2">
          {update.announcements.map((announcement, i) => (
            <a
              key={i}
              href="#"
              className="bg-white p-2 rounded block cursor-pointer hover:bg-gray-400"
            >
              {announcement}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

      <div className="flex flex-col md:flex-row w-full p-4 gap-6">
  {/* <!-- First Card (30% width) --> */}
  <div className="border border-gray-300 rounded-lg shadow-lg w-full md:w-[30%]">
  <div className="text-white text-lg font-bold p-4 rounded-t-lg flex items-center justify-center" style={{backgroundColor:"#0384C1"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        className="bi bi-mic w-6 h-6 mr-3"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
</svg>
      Director's Desk
    </div>
    <div className="p-2 bg-gray-100 rounded-b-lg flex flex-col md:flex-row">
      <div className="w-full h-64 overflow-hidden p-2 bg-gray-100 rounded-b-lg">
        <img 
          src="https://via.placeholder.com/300" 
          alt="Image for Card 2" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>

  {/* <!-- Second Card (70% width) --> */}
  <div className="border border-gray-300 rounded-lg shadow-lg w-full h-full md:w-[70%]">
  <div className="text-white text-lg font-bold p-4 rounded-t-lg flex items-center justify-center" style={{backgroundColor:"#0384C1"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="white"
        className="bi bi-people w-6 h-6 mr-3"
        viewBox="0 0 16 16"
      >
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
        </svg>
      Card 2
    </div>
    <div className="p-2 bg-gray-100 rounded-b-lg flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 overflow-hidden p-2 bg-gray-100 rounded-b-lg">
        <img 
          src="https://via.placeholder.com/300" 
          alt="Image for Card 2" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4">
        <p className="text-gray-700">
          This is the text info for the second card. On smaller screens, the content will be stacked in a column, while on larger screens it will appear side by side with the image.
        </p>
      </div>
    </div>
  </div>
</div>




    </div>
        </section>

        {/* Testimonial section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-2 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Invest in Your Future: Explore Our Undergraduate Programs
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Embark on your academic journey at IIITDMJ and explore our
                diverse range of undergraduate programs! We offer the{" "}
                <Link
                  to="/courses/bcom"
                  className="text-indigo-500 hover:underline font-semibold">
                  {" "}
                  Bachelors of Technology (B-Tech)
                </Link>{" "}
                for a comprehensive understanding of business, the{" "}
                <Link
                  to="/courses/bca"
                  className="text-indigo-500 hover:underline font-semibold">
                  Masters of Technology (M-Tech)
                </Link>{" "}
                for mastering the world of technology, and the{" "}
                <Link
                  to="/courses/bba"
                  className="text-indigo-500 hover:underline font-semibold">
                  Doctor of Philosophy (PHD){" "}
                </Link>
                to hone your leadership and management skills. Choose your path
                and become a well-equipped professional in today's dynamic
                world.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-calculator text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BCOM}
                  </h2>
                  <p className="leading-relaxed">BTech</p>
                </div>
              </div>

              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-briefcase text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BBA}
                  </h2>
                  <p className="leading-relaxed">BDes</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-laptop text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BCA}
                  </h2>
                  <p className="leading-relaxed">MTech</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-laptop text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BCA}
                  </h2>
                  <p className="leading-relaxed">MDes</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-laptop text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.BCA}
                  </h2>
                  <p className="leading-relaxed">PHD</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {StudentCount.Total}
                  </h2>
                  <p className="leading-relaxed">TOTAL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="px-2 pt-20 md:p-10">
          <div className="mx-auto max-w-6xl space-y-8 md:space-y-20">
            {/* 1/3 and 2/3 */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r  font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Dynamic Student Showcase
                </h2>
                <p className="mt-4 text-lg text-justify">
                  Implement a visually appealing and dynamic student showcase
                  prominently on the home page of IIITDMJ. This feature should
                  highlight the diverse talents and achievements of students
                  through a rotating carousel or grid display. Include
                  high-quality images, brief bios, and links to individual
                  student profiles, allowing visitors to learn more about each
                  student's academic journey, extracurricular activities, and
                  notable accomplishments. This dynamic showcase can be updated
                  regularly to reflect the evolving achievements of the student
                  body, fostering a sense of pride and community engagement.
                </p>
              </div>
              <div className="rounded-3xl bg-layer-2  p-8 md:col-span-2">
                {/* <h2 className="bg-gradient-to-r bg-clip-text text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
                  You're in control.
                </h2>
                <p className="mt-4 text-lg">
                  All of your stats are displayed in an easy to understand
                  dashboard. Make decisions with confidence.
                </p> */}
                <img className="bg-cover" src={home_img1} alt="" />
              </div>
            </div>

            {/* 2/3 and 1/3 */}
            <div className="lg:grid  flex flex-col-reverse  gap-6 lg:grid-cols-3">
              <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2">
                {/* <h2 className="bg-gradient-to-r text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
                  You're in control.
                </h2>
                <p className="mt-4 text-lg">
                  All of your stats are displayed in an easy to understand
                  dashboard. Make decisions with confidence.
                </p> */}
                <img className="" src={home_img2} alt="" />
              </div>
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Interactive Campus Map with Student Spotlights
                </h2>
                <p className="mt-4 text-lg text-justify">
                  Enhance the user experience by integrating an interactive
                  campus map on the home page that not only provides a visual
                  layout of the college grounds but also incorporates pop-ups or
                  markers linked to specific student achievements or projects.
                  When users hover over designated areas, they can access
                  information about the outstanding contributions of students
                  associated with that location. This interactive feature not
                  only showcases individual accomplishments but also allows
                  prospective students, parents, and other visitors to explore
                  the campus and discover the vibrant student community at
                  IIITDMJ.
                </p>
              </div>
            </div>

            {/* 1/3 and 2/3 */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="flex flex-col rounded-3xl bg-layer-2 p-8">
                <h2 className="bg-gradient-to-r font-sans text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                  Live Social Feed Aggregator{" "}
                </h2>
                <p className="mt-4 text-lg text-justify">
                  Foster a sense of community and real-time engagement by
                  incorporating a live social feed aggregator on the home page.
                  This feature should aggregate posts, photos, and updates from
                  various social media platforms using relevant hashtags or user
                  mentions associated with IIITDMJ. By curating content
                  directly from students' social media accounts, the website can
                  provide an authentic and dynamic glimpse into campus life.
                  This real-time feed not only showcases the students' daily
                  experiences but also promotes a sense of connectivity and
                  inclusivity among the college community. Ensure that the feed
                  is moderated to maintain a positive and supportive online
                  environment.
                </p>
              </div>
              <div className="rounded-3xl bg-layer-2 p-8 md:col-span-2">
                {/* <h2 className="bg-gradient-to-r text-2xl font-semibold text-gradient gradient-cotton-candy md:text-3xl">
                  You're in control.
                </h2>
                <p className="mt-4 text-lg">
                  All of your stats are displayed in an easy to understand
                  dashboard. Make decisions with confidence.
                </p> */}
                <img className="" src={home_img3} alt="" />
              </div>
            </div>
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
