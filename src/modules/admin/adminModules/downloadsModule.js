import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, Paperclip, Plus, Trash2, Edit } from 'lucide-react';
import axiosInstance from '../../../axios';

const DownloadForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    downloads: '',
    items: []
  });

  const [newItem, setNewItem] = useState({ url: '', title: '' });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        items: typeof initialData.items === 'string' 
        ? JSON.parse(initialData.items) 
        : (initialData.items || [])
      });
    }
  }, [initialData]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleItemChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  }, []);

  const addItem = useCallback(() => {
    if (newItem.url && newItem.title) {
      setFormData(prev => ({
        ...prev,
        items: [...prev.items, newItem]
      }));
      setNewItem({ url: '', title: '' });
    }
  }, [newItem]);

  const removeItem = useCallback((indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, index) => index !== indexToRemove)
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      formDataToSend.append(key, 
        key === 'items' ? JSON.stringify(formData[key]) : formData[key]
      );
    });
    
    if (isEditing) {
      formDataToSend.append('id', initialData.id);
    }
    console.log(formData)
    onSubmit(formDataToSend);
  }; 

  return (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit Download' : 'Add New Download'}
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Download Title
          </label>
          <input
            type="text"
            name="downloads"
            value={formData.downloads}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Download Items
          </label>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              name="url"
              placeholder="Item URL"
              value={newItem.url}
              onChange={handleItemChange}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="title"
              placeholder="Item Title"
              value={newItem.title}
              onChange={handleItemChange}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-lg"
            />
            <button
              type="button"
              onClick={addItem}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          {formData.items.length > 0 && (
            <div className="border rounded-lg p-2">
              {formData.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded mb-1">
                  <div className="flex items-center space-x-2">
                    <Paperclip className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" 
                         className="text-xs text-blue-600 hover:underline">
                        {item.url}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-3">
          {isEditing && (
            <button type="button" onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Cancel
            </button>
          )}
          <button type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            {isEditing ? 'Update Download' : 'Add Download'}
          </button>
        </div>
      </form>
    </div>
  );
});

const DownloadsList = React.memo(({ downloadsList, searchTerm, onEdit, onDelete }) => (
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Download Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items Count</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {downloadsList.map((download) => (
        <tr key={download.id}>
          <td className="px-6 py-4">{download.downloads}</td>
          <td className="px-6 py-4">{download.items.length}</td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button onClick={() => onEdit(download)}
                className="text-blue-600 hover:text-blue-800">
                <Edit className="h-4 w-4" />
              </button>
              <button onClick={() => onDelete(download.id)}
                className="text-red-600 hover:text-red-800">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </td>
        </tr>
      ))}
      {downloadsList.length === 0 && (
        <tr>
          <td colSpan="3" className="px-6 py-4 text-center text-gray-500">
            No downloads found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const DownloadsManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [downloadsList, setDownloadsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingDownload, setEditingDownload] = useState(null);

  const fetchDownloads = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/downloads/downloads');
      setDownloadsList(response.data);
    } catch (error) {
      console.error('Error fetching downloads:', error);
      alert("Failed to fetch downloads.");
    }
  }, []);

  useEffect(() => { 
    fetchDownloads();
  }, [fetchDownloads]);

  const handleAddDownload = async (formData) => {
    try {
      const response = await axiosInstance.post('/downloads/downloads', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if (response.status === 201) {
        await fetchDownloads();
        setActiveTab('manage');
        alert("Download added successfully!");
      }
    } catch (error) {
      console.error('Error adding download:', error);
      alert("Failed to add download.");
    }
  };

  const handleUpdateDownload = async (formData) => {
    try {
      const response = await axiosInstance.put(`/downloads/downloads/${editingDownload.id}`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        await fetchDownloads();
        setEditingDownload(null);
        setActiveTab('manage');
        alert("Download updated successfully!");
      }
    } catch (error) {
      console.error('Error updating download:', error);
      alert("Failed to update download.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this download?')) {
      try {
        const response = await axiosInstance.delete(`/downloads/${id}`);
        if (response.status === 200) {
          await fetchDownloads();
          alert("Download deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting download:', error);
        alert("Failed to delete download.");
      }
    }
  };

  const handleEdit = useCallback((download) => {
    setEditingDownload(download);
    setActiveTab('add');
  }, []);

  const filteredDownloads = useMemo(() => 
    downloadsList.filter(download => 
      download.downloads.toLowerCase().includes(searchTerm.toLowerCase())
    ), [downloadsList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingDownload) setEditingDownload(null);
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingDownload ? 'Edit Download' : 'Add Download'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Downloads
        </button>
      </div>

      {activeTab === 'add' ? (
        <DownloadForm
          onSubmit={editingDownload ? handleUpdateDownload : handleAddDownload}
          initialData={editingDownload}
          isEditing={!!editingDownload}
          onCancel={() => {
            setEditingDownload(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Downloads</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search downloads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <DownloadsList 
              downloadsList={filteredDownloads}
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

export default DownloadsManager;