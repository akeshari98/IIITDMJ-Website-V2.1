import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Image, Search } from 'lucide-react';
import axiosInstance from '../../../axios';
import profile from "../../../resources/images/admin/profile.jpg";

// Separate form component with memoization
const DoctorsForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: ''
  });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      // Reset form when not editing
      setFormData({
        name: '',
        role: ''
      });
    }
  }, [initialData]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit Doctor' : 'Add New Doctor'}
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          {isEditing && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {isEditing ? 'Update Doctor' : 'Add Doctor'}
          </button>
        </div>
      </form>
    </div>
  );
});

const DoctorsList = React.memo(({ 
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
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
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
                  src={profile}
                  alt={`${staff.name}`}
                  className="h-8 w-8 rounded-full mr-3"
                />
              )}
              {staff.name}
            </div>
          </td>
          <td className="px-6 py-4">{staff.role}</td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(staff)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(staff.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
      {staffList.length === 0 && (
        <tr>
          <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
            No staff members found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const DoctorsManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [staffList, setDoctorsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingDoctors, setEditingDoctors] = useState(null);

  const fetchDoctors = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/doctorsInfo/getAllDoctors');
      setDoctorsList(response.data);
    } catch (error) {
      console.error('Error fetching doctor:', error);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  const handleAddDoctors = async (formData) => {
    try {
      const response = await axiosInstance.post('/doctorsInfo/addDoctorsInfo', formData);
      if (response.status === 200) {
        await fetchDoctors();
        setActiveTab('manage');
        alert("Doctor added successfully!");
      }
    } catch (error) {
      console.error('Error adding doctor:', error);
      alert("Failed to add doctor.");
    }
  };

  const handleUpdateDoctors = async (formData) => {
    try {
      const response = await axiosInstance.put('/doctorsInfo/updateDoctorsInfo', {
        ...formData,
        id: editingDoctors.id,
      });
      if (response.status === 200) {
        await fetchDoctors();
        setEditingDoctors(null);
        setActiveTab('manage');
        alert("Doctor updated successfully!");
      }
    } catch (error) {
      console.error('Error updating doctor:', error);
      alert("Failed to update daoctor.");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        const response = await axiosInstance.delete('/doctorsInfo/deleteDoctorsInfo', {
          data: { id },
        });
        if (response.status === 200) {
          await fetchDoctors();
          alert("Doctor deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting doctor:', error);
        alert("Failed to delete doctor.");
      }
    }
  };

  const handleEdit = useCallback((staff) => {
    setEditingDoctors(staff);
    setActiveTab('add');
  }, []);

  const filteredDoctors = useMemo(() => 
    staffList.filter(staff => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        (staff.id.toString().includes(searchTermLower)) ||
        (staff.name || '').toLowerCase().includes(searchTermLower) ||
        (staff.role || '').toLowerCase().includes(searchTermLower)
      );
    }), [staffList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingDoctors) {
              setEditingDoctors(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingDoctors ? 'Edit Doctor' : 'Add Doctor'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Doctors
        </button>
      </div>

      {activeTab === 'add' ? (
        <DoctorsForm
          onSubmit={editingDoctors ? handleUpdateDoctors : handleAddDoctors}
          initialData={editingDoctors ? {
            name: editingDoctors.name,
            role: editingDoctors.role
          } : null}
          isEditing={!!editingDoctors}
          onCancel={() => {
            setEditingDoctors(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Doctors</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <DoctorsList 
              staffList={filteredDoctors}
              searchTerm={searchTerm}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsManager;