import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, Paperclip, Plus, Trash2, Edit } from 'lucide-react';
import axiosInstance from '../../../axios';

// Tender Form Component
const TenderForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    tender_no: '',
    title: '',
    description: '',
    advertisement_date: '',
    closing_date: '',
    category: 'PROCUREMENT',
    status: 'ACTIVE',
    type: 'TENDER',
    department: '',
    estimated_value: '',
    attachments: []
  });

  const [newAttachment, setNewAttachment] = useState({ url: '', title: '' });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        advertisement_date: initialData.advertisement_date ? 
          new Date(initialData.advertisement_date).toISOString().split('T')[0] : '',
        closing_date: initialData.closing_date ? 
          new Date(initialData.closing_date).toISOString().split('T')[0] : '',
        attachments: initialData.attachments || []
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

  const handleAttachmentChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewAttachment(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const addAttachment = useCallback(() => {
    if (newAttachment.url && newAttachment.title) {
      setFormData(prev => ({
        ...prev,
        attachments: [...(prev.attachments || []), newAttachment]
      }));
      setNewAttachment({ url: '', title: '' });
    }
  }, [newAttachment]);

  const removeAttachment = useCallback((indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, index) => index !== indexToRemove)
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    
    // Append all form fields
    Object.keys(formData).forEach(key => {
      if (key === 'attachments') {
        // Convert attachments to JSON string
        formDataToSend.append(key,formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });
    
    // Add ID for editing
    if (isEditing) {
      formDataToSend.append('id', initialData.id);
    }

    onSubmit(formDataToSend);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit Tender' : 'Add New Tender'}
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tender Number
            </label>
            <input
              type="text"
              name="tender_no"
              value={formData.tender_no}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
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
              Estimated Value
            </label>
            <input
              type="number"
              name="estimated_value"
              value={formData.estimated_value}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Advertisement Date
            </label>
            <input
              type="date"
              name="advertisement_date"
              value={formData.advertisement_date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Closing Date
            </label>
            <input
              type="date"
              name="closing_date"
              value={formData.closing_date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="PROCUREMENT">Procurement</option>
              <option value="CONSTRUCTION">Construction</option>
              <option value="SERVICES">Services</option>
              <option value="OTHERS">Others</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tender Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="TENDER">Tender</option>
              <option value="EOI">EOI</option>
              <option value="NIQ">NIQ</option>
              <option value="BID">Bid</option>
            </select>
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        {/* Attachments Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Attachments
          </label>
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              name="url"
              placeholder="Attachment URL"
              value={newAttachment.url}
              onChange={handleAttachmentChange}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="title"
              placeholder="Attachment Title"
              value={newAttachment.title}
              onChange={handleAttachmentChange}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={addAttachment}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
          {formData.attachments && formData.attachments.length > 0 && (
            <div className="border rounded-lg p-2">
              {formData.attachments.map((attachment, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-2 bg-gray-50 rounded mb-1"
                >
                  <div className="flex items-center space-x-2">
                    <Paperclip className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-sm font-medium">{attachment.title}</p>
                      <a 
                        href={attachment.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-blue-600 hover:underline"
                      >
                        {attachment.url}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAttachment(index)}
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
            {isEditing ? 'Update Tender' : 'Add Tender'}
          </button>
        </div>
      </form>
    </div>
  );
});

// Tenders List Component
const TendersList = React.memo(({ 
  tendersList, 
  searchTerm, 
  onEdit, 
  onDelete 
}) => (
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tender No</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Closing Date</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {tendersList.map((tender) => (
        <tr key={tender.id}>
          <td className="px-6 py-4">{tender.tender_no}</td>
          <td className="px-6 py-4">{tender.title || 'N/A'}</td>
          <td className="px-6 py-4">{tender.category}</td>
          <td className="px-6 py-4">
            {new Date(tender.closing_date).toLocaleDateString()}
          </td>
          <td className="px-6 py-4">
            <span className={`px-2 py-1 text-xs rounded ${
              tender.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
              tender.status === 'ARCHIVED' ? 'bg-gray-100 text-gray-800' :
              'bg-red-100 text-red-800'
            }`}>
              {tender.status}
            </span>
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(tender)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(tender.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </td>
        </tr>
      ))}
      {tendersList.length === 0 && (
        <tr>
            <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
            No tenders found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const TendersManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [tendersList, setTendersList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTender, setEditingTender] = useState(null);

  const fetchTenders = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/tenders/tenders');
      setTendersList(response.data);
    } catch (error) {
      console.error('Error fetching tenders:', error);
      alert("Failed to fetch tenders.");
    }
  }, []);

  useEffect(() => {
    fetchTenders();
  }, [fetchTenders]);

  const handleAddTender = async (formData) => {
    try {
      const response = await axiosInstance.post('/tenders/tenders', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        await fetchTenders();
        setActiveTab('manage');
        alert("Tender added successfully!");
      }
    } catch (error) {
      console.error('Error adding tender:', error);
      alert("Failed to add tender.");
    }
  };

  const handleUpdateTender = async (formData) => {
    try {
      const response = await axiosInstance.put(`/tenders/tenders/${editingTender.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        await fetchTenders();
        setEditingTender(null);
        setActiveTab('manage');
        alert("Tender updated successfully!");
      }
    } catch (error) {
      console.error('Error updating tender:', error);
      alert("Failed to update tender.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this tender?')) {
      try {
        const response = await axiosInstance.delete(`/tenders/tenders/${id}`);
        if (response.status === 200) {
          await fetchTenders();
          alert("Tender deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting tender:', error);
        alert("Failed to delete tender.");
      }
    }
  };

  const handleEdit = useCallback((tender) => {
    setEditingTender(tender);
    setActiveTab('add');
  }, []);

  const filteredTenders = useMemo(() => 
    tendersList.filter(tender => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        tender.tender_no.toLowerCase().includes(searchTermLower) ||
        (tender.title && tender.title.toLowerCase().includes(searchTermLower)) ||
        tender.category.toLowerCase().includes(searchTermLower)
      );
    }), [tendersList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingTender) {
              setEditingTender(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingTender ? 'Edit Tender' : 'Add Tender'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Tenders
        </button>
      </div>

      {activeTab === 'add' ? (
        <TenderForm
          onSubmit={editingTender ? handleUpdateTender : handleAddTender}
          initialData={editingTender}
          isEditing={!!editingTender}
          onCancel={() => {
            setEditingTender(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Tenders</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search tenders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <TendersList 
              tendersList={filteredTenders}
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

export default TendersManager;
