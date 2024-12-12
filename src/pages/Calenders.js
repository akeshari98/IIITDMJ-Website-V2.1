import React, { useState, useEffect } from 'react';
import { Search, Calendar, FileText, ChevronUp, ChevronDown, ExternalLink } from 'lucide-react';
import axiosInstance from '../axios';
import PageHeader from '../components/PageHeader';
// Database structure suggestion:
/*
CREATE TABLE calendars (
  id VARCHAR(36) PRIMARY KEY,
  calendar_no VARCHAR(100) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  advertisement_date DATE NOT NULL,
  closing_date DATE NOT NULL,
  category VARCHAR(50), -- e.g., 'PROCUREMENT', 'CONSTRUCTION', 'SERVICES'
  status VARCHAR(20), -- 'ACTIVE', 'ARCHIVED', 'CANCELLED'
  type VARCHAR(50), -- 'TENDER', 'EOI', 'NIQ', etc.
  attachments JSON, -- Array of {title: string, url: string}
  department VARCHAR(100),
  estimated_value DECIMAL(15,2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
*/
const CalendarsPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [calendars, setCalendars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'release_date', direction: 'desc' });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCalendars();
  }, [activeTab]);

  const fetchCalendars = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axiosInstance.get(`/calendars/calendars`, { params: { type: activeTab } });
      
      setCalendars(response.data);
    } catch (error) {
      console.error('Error fetching calendars:', error);
      setError('Failed to load calendars. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await axiosInstance.get('/news/news'); // Fetching news data
  //       const newsItems = response.data.map(item => ({
  //         ...item,
  //         imagePublicId: item.image_url, // Assume the API returns 'image' as publicId
  //       }));
  //       setNewsData(newsItems);
  //     } catch (error) {
  //       console.error('Error fetching news:', error);
  //     }
  //   };
    
  //   fetchNews();
  // }, []);

  // Filter calendars based on search query
  const filteredCalendars = calendars.filter(calendar => 
    calendar.calendar_no.toLowerCase().includes(searchQuery.toLowerCase()) ||
    calendar.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  // Sort calendars
  const sortedCalendars = [...filteredCalendars].sort((a, b) => {
    if (sortConfig.key === 'release_date') {
      const dateA = new Date(a[sortConfig.key]);
      const dateB = new Date(b[sortConfig.key]);
      return sortConfig.direction === 'asc' ? dateA - dateB : dateB - dateA;
    }
    return sortConfig.direction === 'asc' 
      ? (a[sortConfig.key] || '').localeCompare(b[sortConfig.key] || '')
      : (b[sortConfig.key] || '').localeCompare(a[sortConfig.key] || '');
  });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

//   const getStatusBadge = (calendar) => {
//     const currentDate = new Date();
//     const closingDate = new Date(calendar.closing_date);
//     const daysRemaining = Math.ceil((closingDate - currentDate) / (1000 * 60 * 60 * 24));

//     if (calendar.status === 'ARCHIVED') {
//       return <span className="px-2 py-1 text-xs rounded bg-gray-200 text-gray-700">Archived</span>;
//     } else if (calendar.status === 'CANCELLED') {
//       return <span className="px-2 py-1 text-xs rounded bg-red-200 text-red-700">Cancelled</span>;
//     } else if (daysRemaining <= 3 && daysRemaining > 0) {
//       return <span className="px-2 py-1 text-xs rounded bg-yellow-200 text-yellow-700">Closing Soon</span>;
//     }
//     return null;
//   };

  const CalendarTable = ({ calendars }) => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 border-b text-left">
              <button 
                className="flex items-center space-x-1 font-semibold"
                onClick={() => handleSort('calendar_no')}
              >
                <span>Calendar Year</span>
                {sortConfig.key === 'calendar_no' && (
                  sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </th>
            <th className="px-6 py-3 border-b text-left">Title/Description</th>
            <th className="px-6 py-3 border-b text-left">
              <button 
                className="flex items-center space-x-1 font-semibold"
                onClick={() => handleSort('release_date')}
              >
                <span>Valid Upto</span>
                {sortConfig.key === 'release_date' && (
                  sortConfig.direction === 'asc' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </th>
            <th className="px-6 py-3 border-b text-left">Link</th>
          </tr>
        </thead>
        <tbody>
          {calendars.length === 0 ? (
            <tr>
              <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                No calendars found
              </td>
            </tr>
          ) : (
            calendars.map((calendar) => (
              <tr key={calendar.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-gray-500" />
                    <span>{calendar.calendar_no}</span>
                  </div>
                </td>
                <td className="px-6 py-4 border-b">
                  <div className="font-medium">{calendar.title}</div>
                  {/* <div className="text-sm text-gray-500">{calendar.description}</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="text-xs text-gray-400">
                      {calendar.category} | {calendar.department}
                    </div>
                    {getStatusBadge(calendar)}
                  </div> */}
                </td>
                <td className="px-6 py-4 border-b">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{formatDate(calendar.closing_date)}</span>
                  </div>
                </td>
                {/* <td className="px-6 py-4 border-b">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{formatDate(calendar.closing_date)}</span>
                  </div>
                </td> */}
                <td className="px-6 py-4 border-b">
                  <div className="flex flex-col space-y-1">
                    {calendar.attachments!=null&&JSON.parse(calendar.attachments).map((doc, index) => (
                      <a
                        key={index}
                        href={doc.url}
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{doc.title}</span>
                      </a>
                    ))}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
  const crumbs = [{crumb:"Calendars",link:"#"}]
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader breadCrumbs={crumbs} title={"Calendars"}/>
      <div className="container mx-auto px-4 py-8">       
        <div className="flex space-x-4 mb-6 border-b">
          <button
            className={`pb-2 px-4 font-medium transition-colors duration-200 ${
              activeTab === 'current'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('current')}
          >
            Current Calendars
          </button>
          <button
            className={`pb-2 px-4 font-medium transition-colors duration-200 ${
              activeTab === 'archived'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('archived')}
          >
            Archived Calendars
          </button>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search calendars by Year or Title"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {error ? (
          <div className="text-center py-8 text-red-600">
            <p>{error}</p>
            <button 
              onClick={fetchCalendars}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Try Again
            </button>
          </div>
        ) : loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <CalendarTable calendars={sortedCalendars} />
        )}
      </div>
    </div>
  );
};

export default CalendarsPage;