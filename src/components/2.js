import React, { useState, useEffect } from 'react';
import { 
  User, Book, Rocket, Globe, Mail, Phone, MapPin, FileText, 
  Linkedin, Github, GraduationCap, Building, Briefcase, Trophy,
  ScrollText, BookCopy, Lightbulb, Award, Users, CalendarRange,
  BookOpenText, Navigation, Presentation, Brain, Bookmark, 
  BookOpen, GlobeIcon, Map, Sparkles, ChevronDown, ExternalLink
} from 'lucide-react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../../axios';
import PageHeader from '../../../components/PageHeader';

// Reusable expandable section component
const ExpandableSection = ({ children, maxHeight = "24rem" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`${
          isExpanded ? "h-auto" : "h-[24rem]"
        } overflow-hidden transition-all duration-500`}
      >
        {children}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-center py-3 mt-2 text-blue-600 hover:text-blue-800 transition-colors group"
      >
        <span className="mr-2">{isExpanded ? "Show Less" : "View More"}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
          isExpanded ? "rotate-180" : ""
        } group-hover:scale-110`} />
      </button>
    </div>
  );
};

// Enhanced horizontal data display component
const DataRow = ({ label, value, icon: Icon }) => (
  <div className="flex items-center gap-4 py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors">
    {Icon && <Icon className="w-5 h-5 text-blue-500 flex-shrink-0" />}
    <div className="flex-1">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  </div>
);

// Timeline component for chronological data
const Timeline = ({ items }) => (
  <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-100">
    {items.map((item, index) => (
      <div key={index} className="relative">
        <div className="absolute left-[-2rem] w-4 h-4 rounded-full bg-blue-500 border-4 border-white" />
        <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
          {item}
        </div>
      </div>
    ))}
  </div>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-blue-500 relative group ${className}`}>
    <div className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45 bg-blue-50 opacity-50 
      transition-transform group-hover:scale-110" />
    {children}
  </div>
);

const ContentSection = ({ title, icon: Icon, children }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <h2 className="text-xl font-medium">{title}</h2>
    </div>
    <ExpandableSection>
      {children}
    </ExpandableSection>
  </div>
);

// Modified render content function with better data presentation
const renderContent = () => {
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  switch (activeTab) {
    case 'about':
      return (
        <div className="space-y-8">
          {activeSubTab === 'education' && (
            <ContentSection title="Educational Qualifications" icon={GraduationCap}>
              <Timeline items={
                data.qualifications.map((qual) => (
                  <div key={qual.id}>
                    <h4 className="font-medium text-lg text-blue-900">{qual.degree}</h4>
                    <p className="text-gray-700 mt-1">{qual.college}</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <CalendarRange className="w-4 h-4" />
                      <span>{qual.year}</span>
                    </div>
                  </div>
                ))
              } />
            </ContentSection>
          )}

          {activeSubTab === 'experience' && (
            <ContentSection title="Professional Experience" icon={Briefcase}>
              <div className="grid gap-4">
                {data.experience.map((exp, index) => (
                  <Card key={index}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-lg text-blue-900">{exp.title}</h4>
                        <p className="text-gray-700 mt-1">{exp.description}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:ml-4 flex items-center gap-2 text-gray-500 whitespace-nowrap">
                        <CalendarRange className="w-4 h-4" />
                        <span>{exp.from} - {exp.to || 'Present'}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ContentSection>
          )}
        </div>
      );

    case 'publications':
      return (
        <div className="space-y-8">
          {activeSubTab === 'research' && (
            <ContentSection title="Research Papers" icon={ScrollText}>
              <div className="grid gap-4">
                {data.publications.map((pub, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="flex flex-col">
                      <h4 className="font-medium text-lg">{pub.title_paper}</h4>
                      <div className="mt-2 flex flex-wrap gap-4">
                        <DataRow 
                          label="Authors" 
                          value={pub.authors}
                          icon={Users}
                        />
                        <DataRow 
                          label="Journal" 
                          value={`${pub.name}, ${pub.volume_no}:${pub.page_no}`}
                          icon={BookOpen}
                        />
                        <DataRow 
                          label="Year" 
                          value={pub.year}
                          icon={CalendarRange}
                        />
                      </div>
                      {pub.doi && (
                        <a 
                          href={`https://doi.org/${pub.doi}`}
                          className="mt-3 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          DOI: {pub.doi}
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </ContentSection>
          )}
        </div>
      );
    
    // ... Similar enhancements for other tabs ...
  }
};

// ... Rest of the component remains the same ...

export default ProfilePage;