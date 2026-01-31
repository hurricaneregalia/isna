// Step2_Vision Component
// Brand vision, mission, and long-term goals form step

import { handleVisionMissionChange, addVisionMissionItem, removeVisionMissionItem } from "../../../utils/formHandlers";
import { getFieldError, hasError } from "../../../utils/validationUtils";
import ExalviaFormInput from "../../../exalvia/ui-components/ExalviaFormInput";
export default function Step2_Vision({ formData, setFormData, errors, setErrors, touched, setTouched }) {
  const handleFieldChange = (type, index, field, value) => {
    handleVisionMissionChange(formData, setFormData, type, index, field, value);

    // Clear error when field changes
    if (errors[type]?.items?.[index]?.[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors[type]?.items?.[index]) {
          delete newErrors[type].items[index][field];
          if (Object.keys(newErrors[type].items[index]).length === 0) {
            delete newErrors[type].items[index];
          }
        }
        return newErrors;
      });
    }
  };

  const handleAddItem = (type) => {
    addVisionMissionItem(formData, setFormData, type);
  };

  const handleRemoveItem = (type, index) => {
    removeVisionMissionItem(formData, setFormData, type);

    // Clear error for removed item
    if (errors[type]?.items?.[index]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors[type]?.items) {
          delete newErrors[type].items[index];
        }
        return newErrors;
      });
    }
  };

  const handleFieldBlur = (type, index, field) => {
    setTouched((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        items: {
          ...prev[type]?.items,
          [index]: {
            ...prev[type]?.items?.[index],
            [field]: true,
          },
        },
      },
    }));
  };

  const renderVisionMissionSection = (title, type, description, icon) => (
    <div className="border rounded-lg p-6 bg-white">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {formData[type].map((item, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-sm">
                {type === "vision" ? "Visi" : type === "mission" ? "Misi" : "Tujuan"} #{index + 1}
              </h4>
              {formData[type].length > 1 && (
                <button type="button" onClick={() => handleRemoveItem(type, index)} className="btn btn-ghost btn-sm text-red-600 hover:bg-red-50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              )}
            </div>

            <div className="space-y-3">
              <ExalviaFormInput
                label={`Judul ${type === "vision" ? "Visi" : type === "mission" ? "Misi" : "Tujuan"}`}
                name={`${type}_${index}_title`}
                value={item.title}
                onChange={(value) => handleFieldChange(type, index, "title", value)}
                onBlur={() => handleFieldBlur(type, index, "title")}
                error={hasError(type, index, "title") ? getFieldError(errors, type, index, "title") : null}
                required
                placeholder={`${type === "vision" ? "Visi utama brand" : type === "mission" ? "Misi utama brand" : "Tujuan jangka panjang"}`}
              />

              <ExalviaFormInput
                label={`Deskripsi ${type === "vision" ? "Visi" : type === "mission" ? "Misi" : "Tujuan"}`}
                name={`${type}_${index}_description`}
                value={item.description}
                onChange={(value) => handleFieldChange(type, index, "description", value)}
                onBlur={() => handleFieldBlur(type, index, "description")}
                error={hasError(type, index, "description") ? getFieldError(errors, type, index, "description") : null}
                required
                type="textarea"
                rows={3}
                placeholder={`Jelaskan ${type === "vision" ? "visi" : type === "mission" ? "misi" : "tujuan"} secara detail...`}
              />
            </div>
          </div>
        ))}

        <button type="button" onClick={() => handleAddItem(type)} className="btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
          <span>+</span> Tambah {type === "vision" ? "Visi" : type === "mission" ? "Misi" : "Tujuan"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Vision Section */}
      {renderVisionMissionSection("Visi Brand", "vision", "Apa yang ingin brand capai di masa depan?", "🎯")}

      {/* Mission Section */}
      {renderVisionMissionSection("Misi Brand", "mission", "Bagaimana brand mencapai visinya?", "🚀")}

      {/* Long-term Goals Section */}
      {renderVisionMissionSection("Tujuan Jangka Panjang", "longTermGoal", "Target spesifik yang ingin dicapai dalam 3-5 tahun", "📈")}

      {/* Help Text */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="text-green-600 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-green-800">
            <p className="font-medium mb-1">Tips:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Visi harus inspiratif dan jelas</li>
              <li>Misi harus actionable dan measurable</li>
              <li>Tujuan jangka panjang harus spesifik dan realistis</li>
              <li>Setiap item harus memiliki judul dan deskripsi yang jelas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
