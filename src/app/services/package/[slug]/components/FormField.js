import React, { useMemo } from "react";

// Floating Label Wrapper for Text/Textarea
const FloatingWrapper = ({ children, label, isRequired, item }) => (
  <div className="w-full">
    <label className="floating-label w-full">
      {children}
      <span className="label capitalize flex items-center gap-1 text-base">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </span>
    </label>
    {(item.hint || item.hintTrue || item.hintFalse) && (
      <p className="text-xs text-gray-500 mt-1 ml-1">{item.hint || item.hintTrue || item.hintFalse}</p>
    )}
  </div>
);

const FormField = ({ item, value, onChange, charCount }) => {
  const id = `${item.id}-${item.name}`.replace(/\s+/g, "-");
  const label = item.name;
  const isRequired = item.required;
  const placeholder = item.placeholder || label;
  const options = useMemo(() => item.options?.split(",").map((opt) => opt.trim()) || [], [item.options]);

  if (item.type === "textarea") {
    const currentCount = charCount || 0;
    const maxLen = item.maxLength || 400;
    return (
      <FloatingWrapper label={label} isRequired={isRequired} item={item} isTextarea={true}>
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required={isRequired}
          className="textarea textarea-lg w-full h-32 bg-transparent"
          onChange={onChange}
          maxLength={maxLen}
          value={value || ""}
        ></textarea>
        <div className="text-right mt-1 absolute bottom-2 right-2 pointer-events-none">
          <span className={`text-xs ${currentCount >= maxLen ? "text-error" : "text-gray-400"}`}>
            {currentCount}/{maxLen}
          </span>
        </div>
      </FloatingWrapper>
    );
  }

  if (item.type === "radio" && options.length > 0) {
    return (
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text font-semibold text-base capitalize flex items-center gap-1">
            {label}
            {isRequired && <span className="text-error text-lg">*</span>}
          </span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {options.map((opt, index) => (
            <label
              key={index}
              className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all hover:bg-base-200 ${
                value === opt ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-base-300"
              }`}
            >
              <input
                type="radio"
                name={item.name.replace(/\s+/g, "-").toLowerCase()}
                value={opt}
                required={isRequired}
                className="radio radio-primary radio-sm"
                onChange={onChange}
                checked={value === opt}
              />
              <span className="capitalize font-medium">{opt}</span>
            </label>
          ))}
        </div>
        {item.hint && <p className="text-xs text-gray-500 mt-2 ml-1">{item.hint}</p>}
      </div>
    );
  }

  if (item.type === "file") {
    return (
      <div className="w-full">
        <label className="floating-label w-full">
           <input
            id={id}
            name={id}
            type="file"
            required={isRequired}
            className="file-input file-input-lg w-full file-input-primary text-capitalize"
            onChange={onChange}
          />
          <span className="label capitalize flex items-center gap-1 text-base">
            {label}
            {isRequired && <span className="text-red-500">*</span>}
          </span>
        </label>
        {(item.hint || item.hintTrue || item.hintFalse) && (
          <p className="text-xs text-gray-500 mt-1 ml-1">{item.hint || item.hintTrue || item.hintFalse}</p>
        )}
      </div>
    );
  }

  // Default Input (text, email, tel, date, etc.)
  return (
    <FloatingWrapper label={label} isRequired={isRequired} item={item}>
      <input
        id={id}
        name={id}
        type={item.type}
        placeholder={placeholder}
        required={isRequired}
        pattern={item.type === "tel" ? "^\\+62[0-9]{9,12}$" : undefined}
        minLength={item.type === "tel" ? 13 : undefined}
        maxLength={item.type === "tel" ? 14 : undefined}
        min={item.type === "date" ? new Date(Date.now() + 86400000).toISOString().split("T")[0] : undefined}
        title={item.type === "tel" ? "Masukkan nomor yang diawali dengan +62 dan diikuti 9–12 digit angka" : undefined}
        className="input text-capitalize input-lg w-full bg-transparent"
        onChange={onChange}
        value={item.type !== "file" ? value : undefined}
      />
    </FloatingWrapper>
  );
};

export default FormField;
