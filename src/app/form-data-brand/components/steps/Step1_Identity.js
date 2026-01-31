// Step1_Identity Component
// Brand identity information form step

import { handleSocialMediaChange, handleInputChange } from "../../../utils/formHandlers";
import { getFieldError, hasError } from "../../../utils/validationUtils";
import ExalviaFormInput from "../../../exalvia/ui-components/ExalviaFormInput";

export default function Step1_Identity({ formData, setFormData, errors, setErrors, touched, setTouched }) {
  const handleFieldChange = (field, value) => {
    handleInputChange(formData, setFormData, field, value);

    // Clear error when field changes
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSocialMediaFieldChange = (platform, value) => {
    handleSocialMediaChange(formData, setFormData, platform, value);

    // Clear social media errors
    if (errors.socialMedia?.[platform]) {
      setErrors((prev) => ({
        ...prev,
        socialMedia: {
          ...prev.socialMedia,
          [platform]: undefined,
        },
      }));
    }
  };

  const handleFieldBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExalviaFormInput
          label="Nama Brand"
          name="brandName"
          value={formData.brandName}
          onChange={(value) => handleFieldChange("brandName", value)}
          onBlur={() => handleFieldBlur("brandName")}
          error={hasError("brandName") ? getFieldError(errors, "brandName") : null}
          required
          gridCols="col-span-full"
        />

        <ExalviaFormInput
          label="Slogan Brand"
          name="slogan"
          value={formData.slogan}
          onChange={(value) => handleFieldChange("slogan", value)}
          onBlur={() => handleFieldBlur("slogan")}
          error={hasError("slogan") ? getFieldError(errors, "slogan") : null}
          required
          gridCols="col-span-full"
        />

        <ExalviaFormInput
          label="Peran Anda dalam Brand"
          name="role"
          value={formData.role}
          onChange={(value) => handleFieldChange("role", value)}
          onBlur={() => handleFieldBlur("role")}
          error={hasError("role") ? getFieldError(errors, "role") : null}
          required
          placeholder="Owner, Manager, Marketing, dll"
        />

        <ExalviaFormInput
          label="Nama Lengkap"
          name="fullName"
          value={formData.fullName}
          onChange={(value) => handleFieldChange("fullName", value)}
          onBlur={() => handleFieldBlur("fullName")}
          error={hasError("fullName") ? getFieldError(errors, "fullName") : null}
          required
        />
      </div>

      {/* Contact Information */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Informasi Kontak</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExalviaFormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(value) => handleFieldChange("email", value)}
            onBlur={() => handleFieldBlur("email")}
            error={hasError("email") ? getFieldError(errors, "email") : null}
            required
          />

          <ExalviaFormInput
            label="No. Telepon/WhatsApp"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(value) => handleFieldChange("phone", value)}
            onBlur={() => handleFieldBlur("phone")}
            error={hasError("phone") ? getFieldError(errors, "phone") : null}
            required
            placeholder="08xx-xxxx-xxxx"
          />
        </div>
      </div>

      {/* Social Media */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Media Sosial</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ExalviaFormInput
            label="Instagram"
            name="instagram"
            type="url"
            value={formData.socialMedia.instagram}
            onChange={(value) => handleSocialMediaFieldChange("instagram", value)}
            onBlur={() => handleFieldBlur("socialMedia.instagram")}
            error={hasError("socialMedia", null, "instagram") ? getFieldError(errors, "socialMedia", null, "instagram") : null}
            placeholder="https://instagram.com/username"
          />

          <ExalviaFormInput
            label="Facebook"
            name="facebook"
            type="url"
            value={formData.socialMedia.facebook}
            onChange={(value) => handleSocialMediaFieldChange("facebook", value)}
            onBlur={() => handleFieldBlur("socialMedia.facebook")}
            error={hasError("socialMedia", null, "facebook") ? getFieldError(errors, "socialMedia", null, "facebook") : null}
            placeholder="https://facebook.com/page"
          />

          <ExalviaFormInput
            label="Twitter/X"
            name="twitter"
            type="url"
            value={formData.socialMedia.twitter}
            onChange={(value) => handleSocialMediaFieldChange("twitter", value)}
            onBlur={() => handleFieldBlur("socialMedia.twitter")}
            error={hasError("socialMedia", null, "twitter") ? getFieldError(errors, "socialMedia", null, "twitter") : null}
            placeholder="https://twitter.com/username"
          />

          <ExalviaFormInput
            label="LinkedIn"
            name="linkedin"
            type="url"
            value={formData.socialMedia.linkedin}
            onChange={(value) => handleSocialMediaFieldChange("linkedin", value)}
            onBlur={() => handleFieldBlur("socialMedia.linkedin")}
            error={hasError("socialMedia", null, "linkedin") ? getFieldError(errors, "socialMedia", null, "linkedin") : null}
            placeholder="https://linkedin.com/company/name"
          />

          <ExalviaFormInput
            label="TikTok"
            name="tiktok"
            type="url"
            value={formData.socialMedia.tiktok}
            onChange={(value) => handleSocialMediaFieldChange("tiktok", value)}
            onBlur={() => handleFieldBlur("socialMedia.tiktok")}
            error={hasError("socialMedia", null, "tiktok") ? getFieldError(errors, "socialMedia", null, "tiktok") : null}
            placeholder="https://tiktok.com/@username"
          />

          <ExalviaFormInput
            label="YouTube"
            name="youtube"
            type="url"
            value={formData.socialMedia.youtube}
            onChange={(value) => handleSocialMediaFieldChange("youtube", value)}
            onBlur={() => handleFieldBlur("socialMedia.youtube")}
            error={hasError("socialMedia", null, "youtube") ? getFieldError(errors, "socialMedia", null, "youtube") : null}
            placeholder="https://youtube.com/channel"
          />
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="text-blue-600 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Tips:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Nama brand harus unik dan mudah diingat</li>
              <li>Slogan mencerminkan nilai dan misi brand</li>
              <li>Media sosial opsional, tapi sangat direkomendasikan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
