import React, { useState } from "react";
import { 
  AlertCircle, 
  ExternalLink, 
  RefreshCw, 
  Bell,
  X,
} from "lucide-react";
import axiosInstance from "../axios";
import { Link } from "react-router-dom";
const AnnouncementSkeleton = () => (
  <div className="animate-pulse bg-red-50 py-3 px-4 rounded-lg">
    <div className="flex items-center justify-between">
      <div className="h-4 bg-red-200 rounded w-3/4"></div>
      <div className="h-4 w-4 bg-red-200 rounded"></div>
    </div>
  </div>
);

function Modal({ isOpen, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-opacity z-50
        ${isOpen ? "visible bg-black/20 opacity-100" : "invisible opacity-0"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          fixed bg-white rounded-xl shadow p-6 transition-transform
          ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
const Announcement = ({ text, link, createdAt, isInModal = false }) => {
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
      className={`block transition-all duration-300 rounded-lg group ${
        isInModal 
          ? 'bg-white hover:bg-gray-50 shadow-sm hover:shadow p-6 mb-4'
          : 'bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 p-4'
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-start space-x-3">
          <Bell className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
          <span className={`text-red-800 font-medium ${isInModal ? 'text-base' : 'text-sm line-clamp-2'}`}>
            {text}
          </span>
        </div>
        <div className="flex items-center justify-between mt-4">
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  React.useEffect(() => {
    fetchData();
  }, []); 

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, index) => (
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
            <RefreshCw className="mr-2 w-4 h-4" /> Retry
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

    const displayedAnnouncements = data.slice(0, 4);
    const hasMoreAnnouncements = data.length > 4;

    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedAnnouncements.map(({ title, link, createdAt }, index) => (
            <Announcement 
              key={index} 
              text={title} 
              link={link} 
              createdAt={createdAt}
            />
          ))}
        </div>
        
        {hasMoreAnnouncements && (
          <Link
            to='/allImportantAnnouncements'
            className="mt-6 mx-auto block bg-red-100 text-red-600 px-6 py-2 rounded-full hover:bg-red-200 transition-colors font-medium w-[20vw]"
          >
            See All Announcements
          </Link>
        )}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              All Announcements
            </h2>
            <div className="space-y-4">
              {data.map(({ title, link, createdAt }, index) => (
                <Announcement 
                  key={index} 
                  text={title} 
                  link={link} 
                  createdAt={createdAt}
                  isInModal={true}
                />
              ))}
            </div>
          </div>
        </Modal>
      </>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {renderContent()}
    </div>
  );
};

export default ImportantAnnouncement;