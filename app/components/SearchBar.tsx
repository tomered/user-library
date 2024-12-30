import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string, field: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [field, setField] = useState("all"); // Default search field is "all"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value, field); // Pass the query and field to the parent
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setField(value);
    onSearch(query, value); // Pass the current query and the new field to the parent
  };

  return (
    <div className="flex items-center gap-4 flex-grow">
      {/* Selector */}
      <div className="relative">
        <select
          value={field}
          onChange={handleFieldChange}
          className="px-4 py-2 border rounded-lg shadow-sm bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-purple-500 transition-all duration-300"
          style={{
            border: "2px solid transparent",
            borderRadius: "8px", // Explicitly set border-radius
            backgroundImage:
              "linear-gradient(white, white), linear-gradient(to right, blue, purple)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <option value="all">All</option>
          <option value="email">Email</option>
          <option value="name">Name</option>
          <option value="id">ID</option>
          <option value="location">Location</option>
        </select>
      </div>

      {/* Search Input */}
      <div className="relative flex-1">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={`Search by ${field}...`}
          className="w-full px-4 py-2 pr-10 border rounded-lg shadow-sm bg-white text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-purple-500 transition-all duration-300"
          style={{
            border: "2px solid transparent",
            borderRadius: "8px", // Explicitly set border-radius
            backgroundImage:
              "linear-gradient(white, white), linear-gradient(to right, blue, purple)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
