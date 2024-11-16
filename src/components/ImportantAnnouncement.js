import React from 'react';
import { ExternalLink} from 'lucide-react';
import { ChevronRight } from 'lucide-react';
const Announcement = ({ text, link }) => (
    <a 
      href={link} 
      className="block w-full bg-red-50 hover:bg-red-100 transition-colors duration-300 py-3 px-4 group"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span className="text-red-600 font-medium">{text}</span>
        <ExternalLink className="w-4 h-4 text-red-600 group-hover:translate-x-0.5 transition-transform" />
      </div>
    </a>
  );
const ImportantAnnouncement = () => {
    const ImportantAnnouncements =[ {
        text: "B-Tech Admissions started.",
        to: "#",
      },
      {
        text: "M-Tech Admissions started.",
        to: "#",
      },
      {
        text: "PHD Admissions started, Hurry Up deadline closing on 29/09/2023",
        to: "#",
      },]
  return (
    <div className='flex '>
            {ImportantAnnouncements.map(({text,to})=> {
               return( <Announcement text={text} link = {to} />)
            })}
    </div>
  );
};


export default ImportantAnnouncement;