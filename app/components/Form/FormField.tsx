import React from "react";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <Input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default FormField;
