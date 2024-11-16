import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios'; // Import the axios instance

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
  const [notices, setNotices] = useState([]); // State to store fetched notices
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axiosInstance.get('/notices/notices');
        setNotices(response.data); // Update notices with fetched data
        setLoading(false); // Turn off loading
      } catch (err) {
        console.error('Error fetching notices:', err);
        setError('Failed to load notices. Please try again later.');
        setLoading(false); // Turn off loading even on error
      }
    };

    fetchNotices(); // Call the function to fetch notices on component mount
  }, []);

  return (
    <div className="p-2 pt-1 rounded-lg">
      {/* <h2 className="text-2xl font-semibold mb-4">Notices</h2> */}
      {loading ? (
        <p>Loading...</p> // Display loading message
      ) : error ? (
        <p className="text-red-500">{error}</p> // Display error message if any
      ) : (
        <div className="overflow-y-auto" style={{ height: '449px' }}>
          {notices.map((item, index) => (
            <NoticeCard key={`${item.id}-${index}`} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Notices;
