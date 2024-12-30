import React from "react";
import FormField from "./FormField";

interface UserFormAddressProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserFormAddress: React.FC<UserFormAddressProps> = ({ formData, handleChange }) => (
  <>
    <FormField
      id="streetNumber"
      name="location.street.number"
      label="Street Number"
      value={formData.location.street.number || ""}
      onChange={handleChange}
      placeholder="Street Number"
    />
    <FormField
      id="streetName"
      name="location.street.name"
      label="Street Name"
      value={formData.location.street.name || ""}
      onChange={handleChange}
      placeholder="Street Name"
    />
    <div className="grid grid-cols-2 gap-4">
      <FormField
        id="city"
        name="location.city"
        label="City"
        value={formData.location.city || ""}
        onChange={handleChange}
        placeholder="City"
      />
      <FormField
        id="country"
        name="location.country"
        label="Country"
        value={formData.location.country || ""}
        onChange={handleChange}
        placeholder="Country"
      />
    </div>
  </>
);

export default UserFormAddress;
