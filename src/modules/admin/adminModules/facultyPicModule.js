import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, Image as ImageIcon } from 'lucide-react';
import axiosInstance from '../../../axios';

const FacultyPicForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    fac_id: '',
    profile_pic: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        fac_id: '',
        profile_pic: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('fac_id', formData.fac_id);
    formDataToSend.append('profile_pic', formData.profile_pic);
    onSubmit(formDataToSend);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit Faculty Picture' : 'Add New Faculty Picture'}
      </h3>
      
      <div className="mb-4">
        {formData.profile_pic && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
            <img 
              src={formData.profile_pic} 
              alt="Preview" 
              className="w-48 h-48 object-cover rounded-lg border border-gray-300"
              onError={(e) => {
                e.target.src = '/api/placeholder/200/200';
                e.target.onerror = null;
              }}
            />
          </div>
        )}
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Faculty ID
            </label>
            <input
              type="text"
              name="fac_id"
              value={formData.fac_id}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Picture URL
            </label>
            <input
              type="url"
              name="profile_pic"
              value={formData.profile_pic}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
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
            {isEditing ? 'Update Picture' : 'Add Picture'}
          </button>
        </div>
      </form>
    </div>
  );
});

const FacultyPicList = React.memo(({ 
  facultyList, 
  searchTerm, 
  onEdit, 
  onDelete 
}) => (
  <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-4 gap-4">
    {facultyList.map((faculty) => (
      <div 
        key={faculty.id} 
        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => onEdit(faculty)}
      >
        <div className="aspect-square mb-2 relative">
          <img
            src={faculty.profile_pic}
            alt={`Faculty ${faculty.fac_id}`}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              e.target.src = '/api/placeholder/200/200';
              e.target.onerror = null;
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity rounded-lg" />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-900">ID: {faculty.fac_id}</p>
          <div className="flex justify-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(faculty.id);
              }}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
    {facultyList.length === 0 && (
      <div className="col-span-full text-center py-8 text-gray-500">
        No faculty pictures found.
      </div>
    )}
  </div>
));

const FacultyPicManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [facultyList, setFacultyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingFaculty, setEditingFaculty] = useState(null);

  const fetchFacultyPics = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/FacultyPics/FacultyPics');
      setFacultyList(response.data);
    } catch (error) {
      console.error('Error fetching faculty pictures:', error);
    }
  }, []);

  useEffect(() => {
    fetchFacultyPics();
  }, [fetchFacultyPics]);

  const handleAddFacultyPic = async (formData) => {
    try {
      const response = await axiosInstance.post('/FacultyPics/FacultyPics', formData);
      if (response.status === 201) {
        await fetchFacultyPics();
        setActiveTab('manage');
        alert("Faculty picture added successfully!");
      }
    } catch (error) {
      console.error('Error adding faculty picture:', error);
      alert("Failed to add faculty picture.");
    }
  };

  const handleUpdateFacultyPic = async (formData) => {
    try {
      const response = await axiosInstance.put(`/FacultyPics/FacultyPics/${editingFaculty.id}`, formData);
      if (response.status === 200) {
        await fetchFacultyPics();
        setEditingFaculty(null);
        setActiveTab('manage');
        alert("Faculty picture updated successfully!");
      }
    } catch (error) {
      console.error('Error updating faculty picture:', error);
      alert("Failed to update faculty picture.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this faculty picture?')) {
      try {
        const response = await axiosInstance.delete(`/FacultyPics/FacultyPics/${id}`);
        if (response.status === 200) {
          await fetchFacultyPics();
          alert("Faculty picture deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting faculty picture:', error);
        alert("Failed to delete faculty picture.");
      }
    }
  };

  const handleEdit = useCallback((faculty) => {
    setEditingFaculty(faculty);
    setActiveTab('add');
  }, []);

  const filteredFaculty = useMemo(() => 
    facultyList.filter(faculty => {
      const searchTermLower = searchTerm.toLowerCase();
      return faculty.fac_id.toString().toLowerCase().includes(searchTermLower);
    }), [facultyList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingFaculty) {
              setEditingFaculty(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingFaculty ? 'Edit Picture' : 'Add Picture'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Pictures
        </button>
      </div>

      {activeTab === 'add' ? (
        <FacultyPicForm
          onSubmit={editingFaculty ? handleUpdateFacultyPic : handleAddFacultyPic}
          initialData={editingFaculty}
          isEditing={!!editingFaculty}
          onCancel={() => {
            setEditingFaculty(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Faculty Pictures</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by faculty ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <FacultyPicList 
              facultyList={filteredFaculty}
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

export default FacultyPicManager;