import { UserData } from "@/app/types";
import React, { useState } from "react";
import { useFormData } from "./CustomHooks/useFormData";
import { useValidation } from "./CustomHooks/useValidation";
import FormField from "./FormField";
import UserFormAddress from "./UserFormAddress";
import { Button } from "@/components/ui/button";

interface UserFormProps {
  initialData?: UserData;
  onSubmit: (data: UserData) => Promise<string | null>;
  onCancel?: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const { formData, handleChange } = useFormData(initialData);
  const { validateForm } = useValidation(formData);
  const [errors, setErrors] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setErrors(error);
      return;
    }
    setErrors("");
    const serverError = await onSubmit(formData);
    if (serverError) setErrors(serverError);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 overflow-y-auto max-h-[calc(100vh-150px)] p-4 pb-16"
    >
      {errors && <div className="text-red-600 text-sm">{errors}</div>}
      <FormField
        id="first"
        name="name.first"
        label="First Name"
        value={formData.name.first}
        onChange={handleChange}
        placeholder="First Name"
      />
      <FormField
        id="last"
        name="name.last"
        label="Last Name"
        value={formData.name.last}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <FormField
        id="email"
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
      />
      <UserFormAddress formData={formData} handleChange={handleChange} />

      {/* Buttons for Submit and Cancel */}
      <div className="flex gap-4">
        <Button type="submit" className="flex-1 bg-blue-600 text-white">
          {initialData ? "Update User" : "Add User"}
        </Button>
        <Button
          type="button"
          className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
