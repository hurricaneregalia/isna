"use client";

export default function CheckboxGroup({
  label,
  name,
  options = [],
  selectedValues = [],
  onChange, // (id, checked) => void
  className = "",
  valueKey = "id",
  labelKey = "description",
  checkboxColor = "checkbox-primary",
}) {
  return (
    <div className={`form-control ${className}`}>
      {label && (
        <div className="label">
          <span className="label-text font-bold">{label}</span>
        </div>
      )}
      <div className="flex flex-wrap gap-2 p-4 border border-base-300 rounded-lg bg-base-100">
        {options.map((option) => {
          // Fallback ID generation if name is not provided
          const inputId = name ? `${name}-${option[valueKey]}` : `checkbox-${option[valueKey]}`;
          const isSelected = selectedValues.includes(option[valueKey]);

          return (
            <label
              key={option[valueKey]}
              className={`cursor-pointer px-3 py-2 border rounded-full text-sm transition-all duration-200 select-none flex items-center gap-2
                ${isSelected ? "bg-primary text-primary-content border-primary shadow-md transform scale-105" : "bg-base-100 border-base-300 hover:border-primary hover:text-primary"}`}
              htmlFor={inputId}
            >
              <input
                id={inputId}
                type="checkbox"
                name={name}
                className="hidden" // Hide default checkbox
                checked={isSelected}
                onChange={(e) => onChange(option[valueKey], e.target.checked)}
              />
              <span>{option[labelKey]}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
