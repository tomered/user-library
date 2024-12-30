import { useState } from "react";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchField, setSearchField] = useState("all");

  const handleSearch = (query: string, field: string) => {
    setSearchQuery(query);
    setSearchField(field);
  };

  return {
    searchQuery,
    searchField,
    handleSearch,
  };
};
