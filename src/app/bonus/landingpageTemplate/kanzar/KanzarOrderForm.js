"use client";
import React, { useState, useEffect } from "react";
import { X, ChevronDown, Minus, Plus } from "lucide-react";
import { FaWhatsapp, FaStarOfLife } from "react-icons/fa";
import Image from "next/image";

export default function KanzarOrderForm({ onCancel, initialProduct, data }) {
  const [productName, setProductName] = useState(initialProduct || data.product.products[0].name);
  const [variantId, setVariantId] = useState("250gr");
  const [quantity, setQuantity] = useState(1); // Jumlah Item

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  // Update selection if initialProduct prop changes
  useEffect(() => {
    if (initialProduct) {
      setProductName(initialProduct);
      // Reset defaults when product changes externally
      setVariantId("250gr");
      setQuantity(1);
    }
  }, [initialProduct]);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Logic to get Current Product & Variant Data
  const currentProduct = data.product.products.find((p) => p.name === productName) || data.product.products[0];
  const currentVariant = currentProduct.variants.find((v) => v.id === variantId) || currentProduct.variants[0];

  // Calculation (Assumption: Promo is always active due to daily countdown loop)
  const unitPrice = currentVariant.priceSale;
  const regularPrice = currentVariant.priceRegular;
  const totalPrice = unitPrice * quantity;

  // Formatting
  const formatRupiah = (num) => {
    return new Intl.NumberFormat("id-ID").format(num);
  };

  const formatTotal = (num) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = (e) => {
    e.preventDefault();

    const message =
      `Halo Admin Royal Dates, saya ingin memesan:%0A%0A` +
      `👤 Nama: ${customerInfo.name}%0A` +
      `📱 No. HP: ${customerInfo.phone}%0A` +
      `📦 Produk: ${currentProduct.name}%0A` +
      `⚖️ Kemasan: ${currentVariant.weightLabel}%0A` +
      `🔢 Jumlah: ${quantity} Item (Box/Pcs)%0A` +
      `💵 Total Harga: ${formatTotal(totalPrice)}%0A` +
      `🏠 Alamat: ${customerInfo.address}%0A` +
      `📝 Catatan: ${customerInfo.notes || "-"}`;

    const adminContact = data.footer.contact.find((c) => c.icon === "Phone");
    const adminPhone = adminContact ? adminContact.text : "";

    let phone = adminPhone.replace(/\D/g, "");
    if (phone.startsWith("0")) phone = "62" + phone.slice(1);

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-base-100 px-6 md:px-8 pb-6 md:pb-8 card border border-primary/30 shadow-2xl text-left font-sans max-h-[90vh] overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-base-300 py-4 sticky top-0 bg-base-100 z-10">
        <h3 className="text-2xl font-serif font-bold text-primary">Formulir Pemesanan</h3>
        <button onClick={onCancel} className="hover:text-error transition-colors">
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Selection Area */}
        <div className="bg-base-200/50 p-4 card border border-base-300">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Product Image */}
            <div className="w-full md:w-1/2 aspect-square relative card overflow-hidden border border-primary/20 shrink-0 shadow-sm">
              <Image
                src={currentProduct.image}
                alt={currentProduct.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {currentProduct.tag && <span className="absolute top-2 left-2 bg-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">{currentProduct.tag}</span>}
            </div>

            {/* Product Details & Inputs */}
            <div className="w-full md:w-2/3 space-y-5">
              {/* 1. Select Product Name */}
              <div>
                <label htmlFor="productName" className="block text-xs uppercase tracking-widest mb-2 text-left font-bold">
                  Pilih Produk
                </label>
                <select value={productName} name="productName" id="productName" onChange={(e) => setProductName(e.target.value)} className="select">
                  {data.product.products.map((p) => (
                    <option key={p.id} value={p.name} className="bg-base-100">
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Select Variant (Radio Buttons) */}
              <div>
                <span className="block text-xs uppercase tracking-widest mb-2 text-left font-bold">Pilih Kemasan</span>
                <div id="currentProduct" className="grid grid-cols-3 gap-3">
                  {currentProduct.variants.map((variant) => (
                    <label
                      key={variant.id}
                      htmlFor={variant.id}
                      className={`cursor-pointer card p-3 text-center border transition-all duration-200 flex flex-col items-center justify-center ${
                        variantId === variant.id ? "bg-primary border-primary text-white shadow-md transform" : "bg-base-100 border-base-300 hover:border-primary"
                      }`}
                    >
                      <input type="radio" id={variant.id} name={variant.id} value={variant.id} checked={variantId === variant.id} onChange={(e) => setVariantId(e.target.value)} className="hidden" />
                      <div className="text-sm font-bold">{variant.weightLabel}</div>
                      {/* Harga Regular Coret */}
                      <div className={`text-[9px] line-through opacity-70 ${variantId === variant.id ? "text-white" : "text-slate-400"}`}>{formatRupiah(variant.priceRegular)}</div>
                      {/* Harga Sale */}
                      <div className={`text-[10px] font-bold mt-0.5`}>{formatRupiah(variant.priceSale)}</div>
                    </label>
                  ))}
                </div>
              </div>

              {/* 3. Quantity (Number Spinner) & Total Display */}
              <div className="space-y-4">
                {/* Qty Full Width */}
                <div>
                  <span className="block text-xs uppercase tracking-widest mb-2 text-left font-bold">Jumlah Item</span>
                  <div className="card">
                    <div className="flex items-center overflow-hidden h-[40px]">
                      <button
                        type="button"
                        onClick={handleDecrement}
                        className="aspect-square shadow-none w-fit shrink-0 btn btn-primary flex items-center justify-center hover:text-white transition-colors"
                      >
                        -
                      </button>
                      <input
                        name="quantity"
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full h-full bg-transparent text-center font-bold focus:outline-none input appearance-none m-0 p-0"
                      />
                      <button
                        type="button"
                        onClick={handleIncrement}
                        className="aspect-square shadow-none w-fit shrink-0 btn btn-primary flex items-center justify-center hover:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Total Price Display */}
                <div className="mt-2 pt-4 border-t border-base-300">
                  <div className="flex justify-between items-center">
                    <div className="text-xs uppercase tracking-wide">
                      <p>Total</p>
                      <p>Biaya</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm line-through text-slate-400 block">{formatTotal(regularPrice * quantity)}</span>
                      <span className="text-2xl md:text-3xl font-serif font-bold text-primary">{formatTotal(totalPrice)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Details Inputs */}
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="customerInfo" className="block text-xs uppercase tracking-widest mb-2 text-left font-bold items-center">
              Nama Lengkap <FaStarOfLife className="text-red-500 w-2 h-2 ml-1 inline-block mb-1" />
            </label>
            <input
              type="text"
              name="customerInfo"
              id="customerInfo"
              required
              value={customerInfo.name}
              onChange={handleInfoChange}
              placeholder="Nama Anda"
              className="w-full bg-base-200 border border-base-300 input px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-widest mb-2 text-left font-bold items-center">
              No. WhatsApp <FaStarOfLife className="text-red-500 w-2 h-2 ml-1 inline-block mb-1" />
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="phone"
              required
              value={customerInfo.phone}
              onChange={handleInfoChange}
              placeholder="Contoh: 0812..."
              className="w-full bg-base-200 border border-base-300 input px-4 py-3 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-xs uppercase tracking-widest mb-2 text-left font-bold items-center">
            Alamat Lengkap <FaStarOfLife className="text-red-500 w-2 h-2 ml-1 inline-block mb-1" />
          </label>
          <textarea
            name="address"
            id="address"
            autoComplete="address"
            required
            rows={4}
            value={customerInfo.address}
            onChange={handleInfoChange}
            placeholder="Jalan, No. Rumah, Kecamatan, Kota..."
            className="w-full bg-base-200 border border-base-300 input px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-xs uppercase tracking-widest mb-2 text-left font-bold">
            Catatan (Opsional)
          </label>
          <textarea
            name="notes"
            id="notes"
            autoComplete="notes"
            rows={4}
            value={customerInfo.notes}
            onChange={handleInfoChange}
            placeholder="Contoh: Titip di pos satpam..."
            className="w-full bg-base-200 border border-base-300 input px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full font-bold py-4 btn btn-lg btn-primary shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-3 text-lg group mt-10"
        >
          <FaWhatsapp className="w-6 h-6" />
          <span>Kirim Pesanan</span>
        </button>
      </form>
    </div>
  );
}
