import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ placeholder = "Search...", onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 outline-none"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <FaSearch
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default SearchBox;
