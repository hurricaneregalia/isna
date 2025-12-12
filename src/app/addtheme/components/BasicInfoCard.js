"use client";

import { FaGlobe } from "react-icons/fa";
import TextInput from "./inputs/TextInput";
import TextAreaInput from "./inputs/TextAreaInput";

export default function BasicInfoCard({ formData, handleChange }) {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2 text-primary">
          <FaGlobe /> Basic Information
        </h2>
        <div className="divider my-0"></div>

        <div className="space-y-6">
          <TextInput
            label="Site Name"
            name="name"
            placeholder="E.g. My Landing Page"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            label="Slug"
            name="slug"
            placeholder="unique-page-slug"
            value={formData.slug}
            onChange={handleChange}
            required
          />
          <TextAreaInput
            label="Description"
            name="description"
            placeholder="Describe the purpose of this landing page..."
            value={formData.description}
            onChange={handleChange}
            required
            className="md:col-span-2"
          />
        </div>
      </div>
    </div>
  );
}
