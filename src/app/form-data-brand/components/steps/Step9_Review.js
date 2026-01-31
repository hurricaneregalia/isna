// Step9_Review Component
// Final review and submission form step

import { ReviewList } from "../../../utils/reviewHelpers";
import ExalviaFormInput from "../../../exalvia/ui-components/ExalviaFormInput";

export default function Step9_Review({ formData, errors, setErrors, touched, setTouched, isSubmitting, onSubmit, onPrevious }) {
  const handleFieldChange = (field, value) => {
    // This step is read-only, but we might need additional fields
    if (field === "additionalNotes" || field === "agreement") {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = () => {
    // Validate all required fields before submission
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      // Show error modal or scroll to first error
      return;
    }

    onSubmit();
  };

  const isFormComplete = () => {
    // Check if all required fields are filled
    const requiredFields = [
      "brandName",
      "slogan",
      "role",
      "fullName",
      "email",
      "phone",
      "targetAgeMin",
      "targetAgeMax",
      "targetGender",
      "targetLocation",
      "mainProduct",
      "productAdvantages",
      "brandColors",
      "typography",
      "visualStyle",
    ];

    return requiredFields.every((field) => {
      const value = formData[field];
      if (Array.isArray(value)) {
        return value.length > 0 && value.every((item) => (typeof item === "object" ? item.title && item.description : item.trim() !== ""));
      }
      return value && value.trim() !== "";
    });
  };

  const completionPercentage = Math.round(
    (Object.keys(formData).filter((key) => {
      const value = formData[key];
      if (Array.isArray(value)) {
        return value.length > 0;
      }
      return value && value.trim() !== "";
    }).length /
      Object.keys(formData).length) *
      100,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <span className="text-3xl">✅</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Review & Submit</h2>
        <p className="text-gray-600">Periksa kembali semua informasi sebelum mengirim formulir</p>
      </div>

      {/* Completion Status */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-green-800">Form Completion Status</h3>
            <p className="text-sm text-green-600">{isFormComplete() ? "✅ Form lengkap dan siap dikirim" : "⚠️ Ada field yang belum diisi"}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-800">{completionPercentage}%</div>
            <div className="w-32 bg-green-200 rounded-full h-2 mt-1">
              <div className="bg-green-600 h-2 rounded-full transition-all duration-300" style={{ width: `${completionPercentage}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Review */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">📋</div>
          <div>
            <h3 className="text-lg font-semibold">Review Data Brand</h3>
            <p className="text-sm text-gray-600">Periksa kembali semua informasi yang Anda masukkan</p>
          </div>
        </div>

        <ReviewList formData={formData} />
      </div>

      {/* Additional Notes */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">📝</div>
          <div>
            <h3 className="text-lg font-semibold">Informasi Tambahan</h3>
            <p className="text-sm text-gray-600">Ada informasi tambahan yang ingin ditambahkan?</p>
          </div>
        </div>

        <ExalviaFormInput
          label="Catatan Tambahan (Opsional)"
          name="additionalNotes"
          value={formData.additionalNotes || ""}
          onChange={(value) => handleFieldChange("additionalNotes", value)}
          type="textarea"
          rows={4}
          placeholder="Informasi tambahan yang relevan untuk brand Anda..."
          helpText="Ini opsional, tapi bisa membantu kami memahami brand Anda lebih baik"
        />
      </div>

      {/* Agreement */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">🔒</div>
          <div>
            <h3 className="text-lg font-semibold">Konfirmasi & Persetujuan</h3>
            <p className="text-sm text-gray-600">Pastikan Anda setuju dengan ketentuan berikut</p>
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.agreement || false}
              onChange={(e) => handleFieldChange("agreement", e.target.checked)}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1"
            />
            <span className="text-sm text-gray-700">
              Saya menyatakan bahwa semua informasi yang saya berikan adalah benar dan akurat. Saya memahami bahwa informasi ini akan digunakan untuk keperluan analisis brand dan pengembangan strategi
              yang sesuai.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.privacyAgreement || false}
              onChange={(e) => handleFieldChange("privacyAgreement", e.target.checked)}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1"
            />
            <span className="text-sm text-gray-700">
              Saya setuju dengan{" "}
              <a href="#" className="text-primary hover:underline">
                kebijakan privasi
              </a>{" "}
              dan
              <a href="#" className="text-primary hover:underline">
                {" "}
                syarat & ketentuan
              </a>{" "}
              yang berlaku.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.marketingAgreement || false}
              onChange={(e) => handleFieldChange("marketingAgreement", e.target.checked)}
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mt-1"
            />
            <span className="text-sm text-gray-700">Saya bersedia menerima informasi dan penawaran terkait layanan brand analysis melalui email dan WhatsApp (opsional, bisa dicentang nanti).</span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button type="button" onClick={onPrevious} disabled={isSubmitting} className="btn btn-outline btn-primary w-full sm:w-auto">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </button>

        <button type="button" onClick={handleSubmit} disabled={isSubmitting || !isFormComplete() || !formData.agreement} className="btn btn-primary w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <div className="loading loading-spinner loading-sm mr-2"></div>
              Mengirim...
            </>
          ) : (
            <>
              Kirim Formulir
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </>
          )}
        </button>
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
            <p className="font-medium mb-1">Sebelum mengirim:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Periksa kembali semua informasi untuk memastikan akurasi</li>
              <li>Pastikan semua field wajib sudah diisi dengan benar</li>
              <li>Centang semua persetujuan yang diperlukan</li>
              <li>Setelah dikirim, Anda akan menerima konfirmasi via email</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
