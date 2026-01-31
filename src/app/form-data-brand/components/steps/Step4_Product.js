// Step4_Product Component
// Product, service, and certification information form step

import { handleInputChange, handleCertificationChange, addCertification, removeCertification } from "../../../utils/formHandlers";
import { getFieldError, hasError } from "../../../utils/validationUtils";
import ExalviaFormInput from "../../../exalvia/ui-components/ExalviaFormInput";

export default function Step4_Product({ formData, setFormData, errors, setErrors, touched, setTouched }) {
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

  const handleCertificationFieldChange = (index, value) => {
    handleCertificationChange(formData, setFormData, index, value);

    // Clear certification error
    if (errors.certifications?.items?.[index]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors.certifications?.items) {
          delete newErrors.certifications.items[index];
        }
        return newErrors;
      });
    }
  };

  const handleAddCertification = () => {
    addCertification(formData, setFormData);
  };

  const handleRemoveCertification = (index) => {
    removeCertification(formData, setFormData, index);

    // Clear error for removed certification
    if (errors.certifications?.items?.[index]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors.certifications?.items) {
          delete newErrors.certifications.items[index];
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

  const handleCertificationBlur = (index) => {
    setTouched((prev) => ({
      ...prev,
      certifications: {
        ...prev.certifications,
        items: {
          ...prev.certifications?.items,
          [index]: true,
        },
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Main Product Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">📦</div>
          <div>
            <h3 className="text-lg font-semibold">Produk & Layanan Utama</h3>
            <p className="text-sm text-gray-600">Apa produk atau layanan yang Anda tawarkan?</p>
          </div>
        </div>

        <div className="space-y-6">
          <ExalviaFormInput
            label="Produk/Layanan Utama"
            name="mainProduct"
            value={formData.mainProduct}
            onChange={(value) => handleFieldChange("mainProduct", value)}
            onBlur={() => handleFieldBlur("mainProduct")}
            error={hasError("mainProduct") ? getFieldError(errors, "mainProduct") : null}
            required
            type="textarea"
            rows={4}
            placeholder="Jelaskan produk atau layanan utama yang Anda tawarkan secara detail..."
            helpText="Deskripsikan fitur, manfaat, dan keunikan produk/layanan Anda"
          />

          <ExalviaFormInput
            label="Keunggulan Kompetitif"
            name="productAdvantages"
            value={formData.productAdvantages}
            onChange={(value) => handleFieldChange("productAdvantages", value)}
            onBlur={() => handleFieldBlur("productAdvantages")}
            error={hasError("productAdvantages") ? getFieldError(errors, "productAdvantages") : null}
            required
            type="textarea"
            rows={4}
            placeholder="Apa yang membuat produk/layanan Anda berbeda dari kompetitor?"
            helpText="Fokus pada unique selling proposition (USP) Anda"
          />
        </div>
      </div>

      {/* Certifications Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">🏆</div>
          <div>
            <h3 className="text-lg font-semibold">Sertifikasi & Penghargaan</h3>
            <p className="text-sm text-gray-600">Sertifikasi atau penghargaan yang dimiliki produk/brand</p>
          </div>
        </div>

        <div className="space-y-4">
          {formData.certifications.map((certification, index) => (
            <div key={index} className="flex items-center gap-3">
              <ExalviaFormInput
                label={index === 0 ? "Nama Sertifikasi/Penghargaan" : ""}
                name={`certification_${index}`}
                value={certification}
                onChange={(value) => handleCertificationFieldChange(index, value)}
                onBlur={() => handleCertificationBlur(index)}
                error={hasError("certifications", index) ? getFieldError(errors, "certifications", index) : null}
                required={index === 0}
                placeholder="Contoh: ISO 9001, Halal MUI, Best Startup Award 2023"
                gridCols="flex-1"
              />

              {formData.certifications.length > 1 && (
                <button type="button" onClick={() => handleRemoveCertification(index)} className="btn btn-ghost btn-sm text-red-600 hover:bg-red-50 mt-6">
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
          ))}

          <button type="button" onClick={handleAddCertification} className="btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
            <span>+</span> Tambah Sertifikasi
          </button>
        </div>

        {/* Help Text for Certifications */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Tip:</strong> Sertifikasi meningkatkan kredibilitas dan kepercayaan pelanggan. Jika belum memiliki sertifikasi, Anda bisa mengisi "Tidak ada" atau "Dalam proses".
          </p>
        </div>
      </div>

      {/* Additional Product Info */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">💡</div>
          <div>
            <h3 className="text-lg font-semibold">Informasi Tambahan</h3>
            <p className="text-sm text-gray-600">Detail tambahan tentang produk/layanan</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExalviaFormInput
            label="Harga Range (Opsional)"
            name="priceRange"
            value={formData.priceRange || ""}
            onChange={(value) => handleFieldChange("priceRange", value)}
            placeholder="Contoh: Rp 50.000 - Rp 500.000"
            helpText="Range harga produk/layanan Anda"
          />

          <ExalviaFormInput
            label="Target Market Size (Opsional)"
            name="marketSize"
            value={formData.marketSize || ""}
            onChange={(value) => handleFieldChange("marketSize", value)}
            placeholder="Contoh: 10.000 pelanggan per bulan"
            helpText="Perkiraan ukuran pasar target"
          />
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="text-orange-600 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-orange-800">
            <p className="font-medium mb-1">Tips:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Fokus pada value proposition yang jelas dan kuat</li>
              <li>Sertifikasi bisa berupa legalitas, kualitas, atau penghargaan industri</li>
              <li>Keunggulan kompetitif harus spesifik dan dapat dibuktikan</li>
              <li>Informasi tambahan opsional tapi membantu brand positioning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
