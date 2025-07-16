// src/app/utils/FormatRupiah.js
export default function formatRupiah(value) {
  if (typeof value !== "number") {
    value = parseInt(value);
    if (isNaN(value)) return "Rp 0";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
}
