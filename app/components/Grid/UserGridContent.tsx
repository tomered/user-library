"use client";
import { UserData } from "@/app/types";
import React from "react";
import UserCard from "../UserCard";

interface UserGridContentProps {
  users: UserData[];
}

const UserGridContent: React.FC<UserGridContentProps> = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto justify-items-stretch">
      {users.map((user: UserData, index: number) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserGridContent;
