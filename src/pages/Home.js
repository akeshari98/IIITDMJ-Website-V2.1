import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  ChevronRight,
  MoveRight,
  Newspaper,
  Paperclip,
  Zap,
} from "lucide-react";
import axios from "axios";
import axiosInstance from "../axios";
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
import Events from "../components/Events/Events";
import ImpotantAnnouncement from "../components/ImportantAnnouncement";
import FocusOn from "../components/FocusOn";
import Coi from "../components/Coi";
import { ArrowRightCircleIcon } from "lucide-react";
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
function Home() {
  const [fetchedEvents, setFetchedEvents] = useState([]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchedMarquee, setFetchedMarquee] = useState("");
  const fetchEvents = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axiosInstance.get("events/events"); // Adjust URL as needed
      setFetchedEvents(response.data); // Set the fetched events data
      setLoading(false);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to fetch events. Please try again later.");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEvents(); // Call fetch on component load
  }, []);

  const fetchMarquee = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/Marquee/Marquee");
      setFetchedMarquee(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to fetch events. Please try again later.");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMarquee();
  }, []);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <main >
        <div className="relative">
          <ImageSlider/>
        </div>
        <br></br>
        <div className="bg-white w-[95vw] mx-auto rounded-2xl shadow-2xl relative -top-24 pt-12"
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'saturate(200%) blur(30px)',
    boxShadow: 'rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem',
  }}>
        <section className="flex flex-row items-center w-[90vw] ml-auto mr-auto">
          <div className="w-full px-0 ml-4">
            <Marquee2 data={fetchedMarquee} />
          </div>
        </section>
        <section className="px-8 pt-6 pb-2 text-center">
          <ImpotantAnnouncement />
        </section>
        <section className="px-8 pt-20 pb-2 text-center md:py-16 ">
          {/*  */}
          <div className="container  pt-2 mx-auto -mt-10 flex flex-col gap-12">
            <div className="flex flex-col w-full text-left max-w-7xl mx-auto ">
              <div className="flex flex-col ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 flex gap-3  item-center">
                  Latest{" "}
                  <span
                    className="sm:text-3xl text-2xl font-medium title-font text-gray-900"
                    style={{ color: "#2563EB" }}
                  >
                    Updates{" "}
                  </span>
                  <Link
                    to={"/newsPage"}
                    rel="noopener noreferrer"
                    style={{ color: "#2563EB" }}
                    className="inline-flex items-center gap-2 text-black rounded-lg text-sm font-medium transition-colors  ml-1 "
                  >
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <ChevronRight
                        size={24}
                        className={`transition-transform transform ${
                          isHovered
                            ? "translate-x-2 opacity-0"
                            : "translate-x-0 opacity-100"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium transition-opacity ${
                          isHovered ? "opacity-100 -translate-x-7" : "opacity-0 -translate-x-7"
                        }`}
                      >
                        View More
                      </span>
                    </div>
                    {/* <ExternalLink className="w-4 h-4" /> */}
                  </Link>
                </h1>
                {/* Horizontal line */}

                <p className="lg:w-2/3 leading-relaxed text-base text-gray-600">
                  Get all the latest information here
                  <span></span>
                </p>
                <div className="w-12 h-1 bg-[#2563EB] my-2"></div>
              </div>
              <div className="bg-white py-4 w-full">
                <NewsSlider />
              </div>
            </div>
            <div className="bg-white py-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex flex-col w-full text-left">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                        Recent{" "}
                        <span
                          className="sm:text-3xl text-2xl font-medium title-font"
                          style={{ color: "#2563EB" }}
                        >
                          Announcements
                        </span>
                      </h1>
                      <p className="lg:w-2/3 leading-relaxed text-base text-gray-600">
                        Campus Bulletins
                      </p>
                      {/* Horizontal line */}
                      <div className="w-12 h-1 bg-[#2563EB] my-2"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                  <div className="lg:w-2/3">
                    <div className="bg-white rounded-lg shadow-md ">
                      <h3 className="text-2xl font mb-4 flex item-center justify-center">
                        Achievements
                        <span>
                         <Link
                    to={"/achievementsPage"}
                    rel="noopener noreferrer"
                    style={{ color: "#2563EB" }}
                    className="inline-flex items-center gap-2 text-black rounded-lg text-sm font-medium transition-colors  ml-1 "
                  >
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <ChevronRight
                        size={24}
                        className={`transition-transform transform ${
                          isHovered
                            ? "translate-x-2 opacity-0"
                            : "translate-x-0 opacity-100"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium transition-opacity ${
                          isHovered ? "opacity-100 -translate-x-7" : "opacity-0 -translate-x-7"
                        }`}
                      >
                        View More
                      </span>
                    </div>
                    {/* <ExternalLink className="w-4 h-4" /> */}
                  </Link>
                        </span>
                      </h3>
                      <AchievementsSlider />
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <h3 className="text-2xl font mb-4 flex  justify-center">
                      Notices
                      <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_20px_5px] shadow-blue-500 animate-pulse ml-4 mt-2.5"></span>
                      <span>
                      <Link
                    to={"/noticespage"}
                    rel="noopener noreferrer"
                    style={{ color: "#2563EB" }}
                    className="inline-flex items-center gap-2 text-black rounded-lg text-sm font-medium transition-colors  ml-1 "
                  >
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <ChevronRight
                        size={24}
                        className={`transition-transform transform ${
                          isHovered
                            ? "translate-x-2 opacity-0"
                            : "translate-x-0 opacity-100"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium transition-opacity ${
                          isHovered ? "opacity-100 -translate-x-7" : "opacity-0 -translate-x-7"
                        }`}
                      >
                        View More
                      </span>
                    </div>
                    {/* <ExternalLink className="w-4 h-4" /> */}
                  </Link>
                      </span>
                    </h3>

                    <div className="bg-white rounded-lg shadow-md pt-1">
                      <Notices />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <AboutAndVisitors />
          </div>
        </section>
        <section className="px-2 pt-20 md:p-10">
          <FocusOn />
        </section>
        <section className="px-2 pt-20 md:p-10">
          <Coi />
        </section>
        <section className="px-2 pt-20 md:p-10">
          {/* if (loading) return <p>Loading events...</p>;
        if (error) return <p>{error}</p>; */}
          <Events events={fetchedEvents} />
        </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
