"use client";

export default function SelectInput({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "-- Select --",
  required = false,
  className = "",
  valueKey = "id",
  labelKey = "name",
  setId,
  autoComplete = "off",
}) {
  const inputId = setId || name;

  return (
    <div className={`form-control w-full ${className}`}>
      {label && (
        <label className="label" htmlFor={inputId}>
          <span className="label-text font-medium">
            {label} {required && <span className="text-error">*</span>}
          </span>
        </label>
      )}
      <select
        id={inputId}
        name={name}
        className="select select-bordered w-full focus:select-primary pl-3"
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option[valueKey]} value={option[valueKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>
    </div>
  );
}
