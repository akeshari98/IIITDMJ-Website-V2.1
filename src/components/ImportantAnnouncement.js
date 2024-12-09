import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import axiosInstance from "../axios";

const Announcement = ({ text, link }) => (
  <a
    href={link}
    className="block w-full bg-red-50 hover:bg-red-100 transition-colors duration-300 py-3 px-4 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
      <span className="text-red-600 font-medium text-center text-sm sm:text-base">
        {text}
      </span>
      <ExternalLink 
        className="w-4 h-4 text-red-600 group-hover:translate-x-0.5 transition-transform" 
      />
    </div>
  </a>
);

const ImportantAnnouncement = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null);   

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("RedAnnouncements/RedAnnouncements");
      setData(response.data); 
    } catch (err) {
      console.error("Error fetching Announcements:", err);
      setError("Failed to fetch Announcements. Please try again later.");
    }
  };   

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="flex flex-col space-y-2 w-full">
      {error ? (
        <div className="text-red-500 font-semibold text-center p-4">
          {error}
        </div>
      ) : data.length > 0 ? (
        data.map(({ title, link }, index) => (
          <Announcement key={index} text={title} link={link} />
        ))
      ) : (
        <div className="text-gray-500 font-medium text-center p-4">
          No Important Announcements
        </div>
      )}
    </div>
  );
};

export default ImportantAnnouncement;