import React from "react";

/**
 * Komponen Input Box reusable untuk form Exalvia
 * Mendukung tipe: text, textarea, dan select
 */
export default function ExalviaFormInput({ label, icon, type = "text", name, placeholder, value, onChange, options = [], required = false, className = "" }) {
  // Pastikan value tidak null atau undefined untuk menghindari error pada controlled component
  const safeValue = value ?? "";
  const baseInputClass = `w-full rounded-xl bg-base-200 border border-base-300 focus:border-primary focus:outline-none transition-all ${className}`;

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-bold opacity-50 flex items-center gap-2">{label}</label>}

      <div className="relative group">
        {type === "textarea" ? (
          <textarea
            name={name}
            value={safeValue}
            placeholder={placeholder}
            className={`${baseInputClass} textarea textarea-bordered min-h-[120px] pt-4 ${icon ? "pl-12" : ""}`}
            onChange={onChange}
            required={required}
          />
        ) : type === "select" ? (
          <select
            name={name}
            value={safeValue}
            className={`select text-sm w-full h-14 bg-base-200 border border-base-300 rounded-xl focus:border-primary focus:outline-none transition-all ${icon ? "pl-12" : "pl-4"}`}
            onChange={onChange}
            required={required}
          >
            <option disabled value="">
              {placeholder || "Pilih"}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : type === "radio" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-1">
            {options.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-sm font-bold text-center ${
                  safeValue === opt.value
                    ? "bg-primary border-primary text-primary-content shadow-lg shadow-primary/20 scale-[1.02]"
                    : "bg-base-200 border-base-300 text-base-content/50 hover:border-primary/50"
                }`}
              >
                <input type="radio" name={name} value={opt.value} checked={safeValue === opt.value} onChange={onChange} className="hidden" />
                {opt.label}
              </label>
            ))}
          </div>
        ) : type === "checkbox" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
            {options.map((opt) => {
              const checked = Array.isArray(value) ? value.includes(opt.value) : value === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex items-start justify-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 text-sm font-bold ${
                    checked ? "bg-primary/10 border-primary text-primary shadow-md" : "bg-base-200 border-base-300 text-base-content/50 hover:border-primary/30"
                  }`}
                >
                  <input
                    type="checkbox"
                    name={name}
                    value={opt.value}
                    checked={checked}
                    onChange={(e) => {
                      if (Array.isArray(value)) {
                        const newValue = checked ? value.filter((v) => v !== opt.value) : [...value, opt.value];
                        onChange({ target: { name, value: newValue } });
                      } else {
                        onChange(e);
                      }
                    }}
                    className="checkbox checkbox-primary"
                  />
                  {opt.label}
                </label>
              );
            })}
          </div>
        ) : (
          <input
            type={type}
            name={name}
            value={safeValue}
            placeholder={placeholder}
            className={`${baseInputClass} input input-bordered h-14 ${icon ? "pl-12" : ""}`}
            onChange={onChange}
            required={required}
          />
        )}

        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl z-50 transition-all pointer-events-none flex items-center justify-center">{icon}</div>}
      </div>
    </div>
  );
}
