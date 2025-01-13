import React, { useState } from 'react';
import { Search, Calendar, FileText, ExternalLink, User, Bell, AlertCircle, Building2, ChevronRight, Info, Link } from 'lucide-react';
import PageHeader from '../components/PageHeader';
const JobAdvertisementPage = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [searchQuery, setSearchQuery] = useState('');

  // Updated dummy data structure with random info section
  const dummyAdverts = {
    current: [
      {
        id: 1,
        title: 'ADVERTISEMENT FOR THE FACULTY POSITIONS',
        date: '2023-10-04',
        applicationStart: '2023-10-09',
        status: 'active',
        positions: [
          {
            title: 'Assistant Professor Grade-I',
            level: 'Level-12',
            type: 'Regular',
            advertNo: '06/2023',
            department: 'Design'
          },
          {
            title: 'Assistant Professor Grade-II',
            level: 'Level-11',
            type: 'Contract',
            advertNo: '13/2023',
            department: 'Design'
          }
        ],
        shortlistedCandidates: {
          'Design': ['Level-12', 'Level-11', 'Level-10'],
          'CSE': ['Level-12', 'Level-11', 'Level-10']
        },
        links: [
          { title: 'Apply Online', url: '#', important: true },
          { title: 'General Instructions', url: '#' }
        ],
        // New random info section
        additionalInfo: [
          {
            text: "General Instructions for applying on Samarth portal",
            hasLink: true,
            url: "#",
            type: "instruction"
          },
          {
            text: "Important Notice regarding document verification",
            hasLink: true,
            url: "#",
            type: "notice"
          },
          {
            text: "Candidates shortlisted for Design Level-12 interview schedule",
            hasLink: true,
            url: "#",
            type: "schedule"
          },
          {
            text: "Last date extended till 31st December 2023",
            hasLink: false,
            type: "update"
          }
        ]
      }
    ],
    archived: []
  };

  const InfoTypeIcon = ({ type }) => {
    switch (type) {
      case 'instruction':
        return <FileText className="w-4 h-4" />;
      case 'notice':
        return <AlertCircle className="w-4 h-4" />;
      case 'schedule':
        return <Calendar className="w-4 h-4" />;
      case 'update':
        return <Info className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  const JobCard = ({ advert }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
      {/* Existing header section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">{advert.title}</h2>
            <div className="flex items-center space-x-4 mt-2 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Posted: {advert.date}</span>
              </div>
              {advert.applicationStart && (
                <div className="flex items-center">
                  <Bell className="w-4 h-4 mr-2" />
                  <span>Applications Open: {advert.applicationStart}</span>
                </div>
              )}
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm ${
            advert.status === 'active' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {advert.status === 'active' ? 'Active' : 'Archived'}
          </div>
        </div>

        {/* Random Information Section */}
        {advert.additionalInfo && advert.additionalInfo.length > 0 && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <Info className="w-5 h-5 mr-2 text-blue-600" />
              Additional Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advert.additionalInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`flex items-start p-3 rounded-md border border-gray-100 bg-white ${
                    info.hasLink ? 'hover:shadow-md transition-shadow cursor-pointer' : ''
                  }`}
                  onClick={() => info.hasLink && window.open(info.url, '_blank')}
                >
                  <div className={`mr-3 ${
                    info.type === 'notice' ? 'text-yellow-600' :
                    info.type === 'instruction' ? 'text-blue-600' :
                    info.type === 'schedule' ? 'text-green-600' :
                    'text-gray-600'
                  }`}>
                    <InfoTypeIcon type={info.type} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800">{info.text}</p>
                  </div>
                  {info.hasLink && (
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

       {/* Positions */}
       <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center">
            <User className="w-5 h-5 mr-2" />
            Available Positions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advert.positions.map((position, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900">{position.title}</h4>
                <div className="mt-2 space-y-1 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    {position.department}
                  </div>
                  <div>Level: {position.level}</div>
                  <div>Type: {position.type}</div>
                  <div>Advert No: {position.advertNo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shortlisted Candidates */}
        {advert.shortlistedCandidates && Object.keys(advert.shortlistedCandidates).length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Shortlisted Candidates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(advert.shortlistedCandidates).map(([dept, levels]) => (
                <div key={dept} className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900">{dept}</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {levels.map((level, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Important Links */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Links</h3>
          <div className="flex flex-wrap gap-3">
            {advert.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  link.important
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  const crumbs = [{crumb:"Jobs Portal",link:"#"}]
  return (
    <div className="min-h-screen bg-gray-50">
       <PageHeader  breadCrumbs={crumbs} title={"Jobs Portal"}/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Job Advertisements</h1>
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-200">
          <button
            className={`pb-2 px-4 font-medium transition-colors duration-200 ${
              activeTab === 'current'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('current')}
          >
            Current Openings
          </button>
          <button
            className={`pb-2 px-4 font-medium transition-colors duration-200 ${
              activeTab === 'archived'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('archived')}
          >
            Archived Positions
          </button>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search positions, departments, or information..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {dummyAdverts[activeTab].map(advert => (
            <JobCard key={advert.id} advert={advert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobAdvertisementPage;