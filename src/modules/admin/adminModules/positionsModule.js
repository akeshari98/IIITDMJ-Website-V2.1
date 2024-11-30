import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Search } from "lucide-react";
import axiosInstance from "../../../axios";
import profile from "../../../resources/images/admin/profile.jpg";

const POSITION_TYPES = [
  "board_of_governors",
  "finance_committee",
  "building_works",
  "office_administration",
  "registrar",
  "registrar_f&a",
  "senate_special",
  "audit",
  "CPIO",
  "deans_students",
  "RSPC",
  "academics",
  "deans_acad",
  "scholarship",
  "IIC",
  "training&placement",
  "research_staff",
  "staff",
  "hod",
  "alumni_cell",
  "councelling_cell",
  "gymkhana",
  "communication_cell",
  "director",
];

const DoctorsForm = React.memo(
  ({ onSubmit, initialData, isEditing, onCancel, selectedPositionType }) => {
    const [formData, setFormData] = useState({
      id: null,
      role: "",
      imp: null,
      email: "",
      isFaculty: 1,
      position_type: selectedPositionType,
    });

    useEffect(() => {
      if (initialData) {
        setFormData(initialData);
      } else {
        setFormData({
          id: null,
          role: "",
          imp: null,
          email: "",
          isFaculty: 1,
          position_type: selectedPositionType,
        });
      }
    }, [initialData, selectedPositionType]);

    const handleInputChange = useCallback((e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: name === "isFaculty" ? Number(value) : value,
      }));
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      const processedData = {
        ...formData,
        position_type: selectedPositionType, // Ensure we're using the selected position type
      };
      onSubmit(processedData);
    };

    return (
      <div className="max-w-4xl space-y-6">
        <h3 className="text-lg font-semibold">
          {isEditing ? "Edit Position" : "Add New Position"}
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="text-md font-medium text-gray-700 mb-1">
              Position Type:{" "}
              {selectedPositionType.replace(/_/g, " ").toUpperCase()}
            </div>

            {!isEditing && (
              <div className="flex flex-row">
                <label className="block text-md font-medium text-gray-700 mb-1 mr-3">
                  Faculty Position:
                </label>
                <div className="flex items-center space-x-4 -mt-1">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isFaculty"
                      value={1}
                      checked={formData.isFaculty === 1}
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
                      value={0}
                      checked={formData.isFaculty === 0}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <span className="ml-2 text-md text-gray-700">No</span>
                  </label>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID
              </label>
              <input
                type="text"
                name="id"
                value={formData.id || ""}
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
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role Importance
              </label>
              <input
                type="number"
                name="imp"
                value={formData.imp || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Email
              </label>
              <input
                type="email"
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
              {isEditing ? "Update Position" : "Add Position"}
            </button>
          </div>
        </form>
      </div>
    );
  }
);

// Rest of the component remains the same, but update the DoctorsForm usage in PositionsManager:

const DoctorsList = React.memo(({ staffList, onEdit, onDelete }) => (
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
          Role
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Role Importance
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Job Email
        </th>
        {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Type
          </th> */}
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {staffList.map((staff) => (
        <tr key={staff.id}>
          <td className="px-6 py-4">{staff.id}</td>
          <td className="px-6 py-4">
            <div className="flex items-center">
              {
                <img
                  src={staff.profile_picture || profile}
                  alt={`${staff.first_name} ${staff.last_name}`}
                  className="h-8 w-8 rounded-full mr-3"
                />
              }
              {staff.first_name} {staff.last_name}
            </div>
          </td>
          <td className="px-6 py-4">{staff.role}</td>
          <td className="px-6 py-4">{staff.imp}</td>
          <td className="px-6 py-4">{staff.email}</td>
          {/* <td className="px-6 py-4">{staff.user_type}</td> */}
          <td className="px-6 py-4">
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(staff)}
                className="text-blue-600 hover:text-blue-800"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(staff)}
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
          <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
            No positions found.
          </td>
        </tr>
      )}
    </tbody>
  </table>
));

