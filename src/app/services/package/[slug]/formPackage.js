"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Midtrans from "@/app/component/paymentGateway/midtrans";
import ProsesPembayaran from "@/app/component/global/prosesPembayaran";
import FormField from "./components/FormField";
import FormHeader from "./components/FormHeader";

export default function FormPackage({ listItem, serviceName, servicePrice, serviceCategory, waNumber, sku, serviceUrl, baseUrl }) {
  const servicePriceFx = servicePrice.toLocaleString("id-ID");
  const [textPreview, setTextPreview] = useState("");
  const [formData, setFormData] = useState({});
  const [orderId, setOrderId] = useState("");
  const [charCount, setCharCount] = useState({});
  const [orderBy, setOrderBy] = useState("");
  const [sapaan, setSapaan] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
  const midtransRef = useRef(null);
  const formRef = useRef(null);

  // Initialize Order ID and Base Data
  useEffect(() => {
    const generateOrderId = () => {
      const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
      return `${sku || "ORD"}-${datePart}-${randomPart}`;
    };

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);

    const initialData = {};
    listItem.forEach((item) => {
      if (item.type === "tel") {
        const id = `${item.id}-${item.name}`.replace(/\s+/g, "-");
        initialData[id] = "+62";
      }
    });

    setFormData((prev) => ({
      ...prev,
      ...initialData,
      orderId: newOrderId,
      "nama-paket": serviceName,
      kategori: serviceCategory,
      "harga-paket": servicePriceFx,
    }));
  }, [sku, serviceName, servicePriceFx, serviceCategory, listItem]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    const finalValue = type === "file" ? files[0]?.name : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    if (type === "textarea" || e.target.tagName === "TEXTAREA") {
      setCharCount((prev) => ({
        ...prev,
        [name]: value.length,
      }));
    }
  };

  // Generate Text Preview for WhatsApp/Midtrans
  useEffect(() => {
    const productKeys = ["nama-paket", "kategori", "harga-paket"];
    const entryList = [];

    if (formData.orderId) entryList.push(`orderId: ${formData.orderId}`);

    Object.entries(formData).forEach(([key, value]) => {
      if (key !== "orderId" && !productKeys.includes(key)) {
        const cleanKey = key.replace(/^\d+-/, "");
        const isDate = /^\d{4}-\d{2}-\d{2}$/.test(value);
        const formattedValue = isDate
          ? new Date(value).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })
          : value;

        entryList.push(`${cleanKey}: ${formattedValue}`);
      }
    });

    productKeys.forEach((key) => {
      if (formData[key]) entryList.push(`${key}: ${formData[key]}`);
    });

    setTextPreview(entryList.join("\n"));

    if (formData["1-nama-lengkap"]) setOrderBy(formData["1-nama-lengkap"]);
    if (formData["sapaan"]) setSapaan(formData["sapaan"]);
    
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    // Custom Validation
    const missingFields = listItem.filter((item) => {
      if (!item.required) return false;

      const id = `${item.id}-${item.name}`.replace(/\s+/g, "-");
      
      if (item.type === "radio") {
        const radioName = item.name.replace(/\s+/g, "-").toLowerCase();
        const checked = form.querySelector(`input[name="${radioName}"]:checked`);
        return !checked;
      }
      
      const input = form.elements[id];
      if (item.type === "file") return !input || input.files.length === 0;
      
      return !input || !input.value.trim();
    });

    if (missingFields.length > 0) {
      const firstMissing = missingFields[0];
      const id = `${firstMissing.id}-${firstMissing.name}`.replace(/\s+/g, "-");

      if (firstMissing.type === "radio") {
        const radioName = firstMissing.name.replace(/\s+/g, "-").toLowerCase();
        const radioGroup = form.querySelector(`input[name="${radioName}"]`)?.closest(".form-control");
        radioGroup?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        const input = form.elements[id];
        if (input) {
          input.scrollIntoView({ behavior: "smooth", block: "center" });
          input.focus({ preventScroll: true });
        }
      }
      
      alert("Mohon lengkapi data wajib berikut:\n" + missingFields.map((f) => `- ${f.name}`).join("\n"));
      return;
    }

    if (form.checkValidity()) {
      setIsProcessingPayment(true);
      midtransRef.current?.handlePayment();
    } else {
      form.reportValidity();
    }
  };

  return (
    <>
      {isProcessingPayment && <ProsesPembayaran />}

      <div className="w-full max-w-4xl mx-auto mb-20">
        <form ref={formRef} onSubmit={handleSubmit} className="bg-base-100 rounded-bl-3xl border border-base-200 overflow-hidden">
          
          <FormHeader serviceName={serviceName} />

          <div className="p-6 sm:p-10 space-y-6">
            {listItem.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {listItem.map((item) => {
                   const id = `${item.id}-${item.name}`.replace(/\s+/g, "-");
                   const radioName = item.type === "radio" ? item.name.replace(/\s+/g, "-").toLowerCase() : undefined;
                   
                   let val = "";
                   if (item.type === "radio") {
                     val = formData[radioName] || "";
                   } else if (item.type !== "file") {
                     val = formData[id] || "";
                   }

                   return (
                     <FormField 
                       key={item.id} 
                       item={item} 
                       value={val}
                       onChange={handleChange}
                       charCount={charCount[id]}
                     />
                   );
                })}
              </div>
            ) : (
              <div className="text-center py-10 text-gray-400">
                <p>Tidak ada form yang perlu diisi.</p>
              </div>
            )}

            <div className="divider my-8"></div>

            <div className="flex flex-col items-center justify-center gap-4">
               <button
                id="submit"
                type="submit"
                name="submit"
                className="btn btn-primary btn-lg rounded-full px-12 text-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
              >
                Lanjut Pembayaran 
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <Midtrans
        ref={midtransRef}
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
        sapaan={sapaan}
        btnText="Checkout"
        icon={<FaArrowRight />}
      />
    </>
  );
}
