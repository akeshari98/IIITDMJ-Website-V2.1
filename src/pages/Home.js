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
import Events from "../components/Events/Events"

const events = [
  {
    id: "1",
    title: "Annual Tech Symposium 2024",
    slug: "annual-tech-symposium-2024",
    description: "Join us for a day of cutting-edge technology discussions and networking opportunities with industry leaders.",
    date: "2024-12-15",
    coverImage: college_img1
  },
  {
    id: "2",
    title: "Cultural Festival 2024",
    slug: "cultural-festival-2024",
    description: "Experience diverse performances, art exhibitions, and cultural exchanges from around the world.",
    date: "2024-11-20",
    coverImage: college_img2
  },
  {
    id: "3",
    title: "Sports Meet 2024",
    slug: "sports-meet-2024",
    description: "Annual inter-college sports competition featuring multiple sporting events and championships.",
    date: "2024-10-05",
    coverImage: college_img3
  },
  {
    id: "4",
    title: "Research Conference",
    slug: "research-conference-2024",
    description: "International conference showcasing groundbreaking research across various disciplines.",
    date: "2024-09-25",
    coverImage: college_img4
  },
  {
    id: "5",
    title: "Alumni Reunion 2024",
    slug: "alumni-reunion-2024",
    description: "Annual gathering of alumni to celebrate achievements and strengthen the institute's network.",
    date: "2024-08-30",
    coverImage: college_img1
  }
];

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
  const [fetchedEvents, setFetchedEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchEvents = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get("http://localhost:5000/events/events"); // Adjust URL as needed
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
  const [StudentCount, setStudentCount] = useState({
    Total: 12,
    BTech: 4,
    BDes: 4,
    MTech: 4,
    MDes: 4,
    PHD: 12,
  });


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
  
        <div>
          <ImageSlider slides={slides} />
        </div>
        <br></br>
        <div className="flex flex-row items-center w-[90vw] ml-auto mr-auto">
          <h4 className="h-8 w-auto whitespace-nowrap font-semibold">
            Impotant Updates:
          </h4>
          <div className="w-full px-0 ml-4"> 
            <Marquee2 data={notis} />
          </div>
        </div>

        <section className="px-8  pt-6 pb-2 text-center md:py-16 ">
          {/*  */}
          <div className="container  pt-2 mx-auto -mt-10">
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
            
            <AboutAndVisitors/>
           
          </div>
        </section>
        <section className="px-2 pt-20 md:p-10">
        {/* if (loading) return <p>Loading events...</p>;
        if (error) return <p>{error}</p>; */}
         <Events events={fetchedEvents}/>
        </section>
      </main>
    </div>
  );
}

export default Home;

