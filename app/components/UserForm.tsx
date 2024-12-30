"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserData } from "../types";

interface UserFormProps {
  initialData?: UserData; // For editing an existing user
  onSubmit: (data: UserData) => Promise<string | null>; // Callback for form submission, returns error message if any
}

const UserForm: React.FC<UserFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>(
    initialData || {
      id: "",
      name: { first: "", last: "", title: "" },
      email: "",
      location: {
        street: { number: "", name: "" }, // Always ensure `number` is a string
        city: "",
        country: "",
      },
      picture: "",
    }
  );

  const [errors, setErrors] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("name.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        name: { ...prev.name, [field]: value || "" },
      }));
    } else if (name.startsWith("location.street.")) {
      const field = name.split(".")[2];
      setFormData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          street: {
            ...prev.location.street,
            [field]: value || "", // Always treat as string
          },
        },
      }));
    } else if (name.startsWith("location.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        location: { ...prev.location, [field]: value || "" },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value || "" }));
    }
  };

  const validateForm = async (): Promise<string | null> => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Ensure all fields are non-empty and valid
    if (!formData.name.first.trim() || formData.name.first.length < 3) {
      return "First name must have at least 3 characters.";
    }

    if (!formData.name.last.trim() || formData.name.last.length < 3) {
      return "Last name must have at least 3 characters.";
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return "Please provide a valid email address.";
    }

    if (!String(formData.location.street.number).trim()) {
      return "Street number cannot be empty.";
    }

    if (!formData.location.street.name.trim()) {
      return "Street name cannot be empty.";
    }

    if (!formData.location.city.trim()) {
      return "City cannot be empty.";
    }

    if (!formData.location.country.trim()) {
      return "Country cannot be empty.";
    }

    // Check for email uniqueness on the server
    const error = await onSubmit(formData);
    if (error) {
      return error;
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = await validateForm();
    if (error) {
      setErrors(error);
      return;
    }
    setErrors("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors && <div className="text-red-600 text-sm">{errors}</div>}

      <div>
        <label htmlFor="first" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <Input
          type="text"
          id="first"
          name="name.first"
          value={formData.name.first}
          onChange={handleChange}
          placeholder="First Name"
        />
      </div>

      <div>
        <label htmlFor="last" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <Input
          type="text"
          id="last"
          name="name.last"
          value={formData.name.last}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>

      <div>
        <label htmlFor="streetNumber" className="block text-sm font-medium text-gray-700">
          Street Number
        </label>
        <Input
          type="text"
          id="streetNumber"
          name="location.street.number"
          value={formData.location.street.number || ""} // Ensure it's always a string
          onChange={handleChange}
          placeholder="Street Number"
        />
      </div>

      <div>
        <label htmlFor="streetName" className="block text-sm font-medium text-gray-700">
          Street Name
        </label>
        <Input
          type="text"
          id="streetName"
          name="location.street.name"
          value={formData.location.street.name || ""}
          onChange={handleChange}
          placeholder="Street Name"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <Input
            type="text"
            id="city"
            name="location.city"
            value={formData.location.city || ""}
            onChange={handleChange}
            placeholder="City"
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <Input
            type="text"
            id="country"
            name="location.country"
            value={formData.location.country || ""}
            onChange={handleChange}
            placeholder="Country"
          />
        </div>
      </div>

      <Button type="submit" className="w-full bg-blue-600 text-white">
        {initialData ? "Update User" : "Add User"}
      </Button>
    </form>
  );
};

export default UserForm;
