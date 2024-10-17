import React, { useState } from 'react';
import { Menu, X, Twitter, Linkedin, Facebook } from 'lucide-react'; // Replace these with Heroicons if needed.
import TranslateButton from "./Gtranslate";
const AccessibilityHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Jobs', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { label: 'Calendar', icon: 'M8 2v3M16 2v3M3 8h18' },
    { label: 'Tenders', icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
    { label: 'Payment Gateway', icon: 'M4 17V9h12a2 2 0 0 0 2 2v1a2 2 0 0 1-2 2H6' },
    { label: 'Recruiters/Careers', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
    { label: 'IGES', icon: 'M12 5v14M5 12h14' },
    { label: 'ICC', icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
    { label: 'GIVE', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  ];

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-1">
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <nav className="hidden lg:flex space-x-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center text-white text-sm no-underline hover:text-gray-300 transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon}
                  />
                </svg>
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social media icons and language selector */}
          <div className="flex items-center space-x-2">
            <Twitter size={16} className="text-white hover:text-gray-300 transition duration-200" />
            <Linkedin size={16} className="text-white hover:text-gray-300 transition duration-200" />
            <Facebook size={16} className="text-white hover:text-gray-300 transition duration-200" />
            <select className="bg-black text-white border-none text-sm hover:text-gray-300 transition duration-200">
              <option>हिन्दी</option>
              <option>English</option>
            </select>
            {/* <TranslateButton/> */}
            <button className="text-xs hover:text-gray-300 transition duration-200">A-</button>
            <button className="text-xs hover:text-gray-300 transition duration-200">A+</button>
            <a href="#" className="flex items-center text-sm no-underline text-white hover:text-gray-300 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="white"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              IIITDMJ Email
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="lg:hidden">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block py-2 px-4 hover:bg-blue-700 flex items-center text-sm no-underline text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="white"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={item.icon}
                />
              </svg>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default AccessibilityHeader;
