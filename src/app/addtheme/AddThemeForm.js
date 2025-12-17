"use client";
import { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa";
import BasicInfoCard from "./components/BasicInfoCard";
import VisualAssetsCard from "./components/VisualAssetsCard";
import SettingsCard from "./components/SettingsCard";
import RelationsCard from "./components/RelationsCard";
import SocialLinksCard from "./components/SocialLinksCard";

// Helper to safely parse JSON or return as-is if already object/array
const safeParseIds = (items) => {
  if (!items) return [];
  if (Array.isArray(items)) return items.map((i) => i.id);
  return [];
};

const safeParseKeywords = (keywords) => {
  if (!keywords) return "";
  try {
    const parsed = JSON.parse(keywords);
    if (Array.isArray(parsed)) {
      return parsed.join(", ");
    }
    return keywords; // Fallback if valid JSON but not array
  } catch (e) {
    return keywords; // Fallback if not JSON (plain string)
  }
};

export default function AddThemeForm({
  designStyles = [],
  ctaOptions = [],
  lpForOptions = [],
  contentTypeOptions = [],
  themeOptions = [],
  initialData = null, // New Prop
}) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    slug: initialData?.slug || "",
    description: initialData?.description || "",
    keywords: safeParseKeywords(initialData?.keywords),
    ogImage: initialData?.ogImage || "",
    themeId: initialData?.themeId || "",
    image: initialData?.image || "",
    component: initialData?.component || "",
    lpDesignStyleId: initialData?.lpDesignStyleId || "",
    marketingTools: initialData?.marketingTools || "",
    isActive: initialData?.isActive || false,

    // Relations (flatten to IDs)
    lpFor: initialData?.lpFor && initialData.lpFor.length > 0 ? initialData.lpFor[0].id : "",
    lpContentTypes: initialData?.lpContentTypes ? initialData.lpContentTypes.map((i) => i.id) : [], // Array for CheckboxGroup
    ctas: initialData?.ctas && initialData.ctas.length > 0 ? initialData.ctas[0].id : "",
  });

  const [socialLinks, setSocialLinks] = useState(
    initialData?.socialLinks?.length > 0
      ? initialData.socialLinks.map(({ platform, url, platformUsername }) => ({ platform, url, platformUsername: platformUsername || "" }))
      : [{ platform: "Instagram", url: "", platformUsername: "" }]
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  // Auto-close success modal after 3 seconds
  useEffect(() => {
    if (submissionSuccess) {
      const timer = setTimeout(() => {
        setSubmissionSuccess(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submissionSuccess]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };

      // Sync Component Name with Slug (First letter capitalized)
      if (name === "slug") {
        updatedData.component = value ? value.charAt(0).toUpperCase() + value.slice(1) : "";
      }

      return updatedData;
    });
  };

  const handleRadioChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (index, field, value) => {
    const newLinks = [...socialLinks];
    newLinks[index][field] = value;
    setSocialLinks(newLinks);
  };

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "Instagram", url: "", platformUsername: "" }]);
  };

  const removeSocialLink = (index) => {
    const newLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(newLinks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmissionSuccess(null);

    // Prepare payload
    const payload = {
      ...formData,
      keywords: formData.keywords ? JSON.stringify(formData.keywords.split(",").map((k) => k.trim())) : "[]",
      themeId: formData.themeId ? parseInt(formData.themeId) : null,
      socialLinks,
      // Wrap single selections in array for Many-to-Many relations
      lpFor: formData.lpFor ? [formData.lpFor] : [],
      lpContentTypes: formData.lpContentTypes, // Already array, passed as is
      ctas: formData.ctas ? [formData.ctas] : [],
    };

    console.log("Submitting Payload:", payload);

    try {
      let result;
      if (initialData) {
        // Update Mode
        const { updateTheme } = await import("@/app/actions/theme");
        result = await updateTheme(initialData.id, payload);
      } else {
        // Create Mode
        const { saveTheme } = await import("@/app/actions/theme");
        result = await saveTheme(payload);
      }

      if (result.success) {
        setSubmissionSuccess(initialData ? "Theme updated successfully!" : "Theme saved successfully!");
      } else {
        setSubmissionError("Error saving theme:\n" + result.error);
      }
    } catch (err) {
      console.error(err);
      setSubmissionError("An unexpected error occurred:\n" + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
        <BasicInfoCard formData={formData} handleChange={handleChange} />

        <VisualAssetsCard formData={formData} handleChange={handleChange} />

        <SettingsCard formData={formData} handleChange={handleChange} themeOptions={themeOptions} />

        <RelationsCard
          formData={formData}
          handleRadioChange={handleRadioChange}
          designStyles={designStyles}
          ctaOptions={ctaOptions}
          lpForOptions={lpForOptions}
          contentTypeOptions={contentTypeOptions}
        />

        <SocialLinksCard socialLinks={socialLinks} handleSocialChange={handleSocialChange} addSocialLink={addSocialLink} removeSocialLink={removeSocialLink} />

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <button type="submit" className={`btn btn-primary btn-wide gap-2 ${isSubmitting ? "loading" : ""}`} disabled={isSubmitting}>
            {!isSubmitting && <FaSave />}
            {isSubmitting ? "Saving..." : "Save Theme"}
          </button>
        </div>
      </form>

      {/* Error/Success Modal */}
      {(submissionError || submissionSuccess) && (
        <dialog className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className={`font-bold text-lg ${submissionError ? "text-error" : "text-success"}`}>{submissionError ? "Error Occurred" : "Success!"}</h3>
            <div className="py-4">
              {submissionError ? (
                <div className="alert alert-error shadow-lg items-start">
                  <pre className="whitespace-pre-wrap text-sm font-mono break-all">{submissionError}</pre>
                </div>
              ) : (
                <div className="alert alert-success shadow-lg">
                  <span>{submissionSuccess}</span>
                </div>
              )}
            </div>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  setSubmissionError(null);
                  setSubmissionSuccess(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
