import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Image, Search } from "lucide-react";
import axiosInstance from "../../../axios";
import profile from "../../../resources/images/admin/profile.jpg";
import { INTEGER } from "sequelize";

// Separate form component with memoization
const DoctorsForm = React.memo(
  ({ onSubmit, initialData, isEditing, onCancel }) => {
    const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      role: "",
      imp: INTEGER,
      email: "",
      isFaculty: Boolean
    });

    // Update form data when initialData changes
    useEffect(() => {
      if (initialData) {
        setFormData(initialData);
      } else {
        // Reset form when not editing
        setFormData({
            first_name: "",
            last_name: "",
            role: "",
            imp: null,
            email: "",
            isFaculty: "true"
        });
      }
    }, [initialData]);

    const handleInputChange = useCallback((e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

    return (
      <div className="max-w-4xl space-y-6">
        <h3 className="text-lg font-semibold">
          {isEditing ? "Edit Member" : "Add New Member"}
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-row">
            <label className="block text-md font-medium text-gray-700 mb-1 mr-3">
                Faculty: 
            </label>
            <div className="flex items-center space-x-4 -mt-1">
                <label className="flex items-center">
                <input
                    type="radio"
                    name="isFaculty"
                    value= "true"
                    checked={formData.isFaculty ==="true"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    required
                />
                <span className="ml-2 text-md text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                <input
                    type="radio"
                    name="isFaculty"
                    value="false"
                    checked={formData.isFaculty === "false"}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    required
                />
                <span className="ml-2 text-md text-gray-700">No</span>
                </label>
            </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID
              </label>
              <input
                type="number"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role Importance
              </label>
              <input
                type="number"
                name="imp"
                value={formData.imp}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              {isEditing ? "Update Shop" : "Add Shop"}
            </button>
          </div>
        </form>
      </div>
    );
  }
);

const DoctorsList = React.memo(
  ({ staffList, searchTerm, onEdit, onDelete }) => (
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
            Owner
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Contact
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Location
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {staffList.map((staff) => (
          <tr key={staff.id}>
            <td className="px-6 py-4">{staff.id}</td>
            <td className="px-6 py-4">{staff.name}</td>
            <td className="px-6 py-4">{staff.owner}</td>
            <td className="px-6 py-4">{staff.contact}</td>
            <td className="px-6 py-4">{staff.location}</td>
            <td className="px-6 py-4">
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(staff)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(staff.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
        {staffList.length === 0 && (
          <tr>
            <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
              No shops found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
);

const ShopsManager = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [staffList, setDoctorsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingDoctors, setEditingDoctors] = useState(null);

  const fetchDoctors = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/shopsInfo/getAllShops");
      setDoctorsList(response.data);
    } catch (error) {
      console.error("Error fetching doctor:", error);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  const handleAddDoctors = async (formData) => {
    try {
      const response = await axiosInstance.post(
        "/shopsInfo/addShops",
        formData
      );
      if (response.status === 200) {
        await fetchDoctors();
        setActiveTab("manage");
        alert("Shop added successfully!");
      }
    } catch (error) {
      console.error("Error adding shop:", error);
      alert("Failed to add shop.");
    }
  };

  const handleUpdateDoctors = async (formData) => {
    try {
      const response = await axiosInstance.put("/shopsInfo/updateShops", {
        ...formData,
        id: editingDoctors.id,
      });
      if (response.status === 200) {
        await fetchDoctors();
        setEditingDoctors(null);
        setActiveTab("manage");
        alert("Shop updated successfully!");
      }
    } catch (error) {
      console.error("Error updating shop:", error);
      alert("Failed to update shop.");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this shop?")) {
      try {
        const response = await axiosInstance.delete("/shopsInfo/deleteShops", {
          data: { id },
        });
        if (response.status === 200) {
          await fetchDoctors();
          alert("Shop deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting shop:", error);
        alert("Failed to delete shop.");
      }
    }
  };

  const handleEdit = useCallback((staff) => {
    setEditingDoctors(staff);
    setActiveTab("add");
  }, []);

  const filteredDoctors = useMemo(
    () =>
      staffList.filter((staff) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          staff.id.toString().includes(searchTermLower) ||
          (staff.name || "").toLowerCase().includes(searchTermLower) ||
          (staff.owner || "").toLowerCase().includes(searchTermLower) ||
          (staff.location || "").toLowerCase().includes(searchTermLower)
        );
      }),
    [staffList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            setActiveTab("add");
            if (!editingDoctors) {
              setEditingDoctors(null);
            }
          }}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "add"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {editingDoctors ? "Edit Shop" : "Add Shop"}
        </button>
        <button
          onClick={() => setActiveTab("manage")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "manage"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Manage Shops
        </button>
      </div>

      {activeTab === "add" ? (
        <DoctorsForm
          onSubmit={editingDoctors ? handleUpdateDoctors : handleAddDoctors}
          initialData={
            editingDoctors
              ? {
                  name: editingDoctors.name,
                  owner: editingDoctors.owner,
                  contact: editingDoctors.contact,
                  location: editingDoctors.location,
                }
              : null
          }
          isEditing={!!editingDoctors}
          onCancel={() => {
            setEditingDoctors(null);
            setActiveTab("manage");
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Shops</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search shops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <DoctorsList
              staffList={filteredDoctors}
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

export default ShopsManager;
