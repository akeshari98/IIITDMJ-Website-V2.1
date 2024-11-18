import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Image, Search } from 'lucide-react';
import axiosInstance from '../../../axios';
import profile from "../../../resources/images/admin/profile.jpg";

const StaffList = React.memo(({ 
  staffList, 
  searchTerm, 
  onEdit, 
  onDelete 
}) => (
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profile Picture</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {staffList.map((staff) => (
        <tr key={staff.id}>
          <td className="px-6 py-4">{staff.id}</td>
          <td className="px-6 py-4">
            <div className="flex items-center">
              {(
                <img
                  src={staff.profile_picture || profile}
                  alt={`${staff.first_name} ${staff.last_name}`}
                  className="h-8 w-8 rounded-full mr-3"
                />
              )}
              {staff.first_name} {staff.last_name}
            </div>
          </td>
          <td className="px-6 py-4">{staff.email}</td>
          <td className="px-6 py-4">{staff.phone_no}</td>
          <td className="px-6 py-4">{staff.address}</td>
          <td className="px-6 py-4">
            {staff.profile_picture ? (
              <a href={staff.profile_picture} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Image
              </a>
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
          </td>
        </tr>
      ))}
      {staffList.length === 0 && (
        <tr>
          <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
            No faculty members found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const FacultyManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [staffList, setStaffList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingStaff, setEditingStaff] = useState(null);

  const fetchFaculty = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/facultyInfo/getAllFaculty');
      setStaffList(response.data);
    } catch (error) {
      console.error('Error fetching faculty:', error);
    }
  }, []);

  useEffect(() => {
    fetchFaculty();
  }, [fetchFaculty]);


  const filteredFaculty = useMemo(() => 
    staffList.filter(staff => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        (staff.id.toString().includes(searchTermLower)) ||
        (staff.first_name || '').toLowerCase().includes(searchTermLower) ||
        (staff.last_name || '').toLowerCase().includes(searchTermLower) ||
        (staff.email || '').toLowerCase().includes(searchTermLower)
      );
    }), [staffList, searchTerm]
  );

  return (
    <div className="space-y-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">View Faculty Members</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search faculty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <StaffList 
              staffList={filteredFaculty}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default FacultyManager;