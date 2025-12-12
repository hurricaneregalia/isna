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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 bg-base-200 rounded-lg max-h-60 overflow-y-auto">
        {options.map((option) => {
           // Fallback ID generation if name is not provided
           const inputId = name ? `${name}-${option[valueKey]}` : `checkbox-${option[valueKey]}`;
           
           return (
            <label
              key={option[valueKey]}
              className="label cursor-pointer justify-start gap-3 hover:bg-base-100 p-2 rounded transition-colors"
              htmlFor={inputId}
            >
              <input
                id={inputId}
                type="checkbox"
                name={name} // Optional group name
                className={`checkbox ${checkboxColor} checkbox-sm`}
                checked={selectedValues.includes(option[valueKey])}
                onChange={(e) => onChange(option[valueKey], e.target.checked)}
              />
              <span className="label-text text-sm">{option[labelKey]}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
