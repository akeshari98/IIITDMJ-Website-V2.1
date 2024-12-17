import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Search, Paperclip, Plus, Trash2, Edit } from 'lucide-react';
import axiosInstance from '../../../axios';

// Calendar Form Component
const CalendarForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    calendar_no: '',
    title: '',
    closing_date: '',
    status: 'ACTIVE',
    attachments: []
  });

  const [newAttachment, setNewAttachment] = useState({ url: '', title: '' });

  // Update form data when initialData changes
// Update form data when initialData changes
useEffect(() => {
  if (initialData) {
    setFormData({
      ...initialData,
      closing_date: initialData.closing_date ? 
        new Date(initialData.closing_date).toISOString().split('T')[0] : '',
      // Parse attachments if it's a JSON string
      attachments: typeof initialData.attachments === 'string' 
        ? JSON.parse(initialData.attachments) 
        : (initialData.attachments || [])
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
        formDataToSend.append(key, JSON.stringify(formData[key]));
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
        {isEditing ? 'Edit Calendar' : 'Add New Calendar'}
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Calendar Number
            </label>
            <input
              type="text"
              name="calendar_no"
              value={formData.calendar_no}
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
            {isEditing ? 'Update Calendar' : 'Add Calendar'}
          </button>
        </div>
      </form>
    </div>
  );
});

// Calendars List Component
const CalendarsList = React.memo(({ 
  calendarsList, 
  searchTerm, 
  onEdit, 
  onDelete 
}) => (
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Calendar No</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Closing Date</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {calendarsList.map((calendar) => (
        <tr key={calendar.id}>
          <td className="px-6 py-4">{calendar.calendar_no}</td>
          <td className="px-6 py-4">{calendar.title || 'N/A'}</td>
          <td className="px-6 py-4">
            {new Date(calendar.closing_date).toLocaleDateString()}
          </td>
          <td className="px-6 py-4">
            <span className={`px-2 py-1 text-xs rounded ${
              calendar.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
              calendar.status === 'ARCHIVED' ? 'bg-gray-100 text-gray-800' :
              'bg-red-100 text-red-800'
            }`}>
              {calendar.status}
            </span>
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(calendar)}
                className="text-blue-600 hover:text-blue-800"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => onDelete(calendar.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </td>
        </tr>
      ))}
      {calendarsList.length === 0 && (
        <tr>
            <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
            No calendars found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const CalendarsManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [calendarsList, setCalendarsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingCalendar, setEditingCalendar] = useState(null);

  const fetchCalendars = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/calendars/calendars');
      setCalendarsList(response.data);
    } catch (error) {
      console.error('Error fetching calendars:', error);
      alert("Failed to fetch calendars.");
    }
  }, []);

  useEffect(() => {
    fetchCalendars();
  }, [fetchCalendars]);

  const handleAddCalendar = async (formData) => {
    try {
      const response = await axiosInstance.post('/calendars/calendars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 201) {
        await fetchCalendars();
        setActiveTab('manage');
        alert("Calendar added successfully!");
      }
    } catch (error) {
      console.error('Error adding calendar:', error);
      alert("Failed to add calendar.");
    }
  };

  const handleUpdateCalendar = async (formData) => {
    try {
      const response = await axiosInstance.put(`/calendars/calendars/${editingCalendar.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        await fetchCalendars();
        setEditingCalendar(null);
        setActiveTab('manage');
        alert("Calendar updated successfully!");
      }
    } catch (error) {
      console.error('Error updating calendar:', error);
      alert("Failed to update calendar.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this calendar?')) {
      try {
        const response = await axiosInstance.delete(`/calendars/calendars/${id}`);
        if (response.status === 200) {
          await fetchCalendars();
          alert("Calendar deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting calendar:', error);
        alert("Failed to delete calendar.");
      }
    }
  };

  const handleEdit = useCallback((calendar) => {
    setEditingCalendar(calendar);
    setActiveTab('add');
  }, []);

  const filteredCalendars = useMemo(() => 
    calendarsList.filter(calendar => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        calendar.calendar_no.toLowerCase().includes(searchTermLower) ||
        (calendar.title && calendar.title.toLowerCase().includes(searchTermLower))
      );
    }), [calendarsList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingCalendar) {
              setEditingCalendar(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingCalendar ? 'Edit Calendar' : 'Add Calendar'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Calendars
        </button>
      </div>

      {activeTab === 'add' ? (
        <CalendarForm
          onSubmit={editingCalendar ? handleUpdateCalendar : handleAddCalendar}
          initialData={editingCalendar}
          isEditing={!!editingCalendar}
          onCancel={() => {
            setEditingCalendar(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Calendars</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search calendars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <CalendarsList 
              calendarsList={filteredCalendars}
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

export default CalendarsManager;
