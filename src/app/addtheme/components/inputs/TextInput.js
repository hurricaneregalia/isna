"use client";

export default function TextInput({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  type = "text",
  className = "",
  disabled = false,
  id,
  autoComplete = "off",
}) {
  const inputId = id || name;

  return (
    <div className={`form-control w-full ${className}`}>
      {label && (
        <label className="label" htmlFor={inputId}>
          <span className="label-text font-medium">
            {label} {required && <span className="text-error">*</span>}
          </span>
        </label>
      )}
      <input
        id={inputId}
        type={type}
        name={name}
        placeholder={placeholder}
        className="input input-bordered w-full focus:input-primary disabled:bg-base-200 disabled:text-gray-500 disabled:cursor-not-allowed"
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
      />
    </div>
  );
}