const PositionsManager = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [staffList, setStaffList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingPosition, setEditingPosition] = useState(null);
  const [selectedPositionType, setSelectedPositionType] = useState(
    POSITION_TYPES[0]
  );

  const fetchPositions = useCallback(async () => {
    try {
      const response = await axiosInstance.get(
        "/positionsInfo/getAllPositions",
        {
          params: { position_type: selectedPositionType },
        }
      );
      setStaffList(response.data);
    } catch (error) {
      console.error("Error fetching positions:", error);
      alert("Failed to fetch positions.");
    }
  }, [selectedPositionType]);

  useEffect(() => {
    fetchPositions();
  }, [fetchPositions, selectedPositionType]);

  const handleAddPosition = async (formData) => {
    try {
      console.log(formData);
      const response = await axiosInstance.post(
        "/positionsInfo/addPositions",
        formData
      );
      if (response.status === 200) {
        await fetchPositions();
        setActiveTab("manage");
        alert("Position added successfully!");
      }
    } catch (error) {
      // console.log(formData)
      // console.log(formData.isFaculty);
      console.error("Error adding position:", error);
      alert("Failed to add position.");
    }
  };

  const handleUpdatePosition = async (formData) => {
    try {
      const response = await axiosInstance.put(
        "/positionsInfo/updatePositions",
        formData
      );
      if (response.status === 200) {
        await fetchPositions();
        setEditingPosition(null);
        setActiveTab("manage");
        alert("Position updated successfully!");
      }
    } catch (error) {
      console.error("Error updating position:", error);
      alert("Failed to update position.");
    }
  };

  const handleDelete = async (staff) => {
    if (window.confirm("Are you sure you want to delete this position?")) {
      try {
        const response = await axiosInstance.delete(
          "/positionsInfo/deletePositions",
          {
            data: {
              id: staff.id,
              isFaculty: staff.user_type === "false" ? 0 : 1,
              position_type: selectedPositionType,
            },
          }
        );
        if (response.status === 200) {
          await fetchPositions();
          alert("Position deleted successfully!");
        }
      } catch (error) {
        console.error("Error deleting position:", error);
        alert("Failed to delete position.");
      }
    }
  };

  const handleEdit = useCallback(
    (staff) => {
      setEditingPosition({
        ...staff,
        isFaculty: staff.user_type === "false" ? 0 : 1,
        position_type: selectedPositionType,
      });
      setActiveTab("add");
    },
    [selectedPositionType]
  );

  const filteredStaff = useMemo(
    () =>
      staffList.filter((staff) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
          staff.id.toString().includes(searchTermLower) ||
          (staff.first_name || "").toLowerCase().includes(searchTermLower) ||
          (staff.last_name || "").toLowerCase().includes(searchTermLower) ||
          (staff.role || "").toLowerCase().includes(searchTermLower) ||
          ((staff.email || "").toLowerCase().includes(searchTermLower))
        );
      }),
    [staffList, searchTerm]
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            onClick={() => {
              setActiveTab("add");
              if (!editingPosition) {
                setEditingPosition(null);
              }
            }}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "add"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {editingPosition ? "Edit Position" : "Add Position"}
          </button>
          <button
            onClick={() => {
              setEditingPosition(null);
              setActiveTab("manage");
            }}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "manage"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            Manage Positions
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={selectedPositionType}
            onChange={(e) => setSelectedPositionType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={editingPosition}
          >
            {POSITION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type.replace(/_/g, " ").toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeTab === "add" ? (
        <DoctorsForm
          onSubmit={editingPosition ? handleUpdatePosition : handleAddPosition}
          initialData={editingPosition}
          isEditing={!!editingPosition}
          selectedPositionType={selectedPositionType}
          onCancel={() => {
            setEditingPosition(null);
            setActiveTab("manage");
          }}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Manage Positions</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
              />
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <DoctorsList
              staffList={filteredStaff}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PositionsManager;
