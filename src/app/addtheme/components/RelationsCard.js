"use client";

import { MdDesignServices } from "react-icons/md";
import RadioGroup from "./inputs/RadioGroup";

export default function RelationsCard({
  formData,
  handleRadioChange,
  designStyles,
  ctaOptions,
  lpForOptions,
  contentTypeOptions,
}) {
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

          <RadioGroup
            label="Call to Action"
            name="ctas"
            options={ctaOptions}
            selectedValue={formData.ctas}
            onChange={(val) => handleRadioChange("ctas", val)}
          />
        </div>

        <div className="divider"></div>

        <div className="grid grid-cols-1 gap-8">
           <RadioGroup
            label="LP For (Who is this for?)"
            name="lpFor"
            options={lpForOptions}
            selectedValue={formData.lpFor}
            onChange={(val) => handleRadioChange("lpFor", val)}
          />

           <RadioGroup
            label="Content Types"
            name="lpContentTypes"
            options={contentTypeOptions}
            selectedValue={formData.lpContentTypes}
            onChange={(val) => handleRadioChange("lpContentTypes", val)}
            labelKey="type"
          />
        </div>
      </div>
    </div>
  );
}
