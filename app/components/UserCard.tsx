"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Key, Edit, Trash2 } from "lucide-react";
import { UserData } from "../types";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useUsers } from "./Grid/CustomHooks/useUsers";
import UserForm from "./Form/UserForm";

interface UserCardProps {
  user?: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { deleteUser, updateUser } = useUsers();

  const handleDelete = async (id: string) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (isConfirmed) {
      try {
        await deleteUser(id);
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user.");
      }
    }
  };

  const handleUpdateUser = async (
    updatedData: UserData
  ): Promise<string | null> => {
    try {
      const response = await updateUser(updatedData);
      if (response) {
        setIsDialogOpen(false); // Close dialog on success
      }
      return null;
    } catch (error) {
      console.error("Error updating user:", error);
      return "Failed to update user.";
    }
  };

  return (
    <Card className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row justify-center gap-4 p-4">
        <div className="relative">
          <img
            src={user?.picture}
            alt={`${user?.name.first} ${user?.name.last}`}
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-blue-600 font-medium">
            {user?.name.title}
          </div>
          <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {user?.name.first} {user?.name.last}
          </h2>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0 space-y-4">
        <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group">
          <Mail className="w-4 h-4 text-blue-500" />
          <a
            href={`mailto:${user?.email}`}
            className="hover:text-blue-600 transition-colors"
          >
            {user?.email}
          </a>
        </div>

        <div className="flex items-start gap-2 text-gray-600 group">
          <MapPin className="w-4 h-4 text-purple-500 mt-1" />
          <div className="flex flex-col">
            <span className="group-hover:text-purple-600 transition-colors">
              {user?.location.street.number} {user?.location.street.name}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <Key className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-mono">{user?.id}</span>
        </div>
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-2 flex justify-end gap-2">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="text-blue-600 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
              onClick={() => setIsDialogOpen(true)}
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </DialogTrigger>

          <DialogContent className="p-6 max-w-lg">
            <DialogHeader>
              <DialogTitle>Edit User</DialogTitle>
            </DialogHeader>
            {user && (
              <UserForm
                initialData={user}
                onSubmit={handleUpdateUser}
                onCancel={() => setIsDialogOpen(false)}
              />
            )}
          </DialogContent>
        </Dialog>

        <Button
          variant="outline"
          className="text-red-600 border-red-200 hover:border-red-400 hover:bg-red-50"
          onClick={() => user?.id && handleDelete(user.id)}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
