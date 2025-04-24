import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import React from "react";
import HeroPackage from "./heroPackage";
import HeaderPackage from "./headerPackage";
import FormPackage from "./formPackage";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }) {
  const allProductsRes = await fetch(`${BASE_URL}/api/product`);
  const allProducts = await allProductsRes.json();
  const data = allProducts.find((product) => product.slug === params.slug);

  if (!data) {
    return {
      title: "Produk tidak ditemukan",
      description: "Produk yang Anda cari tidak tersedia.",
    };
  }

  return {
    title: data.name,
    description: data.description,
    keywords: Array.isArray(data.keywords) ? data.keywords.join(", ") : "",
    authors: [{ name: data.name }],
    applicationName: data.name,
    generator: "Next.js",
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: BASE_URL,
    },
    openGraph: {
      title: data.name,
      description: data.description,
      url: BASE_URL,
      siteName: data.name,
      images: [
        {
          url: `${BASE_URL}${data.image}`,
          width: 1200,
          height: 630,
          alt: data.name,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.name,
      description: data.description,
      creator: data.name,
      images: [`${BASE_URL}${data.image}`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    category: "Business",
  };
}

export default async function ProductDetailPage({ params }) {
  try {
    // Menjalankan beberapa request secara paralel
    const [allProductsRes, siteRes, registerFormRes] = await Promise.all([
      fetch(`${BASE_URL}/api/product`, { cache: "no-store" }),
      fetch(`${BASE_URL}/api/siteidentity`, { cache: "no-store" }),
      fetch(`${BASE_URL}/api/registerform`, { cache: "no-store" }),
    ]);

    // Cek apakah semua request berhasil
    if (!allProductsRes.ok) {
      const error = await allProductsRes.text();
      return (
        <div>
          Produk tidak ditemukan. {`${BASE_URL}/api/product`} Error: {error}
        </div>
      );
    }
    if (!siteRes.ok) return <div>Gagal mengambil info situs.</div>;
    if (!registerFormRes.ok) return <div>Gagal mengambil data form pendaftaran.</div>;

    // Mengambil data produk dari API
    const allProducts = await allProductsRes.json();

    // Log untuk memeriksa tipe data dan struktur allProducts
    console.log("allProducts:", allProducts);

    // Pastikan allProducts adalah array sebelum menggunakan find
    if (!Array.isArray(allProducts)) {
      return <div>Data produk tidak valid. Harap coba lagi nanti.</div>;
    }

    // Cari produk berdasarkan slug
    const data = allProducts.find((product) => product.slug === params.slug);

    // Jika produk tidak ditemukan
    if (!data) {
      return <div>Produk dengan slug {params.slug} tidak ditemukan.</div>;
    }

    // Mengambil data untuk site dan form pendaftaran
    const site = await siteRes.json();
    const registerForm = await registerFormRes.json();

    // Membuat URL untuk halaman produk saat ini
    const currentUrl = `${BASE_URL}/services/package/${params.slug}`;

    // Mengembalikan tampilan halaman produk dengan data yang ditemukan
    return (
      <HeaderFooterSqlite siteName={site.siteName} footerText={site.phone}>
        <div>
          <HeroPackage img={data.image} imageAlt={data.name} listItem={data.gallery} />
          <HeaderPackage title={data.name} quality={data.quality} price={data.price} categoryTitle={data.category.name} />
        </div>
        <div className="sm:px-13 px-5 lg:w-2/3 w-full mx-auto">
          <FormPackage
            listItem={registerForm.registerForms}
            serviceName={data.name}
            servicePrice={data.price}
            serviceCategory={data.category.name}
            sku={data.sku}
            waNumber={site.phone}
            serviceUrl={currentUrl}
            baseUrl={BASE_URL}
            siteName={site.siteName}
            siteLogo={site.siteLogoUrl}
            siteLogoAlt={site.siteName}
          />
        </div>
      </HeaderFooterSqlite>
    );
  } catch (error) {
    // Tangani kesalahan secara global
    console.error("Terjadi kesalahan saat mengambil data:", error);
    return <div>Terjadi kesalahan, harap coba lagi nanti.</div>;
  }
}
