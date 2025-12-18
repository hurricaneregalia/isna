"use client";
import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { FaWhatsapp, FaStarOfLife } from "react-icons/fa6";
import HalvoraWhatsAppButton from "./HalvoraWhatsAppButton";
import HalvoraImage from "./HalvoraImage";

export default function HalvoraOrderForm({ isOpen, onClose, product, dictionary, phoneNumber = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
    size: "",
  });

  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
      // Small delay to allow mount before animating
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setActive(true);
        });
      });
    } else {
      setActive(false);
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "unset";
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !active) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.phone.trim()) newErrors.phone = "Nomor WhatsApp wajib diisi";
    if (!formData.address.trim()) newErrors.address = "Alamat kirim wajib diisi";
    if (!formData.size) newErrors.size = "Ukuran wajib dipilih";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructMessage = () => {
    return `Halo Admin, saya ingin memesan produk berikut:
    
*${product?.name || "Produk Halvora"}*
Harga: ${product?.price || "-"}

*Data Pemesan:*
Nama: ${formData.name}
No WA: ${formData.phone}
Ukuran: ${formData.size}
Alamat: ${formData.address}
Catatan: ${formData.note || "-"}

Mohon info total harga dan ongkos kirimnya. Terima kasih!`;
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${active ? "opacity-100" : "opacity-0"}`}
      onClick={onClose}
    >
      <div
        className={`bg-base-100 card w-full max-w-lg shadow-2xl overflow-hidden relative transition-[opacity,transform] duration-300 transform ${
          active ? "ease-out scale-100 opacity-100 translate-y-0" : "ease-in scale-100 opacity-0 translate-y-1"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-base-200 p-6 border-b border-primary/20 flex justify-between items-center">
          <h3 className="text-xl font-bold text-base-content font-serif">Formulir Pemesanan</h3>
          <button onClick={onClose} className="text-primary hover:text-base-content transition-colors">
            <HiX size={24} />
          </button>
        </div>

        {/* Product Summary */}
        {product && (
          <div className="p-4 bg-base-300/50 flex gap-4 items-center border-b border-primary/10">
            <div className="w-16 h-16 card overflow-hidden shrink-0 border border-primary/20">
              <HalvoraImage src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-base-content">{product.name}</h4>
              <div className="flex items-center gap-2">
                {product.originalPrice && <span className="text-xs text-base-content/60 line-through">{product.originalPrice}</span>}
                <p className="text-primary font-semibold">{product.price}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form Fields */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content/80 mb-1 flex items-center gap-1">
                Nama Lengkap <FaStarOfLife className="text-error text-[10px]" />
              </span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              className={`input input-bordered w-full bg-base-100 border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${errors.name ? "input-error" : ""}`}
            />
            {errors.name && <span className="text-error text-xs mt-1">{errors.name}</span>}
          </div>

          {/* WhatsApp */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content/80 mb-1 flex items-center gap-1">
                Nomor WhatsApp <FaStarOfLife className="text-error text-[10px]" />
              </span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contoh: 08123456789"
              className={`input input-bordered w-full bg-base-100 border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${errors.phone ? "input-error" : ""}`}
            />
            {errors.phone && <span className="text-error text-xs mt-1">{errors.phone}</span>}
          </div>

          {/* Size Selector */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content/80 mb-1 flex items-center gap-1">
                Pilih Ukuran <FaStarOfLife className="text-error text-[10px]" />
              </span>
            </label>
            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <label
                  key={size}
                  className={`flex items-center justify-center w-12 h-12 card border cursor-pointer transition-all font-bold ${
                    formData.size === size
                      ? "bg-primary text-primary-content border-primary shadow-md transform scale-110"
                      : "bg-base-100 text-base-content border-primary/30 hover:border-primary hover:bg-base-300"
                  }`}
                >
                  <input type="radio" name="size" value={size} checked={formData.size === size} onChange={handleChange} className="hidden" />
                  {size}
                </label>
              ))}
            </div>
            {errors.size && <span className="text-error text-xs mt-1">{errors.size}</span>}
          </div>

          {/* Address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content/80 mb-1 flex items-center gap-1">
                Alamat Lengkap <FaStarOfLife className="text-error text-[10px]" />
              </span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Jalan, No. Rumah, Kecamatan, Kota, Kode Pos"
              className={`textarea textarea-bordered w-full bg-base-100 border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
                errors.address ? "textarea-error" : ""
              }`}
            ></textarea>
            {errors.address && <span className="text-error text-xs mt-1">{errors.address}</span>}
          </div>

          {/* Note */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-content/80 mb-1">Catatan (Opsional)</span>
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Warna cadangan, dll."
              className="textarea textarea-bordered w-full bg-base-100 border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            ></textarea>
          </div>
        </div>

        {/* Footer / Actions */}
        <div className="p-6 border-t border-primary/20 flex justify-center">
          <div className="w-full">
            <HalvoraWhatsAppButton phoneNumber={phoneNumber} message={constructMessage()} onValidate={validate} className="w-full flex justify-center items-center btn btn-lg gap-2">
              <FaWhatsapp className="text-xl" />
              Kirim Pesanan
            </HalvoraWhatsAppButton>
          </div>
        </div>
      </div>
    </div>
  );
}
