import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Search } from "lucide-react";
import axiosInstance from "../../../axios";

const LINK_TYPES = [
    "annual_account",
    "annual_report",
    "bog_agenda",
    "bog_minutes",
    "external_circulars",
    "fc_agenda",
    "fc_minutes",
    "grievance_redressal_cell",
    "internal_circulars",
    "press_releases",
    "senate_agenda",
    "senate_minutes",
  ];
  

const LinksForm = React.memo(
  ({ onSubmit, initialData, isEditing, onCancel, selectedLinkType }) => {
    const [formData, setFormData] = useState({
      name: "",
      href: "",
      link_type: selectedLinkType,
    });

    useEffect(() => {
      if (initialData) {
        setFormData(initialData);
      } else {
        setFormData({
            name: "",
            href: "",
            link_type: selectedLinkType,
        });
      }
    }, [initialData, selectedLinkType]);

    const handleInputChange = useCallback((e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      const processedData = {
        ...formData,
        link_type: selectedLinkType, // Ensure we're using the selected link type
      };
      onSubmit(processedData);
    };

    return (
      <div className="max-w-4xl space-y-6">
        <h3 className="text-lg font-semibold">
          {isEditing ? "Edit Link" : "Add New Link"}
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="text-md font-medium text-gray-700 mb-1">
              Link Type:{" "}
              {selectedLinkType.replace(/_/g, " ").toUpperCase()}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link Name
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
                Link
              </label>
              <input
                type="text"
                name="href"
                value={formData.href}
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
              {isEditing ? "Update Link" : "Add Link"}
            </button>
          </div>
        </form>
      </div>
    );
  }
);

// Rest of the component remains the same, but update the LinksForm usage in LinksManager:

const LinksList = React.memo(({ linksList, onEdit, onDelete }) => (
  <table className="min-w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          ID
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Link Address
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {linksList.map((link) => (
        <tr key={link.id}>
          <td className="px-6 py-4">{link.id}</td>
          <td className="px-6 py-4">{link.name}</td>
          <td className="px-6 py-4">
            {link.href ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                View Link
              </a>
            ) : (
              <span className="text-gray-500">No Link</span>
            )}
          </td>
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(link)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(link)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
      {linksList.length === 0 && (
        <tr>
          <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
            No links found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const LinksManager = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [linksList, setLinksList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingLink, setEditingLink] = useState(null);
  const [selectedLinkType, setSelectedLinkType] = useState(
    LINK_TYPES[0]
  );

  const fetchLinks = useCallback(async () => {
    try {
      const response = await axiosInstance.get(
        "/linksInfo/getAllLinks",
        {
          params: { link_type: selectedLinkType },
        }
      );
      setLinksList(response.data);
    } catch (error) {
      console.error("Error fetching links:", error);
      alert("Failed to fetch links.");
    }
  }, [selectedLinkType]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks, selectedLinkType]);

  const handleAddLinks = async (formData) => {
    try {
      const response = await axiosInstance.post(
        "/linksInfo/addLinks",
        formData,
      );
      if (response.status === 200) {
        await fetchLinks();
        setActiveTab("manage");
        alert("Link added successfully!");
      }
    } catch (error) {
      console.error("Error adding link:", error);
      alert("Failed to add link.");
    }
  };

  const handleUpdateLinks = async (formData) => {
    try {
      const response = await axiosInstance.put(
        "/linksInfo/updateLinks",
        formData,
      );
      if (response.status === 200) {
        await fetchLinks();
        setEditingLink(null);
        setActiveTab("manage");
        alert("Link updated successfully!");
      }
    } catch (error) {
      console.error("Error updating link:", error);
      alert("Failed to update link.");
    }
  };

  const handleDelete = async (link) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      try {
        const response = await axiosInstance.delete(
          "/linksInfo/deleteLinks",
          {
            data: {
              id: link.id,
              link_type: selectedLinkType,
            },
          }
        );
        if (response.status === 200) {
          await fetchLinks();
          alert("Link deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting link:", error);
        alert("Failed to delete link.");
      }
    }
  };

  const handleEdit = useCallback(
    (link) => {
      setEditingLink({
        ...link,
        link_type: selectedLinkType,
      });
      setActiveTab("add");
    },
    [selectedLinkType]
  );

  const filteredStaff = useMemo(
    () =>
      linksList.filter((link) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          link.id.toString().includes(searchTermLower) ||
          (link.name || "").toLowerCase().includes(searchTermLower) ||
          (link.href || "").toLowerCase().includes(searchTermLower)
        );
      }),
    [linksList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => {
              setActiveTab("add");
              if (!editingLink) {
                setEditingLink(null);
              }
            }}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "add"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {editingLink ? "Edit Link" : "Add Link"}
          </button>
          <button
            onClick={() => {
              setEditingLink(null);
              setActiveTab("manage");
            }}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "manage"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            Manage Links
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={selectedLinkType}
            onChange={(e) => setSelectedLinkType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={editingLink}
          >
            {LINK_TYPES.map((type) => (
              <option key={type} value={type}>
                {type.replace(/_/g, " ").toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeTab === "add" ? (
        <LinksForm
          onSubmit={editingLink ? handleUpdateLinks : handleAddLinks}
          initialData={editingLink}
          isEditing={!!editingLink}
          selectedLinkType={selectedLinkType}
          onCancel={() => {
            setEditingLink(null);
            setActiveTab("manage");
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Links</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search links..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <LinksList
              linksList={filteredStaff}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LinksManager;
