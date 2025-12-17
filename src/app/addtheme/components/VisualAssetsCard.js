"use client";

import { FaImage } from "react-icons/fa";
import TextInput from "./inputs/TextInput";
import Image from "next/image";

export default function VisualAssetsCard({ formData, handleChange }) {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body">
        <h2 className="card-title flex items-center gap-2 text-secondary">
          <FaImage /> Visual Assets
        </h2>
        <div className="divider my-0"></div>

        <div className="space-y-4">
          {/* Image Preview */}
          {formData.image && formData.image.length > 0 && (
            <div className="relative h-60 w-auto aspect-3/2 rounded-lg overflow-hidden border border-base-300">
              <Image src={formData.image} alt="Main Preview" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
            </div>
          )}
          <TextInput label="Main Image URL" name="image" placeholder="https://..." value={formData.image} onChange={handleChange} required />

          <TextInput label="OG Image URL" name="ogImage" placeholder="https://..." value={formData.ogImage} onChange={handleChange} />

          <TextInput label="Component Name" name="component" placeholder="e.g. HeroModern" value={formData.component} onChange={handleChange} disabled={true} />
        </div>
      </div>
    </div>
  );
}
