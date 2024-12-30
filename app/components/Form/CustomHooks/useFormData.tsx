import { UserData } from "@/app/types";
import { useState } from "react";

export const useFormData = (initialData?: UserData) => {
  const [formData, setFormData] = useState<UserData>(
    initialData || {
      id: "",
      name: { first: "", last: "", title: "" },
      email: "",
      location: {
        street: { number: "", name: "" },
        city: "",
        country: "",
      },
      picture: "",
    }
  );

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
            [field]: value || "",
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

  return { formData, handleChange };
};
