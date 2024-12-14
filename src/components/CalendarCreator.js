import React, { useState, useMemo } from 'react';
import Papa from 'papaparse';
import { ArrowUp, ArrowDown, Filter, X } from 'lucide-react';

const ExcelSheetViewer = () => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filters, setFilters] = useState({});
  const [filterInputs, setFilterInputs] = useState({});

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
        setHeaders(results.meta.fields);
        // Reset filters and sorting when new file is uploaded
        setFilters({});
        setFilterInputs({});
        setSortColumn(null);
      },
    });
  };

  const handleSort = (column) => {
    const isAsc = sortColumn === column && sortDirection === 'asc';
    setSortColumn(column);
    setSortDirection(isAsc ? 'desc' : 'asc');
  };

  const handleFilterChange = (column, value) => {
    setFilterInputs(prev => ({
      ...prev,
      [column]: value
    }));
  };

  const applyFilter = (column) => {
    setFilters(prev => ({
      ...prev,
      [column]: filterInputs[column]
    }));
  };

  const removeFilter = (column) => {
    const newFilters = { ...filters };
    delete newFilters[column];
    setFilters(newFilters);
    
    // Also clear the input for this column
    const newFilterInputs = { ...filterInputs };
    delete newFilterInputs[column];
    setFilterInputs(newFilterInputs);
  };

  const filteredAndSortedData = useMemo(() => {
    let result = [...data];

    // Apply filters
    Object.keys(filters).forEach(column => {
      const filterValue = filters[column].toLowerCase();
      result = result.filter(row => 
        String(row[column]).toLowerCase().includes(filterValue)
      );
    });

    // Apply sorting
    if (sortColumn) {
      result.sort((a, b) => {
        if (a[sortColumn] == null) return 1;
        if (b[sortColumn] == null) return -1;
        
        if (typeof a[sortColumn] === 'string') {
          return sortDirection === 'asc'
            ? a[sortColumn].localeCompare(b[sortColumn])
            : b[sortColumn].localeCompare(a[sortColumn]);
        }
        
        return sortDirection === 'asc'
          ? a[sortColumn] - b[sortColumn]
          : b[sortColumn] - a[sortColumn];
      });
    }

    return result;
  }, [data, filters, sortColumn, sortDirection]);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <input 
          type="file" 
          accept=".csv,.xlsx,.xls" 
          onChange={handleFileUpload} 
          className="file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-blue-700 hover:file:bg-blue-100"
        />
        {data.length > 0 && (
          <div className="text-gray-600">
            Total Rows: {data.length}
          </div>
        )}
      </div>

      {data.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              {/* Header Row with Sorting and Filtering */}
              <tr className="bg-blue-100">
                {headers.map((header) => (
                  <th 
                    key={header} 
                    className="p-2 border text-left relative"
                  >
                    <div className="flex items-center">
                      <span 
                        onClick={() => handleSort(header)}
                        className="cursor-pointer hover:bg-blue-200 rounded px-2 flex-grow"
                      >
                        {header}
                        {sortColumn === header && (
                          sortDirection === 'asc' ? 
                            <ArrowUp className="inline h-4 w-4 ml-1" /> : 
                            <ArrowDown className="inline h-4 w-4 ml-1" />
                        )}
                      </span>
                      
                      {/* Filter Popup */}
                      <div className="relative">
                        <Filter 
                          className="h-4 w-4 cursor-pointer hover:text-blue-600 ml-2" 
                          onClick={(e) => {
                            e.stopPropagation();
                            const input = document.getElementById(`filter-${header}`);
                            input?.focus();
                          }}
                        />
                        {filters[header] && (
                          <X 
                            className="h-4 w-4 text-red-500 cursor-pointer ml-1" 
                            onClick={() => removeFilter(header)}
                          />
                        )}
                        {/* <div className="absolute z-10 right-0 mt-2 w-64 bg-white border rounded shadow-lg p-2">
                          <input 
                            id={`filter-${header}`}
                            type="text" 
                            placeholder={`Filter ${header}`}
                            value={filterInputs[header] || ''}
                            onChange={(e) => handleFilterChange(header, e.target.value)}
                            className="w-full p-1 border rounded"
                          />
                          <button 
                            onClick={() => applyFilter(header)}
                            className="mt-2 w-full bg-blue-500 text-white p-1 rounded hover:bg-blue-600"
                          >
                            Apply Filter
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedData.map((row, rowIndex) => (
                <tr 
                  key={rowIndex} 
                  className={`${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50`}
                >
                  {headers.map((header) => (
                    <td key={header} className="p-2 border">
                      {row[header] == null ? 'N/A' : String(row[header])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.length === 0 && (
        <div className="text-center text-gray-500 p-8">
          Please upload an Excel or CSV file to view its contents
        </div>
      )}
    </div>
  );
};

export default ExcelSheetViewer;