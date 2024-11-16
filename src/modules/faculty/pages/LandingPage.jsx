import React, { useState, useEffect } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import axiosInstance from '../../../axios';
import profile from '../../../resources/images/admin/profile.jpg';
import Loader from '../../../components/Loader'
import { Link } from 'react-router-dom';
const departments = {
  CSE: 51,
  ECE: 30,
  NS: 31,
  ME: 37,
  DESIGN: 44,
  SM: 0,  // Assuming SM has a branch_id, replace 0 with correct ID if available
  HS: 0   // Assuming HS has a branch_id, replace 0 with correct ID if available
};

const LandingPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('CSE');
  const [searchTerm, setSearchTerm] = useState('');
  const [facultyData, setFacultyData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFacultyData = async () => {
      setLoading(true);
      const branchId = departments[selectedDepartment];
      try {
        const response = await axiosInstance.get(`/facultyInfo/faculty/${branchId}/getAllFaculties`);
        setFacultyData(
          response.data.map(faculty => ({
            name: `${faculty.first_name} ${faculty.last_name}`,
            designation: faculty.designation,
            department: faculty.department,
            areasOfInterest: faculty.interests ? faculty.interests.split(',') : [],
            profileLink: '#',  // Update with actual link if available
            photo: faculty.profile_picture || profile,
            id:faculty.id
          }))
        );
      } catch (error) {
        console.error('Error fetching faculty data:', error);
        setFacultyData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, [selectedDepartment]);

  const filteredFaculty = facultyData.filter(faculty =>
    (faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faculty.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
     faculty.areasOfInterest.some(area => area.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-left mb-12 mt-8">Faculty Profiles</h1>
      <nav className="flex items-center mb-8 text-gray-600">
        <a href="/" className="hover:underline">Home</a>
        <ChevronRight size={16} className="mx-2" />
        <span>Faculty Page</span>
      </nav>

      <div className="flex justify-between items-center mb-6">
        <nav className="flex space-x-4">
          {Object.keys(departments).map(department => (
            <button
              key={department}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                selectedDepartment === department ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSelectedDepartment(department)}
            >
              {department}
            </button>
          ))}
        </nav>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Faculty..."
            className="border border-gray-600 rounded-full pl-10 pr-4 py-2 w-full text-gray-600 bg-white focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-2 text-gray-400">
            <Search />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {loading ? (
           <Loader/>
        ) : filteredFaculty.length > 0 ? (
          filteredFaculty.map((faculty, index) => (
            <div
              key={index}
              className="relative w-[95%] max-w-[400px] bg-white rounded-lg shadow-lg p-4 transition-transform duration-200 transform ml-auto mr-auto flex flex-col"
              style={{ height: '500px' }}
            >
              <img src={faculty.photo} alt={`${faculty.name}'s Profile`} className="w-48 h-48 object-cover rounded-md mx-auto" />
              <div className="flex flex-col items-center text-center mt-5">
                <h3 className="text-xl font-bold break-words">{faculty.name}</h3>
                <p className="text-gray-700">{faculty.designation}</p>
                <p className="text-gray-500">{faculty.department}</p>
                <div className="flex flex-wrap gap-2 mt-2 mb-6 overflow-hidden max-h-16">
                  {faculty.areasOfInterest.slice(0, 8).map((area, idx) => (
                    <span key={idx} className="bg-gray-200 rounded-full px-3 py-1 text-sm">{area}</span>
                  ))}
                  {faculty.areasOfInterest.length > 3 && (
                    <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">...</span>
                  )}
                </div>
              </div>
              <Link
                to={`/profilepage/${faculty.id}`}
                className="absolute bottom-4 left-4 right-4 bg-black text-white rounded px-4 py-2 hover:bg-gray-700 transition duration-300 text-center"
              >
                View Profile
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No faculty found.</p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
