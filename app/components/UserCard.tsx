"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Key, Edit, Trash2, Clock } from "lucide-react";
import { UserData } from "../types";

interface UserCardProps {
  user?: UserData;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after client has mounted
  }, []);

  if (!isClient) {
    return null; // Avoid rendering anything on the server
  }

  const handleEdit = () => {
    console.log("Edit user:", user?.id.value);
  };

  const handleDelete = () => {
    console.log("Delete user:", user?.id.value);
  };

  return (
    <Card className="w-full max-w-md bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-bl-full" />

      <CardHeader className="flex flex-row justify-center gap-4 p-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-md opacity-50" />
          <img
            src={user?.picture.medium || "/api/placeholder/200/200"}
            alt={`${user?.name.first} ${user?.name.last}`}
            className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-blue-600 font-medium">
            {user?.name.title}
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {user?.name.first} {user?.name.last}
          </h2>
        </div>
      </CardHeader>

      <CardContent className="p-6 pt-0 space-y-4">
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
            <span className="group-hover:text-purple-600 transition-colors">
              {user?.location.city}, {user?.location.state}
            </span>
            <span className="group-hover:text-purple-600 transition-colors">
              {user?.location.country} {user?.location.postcode}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4 text-blue-500" />
          <span className="text-sm">
            {user?.location.timezone.offset} -{" "}
            {user?.location.timezone.description}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <Key className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-mono">
            {user?.id.name}: {user?.id.value}
          </span>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-2 flex justify-end gap-2">
        <Button
          variant="outline"
          className="text-blue-600 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
          onClick={handleEdit}
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit
        </Button>
        <Button
          variant="outline"
          className="text-red-600 border-red-200 hover:border-red-400 hover:bg-red-50"
          onClick={handleDelete}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
