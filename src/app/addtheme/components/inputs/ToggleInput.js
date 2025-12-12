"use client";

export default function ToggleInput({
  label,
  name,
  checked,
  onChange,
  className = "",
  id,
}) {
  return (
    <div className={`form-control ${className}`}>
      <label className="cursor-pointer label justify-start gap-4">
        <span className="label-text font-bold">{label}</span>
        <input
          type="checkbox"
          name={name}
          className="toggle toggle-success"
          checked={checked}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
