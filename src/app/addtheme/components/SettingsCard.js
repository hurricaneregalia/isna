"use client";

import { FaCog } from "react-icons/fa";
import SelectInput from "./inputs/SelectInput";
import TextInput from "./inputs/TextInput";
import ToggleInput from "./inputs/ToggleInput";

export default function SettingsCard({ formData, handleChange, themeOptions }) {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2 text-accent">
          <FaCog /> Settings & Metadata
        </h2>
        <div className="divider my-0"></div>

        <div className="space-y-4">
          <SelectInput
            label="Theme"
            name="themeId"
            value={formData.themeId}
            onChange={handleChange}
            options={themeOptions}
            placeholder="-- Select Theme --"
          />

          <TextInput
            label="Marketing Tools"
            name="marketingTools"
            placeholder="Config string..."
            value={formData.marketingTools}
            onChange={handleChange}
          />

          <TextInput
            label="Keywords (comma separated)"
            name="keywords"
            placeholder="seo, landing, page"
            value={formData.keywords}
            onChange={handleChange}
          />

          <ToggleInput
            label="Is Active?"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
