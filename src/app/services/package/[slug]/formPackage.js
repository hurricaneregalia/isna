"use client";
import TextHeadingTitle from "@/app/component/global/textHeadingTitle";
import React, { useEffect, useState } from "react";
import { TiPencil } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import WhatsappBtn from "@/app/component/global/whatsappBtn";

export default function FormPackage({ listItem, serviceName, servicePrice, serviceCategory, waNumber, sku }) {
  const LastId = Math.max(...listItem.map((item) => item.id));
  const [formData, setFormData] = useState({});
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? e.target.files[0]?.name : value, // ambil nama file
    }));
  };
  useEffect(() => {
    const generateOrderId = () => {
      const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
      return `${sku || "ORD"}-${datePart}-${randomPart}`;
    };

    setOrderId(generateOrderId());

    setFormData((prev) => ({
      ...prev,
      [`${LastId + 1}-nama-paket`]: serviceName,
      [`${LastId + 2}-kategori`]: serviceCategory,
      [`${LastId + 3}-harga-paket`]: servicePrice,
    }));
  }, [sku, serviceName, servicePrice, serviceCategory]);

  return (
    <form className="mb-20">
      <div className="w-full grid grid-cols-1 gap-5 border border-base-300 lg:p-30 p-5 pt-10 rounded-bl-3xl">
        <TextHeadingTitle title="Isi data bisnis Anda" iconTitle={<TiPencil />} titleCase={2} h={3} cssStyle="mb-10" iconPosition="left" />
        {listItem.length > 0 ? (
          listItem.map((item) => {
            const id = `${item.id}-${item.name}`.replace(/\s+/g, "-");
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
                        name={id}
                        placeholder={placeholder}
                        required={isRequired}
                        className="textarea textarea-lg placeholder:capitalize w-full"
                        rows={item.row || 3}
                        onChange={handleChange}
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
                            <input
                              type="radio"
                              name={id}
                              value={opt}
                              required={isRequired}
                              className="radio input validator"
                              onChange={handleChange}
                            />
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
                        name={id}
                        type="file"
                        required={isRequired}
                        className="file-input input validator file-input-bordered file-input-lg w-full"
                        onChange={handleChange}
                      />
                      <span className="capitalize">
                        {label} {isRequired && <span className="text-red-500 text-2xl">*</span>}
                      </span>
                      <p className="validator-hint">{item.hintFalse || item.hintTrue}huntu</p>
                    </>
                  ) : (
                    <>
                      <input
                        id={id}
                        name={id}
                        type={item.type}
                        placeholder={placeholder}
                        required={isRequired}
                        defaultValue={item.type === "tel" ? "+62" : undefined}
                        pattern={item.type === "tel" ? "^\\+62[0-9]{9,12}$" : undefined}
                        minLength={item.type === "tel" ? 12 : undefined}
                        maxLength={item.type === "tel" ? 15 : undefined}
                        title={item.type === "tel" ? "Masukkan nomor yang diawali dengan +62 dan diikuti 9–12 digit angka" : undefined}
                        className="input input-lg placeholder:capitalize w-full validator"
                        onChange={handleChange}
                      />
                      <span className="capitalize">
                        {label} {isRequired && <span className="text-red-500 text-2xl">*</span>}
                      </span>
                      <p className="validator-hint">{item.hintFalse || item.hintTrue}</p>
                    </>
                  )}
                </label>
              </div>
            );
          })
        ) : (
          <p>No item</p>
        )}
        <div>
          <TextHeadingTitle title="Informasi paket" iconTitle={<TiPencil />} titleCase={2} h={3} cssStyle="my-10" iconPosition="left" />
        </div>
        <div className=" flex flex-col gap-5">
          <label className="floating-label w-full" htmlFor="15-nama-paket">
            <input
              id="15-nama-paket"
              name="15-nama-paket"
              type="text"
              defaultValue={serviceName}
              placeholder={serviceName}
              className="input input-lg placeholder:capitalize w-full"
              disabled
            />
            <span className="capitalize">Nama paket</span>
          </label>
          <label className="floating-label w-full" htmlFor="16-harga">
            <input
              id="16-harga"
              name="16-harga"
              type="number"
              defaultValue={servicePrice}
              placeholder={servicePrice}
              className="input input-lg placeholder:capitalize w-full"
              disabled
            />
            <span className="capitalize">harga paket</span>
          </label>
          <label className="floating-label w-full" htmlFor="17-kategori">
            <input
              id="17-kategori"
              name="17-kategori"
              type="text"
              defaultValue={serviceCategory}
              placeholder={serviceCategory}
              className="input input-lg placeholder:capitalize w-full"
              disabled
            />
            <span className="capitalize">kategori</span>
          </label>
        </div>
        <hr className="my-5 opacity-0" />
        <WhatsappBtn
          waBtnText="checkout"
          waNumber={waNumber}
          waText={encodeURIComponent(
            `Order ID: ${orderId}, ` +
              Object.entries(
                Object.fromEntries(
                  Object.entries(formData).sort(([keyA], [keyB]) => {
                    const numA = parseInt(keyA.split("-")[0], 10);
                    const numB = parseInt(keyB.split("-")[0], 10);
                    return numA - numB;
                  })
                )
              )
                .map(([key, value]) => {
                  const label = key.replace(/^\d+-/, "").replace(/-/g, " ");
                  let newValue = value;

                  // Format currency
                  if (key.toLowerCase().includes("price") || key.toLowerCase().includes("harga")) {
                    const numericValue = parseInt(value.toString().replace(/\D/g, ""), 10);
                    if (!isNaN(numericValue)) {
                      newValue = numericValue.toLocaleString("id-ID");
                    }
                  }

                  // Format tanggal
                  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                    const date = new Date(value);
                    const formattedDate = date.toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    });
                    newValue = formattedDate;
                  }

                  return `${label}: ${newValue}`;
                })
                .join(", ")
          )}
          forWa="btn-xl bg-green-500 hover:bg-green-600 capitalize text-green-100"
        />
      </div>
    </form>
  );
}
