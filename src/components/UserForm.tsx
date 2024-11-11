import React, { useState, ChangeEvent } from "react";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

type UserFormProps = {
  onSave: (user: any) => void;
};

const UserForm: React.FC<UserFormProps> = ({ onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
    profilePhoto: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    profilePhoto: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "profilePhoto") {
      const fileInput = e.target as HTMLInputElement;
      const files = fileInput.files;

      if (files) {
        const file = files[0];
        if (file && !["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
          setErrors((prev) => ({
            ...prev,
            profilePhoto: "Only JPG, PNG, and GIF files are allowed."
          }));
          toast.error("Invalid file type. Only JPG, PNG, and GIF files are allowed.");
          return;
        } else {
          setErrors((prev) => ({ ...prev, profilePhoto: "" }));
          const reader = new FileReader();
          reader.onloadend = () => {
            setFormData((prev) => ({
              ...prev,
              profilePhoto: reader.result as string
            }));
          };
          reader.readAsDataURL(file);
        }
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "", profilePhoto: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
      setFormData({
        name: "",
        email: "",
        role: "User",
        status: "Active",
        profilePhoto: ""
      });
      toast.success("User added successfully!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium text-secondary-default">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Enter full name"
            required
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-default">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Enter email address"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-default">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-primary focus:ring-primary"
          >
            <option>User</option>
            <option>Admin</option>
            <option>Guest</option>
          </select>
        </div>

        <div className="flex items-center">
          <label className="mr-2 text-sm font-medium text-secondary-default">Status</label>
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                status: prev.status === "Active" ? "Inactive" : "Active"
              }))
            }
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${
              formData.status === "Active" ? "bg-accent-success" : "bg-accent-error"
            }`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                formData.status === "Active" ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className="ml-3 text-sm font-medium text-secondary-default">{formData.status}</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary-default">Profile Photo</label>
          <input
            type="file"
            name="profilePhoto"
            accept="image/*"
            onChange={handleChange}
            className={`mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-primary file:text-white
              hover:file:bg-indigo-700
              ${errors.profilePhoto ? "border-red-500" : ""}`}
          />
          {errors.profilePhoto && <p className="text-red-500 text-sm mt-1">{errors.profilePhoto}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add User
          </button>
        </div>
      </form>

     
    </>
  );
};

export default UserForm;
