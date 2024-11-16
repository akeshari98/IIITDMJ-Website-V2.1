import React, { useState, useEffect } from 'react';
import { Image, Search } from 'lucide-react';
import axiosInstance from '../../../axios';

const StaffManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [staffList, setStaffList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingStaff, setEditingStaff] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    last_name: '',
    email: '',
    address: '',
    phone_no: '',
    profile_picture: '' // This will now hold the image path as text
  });

  // Fetch all staff members
  const fetchStaff = async () => {
    try {
      const response = await axiosInstance.get('/nonFacultyInfo/getAllNonFaculty');
      setStaffList(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };
  
  useEffect(() => {
    fetchStaff();
  }, []);

  // Handle form input changes
  const handleInputChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  // Add new staff member
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/nonFacultyInfo/addNonFacultyInfo', formData);
      if (response.status === 200) {
        setFormData({
          firstName: '',
          last_name: '',
          email: '',
          address: '',
          phone_no: '',
          profile_picture: '',
        });
        fetchStaff();
        setActiveTab('manage');
        alert("Staff member added successfully!");
      }
    } catch (error) {
      console.error('Error adding staff:', error);
      alert("Failed to add staff member.");
    }
  };
  
  // Update staff member
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put('/nonFacultyInfo/updateNonFacultyInfo', {
        ...formData,
        id: editingStaff.id,
      });
      if (response.status === 200) {
        setEditingStaff(null);
        setFormData({
          firstName: '',
          last_name: '',
          email: '',
          address: '',
          phone_no: '',
          profile_picture: '',
        });
        fetchStaff();
        alert("Staff member updated successfully!");
      }
    } catch (error) {
      console.error('Error updating staff:', error);
      alert("Failed to update staff member.");
    }
  };

  // Delete staff member
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this staff member?')) {
      try {
        const response = await axiosInstance.delete('/nonFacultyInfo/deleteNonFacultyInfo', {
          data: { id },
        });
        if (response.status === 200) {
          fetchStaff();
          alert("Staff member deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting staff:', error);
        alert("Failed to delete staff member.");
      }
    }
  };

  // Filter staff based on search term
  const filteredStaff = staffList.filter(staff => 
    staff.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const StaffForm = React.memo(() => (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {editingStaff ? 'Edit Staff Member' : 'Add New Staff Member'}
      </h3>
      <form className="space-y-4" onSubmit={editingStaff ? handleUpdate : handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Picture Path
          </label>
          <input
            type="text"
            name="profile_picture"
            value={formData.profile_picture}
            onChange={handleInputChange}
            placeholder="Enter image path or URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end space-x-3">
          {editingStaff && (
            <button
              type="button"
              onClick={() => {
                setEditingStaff(null);
                setFormData({
                  firstName: '',
                  last_name: '',
                  email: '',
                  address: '',
                  phone_no: '',
                  profile_picture: ''
                });
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {editingStaff ? 'Update Staff' : 'Add Staff'}
          </button>
        </div>
      </form>
    </div>
  ));

  const StaffManage = () => {
    const filteredStaff = React.useMemo(() => 
      staffList.filter(staff => {
        const searchTermLower = searchTerm.toLowerCase();
        const firstName = staff.first_name || '';
        const lastName = staff.last_name || '';
        const email = staff.email || '';
        
        return firstName.toLowerCase().includes(searchTermLower) ||
               lastName.toLowerCase().includes(searchTermLower) ||
               email.toLowerCase().includes(searchTermLower);
      }), [staffList, searchTerm]
    );
  
    const handleSearchChange = (e) => {
      e.stopPropagation(); // Stop event propagation
      setSearchTerm(e.target.value);
    };
  
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Manage Staff Members</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search staff..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Profile Picture
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredStaff.map((staff) => (
                <tr key={staff.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {staff.profile_picture && (
                        <img
                          src={staff.profile_picture}
                          alt={`${staff.first_name} ${staff.last_name}`}
                          className="h-8 w-8 rounded-full mr-3"
                        />
                      )}
                      {staff.first_name} {staff.last_name}
                    </div>
                  </td>
                  <td className="px-6 py-4">{staff.email}</td>
                  <td className="px-6 py-4">{staff.phone_no}</td>
                  <td className="px-6 py-4">
                    {staff.profile_picture ? (
                      <a href={staff.profile_picture} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        View Image
                      </a>
                    ) : (
                      <span className="text-gray-500">No Image</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setEditingStaff(staff);
                          setFormData({
                            firstName: staff.first_name,
                            last_name: staff.last_name,
                            email: staff.email,
                            address: staff.address,
                            phone_no: staff.phone_no,
                            profile_picture: staff.profile_picture || ''
                          });
                          setActiveTab('add');
                        }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(staff.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredStaff.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    No staff members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingStaff) {
              setFormData({
                firstName: '',
                last_name: '',
                email: '',
                address: '',
                phone_no: '',
                profile_picture: ''
              });
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingStaff ? 'Edit Staff' : 'Add Staff'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Staff
        </button>
      </div>
      {activeTab === 'add' ? <StaffForm /> : <StaffManage />}
    </div>
  );
};

export default StaffManager;
