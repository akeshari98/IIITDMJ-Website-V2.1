import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bell, Newspaper, Paperclip, Zap } from "lucide-react";
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
import Events from "../components/Events/Events"
import ImpotantAnnouncement from "../components/ImportantAnnouncement"
import FocusOn from "../components/FocusOn"
import Coi from "../components/Coi";
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
  const [fetchedMarquee,setFetchedMarquee] = useState('')
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
<<<<<<< HEAD
=======

  const fetchMarquee = async () =>{
    try {
      setLoading(true);
      const response = await axiosInstance.get('/Marquee/Marquee')
      setFetchedMarquee(response.data)
      setLoading(false);
    }
    catch(err){
      console.error("Error fetching events:", err);
      setError("Failed to fetch events. Please try again later.");
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchMarquee();
  },[])
  const navigate = useNavigate();
>>>>>>> 5c1b7a0c3b32b4d37f8db47a4aca1d1c7fdfbe86

  return (
    <div>
      <main>

        <div>
          <ImageSlider/>
        </div>
        <br></br>
        <div className="flex flex-row items-center w-[90vw] ml-auto mr-auto">
        <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_20px_5px] shadow-blue-500 animate-pulse mr-4 mb-2"></span>
          <h4 className="h-8 w-auto whitespace-nowrap font-semibold">
            Impotant Updates:
          </h4>
          <div className="w-full px-0 ml-4">
            
            <Marquee2 data={fetchedMarquee} />
          </div>
        </div>
<<<<<<< HEAD
        <section className="px-16  pt-6 pb-2 text-center md:py-8 md:pt-10 ">
=======
        <section className="px-8 pt-6 pb-2 text-center">
>>>>>>> 5c1b7a0c3b32b4d37f8db47a4aca1d1c7fdfbe86
          <ImpotantAnnouncement />
        </section>
        <section className="px-8  pt-6 pb-2 text-center md:py-16 ">
          {/*  */}
          <div className="container  pt-2 mx-auto -mt-10 flex flex-col gap-12">
            <div className="flex flex-col w-full text-left max-w-7xl mx-auto ">
              <div className="flex flex-col ">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                  Latest <span className="sm:text-3xl text-2xl font-medium title-font text-gray-900" style={{ color: "#2563EB" }}>Updates</span>
                </h1>
                {/* Horizontal line */}

                <p className="lg:w-2/3 leading-relaxed text-base text-gray-600">
                  Get all the latest information here 
          <span >
          <Link
            to={'/newsPage'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-2 py-1 rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors duration-300 ml-4"
          >
            View All
            {/* <ExternalLink className="w-4 h-4" /> */}
          </Link>
        </span>
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
                        <span className="sm:text-3xl text-2xl font-medium title-font" style={{ color: "#2563EB" }}>Announcements</span>
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
                      <h3 className="text-2xl font mb-4">
                        Achievements
                        <span >
          <Link
            to={'/achievementsPage'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-2 py-1 rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors duration-300 ml-6 -mt-3"
          >
            View All
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
  <span >
          <Link
            to={'/noticesPage'}
            rel="noopener noreferrer"
            className="ml-10 inline-flex items-center gap-2 bg-black text-white px-2 py-1 rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            View All
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
      </main>
    </div>
  );
}

export default Home;

