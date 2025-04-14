import TextHeadingTitle from "@/app/component/global/textHeadingTitle";
import React from "react";

export default function FormPackage({ listItem }) {
  return (
    <form className="md:mt-0 mt-10">
      <TextHeadingTitle title="Isi data bisnis Anda" iconTitle={null} titleCase={2} h={3} />
      <div className="w-full grid grid-cols-1 gap-5 mt-4 border border-base-300 lg:p-30 p-5 rounded-bl-3xl">
        {listItem.length > 0 ? (
          listItem.map((item) => {
            const id = `${item.name}-${item.id}`.replace(/\s+/g, "-");
            const label = item.name;
            const basePlaceholder = item.placeholder || item.name;
            const placeholder = item.required ? `${basePlaceholder} *` : basePlaceholder;
            const options = item.options?.split(",").map((opt) => opt.trim()) || [];
            const isRequired = item.required;

            return (
              <div key={item.id} className="w-full">
                <label className="floating-label w-full" htmlFor={item.type === "radio" ? undefined : id}>
                  {/* TEXTAREA */}
                  {item.type === "textarea" ? (
                    <label className="form-control floating-label w-full">
                      <span className="capitalize mb-1">{item.name}</span>
                      <textarea
                        id={id}
                        placeholder={placeholder}
                        required={isRequired}
                        className="textarea textarea-lg placeholder:capitalize w-full"
                        rows={item.row || 3}
                      ></textarea>
                      {item.hint && <p className="text-sm text-gray-500 mt-1">{item.hint}</p>}
                    </label>
                  ) : item.type === "radio" && options.length > 0 ? (
                    <>
                      <div className="flex flex-col gap-2">
                        <span className="capitalize mb-1">
                          {label} {isRequired && <span className="text-red-500 text-2xl">*</span>}
                        </span>
                        {options.map((opt, index) => (
                          <label key={index} className="inline-flex items-center gap-2">
                            <input type="radio" name={id} value={opt} required={isRequired} className="radio input validator" />
                            <span className="capitalize">{opt}</span>
                          </label>
                        ))}
                      </div>
                      {item.hint && <p className="text-sm text-gray-500 mt-1">{item.hint}</p>}
                    </>
                  ) : item.type === "file" ? (
                    <>
                      <input
                        id={id}
                        type="file"
                        required={isRequired}
                        className="file-input input validator file-input-bordered file-input-lg w-full"
                      />
                      <span className="capitalize">
                        {label} {isRequired && <span className="text-red-500 text-2xl">*</span>}
                      </span>
                      {item.hint && <p className="text-sm text-gray-500 mt-1">{item.hint}</p>}
                    </>
                  ) : (
                    <>
                      <input
                        id={id}
                        type={item.type}
                        placeholder={placeholder}
                        required={isRequired}
                        defaultValue={item.type === "tel" ? "+62" : undefined}
                        pattern={item.type === "tel" ? "^\\+62[0-9]{9,12}$" : undefined}
                        minLength={item.type === "tel" ? 12 : undefined}
                        maxLength={item.type === "tel" ? 15 : undefined}
                        title={item.type === "tel" ? "Masukkan nomor yang diawali dengan +62 dan diikuti 9–12 digit angka" : undefined}
                        className="input input-lg placeholder:capitalize w-full validator"
                      />
                      <span className="capitalize">
                        {label} {isRequired && <span className="text-red-500 text-2xl">*</span>}
                      </span>
                      {item.hint && <p className="text-sm text-gray-500 mt-1">{item.hint}</p>}
                    </>
                  )}
                </label>
              </div>
            );
          })
        ) : (
          <p>No item</p>
        )}
      </div>
    </form>
  );
}
