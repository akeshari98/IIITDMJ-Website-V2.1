import React, { useState, useEffect } from "react";
// import { ExternalLink } from "lucide-react";
import axiosInstance from "../axios";

const Announcement = ({ text, link }) => (
  <a
    href={link}
    className="block w-full bg-red-50 hover:bg-red-100 transition-colors duration-300 py-3 px-4 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
      <span className="text-red-600 font-medium">{text}</span>
      {/* <ExternalLink className="w-4 h-4 text-red-600 group-hover:translate-x-0.5 transition-transform" /> */}
    </div>
  </a>
);

const ImportantAnnouncement = () => {
  const [data, setData] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("RedAnnouncements/RedAnnouncements");
      setData(response.data); // Ensure you access the correct property for the announcements array
    } catch (err) {
      console.error("Error fetching Announcements:", err);
      setError("Failed to fetch Announcements. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Use `useEffect` for fetching data on component mount

  return (
    <div className="text-red-500 font-semibold flex flex-col md:flex-row justify-center items-center">

      {error ? (
        <div className="text-red-500 font-semibold">{error}</div>
      ) : data.length > 0 ? (
        data.map(({ title, link }, index) => (
          <Announcement key={index} text={title} link={link} />
        ))
      ) : (
        <div className="text-gray-500 font-medium">No Important Announcements</div>
      )}
    </div>
  );
};

export default ImportantAnnouncement;
