"use client";
import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import UserCard from "./UserCard";
import { UserData } from "../types";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import UserForm from "./UserForm";
import { Button } from "@/components/ui/button";
import queryClient from "../react-query-client";

// Function to fetch users from the API
const fetchUsers = async () => {
  const res = await fetch("/api/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
};

// Function to add a user (POST request)
const addUser = async (newUser: UserData) => {
  const res = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to add user");
  }

  return res.json();
};

const UserGrid: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    data: users,
    error,
    isLoading,
  } = useQuery<UserData[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const { mutateAsync: addUserMutate } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setIsDialogOpen(false);
    },
  });

  const handleAddUser = async (newUser: UserData): Promise<string | null> => {
    try {
      await addUserMutate(newUser);
      return null;
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
      return "An unknown error occurred.";
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      {/* Add User Button */}
      <div className="mb-4 flex justify-center sm:justify-end">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              + Add User
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-md w-full z-50 mx-auto sm:mx-0">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
            </DialogHeader>
            <UserForm
              onSubmit={async (data) => {
                const error = await handleAddUser(data);
                return error;
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {(users || []).map((user: UserData, index: number) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserGrid;
