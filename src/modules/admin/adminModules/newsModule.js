import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Image, Search } from 'lucide-react';
import axiosInstance from '../../../axios';
const buildImageUrl = (publicId) => {
    const cloudName = "djy2jlthj";
    return `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_600/${publicId}`;
  };
  
  const getImageUrl = (input) => {
    // Regular expression to check if input is a URL
    const urlRegex = /^(https?:\/\/)/;
  
    // If input matches a URL pattern, return it directly; otherwise, treat it as a public ID
    if (urlRegex.test(input)) {
      return input; // Input is a full URL
    } else {
      return buildImageUrl(input); // Input is a public ID
    }
  };
// Separate form component with memoization
const NewsForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    link: '',
    image: null
  });
  const [previewImage, setPreviewImage] = useState(null);

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setPreviewImage(initialData.image_url);
    } else {
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        link: '',
        image: null
      });
      setPreviewImage(null);
    }
  }, [initialData]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    
    formDataToSend.append('title', formData.title);
    formDataToSend.append('excerpt', formData.excerpt);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('link', formData.link);
    
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    if (isEditing) {
      formDataToSend.append('id', initialData.id);
    }

    onSubmit(formDataToSend);
  };
  const buildImageUrl = (publicId) => {
    const cloudName = "djy2jlthj";
    return `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_600/${publicId}`;
  };
  
  const getImageUrl = (input) => {
    // Regular expression to check if input is a URL
    const urlRegex = /^(https?:\/\/)/;
  
    // If input matches a URL pattern, return it directly; otherwise, treat it as a public ID
    if (urlRegex.test(input)) {
      return input; // Input is a full URL
    } else {
      return buildImageUrl(input); // Input is a public ID
    }
  };
  return (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit News' : 'Add New News'}
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
              required
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
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Link
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {previewImage && (
              <div className="mt-2">
                <img
                  src={getImageUrl(previewImage)}
                  alt="Preview"
                  className="h-32 w-auto object-cover rounded-lg"
                />
              </div>
            )}
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
            {isEditing ? 'Update News' : 'Add News'}
          </button>
        </div>
      </form>
    </div>
  );
});

const NewsList = React.memo(({ 
  newsList, 
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
      {newsList.map((news) => (
        <tr key={news.id}>
          <td className="px-6 py-4">{news.id}</td>
          <td className="px-6 py-4">{news.title}</td>
          <td className="px-6 py-4">
            {news.image_url && (
              <img
                src={getImageUrl(news.image_url)}
                alt={news.title}
                className="h-12 w-12 object-cover rounded"
              />
            )}
          </td>
          <td className="px-6 py-4">
            {new Date(news.createdAt).toLocaleDateString()}
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(news)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(news.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
      {newsList.length === 0 && (
        <tr>
          <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
            No news found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const NewsManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [newsList, setNewsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingNews, setEditingNews] = useState(null);

  const fetchNews = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/news/news');
      setNewsList(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleAddNews = async (formData) => {
    try {
      const response = await axiosInstance.post('/news/news', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        await fetchNews();
        setActiveTab('manage');
        alert("News added successfully!");
      }
    } catch (error) {
      console.error('Error adding news:', error);
      alert("Failed to add news.");
    }
  };

  const handleUpdateNews = async (formData) => {
    try {
      const response = await axiosInstance.put(`/news/news/${editingNews.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        await fetchNews();
        setEditingNews(null);
        setActiveTab('manage');
        alert("News updated successfully!");
      }
    } catch (error) {
      console.error('Error updating news:', error);
      alert("Failed to update news.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this news?')) {
      try {
        const response = await axiosInstance.delete(`/news/news/${id}`);
        if (response.status === 200) {
          await fetchNews();
          alert("News deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting news:', error);
        alert("Failed to delete news.");
      }
    }
  };

  const handleEdit = useCallback((news) => {
    setEditingNews(news);
    setActiveTab('add');
  }, []);

  const filteredNews = useMemo(() => 
    newsList.filter(news => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        news.id.toString().includes(searchTermLower) ||
        news.title.toLowerCase().includes(searchTermLower)
      );
    }), [newsList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingNews) {
              setEditingNews(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingNews ? 'Edit News' : 'Add News'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage News
        </button>
      </div>

      {activeTab === 'add' ? (
        <NewsForm
          onSubmit={editingNews ? handleUpdateNews : handleAddNews}
          initialData={editingNews}
          isEditing={!!editingNews}
          onCancel={() => {
            setEditingNews(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage News</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <NewsList 
              newsList={filteredNews}
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

export default NewsManager;