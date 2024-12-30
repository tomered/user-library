"use client";
import React from "react";
import { useUsers } from "./Grid/CustomHooks/useUsers";
import { useSearch } from "./Grid/CustomHooks/useSearch";
import SearchBar from "./SearchBar";
import AddUserDialog from "./Grid/AddUserDialog";
import UserGridContent from "./Grid/UserGridContent";

const UserGrid: React.FC = () => {
  const { users, error, isLoading, addUser } = useUsers();
  const { searchQuery, searchField, handleSearch } = useSearch();

  // Filter users based on the search query and field
  const filteredUsers = users?.filter((user) => {
    const query = searchQuery.toLowerCase();

    if (searchField === "all") {
      const nameString =
        `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase();
      const locationString =
        `${user.location.country} ${user.location.city} ${user.location.street.name} ${user.location.street.number}`.toLowerCase();
      return (
        nameString.includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.id.toLowerCase().includes(query) ||
        locationString.includes(query)
      );
    }

    if (searchField === "name") {
      const nameString =
        `${user.name.title} ${user.name.first} ${user.name.last}`.toLowerCase();
      return nameString.includes(query);
    }

    if (searchField === "email") {
      return user.email.toLowerCase().includes(query);
    }

    if (searchField === "id") {
      return user.id.toLowerCase().includes(query);
    }

    if (searchField === "location") {
      const locationString =
        `${user.location.country} ${user.location.city} ${user.location.street.name} ${user.location.street.number}`.toLowerCase();
      return locationString.includes(query);
    }

    return false;
  });

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between">
        <SearchBar onSearch={handleSearch} />
        <AddUserDialog onAddUser={addUser} />
      </div>
      <UserGridContent users={filteredUsers || []} />
    </div>
  );
};

export default UserGrid;
