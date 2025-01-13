import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { Clock } from 'lucide-react';

const NoticeCard = ({ title, excerpt, createdAt, link }) => (
  <a 
    href={link} // Redirect to the link when clicked
    target="_blank" // Open in a new tab
    rel="noopener noreferrer" // Security feature for opening links
    className="block bg-gray-90 shadow-md p-4 mb-4 border border-gray-300 hover:shadow-lg transition-shadow duration-300 no-underline" // Remove underline
    style={{ textDecoration: 'none', color: 'inherit' }} // Additional styles to ensure no link styling
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg  line-clamp-1 text-left">{title}</h3>
      <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
        {new Date(createdAt).toLocaleDateString()}
      </span>
    </div>
    <p className="text-sm text-gray-600 line-clamp-2 text-left">{excerpt}</p>
  </a>
);

const Notices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('current');
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axiosInstance.get(`/notices/notices`, { params: { type: activeTab } });
        setNotices(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching notices:', err);
        setError('Failed to load notices. Please try again later.');
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-500">
        Loading notices...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-2">
      {/* Mobile: Horizontal Scroll */}
      <div className="block md:hidden">
        <div 
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {notices.map((item, index) => (
            <div key={`${item.id}-${index}`} className="first:ml-2 last:mr-2">
              <NoticeCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Medium and Large: Vertical Scroll */}
      <div className="hidden md:block">
        <div 
          className="space-y-4 overflow-y-auto h-[398px] pr-2"
          style={{ scrollbarWidth: 'thin' }}
        >
          {notices.map((item, index) => (
            <NoticeCard key={`${item.id}-${index}`} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;