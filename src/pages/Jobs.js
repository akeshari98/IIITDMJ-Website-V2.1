import React, { useState } from 'react';
import { Search, Calendar, FileText, ChevronUp, ChevronDown, ExternalLink, Building2, User } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const JobAdvertisementPage = () => {
  // Dummy data for job advertisements
  const dummyJobAdvertisements = [
    {
      id: '1',
      title: 'Assistant Professor Grade-I (Level-12)',
      department: 'Computer Science & Engineering',
      advertisementNo: '01/2023',
      advertisementDate: '2023-10-04',
      applicationOpenDate: '2023-10-09',
      positions: [
        { level: 'Level-12', type: 'Regular', vacancies: 5 },
        { level: 'Level-11', type: 'Contract', vacancies: 3 },
        { level: 'Level-10', type: 'Contract', vacancies: 2 }
      ],
      discipline: ['Design', 'Computer Science'],
      status: 'Open',
      shortlistedCandidates: [
        { discipline: 'Design', levels: ['Level-12', 'Level-11', 'Level-10'] },
        { discipline: 'Computer Science', levels: ['Level-12', 'Level-11', 'Level-10'] }
      ],
      importantInstructions: [
        'Apply Online via Samarth Portal',
        'Candidates must follow all guidelines',
        'Complete application before closing date'
      ]
    },
    {
      id: '2',
      title: 'Assistant Professor Grade-II (Level-11)',
      department: 'Electrical Engineering',
      advertisementNo: '08/2023',
      advertisementDate: '2023-10-04',
      applicationOpenDate: '2023-10-15',
      positions: [
        { level: 'Level-11', type: 'Contract', vacancies: 4 },
        { level: 'Level-10', type: 'Regular', vacancies: 2 }
      ],
      discipline: ['Electrical', 'Electronics'],
      status: 'Upcoming',
      shortlistedCandidates: [],
      importantInstructions: [
        'Detailed application process on official website',
        'Qualification criteria will be strictly enforced'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState('current');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'advertisementDate', direction: 'desc' });

  // Filtering and sorting logic
  const filteredJobs = dummyJobAdvertisements.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.advertisementNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const JobAdvertisementCard = ({ job }) => (
    <div className="bg-white border rounded-lg p-6 mb-4 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
          <div className="flex items-center space-x-2 text-gray-600 mt-2">
            <Building2 className="w-5 h-5" />
            <span>{job.department}</span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-sm text-gray-500">
            Advertisement No: {job.advertisementNo}
          </div>
          <div className="flex items-center space-x-2 text-gray-500 mt-1">
            <Calendar className="w-4 h-4" />
            <span>Date: {job.advertisementDate}</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Position Details</h3>
          {job.positions.map((pos, index) => (
            <div key={index} className="flex items-center space-x-2 mb-1">
              <User className="w-4 h-4 text-gray-500" />
              <span>{pos.level} - {pos.type} ({pos.vacancies} vacancies)</span>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">Disciplines</h3>
          <div className="flex flex-wrap gap-2">
            {job.discipline.map((disc, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
              >
                {disc}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700 mb-2">Important Instructions</h3>
        <ul className="list-disc list-inside text-gray-600">
          {job.importantInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

      {job.shortlistedCandidates.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold text-gray-700 mb-2">Shortlisted Candidates</h3>
          {job.shortlistedCandidates.map((category, index) => (
            <div key={index} className="mb-2">
              <p className="font-medium">{category.discipline} Discipline</p>
              <div className="flex space-x-2">
                {category.levels.map((level, levelIndex) => (
                  <span 
                    key={levelIndex} 
                    className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const crumbs = [{ crumb: "Job Advertisements", link: "#" }];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader breadCrumbs={crumbs} title={"Job Advertisements"} />
      
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
            Current Job Advertisements
          </button>
          <button
            className={`pb-2 px-4 font-medium transition-colors duration-200 ${
              activeTab === 'archived'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('archived')}
          >
            Archived Job Advertisements
          </button>
        </div>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search job advertisements by title, department, or advertisement number..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div>
          {filteredJobs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No job advertisements found
            </div>
          ) : (
            filteredJobs.map(job => (
              <JobAdvertisementCard key={job.id} job={job} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JobAdvertisementPage;