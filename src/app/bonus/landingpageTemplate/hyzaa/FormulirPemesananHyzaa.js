"use client";

import { useEffect, useState } from "react";
import formatRupiah from "@/app/utils/FormatRupiah";
import { IoClose } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa6";
import Divider from "./ui/Divider";

export default function FormulirPemesananHyzaa({ selectedProduct, variants, waNumber }) {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    noHp: "",
    alamat: "",
    varian: "",
    jumlah: 1,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setFormData((prev) => ({
        ...prev,
        varian: selectedProduct.name,
      }));
    }
  }, [selectedProduct]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const hargaTotal = selectedProduct && formData.jumlah ? selectedProduct.price * formData.jumlah : 0;

    setTimeout(() => {
      document.getElementById("modal-pesan").close();

      const message = `
*Pemesanan Sepeda Gunung*
Nama: ${formData.nama}
Email: ${formData.email}
No. WhatsApp: ${formData.noHp}
Alamat: ${formData.alamat}
Varian: ${formData.varian}
Jumlah: ${formData.jumlah}
Harga Total: ${formatRupiah(hargaTotal)}

Saya ingin memesan sepeda ini.
`;

      const encodedMsg = encodeURIComponent(message);
      const waLink = `https://wa.me/${waNumber}?text=${encodedMsg}`;

      window.location.href = waLink;
    }, 2000);
  }

  return (
    <dialog
      id="modal-pesan"
      className="modal"
      onClick={(e) => {
        const dialog = document.getElementById("modal-pesan");
        if (e.target === dialog) dialog.close();
      }}
    >
      <div className="modal-box bg-base-100 text-base-content relative">
        {/* Tombol silang */}
        <button onClick={() => document.getElementById("modal-pesan").close()} className="absolute cursor-pointer top-3 right-3 text-3xl text-base-content hover:text-error" aria-label="Tutup">
          <IoClose />
        </button>

        <h3 className="font-bold text-lg mb-4">Formulir Pemesanan</h3>

        {selectedProduct && (
          <div className="mb-4 bg-primary/5 card p-3 ">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-base">{selectedProduct.name}</p>
                <p className="text-primary font-medium">{formatRupiah(selectedProduct.price)}</p>
              </div>

              <div className="text-3xl">
                <FaBicycle />
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-10 flex-col gap-3">
            <FaSpinner className="animate-spin text-3xl text-primary" />
            <p className="text-sm text-base-content/75 font-medium">Pesanan sedang di proses...</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit} autoComplete="on">
            {/* Nama */}
            <label className="floating-label">
              <input
                type="text"
                name="nama"
                id="nama"
                autoComplete="name"
                value={formData.nama}
                onChange={handleChange}
                required
                placeholder="Nama Lengkap"
                className="input input-bordered w-full peer"
              />
              <span className="label-text absolute left-3 top-2 transition-all peer-placeholder-shown:top-3.5 peer-focus:top-2">Nama Lengkap</span>
            </label>

            {/* Email */}
            <label className="floating-label">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                title="Format email tidak valid"
                className="input input-bordered w-full peer"
              />
              <span className="label-text absolute left-3 top-2 transition-all peer-placeholder-shown:top-3.5 peer-focus:top-2">Email</span>
            </label>

            {/* WhatsApp */}
            <label className="floating-label">
              <input
                type="tel"
                name="noHp"
                id="noHp"
                autoComplete="tel"
                value={formData.noHp}
                onChange={handleChange}
                required
                placeholder="628xxxx"
                pattern="^62[0-9]{8,13}$"
                title="Nomor WhatsApp harus diawali dengan 62 dan terdiri dari 10–15 digit"
                className="input input-bordered w-full peer"
              />
              <span className="label-text absolute left-3 top-2 transition-all peer-placeholder-shown:top-3.5 peer-focus:top-2">No. WhatsApp</span>
            </label>

            {/* Alamat */}
            <label className="floating-label">
              <textarea
                name="alamat"
                id="alamat"
                autoComplete="street-address"
                value={formData.alamat}
                onChange={handleChange}
                required
                placeholder="Alamat Lengkap"
                rows={3}
                className="textarea textarea-bordered w-full peer"
              />
              <span className="label-text absolute left-3 top-2 transition-all peer-placeholder-shown:top-4 peer-focus:top-2">Alamat Lengkap</span>
            </label>

            {/* Jumlah Unit */}
            <div className="form-control mb-8">
              <span className="label-text mb-2">Jumlah Unit</span>
              <div className="flex gap-3">
                {[1, 2, 5, 10, 50].map((val) => {
                  const inputId = `jumlah-${val}`;
                  return (
                    <div key={val}>
                      <input type="radio" id={inputId} name="jumlah" value={val} checked={parseInt(formData.jumlah) === val} onChange={handleChange} className="hidden peer" required />
                      <label
                        htmlFor={inputId}
                        className="card py-2 px-4 bg-primary/30 font-bold flex items-center justify-center cursor-pointer 
           peer-checked:bg-primary peer-hover:bg-secondary
           peer-hover:text-white peer-checked:text-lime-300 text-base-content transition-all"
                      >
                        {val}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Varian Sepeda */}
            <label className="floating-label">
              <input type="text" name="varianDisabled" id="varian" value={formData.varian} disabled placeholder=" " className="input input-bordered w-full peer" />
              <input type="hidden" name="varian" value={formData.varian} />
              <span className="label-text absolute left-3 top-2 transition-all peer-placeholder-shown:top-3.5 peer-focus:top-2">Varian Sepeda</span>
            </label>

            {/* Harga */}
            <label className="form-control w-full relative floating-label">
              <input
                type="text"
                id="harga"
                name="hargaDisplay"
                value={selectedProduct && formData.jumlah ? formatRupiah(selectedProduct.price * formData.jumlah) : ""}
                disabled
                placeholder=" "
                className="input input-bordered w-full peer"
              />
              <input type="hidden" name="harga" value={selectedProduct && formData.jumlah ? selectedProduct.price * formData.jumlah : ""} />
              <span className="label-text absolute left-3 top-2 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base-content/50 peer-focus:top-2 peer-focus:text-xs">
                Total Harga
              </span>
            </label>
            <Divider my={10} />
            <div className="modal-action justify-between">
              <button type="button" onClick={() => document.getElementById("modal-pesan").close()} className="btn btn-base-100">
                Batal
              </button>
              <button type="submit" className="btn btn-primary">
                Buat Pesanan
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
