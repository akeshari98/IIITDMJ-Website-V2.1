import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const ComplexTable = ({ sheetUrl }) => {
  const [tables, setTables] = useState([]);
  const [error, setError] = useState(null);

  const fetchAndParseData = async () => {
    try {
      const response = await fetch(sheetUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const csvData = await response.text();

      // Parse CSV into a JSON-like structure
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        complete: (result) => setTables([result.data]),
        error: (err) => setError(err.message),
      });
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchAndParseData();
  }, [sheetUrl]);

  if (error) return <div>Error: {error}</div>;
  if (!tables.length) return <div>Loading...</div>;

  return (
    <div>
      {tables.map((table, tableIdx) => (
        <div key={tableIdx} className="mb-8">
          <table className="table-auto border-collapse w-full border">
            <thead>
              <tr>
                {Object.keys(table[0] || {}).map((header, idx) => (
                  <th key={idx} className="border px-4 py-2 bg-gray-200">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {Object.values(row).map((cell, cellIdx) => (
                    <td key={cellIdx} className="border px-4 py-2">
                      {cell || "N/A"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ComplexTable;
