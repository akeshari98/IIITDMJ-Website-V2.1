import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Briefcase, 
  Calendar, 
  FileText, 
  CreditCard, 
  Users, 
  PlusSquare, 
  LifeBuoy, 
  Send,
  Mail,
  LanguagesIcon,
  School
} from 'lucide-react';

const AccessibilityHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Jobs', icon: Briefcase, link:'' },                // Jobs icon
    { label: 'Calendar', icon: Calendar,link:'' },             // Calendar icon
    { label: 'Tenders', icon: FileText,link:'' },              // Document icon for Tenders
    { label: 'Payment Gateway', icon: CreditCard,link:'' },    // Payment icon
    { label: 'Recruiters/Careers', icon: Users,link:'' },      // Users icon for Recruiters
    { label: 'Rajbhasha', icon: LanguagesIcon,link:'' },               // Plus icon for IGES
    { label: 'Ordinance', icon: LifeBuoy,link:'' },                  // Support icon for ICC
    { label: 'QIP Program', icon: School,link:'' },                     // Send icon for GIVE
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
                className="flex items-center text-white text-xs font-bold uppercase no-underline hover:text-gray-300 transition duration-200"

              >
                {/* <item.icon size={16} className="mr-1 text-white" /> */}
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
            <button className="text-xs hover:text-gray-300 transition duration-200">A-</button>
            <button className="text-xs hover:text-gray-300 transition duration-200">A+</button>
            <a href="#" className="flex items-center text-sm no-underline text-white hover:text-gray-300 transition duration-200">
              <Mail size={16} className="mr-1" />
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
              <item.icon size={16} className="mr-2 text-white" />
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default AccessibilityHeader;
