import React from "react";
import { IoCart, IoPersonCircle, IoTimeOutline, IoArrowBack } from "react-icons/io5";

// --- 1. MOCK DATABASE (Simulasi Data dari Backend) ---
const MOCK_DB = {
  // Slug: 'sepatu-keren' -> Tipe: PRODUCT
  "sepatu-keren": {
    type: "product",
    name: "Nike Air Jordan KW Super",
    price: 1500000,
    description: "Sepatu paling keren sedunia untuk lari dari kenyataan.",
    images: ["https://placehold.co/400x400/png", "https://placehold.co/400x400/orange"],
    stock: 50,
  },
  // Slug: 'tips-branding' -> Tipe: ARTICLE
  "tips-branding": {
    type: "article",
    title: "5 Cara Branding Tanpa Budget",
    author: "Mad Iwad",
    publishedAt: "17 Jan 2026",
    content: `
      <p>Branding itu tidak harus mahal. <strong>Konsistensi</strong> adalah kuncinya.</p>
      <p>Mulailah dengan menentukan warna dan font yang konsisten di semua media sosial Anda.</p>
      <p>Jangan lupa untuk selalu menyapa audiens dengan gaya bahasa yang sama.</p>
    `,
  },
};

// --- 2. TEMPLATE A: STRUKTUR PRODUK ---
const ProductTemplate = ({ data }) => (
  <div className="min-h-screen bg-base-100 flex flex-col md:flex-row items-center justify-center p-8 gap-10">
    {/* Kolom Kiri: Gambar */}
    <div className="w-full max-w-md">
      <img src={data.images[0]} alt={data.name} className="w-full h-auto rounded-3xl shadow-xl hover:scale-105 transition-transform" />
    </div>

    {/* Kolom Kanan: Detail & Aksi */}
    <div className="w-full max-w-md flex flex-col gap-4 text-left">
      <div className="badge badge-secondary badge-outline px-4 py-3">Produk Terlaris</div>
      <h1 className="text-4xl font-black leading-tight">{data.name}</h1>
      <p className="text-3xl font-bold text-primary">Rp {data.price.toLocaleString("id-ID")}</p>
      <p className="opacity-70 leading-relaxed">{data.description}</p>

      <div className="divider"></div>

      <div className="flex gap-3 mt-4">
        <button className="btn btn-primary flex-1 btn-lg rounded-full text-white shadow-lg shadow-primary/30 gap-3">
          <IoCart className="text-2xl" /> Beli Sekarang
        </button>
        <button className="btn btn-outline btn-square btn-lg rounded-full">❤</button>
      </div>
      <p className="text-xs text-center opacity-50 mt-2">Stok tersisa: {data.stock} unit</p>
    </div>
  </div>
);

// --- 3. TEMPLATE B: STRUKTUR ARTIKEL ---
const ArticleTemplate = ({ data }) => (
  <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-serif py-20 px-4">
    <div className="max-w-2xl mx-auto bg-white p-8 md:p-14 rounded-none shadow-sm border-t-4 border-red-600">
      <span className="text-xs font-sans font-bold tracking-widest uppercase text-red-600 mb-2 block">Blog & Insight</span>
      <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{data.title}</h1>

      <div className="flex items-center gap-4 border-b border-gray-100 pb-8 mb-8 font-sans text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <IoPersonCircle className="text-xl" />
          <span>{data.author}</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-2">
          <IoTimeOutline className="text-xl" />
          <span>{data.publishedAt}</span>
        </div>
      </div>

      <div className="prose prose-lg prose-slate max-w-none font-serif" dangerouslySetInnerHTML={{ __html: data.content }} />

      <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center font-sans">
        <button className="btn btn-ghost hover:bg-gray-100 gap-2 pl-0">
          <IoArrowBack /> Kembali ke Home
        </button>
        <div className="flex gap-2">
          <div className="badge badge-neutral">Branding</div>
          <div className="badge badge-neutral">Marketing</div>
        </div>
      </div>
    </div>
  </div>
);

// --- 4. TEMPLATE C: DEFAULT / 404 ---
const NotFoundTemplate = ({ slug }) => (
  <div className="min-h-screen bg-base-300 flex flex-col items-center justify-center text-center p-10">
    <h1 className="text-9xl font-black opacity-10">404</h1>
    <h2 className="text-2xl font-bold -mt-10 mb-4">Halaman Tidak Ditemukan</h2>
    <p>
      Maaf, kami tidak memiliki data untuk slug: <code className="bg-black/10 px-2 py-1 rounded">{slug}</code>
    </p>
    <div className="mt-8 flex gap-2">
      <a href="/sepatu-keren" className="btn btn-primary">
        Lihat Contoh Produk
      </a>
      <a href="/tips-branding" className="btn btn-secondary">
        Lihat Contoh Artikel
      </a>
    </div>
  </div>
);

export default function DynamicPage({ params }) {
  const { slug } = params;

  // 1. Cari data berdasarkan slug
  const data = MOCK_DB[slug];

  // 2. Jika data tidak ada, tampilkan 404
  if (!data) {
    return <NotFoundTemplate slug={slug} />;
  }

  // 3. Dispatcher: Pilih Component berdasarkan Tipe Data
  if (data.type === "product") {
    return <ProductTemplate data={data} />;
  }

  if (data.type === "article") {
    return <ArticleTemplate data={data} />;
  }

  return <div className="p-10 text-center">Tipe konten tidak dikenali.</div>;
}
