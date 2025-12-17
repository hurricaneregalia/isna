"use client";
import { useState } from "react";
import { MdDesignServices } from "react-icons/md";
import RadioGroup from "./inputs/RadioGroup";
import CheckboxGroup from "./inputs/CheckboxGroup";

export default function RelationsCard({ formData, handleRadioChange, designStyles, ctaOptions, lpForOptions, contentTypeOptions }) {
  const [error, setError] = useState("");

  const handleContentTypeChange = (id, checked) => {
    let newValues = Array.isArray(formData.lpContentTypes) ? [...formData.lpContentTypes] : [];

    if (checked) {
      if (newValues.length >= 8) {
        setError("Maksimal 8 tipe konten yang dapat dipilih.");
        setTimeout(() => setError(""), 5000); // Clear after 5s
        return;
      }
      newValues.push(id);
    } else {
      newValues = newValues.filter((val) => val !== id);
    }
    setError(""); // Clear error on valid action
    handleRadioChange("lpContentTypes", newValues);
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2 text-info">
          <MdDesignServices /> Configuration
        </h2>
        <div className="divider my-0"></div>

        <div className="grid grid-cols-1 gap-8">
          <RadioGroup
            label="Design Style"
            name="lpDesignStyleId"
            options={designStyles}
            selectedValue={formData.lpDesignStyleId}
            onChange={(val) => handleRadioChange("lpDesignStyleId", val)}
            labelKey="name"
          />

          <RadioGroup label="Call to Action" name="ctas" options={ctaOptions} selectedValue={formData.ctas} onChange={(val) => handleRadioChange("ctas", val)} />
        </div>

        <div className="divider"></div>

        <div className="grid grid-cols-1 gap-8">
          <RadioGroup label="LP For (Who is this for?)" name="lpFor" options={lpForOptions} selectedValue={formData.lpFor} onChange={(val) => handleRadioChange("lpFor", val)} />

          <div>
            <CheckboxGroup
              label="Content Types (Max 8)"
              name="lpContentTypes"
              options={contentTypeOptions}
              selectedValues={formData.lpContentTypes || []}
              onChange={handleContentTypeChange}
              labelKey="type"
            />
            {error && (
              <div role="alert" className="alert alert-warning mt-2 p-2 rounded-lg text-sm flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
