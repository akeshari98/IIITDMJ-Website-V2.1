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
const EventsForm = React.memo(({ onSubmit, initialData, isEditing, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    external_link: '',
    cover_image: '',
    description: ''
  });

  // Update form data when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: '',
        date: '',
        location: '',
        external_link: '',
        cover_image: '',
        description: ''
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
    formDataToSend.append('name', formData.name);
    formDataToSend.append('date', formData.date);
    formDataToSend.append('location', formData.location);
    formDataToSend.append('external_link', formData.external_link);
    formDataToSend.append('cover_image', formData.cover_image);
    formDataToSend.append('description', formData.description);
    if (isEditing) {
      formDataToSend.append('id', initialData.id);
    }

    onSubmit(formDataToSend);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <h3 className="text-lg font-semibold">
        {isEditing ? 'Edit Event' : 'Add New Event'}
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
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
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image
            </label>
            <input
              type="text"
              name="cover_image"
              value={formData.cover_image}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              External Link
            </label>
            <input
              type="text"
              name="external_LINK"
              value={formData.external_LINK}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
              rows={3}
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
            {isEditing ? 'Update Event' : 'Add Event'}
          </button>
        </div>
      </form>
    </div>
  );
});

const EventsList = React.memo(({ 
  eventsList, 
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
      {eventsList.map((event) => (
        <tr key={event.id}>
          <td className="px-6 py-4">{event.id}</td>
          <td className="px-6 py-4">{event.name}</td>
          <td className="px-6 py-4">
            {event.image_url ? (
              <a href={event.cover_image} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Image
              </a>
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
          </td>
          <td className="px-6 py-4">
            {new Date(event.createdAt).toLocaleDateString()}
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(event)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(event.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
      {eventsList.length === 0 && (
        <tr>
          <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
            No event found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const EventsManager = () => {
  const [activeTab, setActiveTab] = useState('add');
  const [eventsList, setEventsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingEvents, setEditingEvents] = useState(null);

  const fetchEvents = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/events/events');
      setEventsList(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const handleAddEvents = async (formData) => {
    try {
      const response = await axiosInstance.post('/events/events', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
     } );
      if (response.status === 201) {
        await fetchEvents();
        setActiveTab('manage');
        alert("Event added successfully!");
      }
    } catch (error) {
      console.error('Error adding event:', error);
      alert("Failed to add event.");
    }
  };

  const handleUpdateEvents = async (formData) => {
    try {
      const response = await axiosInstance.put(`/events/events/${editingEvents.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        await fetchEvents();
        setEditingEvents(null);
        setActiveTab('manage');
        alert("Event updated successfully!");
      }
    } catch (error) {
      console.error('Error updating event:', error);
      alert("Failed to update event.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const response = await axiosInstance.delete(`/events/events/${id}`);
        if (response.status === 200) {
          await fetchEvents();
          alert("Event deleted successfully!");
        }
      } catch (error) {
        console.error('Error deleting event:', error);
        alert("Failed to delete event.");
      }
    }
  };

  const handleEdit = useCallback((event) => {
    setEditingEvents(event);
    setActiveTab('add');
  }, []);

  const filteredEvents = useMemo(() => 
    eventsList.filter(event => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        event.id.toString().includes(searchTermLower) ||
        event.name.toLowerCase().includes(searchTermLower)
      );
    }), [eventsList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab('add');
            if (!editingEvents) {
              setEditingEvents(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'add'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {editingEvents ? 'Edit Event' : 'Add Events'}
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Manage Events
        </button>
      </div>

      {activeTab === 'add' ? (
        <EventsForm
          onSubmit={editingEvents ? handleUpdateEvents : handleAddEvents}
          initialData={editingEvents}
          // initialData={editingEvents ? {
          //   name: editingEvents.name,
          //   excerpt: editingEvents.excerpt,
          //   content: editingEvents.content,
          //   image_url: editingEvents.image_url || '',
          //   link: editingEvents.link,
          // } : null}
          isEditing={!!editingEvents}
          onCancel={() => {
            setEditingEvents(null);
            setActiveTab('manage');
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Event</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search event..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <EventsList 
              eventsList={filteredEvents}
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

export default EventsManager;