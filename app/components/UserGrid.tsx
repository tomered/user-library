import React from "react";
import UserCard from "./UserCard";
import { UserData } from "../types";

interface UserGridProps {
  users: UserData[];
}

const UserGrid: React.FC<UserGridProps> = ({ users }) => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
