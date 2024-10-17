import React, { useState } from 'react';

const noticeItems = [
  {
    id: 1,
    title: "Important Campus Update",
    excerpt: "All classes will be conducted online next week due to maintenance work.",
    date: "2024-10-15"
  },
  {
    id: 2,
    title: "Library Hours Extended",
    excerpt: "The main library will now be open 24/7 during final exam week.",
    date: "2024-10-14"
  },
  {
    id: 3,
    title: "New Course Offerings",
    excerpt: "Registration for next semester's new AI and Ethics course is now open.",
    date: "2024-10-13"
  },
  {
    id: 4,
    title: "Campus Job Fair",
    excerpt: "Don't miss the annual job fair next Monday in the Student Union building.",
    date: "2024-10-12"
  },
  // Add more notice items as needed
];

const NoticeCard = ({ title, excerpt, date }) => (
  <div className="bg-gray-90 shadow-md p-4 mb-4 border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-semibold line-clamp-1 text-left">{title}</h3>
      <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{new Date(date).toLocaleDateString()}</span>
    </div>
    <p className="text-sm text-gray-600 line-clamp-2 text-left">{excerpt}</p>
  </div>
);

const Notices = () => {
  const [notices] = useState([...noticeItems]); // No need for dynamic loading now

  return (
    <div className="p-2 pt-1 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Notices</h2>
      <div
        className="overflow-y-auto"
        style={{ height: '443px' }} // Adjust this height to match your layout
      >
        {notices.map((item, index) => (
          <NoticeCard key={`${item.id}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Notices;
