"use client";

export default function TextAreaInput({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  className = "",
  rows = 4,
  id,
  autoComplete = "off",
}) {
  const inputId = id || name;

  return (
    <div className={`form-control w-full flex flex-col ${className}`}>
      {label && (
        <label className="label" htmlFor={inputId}>
          <span className="label-text font-medium">
            {label} {required && <span className="text-error">*</span>}
          </span>
        </label>
      )}
      <textarea
        id={inputId}
        name={name}
        className="textarea textarea-bordered h-24 w-full focus:textarea-primary"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        autoComplete={autoComplete}
      ></textarea>
    </div>
  );
}
