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
const ImagesForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    event_id: '',
    image_path: '',
  });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        event_id: '',
        image_path: '',
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
    formDataToSend.append('event_id', formData.event_id);
    formDataToSend.append('image_path', formData.image_path);
    if (isEditing) {
      formDataToSend.append('id', initialData.id);
    }
    onSubmit(formDataToSend);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit Image' : 'Add New Image'}
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event ID
            </label>
            <input
              type="number"
              name="event_id"
              value={formData.event_id}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              name="image_path"
              value={formData.image_path}
              onChange={handleInputChange}
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
            {isEditing ? 'Update Image' : 'Add Image'}
          </button>
        </div>
      </form>
    </div>
  );
});

const ImagesList = React.memo(({ 
  imagesList, 
  searchTerm, 
  onEdit, 
  onDelete 
}) => (
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event ID</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {imagesList.map((image) => (
        <tr key={image.id}>
          <td className="px-6 py-4">{image.id}</td>
          <td className="px-6 py-4">{image.event_id}</td>
          <td className="px-6 py-4">
            {image.image_url ? (
              <a href={image.image_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Image
              </a>
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
          </td>
          <td className="px-6 py-4">
            {new Date(image.createdAt).toLocaleDateString()}
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(image)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(image.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
      {imagesList.length === 0 && (
        <tr>
          <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
            No image found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const EventImagesManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [imagesList, setImagesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingImages, setEditingImages] = useState(null);

  const fetchImages = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/eventImages/eventImages');
      setImagesList(response.data);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleAddImages = async (formData) => {
    try {
      const response = await axiosInstance.post('/eventImages/eventImages', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
     } );
      if (response.status === 201) {
        await fetchImages();
        setActiveTab('manage');
        alert("Image added successfully!");
      }
    } catch (error) {
      console.error('Error adding image:', error);
      alert("Failed to add image.");
    }
  };

  const handleUpdateImages = async (formData) => {
    try {
      const response = await axiosInstance.put(`/eventImages/eventImages/${editingImages.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        await fetchImages();
        setEditingImages(null);
        setActiveTab('manage');
        alert("Image updated successfully!");
      }
    } catch (error) {
      console.error('Error updating image:', error);
      alert("Failed to update image.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        const response = await axiosInstance.delete(`/eventImages/eventImages/${id}`);
        if (response.status === 200) {
          await fetchImages();
          alert("Image deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting image:', error);
        alert("Failed to delete image.");
      }
    }
  };

  const handleEdit = useCallback((image) => {
    setEditingImages(image);
    setActiveTab('add');
  }, []);

  const filteredImages = useMemo(() => 
    imagesList.filter(image => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        image.id.toString().includes(searchTermLower) ||
        image.event_id.toString().includes(searchTermLower)
      );
    }), [imagesList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingImages) {
              setEditingImages(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingImages ? 'Edit Image' : 'Add Image'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Images
        </button>
      </div>

      {activeTab === 'add' ? (
        <ImagesForm
          onSubmit={editingImages ? handleUpdateImages : handleAddImages}
          initialData={editingImages}
          // initialData={editingImages ? {
          //   title: editingImages.title,
          //   subtext: editingImages.subtext,
          //   content: editingImages.content,
          //   image_url: editingImages.image_url || '',
          //   link: editingImages.link,
          // } : null}
          isEditing={!!editingImages}
          onCancel={() => {
            setEditingImages(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Image</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search image..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <ImagesList 
              imagesList={filteredImages}
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

export default EventImagesManager;