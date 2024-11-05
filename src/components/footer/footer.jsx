import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaTwitter, FaLinkedin, FaFacebook, FaAngleRight } from "react-icons/fa";
import Weather from "./weather/weather";
import logo from "../../resources/images/IIIT_logo.png";
const Footer = () => {
  return (
    <footer className="relative z-10">
      {/* Top Footer Area */}
      <div className="bg-[#15151e] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* First Column */}
            <div className="space-y-6">
              <img src={logo} alt="IIIT Logo" className="w-[70%] mb-12" />
              <div>
                <h5 className="text-white font-medium text-lg mb-6">About</h5>
                <ul className="space-y-3">
                  {['PBI', 'IIIT Act', 'RTI', 'Statuses', 'Bus Time Table', 'Organizational Chart', 'Recruitment and Promotion Norms-2016'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm flex items-center space-x-2 transition-colors duration-200">
                        <FaAngleRight className="text-xs" />
                        <span>{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-6">
              <div>
                <h5 className="text-white font-medium text-lg mb-6">Tags</h5>
                <div className="flex flex-wrap gap-2">
                  {['Classy', 'Blog', 'Creative'].map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-4 py-2 text-gray-400 text-sm border border-gray-700 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-white font-medium text-lg mb-6">Important Links</h5>
                <ul className="space-y-3">
                  {[
                    'Electronics and ICT Academy',
                    'Online Fee Payment',
                    'Annual Report',
                    'Annual Account',
                    'World e-book Library',
                    'Consortium for Educational Communication (CEC)',
                    'National Academic Depository (NAD)',
                    'Building Materials & Technology Promotion Council',
                    'Intellectual Property Policy (IPR)',
                    'Equal Opportunity Policy for Persons with Disabilities',
                    'Accessibility',
                    'Asi@Connect'
                  ].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm flex items-center space-x-2 transition-colors duration-200 pb-2 border-b border-gray-700">
                        <FaAngleRight className="text-xs" />
                        <span>{link}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Third Column */}
            <div className="space-y-6">
              <div>
              <h5 className="text-white font-medium text-lg mb-6">Tags</h5>
                <div className="flex flex-wrap gap-2">
                  {['Classy', 'Blog', 'Creative'].map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-4 py-2 text-gray-400 text-sm border border-gray-700 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-200"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
                <h5 className="text-white font-medium text-lg mb-6">Other Links</h5>
                <ul className="space-y-3">
                  {[
                    'SC/ST and Minority Cell',
                    'Women Cell',
                    'Internal Complaints Committee',
                    'Grievance Redressal Cell',
                    'Scholarship',
                    'Anti-Ragging Committee and Squad',
                    'Revista',
                    'Fit India',
                    'Azadi Ka Amrit Mahotsava (AKAM) 2022',
                    'Contacts',
                    'Press Releases',
                    'Closed Holiday 2023 | 2024',
                    'Restricted Holiday 2023 | 2024'
                  ].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm flex items-center space-x-2 transition-colors duration-200 pb-2 border-b border-gray-700">
                        <FaAngleRight className="text-xs" />
                        <span>{link}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fourth Column */}
            <div className="space-y-8">
              <div>
                <h5 className="text-white font-medium text-lg mb-6 text-center">Contact</h5>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaPhoneAlt className="text-gray-400" />
                    <span className="text-gray-400">011-2659-7135</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-gray-400" />
                    <span className="text-gray-400">info@iitd.ac.in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaGlobe className="text-gray-400" />
                    <span className="text-gray-400">www.iitd.ac.in</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 mt-6">
                  {[FaTwitter, FaLinkedin, FaFacebook].map((Icon, index) => (
                    <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
              
              <Weather />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Area */}
      <div className="bg-black text-gray-500 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1">
              <p className="text-sm">
                © All Rights Reserved by{" "}
                <a href="#" className="text-gray-400 hover:text-gray-200">
                  PDPM IIITDM Jabalpur
                </a>
              </p>
            </div>
            <div>
              <p className="text-xs">
                Maintained by{" "}
                <span className="text-gray-300">Computer Center, IIITDM Jabalpur</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;