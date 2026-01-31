// Step5_Visual Component
// Visual identity and brand aesthetics form step

import { handleInputChange } from "../../../utils/formHandlers";
import { getFieldError, hasError } from "../../../utils/validationUtils";
import ExalviaFormInput from "../../../exalvia/ui-components/ExalviaFormInput";

export default function Step5_Visual({ formData, setFormData, errors, setErrors, touched, setTouched }) {
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

  const handleFieldBlur = (field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Brand Colors Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">🎨</div>
          <div>
            <h3 className="text-lg font-semibold">Warna Brand</h3>
            <p className="text-sm text-gray-600">Palet warna yang merepresentasikan brand Anda</p>
          </div>
        </div>

        <ExalviaFormInput
          label="Warna Brand Utama"
          name="brandColors"
          value={formData.brandColors}
          onChange={(value) => handleFieldChange("brandColors", value)}
          onBlur={() => handleFieldBlur("brandColors")}
          error={hasError("brandColors") ? getFieldError(errors, "brandColors") : null}
          required
          type="textarea"
          rows={3}
          placeholder="Contoh: Biru navy (#1e3a8a), Putih (#ffffff), Emas (#fbbf24)"
          helpText="Sebutkan warna utama, sekunder, dan aksen. Bisa gunakan nama warna atau kode hex"
        />

        {/* Color Preview */}
        {formData.brandColors && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-gray-700 mb-2">Preview Warna:</p>
            <div className="flex flex-wrap gap-2">
              {formData.brandColors.split(",").map((color, index) => {
                const cleanColor = color.trim();
                const isHex = cleanColor.startsWith("#");
                const colorValue = isHex ? cleanColor : cleanColor.toLowerCase();

                return (
                  <div key={index} className="flex items-center gap-2 bg-white px-3 py-2 rounded border">
                    <div
                      className="w-6 h-6 rounded border border-gray-300"
                      style={{
                        backgroundColor: isHex ? cleanColor : undefined,
                        background: !isHex ? colorValue : undefined,
                      }}
                    ></div>
                    <span className="text-sm">{cleanColor}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Typography Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">📝</div>
          <div>
            <h3 className="text-lg font-semibold">Tipografi</h3>
            <p className="text-sm text-gray-600">Font dan gaya tulisan yang digunakan brand</p>
          </div>
        </div>

        <ExalviaFormInput
          label="Font Brand"
          name="typography"
          value={formData.typography}
          onChange={(value) => handleFieldChange("typography", value)}
          onBlur={() => handleFieldBlur("typography")}
          error={hasError("typography") ? getFieldError(errors, "typography") : null}
          required
          type="textarea"
          rows={3}
          placeholder="Contoh: Heading: Montserrat Bold, Body: Poppins Regular, Display: Playfair Display"
          helpText="Sebutkan font untuk heading, body text, dan display jika ada"
        />

        {/* Typography Preview */}
        {formData.typography && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-medium text-gray-700 mb-2">Preview Tipografi:</p>
            <div className="space-y-2">
              {formData.typography.split(",").map((font, index) => {
                const cleanFont = font.trim();
                const fontName = cleanFont.split(":")[0].trim();

                return (
                  <div key={index} className="bg-white p-2 rounded border">
                    <span style={{ fontFamily: fontName }}>{fontName} - The quick brown fox jumps over the lazy dog</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Visual Style Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">🖼️</div>
          <div>
            <h3 className="text-lg font-semibold">Gaya Visual</h3>
            <p className="text-sm text-gray-600">Overall visual style dan aesthetic brand</p>
          </div>
        </div>

        <ExalviaFormInput
          label="Gaya Visual Brand"
          name="visualStyle"
          value={formData.visualStyle}
          onChange={(value) => handleFieldChange("visualStyle", value)}
          onBlur={() => handleFieldBlur("visualStyle")}
          error={hasError("visualStyle") ? getFieldError(errors, "visualStyle") : null}
          required
          type="textarea"
          rows={4}
          placeholder="Contoh: Minimalis modern dengan clean lines, warna monokromatik, dan plenty of white space. Foto produk dengan lighting natural dan flat lay composition."
          helpText="Deskripsikan overall aesthetic, photography style, illustration style, dll"
        />

        {/* Visual Style Options */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Keywords Gaya Visual:</h4>
            <div className="flex flex-wrap gap-2">
              {["Minimalis", "Modern", "Klasik", "Playful", "Elegan", "Bold", "Soft", "Geometric", "Organic"].map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => {
                    const currentKeywords = formData.visualStyleKeywords || [];
                    const newKeywords = currentKeywords.includes(style) ? currentKeywords.filter((k) => k !== style) : [...currentKeywords, style];
                    handleFieldChange("visualStyleKeywords", newKeywords);
                  }}
                  className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                    (formData.visualStyleKeywords || []).includes(style) ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Image Style:</h4>
            <div className="flex flex-wrap gap-2">
              {["Photography", "Illustration", "3D Render", "Flat Design", "Watercolor", "Vector"].map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => {
                    const currentImageStyle = formData.imageStyle || [];
                    const newImageStyle = currentImageStyle.includes(style) ? currentImageStyle.filter((s) => s !== style) : [...currentImageStyle, style];
                    handleFieldChange("imageStyle", newImageStyle);
                  }}
                  className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                    (formData.imageStyle || []).includes(style) ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="text-pink-600 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-pink-800">
            <p className="font-medium mb-1">Tips:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Warna brand harus konsisten di semua touchpoints</li>
              <li>Pilih font yang mudah dibaca dan sesuai dengan brand personality</li>
              <li>Gaya visual harus mencerminkan target audiens dan industry</li>
              <li>Pertimbangkan aplikasi di digital dan print media</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
