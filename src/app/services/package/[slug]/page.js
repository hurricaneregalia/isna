// src/app/services/package/[slug]/page.js
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import React from "react";
import HeroPackage from "./heroPackage";
import HeaderPackage from "./headerPackage";
import FormPackage from "./formPackage";
import fs from "fs/promises";
import path from "path";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Utility untuk baca file JSON
async function readJsonFile(filePath) {
  const data = await fs.readFile(path.join(process.cwd(), filePath), "utf-8");
  return JSON.parse(data);
}

// Fungsi Metadata dinamis
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const products = await readJsonFile("src/app/api/datajs/product/data.json");
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Produk tidak ditemukan",
      description: "Produk ini tidak tersedia.",
    };
  }

  return {
    title: product.name,
    description: product.description ?? "",
    keywords: Array.isArray(product.keywords) ? product.keywords.join(", ") : "",
    openGraph: {
      title: product.name,
      description: product.description ?? "",
      url: `${BASE_URL}/services/package/${slug}`,
      siteName: product.name,
      images: [
        {
          url: `${BASE_URL}${product.image}`,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description ?? "",
      images: [`${BASE_URL}${product.image}`],
    },
  };
}

// Halaman produk detail
export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const currentYear = new Date().getFullYear();

  try {
    const [products, siteData, formData] = await Promise.all([
      readJsonFile("src/app/api/datajs/product/data.json"),
      readJsonFile("src/app/api/datajs/siteIdentity/data.json"),
      readJsonFile("src/app/api/datajs/registerForm/data.json"),
    ]);

    const product = products.find((p) => p.slug === slug);
    const site = siteData?.[0] || {};
    const registerForm = formData?.filter((f) => f.isActive)?.sort((a, b) => a.position - b.position) || [];

    if (!product) {
      return <div>Produk dengan slug "{slug}" tidak ditemukan.</div>;
    }

    const currentUrl = `${BASE_URL}/services/package/${slug}`;

    return (
      <HeaderFooterSqlite siteName={site.siteName} footerText={currentYear}>
        <div>
          <HeroPackage img={product.image} imageAlt={product.name} listItem={product.gallery} />
          <HeaderPackage
            title={product.name}
            quality={product.quality}
            price={product.price}
            categoryTitle={product.category?.name || "Tanpa kategori"}
          />
        </div>
        <div className="sm:px-13 px-5 lg:w-2/3 w-full mx-auto">
          <FormPackage
            listItem={registerForm}
            serviceName={product.name}
            servicePrice={product.price}
            serviceCategory={product.category?.name || ""}
            sku={product.sku}
            waNumber={site.phone || ""}
            serviceUrl={currentUrl}
            baseUrl={BASE_URL}
            siteName={site.siteName}
            siteLogo={site.logoUrl}
            siteLogoAlt={site.siteName}
          />
        </div>
      </HeaderFooterSqlite>
    );
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data:", error);
    return <div>Terjadi kesalahan, coba beberapa saat lagi.</div>;
  }
}
