import { UserData } from "@/app/types";

export const useValidation = (formData: UserData) => {
  const validateForm = (): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    return null;
  };

  return { validateForm };
};
