// src/app/services/package/[slug]/page.js
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import React from "react";
import HeaderPackage from "./headerPackage";
import FormPackage from "./formPackage";
import HeroPackageSingle from "./heroPackageSIngle";
import FacebookPixelServer from "@/app/component/marketingTools/FacebookPixelServer";
import ListBenefitsDetail from "./ListBenefitsDetail";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Fungsi fetch data dari endpoint
async function fetchData(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Gagal mengambil data dari ${endpoint}`);
  }
  return res.json();
}

// ✅ Tambahan: generateStaticParams untuk pre-render halaman berdasarkan slug
export async function generateStaticParams() {
  try {
    const products = await fetchData("/api/datajs/product");
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error("Gagal membuat static params:", error);
    return [];
  }
}

// Fungsi Metadata dinamis
export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const products = await fetchData("/api/datajs/product");
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
  } catch (error) {
    console.error("Gagal membuat metadata:", error);
    return {
      title: "Kesalahan",
      description: "Terjadi kesalahan saat memuat metadata.",
    };
  }
}

// Halaman produk detail
export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const currentYear = new Date().getFullYear();

  try {
    const [products, siteData, formData] = await Promise.all([
      fetchData("/api/datajs/product"),
      fetchData("/api/datajs/siteidentity"),
      fetchData("/api/datajs/registerform"),
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
        <FacebookPixelServer
          eventName="ViewContent"
          customData={{
            content_name: product.name,
            content_ids: [product.sku],
            content_type: "product",
          }}
          testEventCode="TEST46543"
        />
        <div>
          <HeroPackageSingle img={product.image} imageAlt={product.name} listItem={product.gallery}>
            <HeaderPackage
              title={product.name}
              quality={product.quality}
              price={product.price}
              categoryTitle={product.category?.name || "Tanpa kategori"}
              description={product.description}
              bestFor={product.bestFor}
              proccessTime={product.proccessTime}
              listTags={product.tags}
              listItem={product.benefits}
            />
          </HeroPackageSingle>
        </div>
        <div className="lg:w-7/12 w-full mx-auto mt-10">
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
