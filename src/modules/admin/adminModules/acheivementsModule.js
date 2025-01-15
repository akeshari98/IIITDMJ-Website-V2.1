import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search } from 'lucide-react';
import axiosInstance from '../../../axios';

// const buildImageUrl = (publicId) => {
//   const cloudName = "djy2jlthj";
//   return `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_600/${publicId}`;
// };

// const getImageUrl = (input) => {
//   // Regular expression to check if input is a URL
//   const urlRegex = /^(https?:\/\/)/;

//   // If input matches a URL pattern, return it directly; otherwise, treat it as a public ID
//   if (urlRegex.test(input)) {
//     return input; // Input is a full URL
//   } else {
//     return buildImageUrl(input); // Input is a public ID
//   }
// };

// Separate form component with memoization
const AchievementsForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    link: '',
    image_url: '',
    status: 'ACTIVE',
  });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        link: '',
        image_url: '',
        status: 'ACTIVE',
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
    formDataToSend.append('title', formData.title);
    formDataToSend.append('excerpt', formData.excerpt);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('link', formData.link);
    formDataToSend.append('status', formData.status);
    if (formData.image_url) {
      formDataToSend.append('image_url', formData.image_url);
    }
    
    if (isEditing) {
      formDataToSend.append('id', initialData.id);
    }

    onSubmit(formDataToSend);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit Achievement' : 'Add New Achievement'}
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
              
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link
            </label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="image_url"
              value={formData.image_url}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="ACTIVE">Active</option>
              <option value="ARCHIVED">Archived</option>
              <option value="CANCELLED">Cancelled</option>
            </select>
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
            {isEditing ? 'Update Achievement' : 'Add Achievement'}
          </button>
        </div>
      </form>
    </div>
  );
});

const AchievementsList = React.memo(({ 
  achievementsList, 
  searchTerm, 
  onEdit, 
  onDelete 
}) => (
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {achievementsList.map((achievement) => (
        <tr key={achievement.id}>
          <td className="px-6 py-4">{achievement.id}</td>
          <td className="px-6 py-4">{achievement.title}</td>
          <td className="px-6 py-4">
            {achievement.image_url ? (
              <a href={achievement.image_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Image
              </a>
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
          </td>
          <td className="px-6 py-4">
            {new Date(achievement.createdAt).toLocaleDateString()}
          </td>
          <td className="px-6 py-4">
            <span className={`px-2 py-1 text-xs rounded ${
              achievement.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
              achievement.status === 'ARCHIVED' ? 'bg-gray-100 text-gray-800' :
              'bg-red-100 text-red-800'
            }`}>
              {achievement.status}
            </span>
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(achievement)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(achievement.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
      {achievementsList.length === 0 && (
        <tr>
          <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
            No achievement found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const AchievementsManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [achievementsList, setAchievementsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingAchievements, setEditingAchievements] = useState(null);

  const fetchAchievements = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/achievements/achievements');
      setAchievementsList(response.data);
    } catch (error) {
      console.error('Error fetching achievements:', error);
    }
  }, []);

  useEffect(() => {
    fetchAchievements();
  }, [fetchAchievements]);

  const handleAddAchievements = async (formData) => {
    try {
      const response = await axiosInstance.post('/achievements/achievements', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
     } );
      if (response.status === 201) {
        await fetchAchievements();
        setActiveTab('manage');
        alert("Achievement added successfully!");
      }
    } catch (error) {
      console.error('Error adding achievement:', error);
      alert("Failed to add achievement.");
    }
  };

  const handleUpdateAchievements = async (formData) => {
    try {
      const response = await axiosInstance.put(`/achievements/achievements/${editingAchievements.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        await fetchAchievements();
        setEditingAchievements(null);
        setActiveTab('manage');
        alert("Achievement updated successfully!");
      }
    } catch (error) {
      console.error('Error updating achievement:', error);
      alert("Failed to update achievement.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      try {
        const response = await axiosInstance.delete(`/achievements/achievements/${id}`);
        if (response.status === 200) {
          await fetchAchievements();
          alert("Achievement deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting achievement:', error);
        alert("Failed to delete achievement.");
      }
    }
  };

  const handleEdit = useCallback((achievement) => {
    setEditingAchievements(achievement);
    setActiveTab('add');
  }, []);

  const filteredAchievements = useMemo(() => 
    achievementsList.filter(achievement => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        achievement.id.toString().includes(searchTermLower) ||
        achievement.title.toLowerCase().includes(searchTermLower) || achievement.status.toLowerCase().includes(searchTermLower)
      );
    }), [achievementsList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingAchievements) {
              setEditingAchievements(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingAchievements ? 'Edit Achievement' : 'Add Achievements'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Achievements
        </button>
      </div>

      {activeTab === 'add' ? (
        <AchievementsForm
          onSubmit={editingAchievements ? handleUpdateAchievements : handleAddAchievements}
          initialData={editingAchievements}
          // initialData={editingAchievements ? {
          //   title: editingAchievements.title,
          //   excerpt: editingAchievements.excerpt,
          //   content: editingAchievements.content,
          //   image_url: editingAchievements.image_url || '',
          //   link: editingAchievements.link,
          // } : null}
          isEditing={!!editingAchievements}
          onCancel={() => {
            setEditingAchievements(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Achievement</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search achievement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <AchievementsList 
              achievementsList={filteredAchievements}
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

export default AchievementsManager;