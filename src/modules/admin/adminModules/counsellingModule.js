import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Image, Search } from 'lucide-react';
import axiosInstance from '../../../axios';
import profile from "../../../resources/images/admin/profile.jpg";

import { Upload, X } from 'lucide-react';
import * as XLSX from 'xlsx';

const ExcelUpload = ({ onUploadSuccess }) => {
  const [error, setError] = useState('');
  const [preview, setPreview] = useState([]);
  const [studentType, setStudentType] = useState('ug');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateData = (data) => {
    const requiredColumns = ['name', 'roll_no', 'role', 'batch', 'email'];
    const headers = Object.keys(data[0]).map(key => key.toLowerCase().trim());
    
    const missingColumns = requiredColumns.filter(col => 
      !headers.includes(col.toLowerCase())
    );

    if (missingColumns.length > 0) {
      throw new Error(`Missing required columns: ${missingColumns.join(', ')}`);
    }

    return data.map(row => ({
      name: row.name || '',
      roll_no: row.roll_no || '',
      role: row.role || '',
      batch: row.batch || '',
      email: row.email || '',
      student_type: studentType
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setError('');
    setPreview([]);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const workbook = XLSX.read(e.target.result, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const data = XLSX.utils.sheet_to_json(worksheet);

          if (data.length === 0) {
            setError('The Excel file is empty');
            return;
          }

          const validatedData = validateData(data);
          setPreview(validatedData.slice(0, 5)); // Show first 5 entries as preview
        } catch (error) {
          setError(error.message);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleSubmit = async () => {
    try {
      if (preview.length === 0) return;
      
      const response = await axiosInstance.post('/counsellingInfo/bulkAddCounsellingMembers', {
        members: preview,
        studentType: studentType
      });

      if (response.status === 200) {
        onUploadSuccess();
        setPreview([]);
        setError('');
        setIsModalOpen(false);
      }
    } catch (error) {
      setError('Failed to upload members: ' + error.message);
    }
  };

  return (
    <div>
      {/* Upload Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
      >
        <Upload size={16} />
        Bulk Upload
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl mx-4">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Upload Excel File</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            {/* Student Type Selection */}
            <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="ug"
                  checked={studentType === 'ug'}
                  onChange={(e) => setStudentType(e.target.value)}
                  className="form-radio"
                />
                <span>UG Students</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="pg"
                  checked={studentType === 'pg'}
                  onChange={(e) => setStudentType(e.target.value)}
                  className="form-radio"
                />
                <span>PG Students</span>
              </label>
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileUpload}
                className="hidden"
                id="excel-upload"
              />
              <label
                htmlFor="excel-upload"
                className="cursor-pointer text-blue-600 hover:text-blue-800"
              >
                Click to upload Excel file
              </label>
              <p className="text-sm text-gray-500 mt-2">
                File should contain: name, roll_no, role, batch, email columns
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                {error}
              </div>
            )}

            {/* Preview Table */}
            {preview.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Preview (First 5 entries):</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {Object.keys(preview[0]).map((header) => (
                          <th
                            key={header}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {preview.map((row, index) => (
                        <tr key={index}>
                          {Object.values(row).map((value, i) => (
                            <td
                              key={i}
                              className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                            >
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={preview.length === 0}
                className={`px-4 py-2 rounded-lg ${
                  preview.length === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const DoctorsForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [studentType, setStudentType] = useState('ug');
  const [formData, setFormData] = useState({
    name: '',
    roll_no: '',
    role: '',
    batch: '',
    email: '',
    student_type:studentType
  });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      // Reset form when not editing
      setFormData({
        name: '',
        roll_no: '',
        role: '',
        batch: '',
        email: '',
        student_type:studentType
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
        {isEditing ? 'Edit Member' : 'Add New Member'}
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex gap-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="ug"
                  checked={studentType === 'ug'}
                  onChange={(e) => setStudentType(e.target.value)}
                  className="form-radio"
                />
                <span>UG Students</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="pg"
                  checked={studentType === 'pg'}
                  onChange={(e) => setStudentType(e.target.value)}
                  className="form-radio"
                />
                <span>PG Students</span>
              </label>
            </div>
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
              Roll No.
            </label>
            <input
              type="text"
              name="roll_no"
              value={formData.roll_no}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div><div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div><div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Batch
            </label>
            <input
              type="text"
              name="batch"
              value={formData.batch}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
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
            {isEditing ? 'Update Member' : 'Add Member'}
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
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Roll No.</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Batch</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student Type</th>
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
          <td className="px-6 py-4">{staff.roll_no}</td>
          <td className="px-6 py-4">{staff.role}</td>
          <td className="px-6 py-4">{staff.batch}</td>
          <td className="px-6 py-4">{staff.email}</td>
          <td className="px-6 py-4">{staff.student_type}</td>
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
            No counselling members found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));
// Update the CounsellingManager component to include the ExcelUpload component
const CounsellingManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [staffList, setDoctorsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingDoctors, setEditingDoctors] = useState(null);

  const fetchDoctors = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/counsellingInfo/getAllCounsellingMembers');
      setDoctorsList(response.data);
    } catch (error) {
      console.error('Error fetching member:', error);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  const handleAddDoctors = async (formData) => {
    try {
      const response = await axiosInstance.post('/counsellingInfo/addCounsellingMembers', formData);
      if (response.status === 200) {
        await fetchDoctors();
        setActiveTab('manage');
        alert("Member added successfully!");
      }
    } catch (error) {
      console.error('Error adding member:', error);
      alert("Failed to add member.");
    }
  };

  const handleUpdateDoctors = async (formData) => {
    try {
      const response = await axiosInstance.put('/counsellingInfo/updateCounsellingMembers', {
        ...formData,
        id: editingDoctors.id,
      });
      if (response.status === 200) {
        await fetchDoctors();
        setEditingDoctors(null);
        setActiveTab('manage');
        alert("Member updated successfully!");
      }
    } catch (error) {
      console.error('Error updating member:', error);
      alert("Failed to update member.");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this member?')) {
      try {
        const response = await axiosInstance.delete('/counsellingInfo/deleteCounsellingMembers', {
          data: { id },
        });
        if (response.status === 200) {
          await fetchDoctors();
          alert("Member deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting member:', error);
        alert("Failed to delete member.");
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
        (staff.roll_no || '').toLowerCase().includes(searchTermLower) ||
        (staff.role || '').toLowerCase().includes(searchTermLower) ||
        (staff.batch || '').toLowerCase().includes(searchTermLower) ||
        (staff.email || '').toLowerCase().includes(searchTermLower) 
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
          {editingDoctors ? 'Edit Member' : 'Add Member'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Members
        </button>
        <ExcelUpload onUploadSuccess={fetchDoctors} />
      </div>
      {/* <div className="flex space-x-4">
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
          {editingDoctors ? 'Edit Member' : 'Add Member'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Members
        </button>
      </div> */}

      {activeTab === 'add' ? (
        <DoctorsForm
          onSubmit={editingDoctors ? handleUpdateDoctors : handleAddDoctors}
          initialData={editingDoctors ? {
            name: editingDoctors.name,
            roll_no: editingDoctors.roll_no,
            role: editingDoctors.role,
            batch: editingDoctors.batch,
            email: editingDoctors.email,
            student_type: editingDoctors.student_type
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
            <h3 className="text-lg font-semibold">Manage Members</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search members..."
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

export default CounsellingManager;