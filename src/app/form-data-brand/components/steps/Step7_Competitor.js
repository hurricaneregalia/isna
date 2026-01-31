// Step7_Competitor Component
// Competitor analysis and market positioning form step

import { handleInputChange, handleCompetitorChange, addCompetitor, removeCompetitor } from "../../../utils/formHandlers";
import { getFieldError, hasError } from "../../../utils/validationUtils";
import ExalviaFormInput from "../../../exalvia/ui-components/ExalviaFormInput";

export default function Step7_Competitor({ formData, setFormData, errors, setErrors, touched, setTouched }) {
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

  const handleCompetitorFieldChange = (index, field, value) => {
    handleCompetitorChange(formData, setFormData, index, field, value);

    // Clear competitor error
    if (errors.competitors?.items?.[index]?.[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors.competitors?.items?.[index]) {
          delete newErrors.competitors.items[index][field];
          if (Object.keys(newErrors.competitors.items[index]).length === 0) {
            delete newErrors.competitors.items[index];
          }
        }
        return newErrors;
      });
    }
  };

  const handleAddCompetitor = () => {
    addCompetitor(formData, setFormData);
  };

  const handleRemoveCompetitor = (index) => {
    removeCompetitor(formData, setFormData, index);

    // Clear error for removed competitor
    if (errors.competitors?.items?.[index]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        if (newErrors.competitors?.items) {
          delete newErrors.competitors.items[index];
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

  const handleCompetitorBlur = (index, field) => {
    setTouched((prev) => ({
      ...prev,
      competitors: {
        ...prev.competitors,
        items: {
          ...prev.competitors?.items,
          [index]: {
            ...prev.competitors?.items?.[index],
            [field]: true,
          },
        },
      },
    }));
  };

  return (
    <div className="space-y-6">
      {/* Market Overview */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">⚔️</div>
          <div>
            <h3 className="text-lg font-semibold">Analisis Kompetitor</h3>
            <p className="text-sm text-gray-600">Siapa kompetitor utama dan bagaimana posisi brand Anda?</p>
          </div>
        </div>

        <div className="space-y-6">
          <ExalviaFormInput
            label="Market Positioning"
            name="marketPositioning"
            value={formData.marketPositioning || ""}
            onChange={(value) => handleFieldChange("marketPositioning", value)}
            onBlur={() => handleFieldBlur("marketPositioning")}
            type="textarea"
            rows={3}
            placeholder="Bagaimana brand Anda diposisikan di pasar?"
            helpText="Contoh: Premium, mid-range, budget, niche, mass market"
          />

          <ExalviaFormInput
            label="Market Share Estimate"
            name="marketShare"
            value={formData.marketShare || ""}
            onChange={(value) => handleFieldChange("marketShare", value)}
            onBlur={() => handleFieldBlur("marketShare")}
            placeholder="Contoh: 10-15% dari total market"
            helpText="Perkiraan pangsa pasar yang dimiliki"
          />
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">🏢</div>
          <div>
            <h3 className="text-lg font-semibold">Detail Kompetitor</h3>
            <p className="text-sm text-gray-600">Analisis kompetitor utama satu per satu</p>
          </div>
        </div>

        <div className="space-y-4">
          {formData.competitors.map((competitor, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-sm">Kompetitor #{index + 1}</h4>
                {formData.competitors.length > 1 && (
                  <button type="button" onClick={() => handleRemoveCompetitor(index)} className="btn btn-ghost btn-sm text-red-600 hover:bg-red-50">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <ExalviaFormInput
                  label="Nama Kompetitor"
                  name={`competitor_${index}_name`}
                  value={competitor.name}
                  onChange={(value) => handleCompetitorFieldChange(index, "name", value)}
                  onBlur={() => handleCompetitorBlur(index, "name")}
                  error={hasError("competitors", index, "name") ? getFieldError(errors, "competitors", index, "name") : null}
                  required
                  placeholder="Nama brand kompetitor"
                />

                <ExalviaFormInput
                  label="Kategori Kompetitor"
                  name={`competitor_${index}_category`}
                  value={competitor.category || ""}
                  onChange={(value) => handleCompetitorFieldChange(index, "category", value)}
                  type="select"
                  options={[
                    { value: "direct", label: "Kompetitor Langsung" },
                    { value: "indirect", label: "Kompetitor Tidak Langsung" },
                    { value: "substitute", label: "Produk Substitusi" },
                    { value: "potential", label: "Potensial Kompetitor" },
                  ]}
                  placeholder="Pilih kategori"
                />

                <ExalviaFormInput
                  label="Market Share"
                  name={`competitor_${index}_marketShare`}
                  value={competitor.marketShare || ""}
                  onChange={(value) => handleCompetitorFieldChange(index, "marketShare", value)}
                  placeholder="Contoh: 20-25%"
                  helpText="Perkiraan market share kompetitor"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ExalviaFormInput
                  label="Keunggulan Kompetitor"
                  name={`competitor_${index}_strength`}
                  value={competitor.strength}
                  onChange={(value) => handleCompetitorFieldChange(index, "strength", value)}
                  onBlur={() => handleCompetitorBlur(index, "strength")}
                  error={hasError("competitors", index, "strength") ? getFieldError(errors, "competitors", index, "strength") : null}
                  required
                  type="textarea"
                  rows={3}
                  placeholder="Apa yang membuat kompetitor kuat?"
                  helpText="Faktor yang membuat pelanggan memilih kompetitor"
                />

                <ExalviaFormInput
                  label="Kelemahan Kompetitor"
                  name={`competitor_${index}_weakness`}
                  value={competitor.weakness}
                  onChange={(value) => handleCompetitorFieldChange(index, "weakness", value)}
                  onBlur={() => handleCompetitorBlur(index, "weakness")}
                  error={hasError("competitors", index, "weakness") ? getFieldError(errors, "competitors", index, "weakness") : null}
                  required
                  type="textarea"
                  rows={3}
                  placeholder="Apa kelemahan kompetitor?"
                  helpText="Area di mana brand Anda bisa unggul"
                />
              </div>

              {/* Additional Analysis */}
              <div className="mt-4 p-3 bg-white rounded border">
                <h5 className="font-medium text-sm mb-2">Analisis Tambahan:</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <ExalviaFormInput
                    label="Pricing Strategy"
                    name={`competitor_${index}_pricing`}
                    value={competitor.pricing || ""}
                    onChange={(value) => handleCompetitorFieldChange(index, "pricing", value)}
                    placeholder="Contoh: Premium, budget, value-based"
                    gridCols="col-span-full"
                  />

                  <ExalviaFormInput
                    label="Marketing Channels"
                    name={`competitor_${index}_marketing`}
                    value={competitor.marketing || ""}
                    onChange={(value) => handleCompetitorFieldChange(index, "marketing", value)}
                    placeholder="Contoh: Social media, SEO, ads"
                    gridCols="col-span-full"
                  />
                </div>
              </div>
            </div>
          ))}

          <button type="button" onClick={handleAddCompetitor} className="btn btn-outline btn-primary btn-sm rounded-xl w-fit gap-2">
            <span>+</span> Tambah Kompetitor
          </button>
        </div>
      </div>

      {/* Competitive Advantage */}
      <div className="border rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-2xl">🎯</div>
          <div>
            <h3 className="text-lg font-semibold">Keunggulan Kompetitif Brand</h3>
            <p className="text-sm text-gray-600">Apa yang membuat brand Anda berbeda dan lebih baik?</p>
          </div>
        </div>

        <ExalviaFormInput
          label="Unique Selling Proposition (USP)"
          name="competitiveAdvantage"
          value={formData.competitiveAdvantage || ""}
          onChange={(value) => handleFieldChange("competitiveAdvantage", value)}
          onBlur={() => handleFieldBlur("competitiveAdvantage")}
          type="textarea"
          rows={4}
          placeholder="Jelaskan apa yang membuat brand Anda unik dan sulit ditiru kompetitor"
          helpText="Fokus pada value proposition yang tidak dimiliki kompetitor"
        />
      </div>

      {/* Help Text */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <div className="text-red-600 mt-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-sm text-red-800">
            <p className="font-medium mb-1">Tips:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Identifikasi 3-5 kompetitor utama, jangan terlalu banyak</li>
              <li>Fokus pada kompetitor yang target market-nya sama dengan Anda</li>
              <li>Strength dan weakness harus objektif dan berbasis fakta</li>
              <li>USP harus spesifik, measurable, dan relevant untuk target audiens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
