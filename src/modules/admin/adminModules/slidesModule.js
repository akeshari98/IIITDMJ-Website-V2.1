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
const SlidesForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtext: '',
    link: '',
    image_url: ''
  });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        title: '',
        subtext: '',
        link: '',
        image_url: ''
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
    formDataToSend.append('subtext', formData.subtext);
    formDataToSend.append('link', formData.link);
  
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
        {isEditing ? 'Edit Slides' : 'Add New Slides'}
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
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtext
            </label>
            <input
              type="text"
              name="subtext"
              value={formData.subtext}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            {isEditing ? 'Update Slides' : 'Add Slides'}
          </button>
        </div>
      </form>
    </div>
  );
});

const SlidesList = React.memo(({ 
  slidesList, 
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
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {slidesList.map((slides) => (
        <tr key={slides.id}>
          <td className="px-6 py-4">{slides.id}</td>
          <td className="px-6 py-4">{slides.title}</td>
          <td className="px-6 py-4">
            {slides.image_url ? (
              <a href={slides.image_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Image
              </a>
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
          </td>
          <td className="px-6 py-4">
            {new Date(slides.createdAt).toLocaleDateString()}
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(slides)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(slides.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
      {slidesList.length === 0 && (
        <tr>
          <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
            No slides found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const SlidesManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [slidesList, setSlidesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingSlides, setEditingSlides] = useState(null);

  const fetchSlides = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/carousel/carousels');
      setSlidesList(response.data);
    } catch (error) {
      console.error('Error fetching slides:', error);
    }
  }, []);

  useEffect(() => {
    fetchSlides();
  }, [fetchSlides]);

  const handleAddSlides = async (formData) => {
    try {
      const response = await axiosInstance.post('/carousel/carousels', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
     } );
      if (response.status === 201) {
        await fetchSlides();
        setActiveTab('manage');
        alert("Slides added successfully!");
      }
    } catch (error) {
      console.error('Error adding slides:', error);
      alert("Failed to add slides.");
    }
  };

  const handleUpdateSlides = async (formData) => {
    try {
      const response = await axiosInstance.put(`/carousel/carousels/${editingSlides.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        await fetchSlides();
        setEditingSlides(null);
        setActiveTab('manage');
        alert("Slides updated successfully!");
      }
    } catch (error) {
      console.error('Error updating slides:', error);
      alert("Failed to update slides.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this slide?')) {
      try {
        const response = await axiosInstance.delete(`/carousel/carousels/${id}`);
        if (response.status === 200) {
          await fetchSlides();
          alert("Slide deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting slides:', error);
        alert("Failed to delete slide.");
      }
    }
  };

  const handleEdit = useCallback((slides) => {
    setEditingSlides(slides);
    setActiveTab('add');
  }, []);

  const filteredSlides = useMemo(() => 
    slidesList.filter(slides => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        slides.id.toString().includes(searchTermLower) ||
        slides.title.toLowerCase().includes(searchTermLower)
      );
    }), [slidesList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingSlides) {
              setEditingSlides(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingSlides ? 'Edit Slides' : 'Add Slides'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Slides
        </button>
      </div>

      {activeTab === 'add' ? (
        <SlidesForm
          onSubmit={editingSlides ? handleUpdateSlides : handleAddSlides}
          initialData={editingSlides}
          // initialData={editingSlides ? {
          //   title: editingSlides.title,
          //   subtext: editingSlides.subtext,
          //   content: editingSlides.content,
          //   image_url: editingSlides.image_url || '',
          //   link: editingSlides.link,
          // } : null}
          isEditing={!!editingSlides}
          onCancel={() => {
            setEditingSlides(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Slides</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search slides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <SlidesList 
              slidesList={filteredSlides}
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

export default SlidesManager;