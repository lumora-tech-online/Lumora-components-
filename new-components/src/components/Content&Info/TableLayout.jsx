import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const TableLayout = ({ 
  columns = [], 
  data = [],
  isLoading = false,
  onSort,
  renderCell,
  className = "",
  emptyMessage = "No data available",
  sortable = true,
  hoverable = true,
  compact = false,
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc'
  });

  const handleSort = (columnKey) => {
    if (!sortable || !onSort) return;

    const direction = sortConfig.key === columnKey && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: columnKey, direction });
    onSort(columnKey, direction);
  };
  return (
    <div className={`overflow-x-auto shadow-lg rounded-lg ${className}`}>
      <table 
        className="min-w-full border border-gray-200 rounded-lg"
        role="grid"
        aria-busy={isLoading}
      >
        {/* Table Head */}
        <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-6 ${compact ? 'py-2' : 'py-3'} border-b border-gray-200 text-left ${
                  sortable ? 'cursor-pointer select-none' : ''
                }`}
                onClick={() => handleSort(col.key)}
                aria-sort={sortConfig.key === col.key ? sortConfig.direction : 'none'}
              >
                <div className="flex items-center space-x-1">
                  <span>{col.label}</span>
                  {sortable && (
                    <span className="inline-flex flex-col">
                      <ChevronUp 
                        size={12} 
                        className={`${
                          sortConfig.key === col.key && sortConfig.direction === 'asc'
                            ? 'text-blue-600'
                            : 'text-gray-400'
                        }`}
                      />
                      <ChevronDown 
                        size={12} 
                        className={`${
                          sortConfig.key === col.key && sortConfig.direction === 'desc'
                            ? 'text-blue-600'
                            : 'text-gray-400'
                        }`}
                      />
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="text-gray-700 text-sm">
          {isLoading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                Loading...
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex}
                className={`${hoverable ? 'hover:bg-gray-50' : ''} transition duration-150`}
              >
                {columns.map((col) => (
                  <td
                    key={`${row.id || rowIndex}-${col.key}`}
                    className={`px-6 ${compact ? 'py-2' : 'py-3'} border-b border-gray-200`}
                  >
                    {renderCell ? renderCell(row, col.key) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-6 text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableLayout;
