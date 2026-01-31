// Step3_Audience Component
// Target audience demographics and preferences form step

import { handleInputChange } from "../../../utils/formHandlers";
import { getFieldError, hasError } from "../../../utils/validationUtils";
import ExalviaFormInput from "../../../exalvia/ui-components/ExalviaFormInput";
import AgePicker from "../../../exalvia/ui-components/AgePicker";

export default function Step3_Audience({ formData, setFormData, errors, setErrors, touched, setTouched }) {
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

  const handleAgeChange = (minAge, maxAge) => {
    setFormData((prev) => ({
      ...prev,
      targetAgeMin: minAge.toString(),
      targetAgeMax: maxAge.toString(),
    }));

    // Clear age errors
    if (errors.targetAgeMin || errors.targetAgeMax) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.targetAgeMin;
        delete newErrors.targetAgeMax;
        return newErrors;
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Demographics Section */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">👥</div>
          <div>
            <h3 className="text-lg font-semibold">Demografi Target Audiens</h3>
            <p className="text-sm text-gray-600">Siapa yang menjadi target utama brand Anda?</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Age Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Rentang Usia <span className="text-red-500">*</span>
            </label>
            <AgePicker minAge={parseInt(formData.targetAgeMin) || 18} maxAge={parseInt(formData.targetAgeMax) || 18} onChange={handleAgeChange} required />
            {hasError("targetAgeMin") && <p className="text-sm text-red-600 mt-1">{getFieldError(errors, "targetAgeMin")}</p>}
            {hasError("targetAgeMax") && <p className="text-sm text-red-600 mt-1">{getFieldError(errors, "targetAgeMax")}</p>}
          </div>

          {/* Gender */}
          <ExalviaFormInput
            label="Gender Target"
            name="targetGender"
            value={formData.targetGender}
            onChange={(value) => handleFieldChange("targetGender", value)}
            onBlur={() => handleFieldBlur("targetGender")}
            error={hasError("targetGender") ? getFieldError(errors, "targetGender") : null}
            required
            type="radio"
            gridCols="grid-cols-3"
            options={[
              { value: "pria", label: "Pria" },
              { value: "wanita", label: "Wanita" },
              { value: "semua", label: "Semua Gender" },
            ]}
          />

          {/* Location */}
          <ExalviaFormInput
            label="Lokasi Geografis"
            name="targetLocation"
            value={formData.targetLocation}
            onChange={(value) => handleFieldChange("targetLocation", value)}
            onBlur={() => handleFieldBlur("targetLocation")}
            error={hasError("targetLocation") ? getFieldError(errors, "targetLocation") : null}
            required
            placeholder="Contoh: Jakarta, Surabaya, Seluruh Indonesia"
          />

          {/* Occupation */}
          <ExalviaFormInput
            label="Pekerjaan/Profesi"
            name="targetOccupation"
            value={formData.targetOccupation}
            onChange={(value) => handleFieldChange("targetOccupation", value)}
            onBlur={() => handleFieldBlur("targetOccupation")}
            error={hasError("targetOccupation") ? getFieldError(errors, "targetOccupation") : null}
            required
            placeholder="Contoh: Mahasiswa, Karyawan, Pengusaha, Ibu Rumah Tangga"
          />

          {/* Income Level */}
          <ExalviaFormInput
            label="Tingkat Penghasilan"
            name="targetIncome"
            value={formData.targetIncome}
            onChange={(value) => handleFieldChange("targetIncome", value)}
            onBlur={() => handleFieldBlur("targetIncome")}
            error={hasError("targetIncome") ? getFieldError(errors, "targetIncome") : null}
            required
            type="select"
            options={[
              { value: "<1jt", label: "< Rp 1 juta/bulan" },
              { value: "1-3jt", label: "Rp 1-3 juta/bulan" },
              { value: "3-5jt", label: "Rp 3-5 juta/bulan" },
              { value: "5-10jt", label: "Rp 5-10 juta/bulan" },
              { value: "10-20jt", label: "Rp 10-20 juta/bulan" },
              { value: ">20jt", label: "> Rp 20 juta/bulan" },
            ]}
          />

          {/* Education Level */}
          <ExalviaFormInput
            label="Tingkat Pendidikan"
            name="targetEducation"
            value={formData.targetEducation}
            onChange={(value) => handleFieldChange("targetEducation", value)}
            onBlur={() => handleFieldBlur("targetEducation")}
            error={hasError("targetEducation") ? getFieldError(errors, "targetEducation") : null}
            required
            type="select"
            options={[
              { value: "sd", label: "SD/Sederajat" },
              { value: "smp", label: "SMP/Sederajat" },
              { value: "sma", label: "SMA/SMK/Sederajat" },
              { value: "d1-d3", label: "D1-D3" },
              { value: "s1", label: "S1/D4" },
              { value: "s2-s3", label: "S2-S3" },
            ]}
          />

          {/* Interests */}
          <ExalviaFormInput
            label="Minat & Hobi"
            name="targetInterests"
            value={formData.targetInterests}
            onChange={(value) => handleFieldChange("targetInterests", value)}
            onBlur={() => handleFieldBlur("targetInterests")}
            error={hasError("targetInterests") ? getFieldError(errors, "targetInterests") : null}
            required
            type="tags"
            placeholder="Tambahkan minat dan hobi target audiens"
            helpText="Contoh: olahraga, musik, traveling, kuliner, fashion, teknologi"
          />
        </div>
      </div>

      {/* Help Text */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="text-purple-600 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-purple-800">
            <p className="font-medium mb-1">Tips:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Semakin spesifik target audiens, semakin efektif strategi marketing</li>
              <li>Gunakan data real jika tersedia, bukan asumsi</li>
              <li>Pertimbangkan multiple segments jika target Anda beragam</li>
              <li>Minat & hobi membantu menentukan channel marketing yang tepat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
