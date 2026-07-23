import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full mb-6">
      <input
        type="text"
        placeholder="🔍 Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
