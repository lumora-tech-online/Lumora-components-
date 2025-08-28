// components/Pagination.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange,
  showNumbers = true,
  className = "",
  maxVisible = 5 
}) => {
  // Validate and sanitize input
  const validCurrentPage = Math.max(1, Math.min(Math.floor(currentPage), totalPages));
  const validTotalPages = Math.max(1, Math.floor(totalPages));

  // Generate visible page numbers
  const getVisiblePages = () => {
    const pages = [];
    if (validTotalPages <= maxVisible) {
      // If total pages is less than max visible, show all pages
      for (let i = 1; i <= validTotalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always include first and last page
      pages.push(1);
      
      // Calculate range around current page
      let start = Math.max(2, validCurrentPage - Math.floor(maxVisible / 2));
      let end = Math.min(validTotalPages - 1, start + maxVisible - 3);
      
      // Adjust start if end is too close to totalPages
      start = Math.max(2, end - (maxVisible - 3));

      // Add ellipsis if needed
      if (start > 2) pages.push('...');
      
      // Add pages in range
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (end < validTotalPages - 1) pages.push('...');
      
      // Add last page if not already included
      if (validTotalPages > 1) pages.push(validTotalPages);
    }
    return pages;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= validTotalPages && page !== validCurrentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className={`flex items-center justify-center space-x-2 mt-6 ${className}`}>
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(validCurrentPage - 1)}
        disabled={validCurrentPage === 1}
        className={`flex items-center px-3 py-1 border rounded-lg ${
          validCurrentPage === 1
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-gray-700 border-gray-400 hover:bg-gray-100"
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
        <span className="ml-1">Prev</span>
      </button>

      {/* Page Numbers */}
      {showNumbers && getVisiblePages().map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-4 py-2 text-gray-600">
            {page}
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 border rounded-lg transition ${
              validCurrentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            aria-label={`Page ${page}`}
            aria-current={validCurrentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        )
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(validCurrentPage + 1)}
        disabled={validCurrentPage === validTotalPages}
        className={`flex items-center px-3 py-1 border rounded-lg ${
          validCurrentPage === validTotalPages
            ? "text-gray-400 border-gray-300 cursor-not-allowed"
            : "text-gray-700 border-gray-400 hover:bg-gray-100"
        }`}
        aria-label="Next page"
      >
        <span className="mr-1">Next</span>
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
