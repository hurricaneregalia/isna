// Step6_Experience Component
// Customer experience and feedback form step

import { handleInputChange, handleFeedbackChange, addFeedback, removeFeedback } from "../../../utils/formHandlers";
import { getFieldError, hasError } from "../../../utils/validationUtils";
import ExalviaFormInput from "../../../exalvia/ui-components/ExalviaFormInput";

export default function Step6_Experience({ formData, setFormData, errors, setErrors, touched, setTouched }) {
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

  const handleFeedbackFieldChange = (index, field, value) => {
    handleFeedbackChange(formData, setFormData, index, field, value);

    // Clear feedback error
    if (errors.customerFeedback?.items?.[index]?.[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors.customerFeedback?.items?.[index]) {
          delete newErrors.customerFeedback.items[index][field];
          if (Object.keys(newErrors.customerFeedback.items[index]).length === 0) {
            delete newErrors.customerFeedback.items[index];
          }
        }
        return newErrors;
      });
    }
  };

  const handleAddFeedback = () => {
    addFeedback(formData, setFormData);
  };

  const handleRemoveFeedback = (index) => {
    removeFeedback(formData, setFormData, index);

    // Clear error for removed feedback
    if (errors.customerFeedback?.items?.[index]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors.customerFeedback?.items) {
          delete newErrors.customerFeedback.items[index];
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

  const handleFeedbackBlur = (index, field) => {
    setTouched((prev) => ({
      ...prev,
      customerFeedback: {
        ...prev.customerFeedback,
        items: {
          ...prev.customerFeedback?.items,
          [index]: {
            ...prev.customerFeedback?.items?.[index],
            [field]: true,
          },
        },
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Customer Journey Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">💬</div>
          <div>
            <h3 className="text-lg font-semibold">Customer Experience</h3>
            <p className="text-sm text-gray-600">Bagaimana pelanggan mengalami brand Anda?</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Customer Touchpoints */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Customer Touchpoints</label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Website", "Social Media", "Physical Store", "Customer Service", "Mobile App", "Email Marketing"].map((touchpoint) => (
                <label key={touchpoint} className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={formData.touchpoints?.includes(touchpoint) || false}
                    onChange={(e) => {
                      const currentTouchpoints = formData.touchpoints || [];
                      const newTouchpoints = e.target.checked ? [...currentTouchpoints, touchpoint] : currentTouchpoints.filter((t) => t !== touchpoint);
                      handleFieldChange("touchpoints", newTouchpoints);
                    }}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-sm">{touchpoint}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Customer Pain Points */}
          <ExalviaFormInput
            label="Pain Points Pelanggan"
            name="customerPainPoints"
            value={formData.customerPainPoints || ""}
            onChange={(value) => handleFieldChange("customerPainPoints", value)}
            onBlur={() => handleFieldBlur("customerPainPoints")}
            type="textarea"
            rows={3}
            placeholder="Apa masalah utama yang dihadapi pelanggan yang brand Anda selesaikan?"
            helpText="Identifikasi masalah yang brand Anda pecahkan untuk pelanggan"
          />

          {/* Customer Success Metrics */}
          <ExalviaFormInput
            label="Metrics Keberhasilan Pelanggan"
            name="successMetrics"
            value={formData.successMetrics || ""}
            onChange={(value) => handleFieldChange("successMetrics", value)}
            onBlur={() => handleFieldBlur("successMetrics")}
            type="textarea"
            rows={3}
            placeholder="Bagaimana Anda mengukur keberhasilan customer experience?"
            helpText="Contoh: CSAT score, NPS, repeat purchase rate, customer lifetime value"
          />
        </div>
      </div>

      {/* Customer Feedback Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">⭐</div>
          <div>
            <h3 className="text-lg font-semibold">Testimoni & Feedback Pelanggan</h3>
            <p className="text-sm text-gray-600">Kumpulan feedback dari pelanggan yang ada</p>
          </div>
        </div>

        <div className="space-y-4">
          {formData.customerFeedback.map((feedback, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-sm">Testimoni #{index + 1}</h4>
                {formData.customerFeedback.length > 1 && (
                  <button type="button" onClick={() => handleRemoveFeedback(index)} className="btn btn-ghost btn-sm text-red-600 hover:bg-red-50">
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
                <ExalviaFormInput
                  label="Nama Pelanggan"
                  name={`feedback_${index}_customer`}
                  value={feedback.customer}
                  onChange={(value) => handleFeedbackFieldChange(index, "customer", value)}
                  onBlur={() => handleFeedbackBlur(index, "customer")}
                  error={hasError("customerFeedback", index, "customer") ? getFieldError(errors, "customerFeedback", index, "customer") : null}
                  required
                  placeholder="Nama pelanggan (bisa anonym)"
                />

                <ExalviaFormInput
                  label="Rating"
                  name={`feedback_${index}_rating`}
                  value={feedback.rating || ""}
                  onChange={(value) => handleFeedbackFieldChange(index, "rating", value)}
                  type="select"
                  options={[
                    { value: "5", label: "⭐⭐⭐⭐⭐ (5/5)" },
                    { value: "4", label: "⭐⭐⭐⭐ (4/5)" },
                    { value: "3", label: "⭐⭐⭐ (3/5)" },
                    { value: "2", label: "⭐⭐ (2/5)" },
                    { value: "1", label: "⭐ (1/5)" },
                  ]}
                  placeholder="Pilih rating"
                />
              </div>

              <ExalviaFormInput
                label="Testimoni/Feedback"
                name={`feedback_${index}_feedback`}
                value={feedback.feedback}
                onChange={(value) => handleFeedbackFieldChange(index, "feedback", value)}
                onBlur={() => handleFeedbackBlur(index, "feedback")}
                error={hasError("customerFeedback", index, "feedback") ? getFieldError(errors, "customerFeedback", index, "feedback") : null}
                required
                type="textarea"
                rows={3}
                placeholder="Apa yang dikatakan pelanggan tentang produk/layanan Anda?"
              />
            </div>
          ))}

          <button type="button" onClick={handleAddFeedback} className="btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
            <span>+</span> Tambah Testimoni
          </button>
        </div>

        {/* If No Feedback Yet */}
        {formData.customerFeedback.length === 0 && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Belum ada testimoni?</strong> Tidak masalah, Anda bisa mengisi "N/A" atau melewati sementara. Testimoni bisa ditambahkan nanti setelah memiliki pelanggan.
            </p>
          </div>
        )}
      </div>

      {/* Help Text */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="text-teal-600 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-teal-800">
            <p className="font-medium mb-1">Tips:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Customer experience mencakup semua interaksi pelanggan dengan brand</li>
              <li>Touchpoints adalah titik kontak di mana pelanggan berinteraksi dengan brand</li>
              <li>Pain points membantu Anda memposisikan brand sebagai solusi</li>
              <li>Testimoni otentik meningkatkan kepercayaan prospek baru</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
