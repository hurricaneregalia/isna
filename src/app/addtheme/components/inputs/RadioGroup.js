"use client";

export default function RadioGroup({
  label,
  name,
  options = [],
  selectedValue,
  onChange,
  className = "",
  valueKey = "id",
  labelKey = "description",
}) {
  return (
    <div className={`form-control ${className}`}>
      {label && (
        <div className="label">
          <span className="label-text font-bold">{label}</span>
        </div>
      )}
      <div className="grid grid-cols-2 gap-2 p-4 bg-base-200 rounded-lg">
        {options.length === 0 && (
          <span className="text-gray-500 text-sm">No options available</span>
        )}
        {options.map((option) => {
          const optionId = `${name}-${option[valueKey]}`;
          return (
            <label
              key={option[valueKey]}
              className="label cursor-pointer justify-start gap-3 hover:bg-base-100 p-2 rounded transition-colors"
              htmlFor={optionId}
            >
              <input
                id={optionId}
                type="radio"
                name={name}
                className="radio radio-primary radio-sm"
                checked={selectedValue === option[valueKey]}
                onChange={() => onChange(option[valueKey])}
              />
              <span className="label-text">{option[labelKey]}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
