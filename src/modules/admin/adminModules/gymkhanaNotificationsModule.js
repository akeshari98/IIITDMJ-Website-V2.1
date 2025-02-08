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
const GymkhanaNotificationsForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    status: 'ACTIVE'
  });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        title: '',
        link: '',
         status: 'ACTIVE'
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
    formDataToSend.append('link', formData.link);
    formDataToSend.append('status', formData.status);
    
    if (isEditing) {
      formDataToSend.append('id', initialData.id);
    }

    onSubmit(formDataToSend);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit Notification' : 'Add New Notification'}
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
              Link
            </label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
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
            {isEditing ? 'Update Notification' : 'Add Notification'}
          </button>
        </div>
      </form>
    </div>
  );
});

const GymkhanaNotificationsList = React.memo(({ 
  gymkhanaNotificationsList, 
  searchTerm, 
  onEdit, 
  onDelete 
}) => (
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"> Link</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"> Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {gymkhanaNotificationsList.map((GymkhanaNotifications) => (
        <tr key={GymkhanaNotifications.id}>
          <td className="px-6 py-4">{GymkhanaNotifications.id}</td>
          <td className="px-6 py-4">{GymkhanaNotifications.title}</td>
          <td className="px-6 py-4">{GymkhanaNotifications.link}</td>
          
          <td className="px-6 py-4">
            {new Date(GymkhanaNotifications.createdAt).toLocaleDateString()}
          </td>
          <td className="px-6 py-4">
            <span className={`px-2 py-1 text-xs rounded ${
              GymkhanaNotifications.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
              GymkhanaNotifications.status === 'ARCHIVED' ? 'bg-gray-100 text-gray-800' :
              'bg-red-100 text-red-800'
            }`}>
              {GymkhanaNotifications.status}
            </span>
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(GymkhanaNotifications)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(GymkhanaNotifications.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
      {gymkhanaNotificationsList.length === 0 && (
        <tr>
          <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
            No Notification found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const GymkhanaNotificationsManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [gymkhanaNotificationsList, setGymkhanaNotificationsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingGymkhanaNotifications, setEditingGymkhanaNotifications] = useState(null);

  const fetchGymkhanaNotifications = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/GymkhanaNotifications/GymkhanaNotifications');
      setGymkhanaNotificationsList(response.data);
    } catch (error) {
      console.error('Error fetching Notification:', error);
    }
  }, []);

  useEffect(() => {
    fetchGymkhanaNotifications();
  }, [fetchGymkhanaNotifications]);

  const handleAddGymkhanaNotifications = async (formData) => {
    try {
      const response = await axiosInstance.post('/GymkhanaNotifications/GymkhanaNotifications', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
     } );
      if (response.status === 201) {
        await fetchGymkhanaNotifications();
        setActiveTab('manage');
        alert("Notification added successfully!");
      }
    } catch (error) {
      console.error('Error adding Notification:', error);
      alert("Failed to add Notification.");
    }
  };

  const handleUpdateGymkhanaNotifications = async (formData) => {
    try {
      const response = await axiosInstance.put(`/GymkhanaNotifications/GymkhanaNotifications/${editingGymkhanaNotifications.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        await fetchGymkhanaNotifications();
        setEditingGymkhanaNotifications(null);
        setActiveTab('manage');
        alert("Notification updated successfully!");
      }
    } catch (error) {
      console.error('Error updating Notification:', error);
      alert("Failed to update Notification.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this Notification?')) {
      try {
        const response = await axiosInstance.delete(`/GymkhanaNotifications/GymkhanaNotifications/${id}`);
        if (response.status === 200) {
          await fetchGymkhanaNotifications();
          alert("Notification deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting Notification:', error);
        alert("Failed to delete Notification.");
      }
    }
  };

  const handleEdit = useCallback((GymkhanaNotifications) => {
    setEditingGymkhanaNotifications(GymkhanaNotifications);
    setActiveTab('add');
  }, []);

  const filteredGymkhanaNotifications = useMemo(() => 
    gymkhanaNotificationsList.filter(GymkhanaNotifications => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        GymkhanaNotifications.id.toString().includes(searchTermLower) ||
        GymkhanaNotifications.title.toLowerCase().includes(searchTermLower)
      );
    }), [gymkhanaNotificationsList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingGymkhanaNotifications) {
              setEditingGymkhanaNotifications(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingGymkhanaNotifications ? 'Edit Notification' : 'Add Notification'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Notifications
        </button>
      </div>

      {activeTab === 'add' ? (
        <GymkhanaNotificationsForm
          onSubmit={editingGymkhanaNotifications ? handleUpdateGymkhanaNotifications : handleAddGymkhanaNotifications}
          initialData={editingGymkhanaNotifications}
          // initialData={editingGymkhanaNotifications ? {
          //   title: editingGymkhanaNotifications.title,
          //   excerpt: editingGymkhanaNotifications.excerpt,
          //   content: editingGymkhanaNotifications.content,
          //   image_url: editingGymkhanaNotifications.image_url || '',
          //   link: editingGymkhanaNotifications.link,
          // } : null}
          isEditing={!!editingGymkhanaNotifications}
          onCancel={() => {
            setEditingGymkhanaNotifications(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Notifications</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <GymkhanaNotificationsList 
              gymkhanaNotificationsList={filteredGymkhanaNotifications}
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

export default GymkhanaNotificationsManager;