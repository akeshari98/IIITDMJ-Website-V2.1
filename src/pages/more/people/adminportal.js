import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPortal = () => {
  const [tables, setTables] = useState([]); // Dropdown for table selection
  const [selectedTable, setSelectedTable] = useState("");
  const [entries, setEntries] = useState([]); // Fetched entries
  const [formData, setFormData] = useState({}); // Insert form data
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedAttribute, setSelectedAttribute] = useState(""); // Attribute for search
  const [attributes, setAttributes] = useState([]); // Table attributes
  const [confirmationAction, setConfirmationAction] = useState(null); // Action for modals
  const [entryToModify, setEntryToModify] = useState(null); // Entry being modified

  // Fetch available tables on mount
  useEffect(() => {
    axios.get("/api/tables").then((response) => setTables(response.data));
  }, []);

  // Fetch table attributes when table is selected
  useEffect(() => {
    if (selectedTable) {
      axios.get(`/api/entries/${selectedTable}/attributes`).then((response) => {
        setAttributes(response.data);
        setFormData(response.data.reduce((acc, attr) => ({ ...acc, [attr]: "" }), {}));
      });
    }
  }, [selectedTable]);

  // Fetch table entries
  const fetchEntries = () => {
    axios
      .get(`/api/entries/${selectedTable}`, {
        params: { search: searchKeyword, attribute: selectedAttribute },
      })
      .then((response) => setEntries(response.data));
  };

  // Handle form input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle entry insertion
  const handleInsert = (e) => {
    e.preventDefault();
    axios.post(`/api/entries/${selectedTable}`, formData).then(fetchEntries);
  };

  // Handle delete confirmation
  const handleDelete = (id) => {
    axios.delete(`/api/entries/${selectedTable}/${id}`).then(fetchEntries);
    setConfirmationAction(null);
  };

  // Handle edit confirmation
  const handleEdit = () => {
    axios
      .put(`/api/entries/${selectedTable}/${entryToModify.id}`, entryToModify)
      .then(fetchEntries);
    setConfirmationAction(null);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Table Selection Dropdown */}
      <div className="flex items-center gap-4">
        <select
          className="border rounded px-4 py-2"
          value={selectedTable}
          onChange={(e) => setSelectedTable(e.target.value)}
        >
          <option value="">Select a Table</option>
          {tables.map((table) => (
            <option key={table} value={table}>
              {table}
            </option>
          ))}
        </select>
      </div>

      {/* Insert Form */}
      {selectedTable && (
        <form onSubmit={handleInsert} className="space-y-4">
          <h3 className="text-lg font-semibold">Insert Data</h3>
          <div className="grid grid-cols-2 gap-4">
            {attributes.map((attr) => (
              <div key={attr}>
                <label className="block text-sm">{attr}</label>
                <input
                  type="text"
                  name={attr}
                  value={formData[attr] || ""}
                  onChange={handleInputChange}
                  className="border rounded w-full px-2 py-1"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Entry
          </button>
        </form>
      )}

      {/* Search and Filter */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          className="border rounded px-4 py-2 flex-grow"
        />
        <select
          className="border rounded px-4 py-2"
          value={selectedAttribute}
          onChange={(e) => setSelectedAttribute(e.target.value)}
        >
          <option value="">All Attributes</option>
          {attributes.map((attr) => (
            <option key={attr} value={attr}>
              {attr}
            </option>
          ))}
        </select>
        <button
          onClick={fetchEntries}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Entries Table */}
      <div>
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="border rounded p-4 flex justify-between items-center"
          >
            <div>
              {Object.keys(entry).map((key) => (
                <p key={key}>
                  <strong>{key}:</strong> {entry[key]}
                </p>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setConfirmationAction("edit") || setEntryToModify(entry)
                }
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
              >
                Edit
              </button>
              <button
                onClick={() =>
                  setConfirmationAction("delete") || setEntryToModify(entry)
                }
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation Modal */}
      {confirmationAction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-6 space-y-4">
            <h3 className="text-lg">
              Are you sure you want to {confirmationAction} this entry?
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  confirmationAction === "delete"
                    ? handleDelete(entryToModify.id)
                    : handleEdit()
                }
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
              <button
                onClick={() => setConfirmationAction(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPortal;
