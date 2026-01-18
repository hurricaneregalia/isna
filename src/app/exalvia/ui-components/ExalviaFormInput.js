import React from "react";

// --- HELPER UNTUK NAMA WARNA ---
const colorNames = [
  // Grayscale / Netral
  { name: "Hitam", hex: "#000000" },
  { name: "Putih", hex: "#ffffff" },
  { name: "Abu-abu Gelap", hex: "#444444" },
  { name: "Abu-abu", hex: "#808080" },
  { name: "Silver", hex: "#c0c0c0" },
  { name: "Abu-abu Muda", hex: "#d3d3d3" },

  // Merah & Pink
  { name: "Merah", hex: "#ff0000" },
  { name: "Merah Tua", hex: "#8b0000" },
  { name: "Maroon", hex: "#800000" },
  { name: "Merah Bata", hex: "#b22222" },
  { name: "Merah Muda", hex: "#ffc0cb" },
  { name: "Pink Terang", hex: "#ff69b4" },
  { name: "Magenta", hex: "#ff00ff" },
  { name: "Salmon", hex: "#fa8072" },
  { name: "Coral", hex: "#ff7f50" },

  // Oranye & Kuning & Cokelat
  { name: "Oranye", hex: "#ffa500" },
  { name: "Oranye Tua", hex: "#ff8c00" },
  { name: "Kuning", hex: "#ffff00" },
  { name: "Emas", hex: "#ffd700" },
  { name: "Krem / Beige", hex: "#f5f5dc" },
  { name: "Cokelat", hex: "#a52a2a" },
  { name: "Cokelat Tua", hex: "#8b4513" },
  { name: "Tan", hex: "#d2b48c" },

  // Hijau
  { name: "Hijau", hex: "#008000" },
  { name: "Lime", hex: "#00ff00" },
  { name: "Hijau Tua", hex: "#006400" },
  { name: "Hijau Hutan", hex: "#228b22" },
  { name: "Hijau Rumput", hex: "#32cd32" },
  { name: "Hijau Laut", hex: "#2e8b57" }, // SeaGreen
  { name: "Hijau Medium", hex: "#3cb371" }, // MediumSeaGreen (mirip target user)
  { name: "Hijau Daun", hex: "#4ca46b" }, // Target User
  { name: "Zaitun", hex: "#808000" },
  { name: "Mint", hex: "#98ff98" },

  // Biru & Cyan
  { name: "Teal", hex: "#008080" },
  { name: "Tosca", hex: "#40e0d0" },
  { name: "Cyan", hex: "#00ffff" },
  { name: "Biru Langit", hex: "#87ceeb" },
  { name: "Biru Laut", hex: "#00bfff" },
  { name: "Biru", hex: "#0000ff" },
  { name: "Biru Tua", hex: "#00008b" },
  { name: "Navy", hex: "#000080" },
  { name: "Midnight Blue", hex: "#191970" },

  // Ungu
  { name: "Ungu", hex: "#800080" },
  { name: "Ungu Muda", hex: "#ee82ee" },
  { name: "Indigo", hex: "#4b0082" },
  { name: "Lavender", hex: "#e6e6fa" },
];

const getClosestColorName = (hex) => {
  if (!hex || hex.length !== 7) return "";

  const r1 = parseInt(hex.slice(1, 3), 16);
  const g1 = parseInt(hex.slice(3, 5), 16);
  const b1 = parseInt(hex.slice(5, 7), 16);

  let minDistance = Infinity;
  let closestName = "";

  colorNames.forEach((color) => {
    const r2 = parseInt(color.hex.slice(1, 3), 16);
    const g2 = parseInt(color.hex.slice(3, 5), 16);
    const b2 = parseInt(color.hex.slice(5, 7), 16);

    const distance = Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));

    if (distance < minDistance) {
      minDistance = distance;
      closestName = color.name;
    }
  });

  return closestName;
};

/**
 * Komponen Input Box reusable untuk form Exalvia
 * Mendukung tipe: text, textarea, select, radio, checkbox, color
 */
export default function ExalviaFormInput({
  label,
  icon,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  options = [],
  required = false,
  className = "",
  gridCols = "grid-cols-1 md:grid-cols-2", // Default grid class
  itemAlign = "items-start justify-start", // Default alignment class
  itemClass = "", // Custom class for individual items
  checkboxClass = "", // Custom class for the checkbox element itself
  ...props // Tangkap semua props sisa (misal: max, min, disabled)
}) {
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
            {...props}
          />
        ) : type === "select" ? (
          <select
            name={name}
            value={safeValue}
            className={`select text-sm w-full h-14 bg-base-200 border border-base-300 rounded-xl focus:border-primary focus:outline-none transition-all ${icon ? "pl-12" : "pl-4"}`}
            onChange={onChange}
            required={required}
            {...props}
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
          <div className={`grid ${gridCols} lg:grid-cols-4 gap-4 mt-1`}>
            {options.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-sm font-bold text-center ${
                  safeValue === opt.value
                    ? "bg-primary border-primary text-primary-content shadow-lg shadow-primary/20 scale-[1.02]"
                    : "bg-base-200 border-base-300 text-base-content/50 hover:border-primary/50"
                } ${itemClass}`}
              >
                <input type="radio" name={name} value={opt.value} checked={safeValue === opt.value} onChange={onChange} className="hidden" {...props} />
                {opt.label}
              </label>
            ))}
          </div>
        ) : type === "color" ? (
          <div className="flex items-center gap-4 h-14 w-full rounded-xl bg-base-200 border border-base-300 p-2 pl-4 hover:border-primary/50 transition-all cursor-pointer group">
            <div className="flex flex-col flex-1 text-left">
              <span className="text-[10px] uppercase font-black tracking-widest opacity-40 leading-none mb-1">{safeValue ? getClosestColorName(safeValue) : "Belum Memilih"}</span>
              <span className="font-mono text-xs uppercase font-bold opacity-70 group-hover:opacity-100 transition-opacity">{safeValue || "Pilih Warna Utama"}</span>
            </div>
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-base-300 shadow-sm">
              <input type="color" name={name} value={safeValue || "#000000"} className="absolute -inset-2 w-[150%] h-[150%] cursor-pointer" onChange={onChange} required={required} {...props} />
            </div>
          </div>
        ) : type === "checkbox" ? (
          <div className={`grid ${gridCols} gap-4 mt-1`}>
            {options.map((opt) => {
              const checked = Array.isArray(value) ? value.includes(opt.value) : value === opt.value;
              return (
                <label
                  key={opt.value}
                  className={`flex ${itemAlign} gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 text-sm font-bold ${
                    checked ? "bg-primary/10 border-primary text-primary shadow-md" : "bg-base-200 border-base-300 text-base-content/50 hover:border-primary/30"
                  } ${itemClass}`}
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
                    className={`checkbox checkbox-primary ${checkboxClass}`}
                    {...props}
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
            {...props}
          />
        )}

        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl z-50 transition-all pointer-events-none flex items-center justify-center">{icon}</div>}
      </div>
    </div>
  );
}
