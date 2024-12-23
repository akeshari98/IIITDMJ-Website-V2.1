import React from 'react';
import { Clock, ExternalLink } from 'lucide-react';
import { useState,useEffect } from 'react';
import axiosInstance from "../axios";
import PageHeader from '../components/PageHeader';

// const announcements = [
//   { id: 1, title: "Q4 Company Updates", date: "2024-12-20" },
//   { id: 2, title: "New Product Launch", date: "2024-12-15" },
//   { id: 3, title: "Team Building Event", date: "2024-12-10" },
//   { id: 4, title: "Holiday Schedule", date: "2024-12-05" }
// ];
 
const AnnouncementsTimeline = () => {
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

React.useEffect(() => {
  fetchData();
}, []);
const crumbs = [{crumb: "Important Announcements", link:"#"}]
  return (
    <>
        <PageHeader breadCrumbs={crumbs} title={"Important Announcements"}/>
    <div className="max-w-2xl mx-auto px-6  py-6">
      {/* <h2 className="text-2xl font-bold mb-8 text-gray-800">Announcements</h2> */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-red-200"></div>

        {/* Announcements */}
        <div className="space-y-6">
          {data.map((announcement) => (
            <div key={announcement.id} className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-white"></div>
              
              {/* Content */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {announcement.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm justify-between">
                 <div className='flex item-center'>
                 <Clock size={14} className="mr-1" />
                 {new Date(announcement.createdAt).toLocaleDateString()}
                 </div>
                  <a href={announcement.link}><ExternalLink/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default AnnouncementsTimeline;