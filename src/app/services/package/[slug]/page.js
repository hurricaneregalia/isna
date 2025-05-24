// src/app/services/package/[slug]/page.js
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import React from "react";
import HeroPackage from "./heroPackage";
import HeaderPackage from "./headerPackage";
import FormPackage from "./formPackage";
import myPrisma from "@/app/lib/myPrisma";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// ✅ Fungsi Metadata dinamis (Next.js 15: params harus di-await)
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const product = await myPrisma.product.findUnique({
      where: { slug },
    });

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
  } catch (err) {
    console.error("Gagal membuat metadata:", err);
    return {
      title: "Terjadi kesalahan",
      description: "Tidak dapat mengambil metadata produk.",
    };
  }
}

// ✅ Halaman produk detail
export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const currentYear = new Date().getFullYear();

  try {
    const product = await myPrisma.product.findUnique({
      where: { slug },
      include: {
        category: true,
        gallery: true,
      },
    });

    if (!product) {
      return <div>Produk dengan slug "{slug}" tidak ditemukan.</div>;
    }

    const site = await myPrisma.siteIdentity.findFirst();

    const registerForm = await myPrisma.registerForm.findMany({
      where: { isActive: true },
      orderBy: { position: "asc" },
    });

    const currentUrl = `${BASE_URL}/services/package/${slug}`;

    return (
      <HeaderFooterSqlite siteName={site.siteName} footerText={currentYear}>
        <div>
          <HeroPackage img={product.image} imageAlt={product.name} listItem={product.gallery} />
          <HeaderPackage title={product.name} quality={product.quality} price={product.price} categoryTitle={product.category.name} />
        </div>
        <div className="sm:px-13 px-5 lg:w-2/3 w-full mx-auto">
          <FormPackage
            listItem={registerForm}
            serviceName={product.name}
            servicePrice={product.price}
            serviceCategory={product.category.name}
            sku={product.sku}
            waNumber={site.phone}
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
