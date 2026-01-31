// Step8_Problems Component
// Problems and solutions form step

import { handleInputChange, handleProblemsSolutionsChange, addProblemsSolutions, removeProblemsSolutions } from "../../../utils/formHandlers";
import { getFieldError, hasError } from "../../../utils/validationUtils";
import ExalviaFormInput from "../../../exalvia/ui-components/ExalviaFormInput";

export default function Step8_Problems({ formData, setFormData, errors, setErrors, touched, setTouched }) {
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

  const handleProblemsSolutionsFieldChange = (index, field, value) => {
    handleProblemsSolutionsChange(formData, setFormData, index, field, value);

    // Clear problems/solutions error
    if (errors.problemsSolutions?.items?.[index]?.[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors.problemsSolutions?.items?.[index]) {
          delete newErrors.problemsSolutions.items[index][field];
          if (Object.keys(newErrors.problemsSolutions.items[index]).length === 0) {
            delete newErrors.problemsSolutions.items[index];
          }
        }
        return newErrors;
      });
    }
  };

  const handleAddProblemsSolutions = () => {
    addProblemsSolutions(formData, setFormData);
  };

  const handleRemoveProblemsSolutions = (index) => {
    removeProblemsSolutions(formData, setFormData, index);

    // Clear error for removed item
    if (errors.problemsSolutions?.items?.[index]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors.problemsSolutions?.items) {
          delete newErrors.problemsSolutions.items[index];
        }
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

  const handleProblemsSolutionsBlur = (index, field) => {
    setTouched((prev) => ({
      ...prev,
      problemsSolutions: {
        ...prev.problemsSolutions,
        items: {
          ...prev.problemsSolutions?.items,
          [index]: {
            ...prev.problemsSolutions?.items?.[index],
            [field]: true,
          },
        },
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Problems & Solutions Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">🔍</div>
          <div>
            <h3 className="text-lg font-semibold">Masalah & Solusi</h3>
            <p className="text-sm text-gray-600">Identifikasi masalah yang brand selesaikan dan solusi yang ditawarkan</p>
          </div>
        </div>

        <div className="space-y-4">
          {formData.problemsSolutions.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-sm">Masalah & Solusi #{index + 1}</h4>
                {formData.problemsSolutions.length > 1 && (
                  <button type="button" onClick={() => handleRemoveProblemsSolutions(index)} className="btn btn-ghost btn-sm text-red-600 hover:bg-red-50">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-sm">❌</span>
                    </div>
                    <h5 className="font-medium text-sm">Masalah</h5>
                  </div>
                  <ExalviaFormInput
                    label=""
                    name={`problems_solutions_${index}_problem`}
                    value={item.problem}
                    onChange={(value) => handleProblemsSolutionsFieldChange(index, "problem", value)}
                    onBlur={() => handleProblemsSolutionsBlur(index, "problem")}
                    error={hasError("problemsSolutions", index, "problem") ? getFieldError(errors, "problemsSolutions", index, "problem") : null}
                    required
                    type="textarea"
                    rows={3}
                    placeholder="Apa masalah utama yang dihadapi target audiens?"
                    helpText="Deskripsikan masalah secara spesifik dan jelas"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✅</span>
                    </div>
                    <h5 className="font-medium text-sm">Solusi</h5>
                  </div>
                  <ExalviaFormInput
                    label=""
                    name={`problems_solutions_${index}_solution`}
                    value={item.solution}
                    onChange={(value) => handleProblemsSolutionsFieldChange(index, "solution", value)}
                    onBlur={() => handleProblemsSolutionsBlur(index, "solution")}
                    error={hasError("problemsSolutions", index, "solution") ? getFieldError(errors, "problemsSolutions", index, "solution") : null}
                    required
                    type="textarea"
                    rows={3}
                    placeholder="Bagaimana brand Anda menyelesaikan masalah ini?"
                    helpText="Jelaskan solusi yang ditawarkan secara detail"
                  />
                </div>
              </div>

              {/* Additional Details */}
              <div className="mt-4 p-3 bg-white rounded border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <ExalviaFormInput
                    label="Problem Category"
                    name={`problems_solutions_${index}_category`}
                    value={item.category || ""}
                    onChange={(value) => handleProblemsSolutionsFieldChange(index, "category", value)}
                    type="select"
                    options={[
                      { value: "financial", label: "Financial" },
                      { value: "time", label: "Time/Efficiency" },
                      { value: "convenience", label: "Convenience" },
                      { value: "quality", label: "Quality" },
                      { value: "emotional", label: "Emotional" },
                      { value: "social", label: "Social Status" },
                      { value: "other", label: "Other" },
                    ]}
                    placeholder="Pilih kategori"
                  />

                  <ExalviaFormInput
                    label="Urgency Level"
                    name={`problems_solutions_${index}_urgency`}
                    value={item.urgency || ""}
                    onChange={(value) => handleProblemsSolutionsFieldChange(index, "urgency", value)}
                    type="select"
                    options={[
                      { value: "high", label: "High - Critical" },
                      { value: "medium", label: "Medium - Important" },
                      { value: "low", label: "Low - Nice to have" },
                    ]}
                    placeholder="Pilih urgency"
                  />

                  <ExalviaFormInput
                    label="Market Size"
                    name={`problems_solutions_${index}_marketSize`}
                    value={item.marketSize || ""}
                    onChange={(value) => handleProblemsSolutionsFieldChange(index, "marketSize", value)}
                    placeholder="Contoh: 10,000 people/month"
                    helpText="Perkiraan ukuran market untuk masalah ini"
                  />
                </div>
              </div>
            </div>
          ))}

          <button type="button" onClick={handleAddProblemsSolutions} className="btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
            <span>+</span> Tambah Masalah & Solusi
          </button>
        </div>
      </div>

      {/* Value Proposition Canvas */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">💡</div>
          <div>
            <h3 className="text-lg font-semibold">Value Proposition Summary</h3>
            <p className="text-sm text-gray-600">Ringkasan nilai yang brand Anda tawarkan</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExalviaFormInput
            label="Pain Relievers"
            name="painRelievers"
            value={formData.painRelievers || ""}
            onChange={(value) => handleFieldChange("painRelievers", value)}
            onBlur={() => handleFieldBlur("painRelievers")}
            type="textarea"
            rows={3}
            placeholder="Bagaimana brand Anda mengurangi pain points pelanggan?"
            helpText="Fokus pada pengurangan rasa sakit, frustasi, dan difficulties"
          />

          <ExalviaFormInput
            label="Gain Creators"
            name="gainCreators"
            value={formData.gainCreators || ""}
            onChange={(value) => handleFieldChange("gainCreators", value)}
            onBlur={() => handleFieldBlur("gainCreators")}
            type="textarea"
            rows={3}
            placeholder="Bagaimana brand Anda menciptakan benefits untuk pelanggan?"
            helpText="Fokus pada penciptaan keuntungan, pleasure, dan dreams"
          />
        </div>

        <ExalviaFormInput
          label="Products & Services"
          name="productsServices"
          value={formData.productsServices || ""}
          onChange={(value) => handleFieldChange("productsServices", value)}
          onBlur={() => handleFieldBlur("productsServices")}
          type="textarea"
          rows={3}
          placeholder="Daftar produk/layanan yang mendukung value proposition"
          helpText="Link produk/layanan ke pain relievers dan gain creators"
        />
      </div>

      {/* Help Text */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="text-indigo-600 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-indigo-800">
            <p className="font-medium mb-1">Tips:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Fokus pada masalah yang paling penting bagi target audiens</li>
              <li>Solusi harus spesifik, measurable, dan dapat dibuktikan</li>
              <li>Urgency level membantu prioritas pengembangan produk/layanan</li>
              <li>Value proposition harus jelas dan compelling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
