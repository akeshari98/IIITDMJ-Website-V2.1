import React, { useState, useEffect,Suspense } from "react";
import { Link} from "react-router-dom";
import {
  ChevronRight,
} from "lucide-react";
import axiosInstance from "../axios";
import Marquee2 from "./Marquee2";
import ImageSlider from "./ImageSlider";
import AboutAndVisitors from "../components/AboutAndVisitor";
import Events from "../components/Events/Events";
import ImpotantAnnouncement from "../components/ImportantAnnouncement";
import FocusOn from "../components/FocusOn";
import Coi from "../components/Coi";
import NewsSliderSkeleton from "../components/Skeletons/NewsSkeleton";
const NewsSlider = React.lazy(() => import('../components/NewsSlider/NewsSlider'));
const AchievementsSlider = React.lazy(() => import('../components/AchievementsSlider'));
const Notices = React.lazy(() => import('../components/Notices'));
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
  const [activeTab, setActiveTab] = useState('current');
  const fetchMarquee = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/Marquee/Marquee", {params: {type:activeTab}});
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
  const [isHovered, setIsHovered] = useState(false);
  const SectionHeader = ({ 
    title, 
    linkTo, 
    notificationDot = false 
  }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <h3 className="text-2xl  mb-4 flex items-center">
        {title}
        {notificationDot && (
          <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_20px_5px] shadow-blue-500 animate-pulse ml-4 mt-2.5"></span>
        )}
        <span className="inline-flex items-center">
          <Link
            to={linkTo}
            rel="noopener noreferrer"
            style={{ color: "#2563EB" }}
            className="inline-flex items-center gap-2 text-black rounded-lg text-sm font-small transition-colors ml-1"
          >
            <div
              className="flex items-center gap-2 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* <ChevronRight
                size={24}
                className={`transition-transform transform ${
                  isHovered
                    ? "translate-x-2 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              /> */}
              <span
                className={`text-sm font-medium transition-opacity bg-blue-500 text-white px-2 rounded-sm ml-3`} 
              >
                View All
              </span>
            </div>
          </Link>
        </span>
      </h3>
    );
  };
  const AchievementsAndNoticesLayout = () => {
    return (
      <div className="flex flex-col lg:flex-row space-y-24 lg:space-y-0 lg:space-x-6">
        {/* Achievements Section */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <SectionHeader 
              title="Achievements" 
              linkTo="/achievementsPage"
            />
            <AchievementsSlider />
          </div>
        </div>
  
        {/* Notices Section */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg w-[100vw] md:w-auto md:shadow-md overflow-hidden ">
            <SectionHeader 
              title="Notices" 
              linkTo="/noticespage"
            />
            <Notices />
          </div>
        </div>
      </div>
    );
  };
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
        <section className="px-2 pt-20 pb-2 text-center">
          <ImpotantAnnouncement />
        </section>
        <section className="px-2 pt-20 pb-2 text-center ">
          {/*  */}
          <div className="container  pt-2 mx-auto -mt-10 flex flex-col gap-12">
            <div className="flex flex-col w-full text-left max-w-[80vw] mx-auto ">
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
                    className="inline-flex items-center gap-2 text-black rounded-lg text-sm font-medium transition-colors  "
                  >
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      
                    
                         <span
                         className={`text-sm font-medium transition-opacity bg-blue-500 text-white px-2 rounded-sm`} 
                       >
                         View All
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
              <Suspense fallback={NewsSliderSkeleton}>
                <NewsSlider />
               </Suspense> 
              </div>
            </div>
            <div className="bg-white py-4">
              <div className="max-w-[80vw] mx-auto">
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

                <AchievementsAndNoticesLayout/>
              </div>
            </div>

            <AboutAndVisitors />
          </div>
        </section>
        <section className="mt-[3vh] px-2 pt-15 md:p-10 bg-blue-10">
           <FocusOn /> 
        </section>
        <section className="px-2 pt-10 md:p-10 md:pt-0 bg-blue-10">
          <Coi />
        </section>
        <section className="pt-20 md:p-10 bg-blue-10">
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
