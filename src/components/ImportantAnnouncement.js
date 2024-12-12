import React, { useState, useEffect } from "react";
import { 
  AlertCircle, 
  ExternalLink, 
  RefreshCw, 
  Bell 
} from "lucide-react";
import axiosInstance from "../axios";

const AnnouncementSkeleton = () => (
  <div className="animate-pulse bg-red-50 py-3 px-4 rounded-lg">
    <div className="flex items-center justify-between">
      <div className="h-4 bg-red-200 rounded w-3/4"></div>
      <div className="h-4 w-4 bg-red-200 rounded"></div>
    </div>
  </div>
);

const Announcement = ({ text, link, createdAt }) => {
  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  return (
    <a
    href={link}
    className="block w-full bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 transition-all duration-300 py-4 px-5 rounded-lg group shadow-sm hover:shadow-md border-red-500 h-full"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center space-x-3 mb-2">
        <Bell className="w-5 h-5 text-red-600 animate-pulse" />
        <span className="text-red-800 font-semibold text-sm sm:text-base">
          {text}
        </span>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-red-500 text-xs">
          {formatTimeAgo(createdAt)}
        </span>
        <ExternalLink 
          className="w-5 h-5 text-red-600 group-hover:translate-x-0.5 transition-transform" 
        />
      </div>
    </div>
  </a>
);
};

const ImportantAnnouncement = () => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null);   
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (showLoading = true) => {
    if (showLoading) setIsLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get("RedAnnouncements/RedAnnouncements");
      setData(response.data); 
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching Announcements:", err);
      setError({
        message: "Failed to fetch Announcements",
        details: err.response?.data?.message || "Network error or server unavailable"
      });
      setIsLoading(false);
    }
  };   

  useEffect(() => {
    fetchData();
  }, []); 

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-2">
          {[1, 2, 3].map((_, index) => (
            <AnnouncementSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertCircle className="mx-auto w-12 h-12 text-red-500 mb-4" />
          <h2 className="text-xl font-bold text-red-800 mb-2">
            Announcement Fetch Failed
          </h2>
          <p className="text-red-600 mb-4">{error.message}</p>
          <p className="text-red-500 text-sm mb-4">{error.details}</p>
          <button 
            onClick={() => fetchData()}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center mx-auto"
          >
            <RefreshCw className="mr-2" /> Retry
          </button>
        </div>
      );
    }

    if (data.length === 0) {
      return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <Bell className="mx-auto w-12 h-12 text-gray-500 mb-4" />
          <h2 className="text-xl font-bold text-gray-800">
            No Important Announcements
          </h2>
          <p className="text-gray-600 mt-2">
            Check back later for updates
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data.map(({ title, link, createdAt }, index) => (
        <Announcement 
          key={index} 
          text={title} 
          link={link} 
          createdAt={createdAt}
        />
      ))}
    </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {renderContent()}
    </div>
  );
};

export default ImportantAnnouncement;