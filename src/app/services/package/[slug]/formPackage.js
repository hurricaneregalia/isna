"use client";
import TextHeadingTitle from "@/app/component/global/textHeadingTitle";
import React, { useEffect, useState } from "react";
import { TiPencil } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa6";
import Midtrans from "@/app/component/paymentGateway/midtrans";

export default function FormPackage({ listItem, serviceName, servicePrice, serviceCategory, waNumber, sku, serviceUrl, baseUrl }) {
  const servicePriceFx = servicePrice.toLocaleString("id-ID");
  const [textPreview, setTextPreview] = useState("");
  const LastId = Math.max(...listItem.map((item) => item.id));
  const [formData, setFormData] = useState({});
  const [orderId, setOrderId] = useState("");
  const [charCount, setCharCount] = useState({});
  const [orderBy, setOrderBy] = useState("");

  const formRef = React.useRef(null);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? e.target.files[0]?.name : value,
    }));

    // Cek kalau textarea → hitung jumlah karakter
    if (type === "textarea" || e.target.tagName === "TEXTAREA") {
      setCharCount((prev) => ({
        ...prev,
        [name]: value.length,
      }));
    }
  };

  // Buat orderId dan formData default
  useEffect(() => {
    const generateOrderId = () => {
      const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
      return `${sku || "ORD"}-${datePart}-${randomPart}`;
    };

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    setFormData((prev) => ({
      ...prev,
      orderId: newOrderId,
      "nama-paket": serviceName,
      kategori: serviceCategory,
      "harga-paket": servicePriceFx,
    }));
  }, [sku, serviceName, servicePriceFx, serviceCategory]);

  useEffect(() => {
    const productKeys = ["nama-paket", "kategori", "harga-paket"];
    const entryList = [];

    if (formData.orderId) {
      entryList.push(`orderId: ${formData.orderId}`);
    }

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "orderId" && !productKeys.includes(key)) {
        const cleanKey = key.replace(/^\d+-/, "");
        const isDate = /^\d{4}-\d{2}-\d{2}$/.test(value);
        const formattedValue = isDate
          ? new Date(value).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
          : value;

        entryList.push(`${cleanKey}: ${formattedValue}`);
      }
    });

    productKeys.forEach((key) => {
      if (formData[key]) {
        entryList.push(`${key}: ${formData[key]}`);
      }
    });

    setTextPreview(entryList.join("\n"));

    // ✅ Set orderBy dari nama lengkap jika tersedia
    if (formData["1-nama-lengkap"]) {
      setOrderBy(formData["1-nama-lengkap"]);
    }
  }, [formData]);

  return (
    <>
      <form className="mb-20" ref={formRef}>
        <div className="w-full grid grid-cols-1 gap-5 border border-base-300 lg:p-30 sm:p-15 p-5 pt-10 rounded-bl-3xl">
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
                      <label className="form-control floating-label w-full mt-5 ">
                        <span className="capitalize mb-1">{item.name}</span>
                        <textarea
                          id={id}
                          name={id}
                          placeholder={placeholder}
                          required={isRequired}
                          className="textarea textarea-lg placeholder:capitalize w-full"
                          rows={item.row || 3}
                          onChange={handleChange}
                          maxLength={400}
                        ></textarea>
                        {item.hint && (
                          <p className={`text-sm mt-1 ${(charCount[id] || 0) >= (item.maxLength || 400) ? "text-red-500" : "text-gray-500"}`}>
                            {item.hint} {charCount[id] || 0}/{item.maxLength || 400}
                          </p>
                        )}
                      </label>
                    ) : item.type === "radio" && options.length > 0 ? (
                      <>
                        <div className="flex flex-col gap-2 mb-5 border border-slate-400/50 p-3 rounded-md">
                          <span className="capitalize mb-1">
                            {label} {isRequired && <span className="text-red-500 text-2xl">*</span>}
                          </span>
                          {options.map((opt, index) => (
                            <label key={index} className="inline-flex items-center gap-2">
                              <input
                                type="radio"
                                name={item.name.replace(/\s+/g, "-").toLowerCase()}
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
                          min={item.type === "date" ? new Date(Date.now() + 86400000).toISOString().split("T")[0] : undefined}
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
        </div>
        <div className="text-center">
          <button
            type="submit"
            name="submit"
            className="-mt-7 border-0 items-center btn btn-xl rounded-full bg-amber-300  shadow-none hover:bg-amber-500 text-slate-900 capitalize "
          >
            checkout <FaArrowRight />
          </button>
        </div>
      </form>
      <p>{textPreview}</p>
      <Midtrans
        orderId={orderId}
        servicePrice={servicePrice}
        serviceId={sku}
        serviceName={serviceName}
        serviceCategory={serviceCategory}
        serviceUrl={serviceUrl}
        baseUrl={baseUrl}
        desc={textPreview}
        waNumber={waNumber}
        longTime="4s"
        orderBy={orderBy}
      />
    </>
  );
}
