import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  Book, 
  Award, 
  UserCheck, 
  Building2,
  Search,
  ChevronDown,
  BookOpen,
  School,
  Briefcase
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const QIPPage = () => {
  const [activeTab, setActiveTab] = useState('current');

  const currentStudents = [
    { name: 'Garima Tiwari', batch: 'August 2022', branch: 'ECE' },
    { name: 'Ranjeet Pratap Singh', batch: 'August 2022', branch: 'ECE' }
  ];

  const passoutStudents = [
    { name: 'MADHURI GOKHALE', batch: '2019', branch: 'CSE' },
    { name: 'DEVI SINGH RAWAT', batch: '2019', branch: 'ME' },
    { name: 'GANGARAM MANDALOI', batch: '2019', branch: 'ME' }
  ];

  const undergoingStudents = [
    { name: 'Ms. Kanchan Cecil', batch: 'August-2014', branch: 'Electronics & Communication Engineering' },
    { name: 'Ms. Preeti Jain', batch: 'August-2015', branch: 'Electronics & Communication Engineering' },
    { name: 'Mr. Ramesh Chandra Belwal', batch: 'August-2016', branch: 'Computer Science & Engineering' },
    { name: 'Mr. Hemendra Singh Patel', batch: 'August-2018', branch: 'Computer Science & Engineering' },
    { name: 'Mr. Ashish Choubey', batch: 'August-2018', branch: 'Electronics & Communication Engineering' }
  ];

  const programs = [
    { 
      title: "Ph.D Programme under QIP", 
      icon: GraduationCap,
      link:"https://www.iiitdmj.ac.in/downloads/QIP%20DATA%2006.02.2020.pdf",
      description: "Comprehensive doctoral program focused on quality improvement in engineering education."
    },
    { 
      title: "Ph.D/M.Tech Admission 2018-2019", 
      icon: School,
      link:"#",
      description: "Advanced degree programs offering specialized research opportunities."
    },
    { 
      title: "Application Form for STC AI", 
      icon: BookOpen,
      link:"https://www.iiitdmj.ac.in/downloads/Application_Form_STC_AI.pdf",
      description: "Short Term Course in Artificial Intelligence and its applications."
    }
  ];

  const StudentTable = ({ students }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Batch</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Branch</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.batch}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  const crumbs = [{crumb:"QIP Portal",link:"#"}]
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
           <PageHeader  breadCrumbs={crumbs} title={"QIP Portal"}/>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white-600 to-white-800 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8" />
              <h1 className="text-4xl font-bold">Quality Improvement Programme</h1>
            </div>
            <p className="text-black-100 max-w-3xl">
              Enhancing academic excellence through research and innovation in engineering education
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5" />
                <span className="text-sm">
                  QIP Coordinator: <span className="font-semibold">Dr. Trivesh Kumar</span>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5" />
                <span className="text-sm">Assistant Professor, Electronics and Communication Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Programs Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Available Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <a href={program.link} key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <program.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{program.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Students Section */}
        <section>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 sm:mb-0">Student Directory</h2>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveTab('current')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'current' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Current Students
                </button>
                <button 
                  onClick={() => setActiveTab('passout')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'passout' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Alumni
                </button>
                <button 
                  onClick={() => setActiveTab('ongoing')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'ongoing' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Ongoing
                </button>
              </div>
            </div>

            {activeTab === 'current' && <StudentTable students={currentStudents} />}
            {activeTab === 'passout' && <StudentTable students={passoutStudents} />}
            {activeTab === 'ongoing' && <StudentTable students={undergoingStudents} />}
          </div>
        </section>
      </div>
    </div>
  );
};

export default QIPPage;