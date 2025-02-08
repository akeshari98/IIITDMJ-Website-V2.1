import React from "react";
import { Clock, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import axiosInstance from "../axios";
import PageHeader from "../components/PageHeader";

const AnnouncementsTimeline = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (showLoading = true) => {
    if (showLoading) setIsLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get(
        "RedAnnouncements/RedAnnouncements"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching Announcements:", err);
      setError({
        message: "Failed to fetch Announcements",
        details:
          err.response?.data?.message || "Network error or server unavailable",
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const crumbs = [{ crumb: "Important Announcements", link: "#" }];

  if (isLoading) {
    return (
      <>
        <PageHeader breadCrumbs={crumbs} title={"Important Announcements"} />
        <div className="flex justify-center items-center h-48">
          <p className="text-gray-600">Loading announcements...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <PageHeader breadCrumbs={crumbs} title={"Important Announcements"} />
        <div className="flex justify-center items-center h-48">
          <div className="text-red-500">
            Error: {error.message}
            <details>
              <summary>Details</summary>
              <p>{error.details}</p>
            </details>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader breadCrumbs={crumbs} title={"Important Announcements"} />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-4 h-full w-0.5 bg-gray-300"></div>

          {/* Announcements */}
          <div className="space-y-8">
            {data.map((announcement) => (
              <div
                key={announcement.id}
                className="relative pl-20 group transition-all duration-300"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-blue-500 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <Clock size={24} />
                </div>

                {/* Content */}
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">
                    {announcement.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 text-sm">
                      <span className="mr-2">
                        {new Date(announcement.createdAt).toLocaleDateString(
                          undefined,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                    <a
                      href={announcement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
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
