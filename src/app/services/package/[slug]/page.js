import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import React from "react";
import HeroPackage from "./heroPackage";
import HeaderPackage from "./headerPackage";
import FormPackage from "./formPackage";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(`${BASE_URL}/api/product`, { cache: "no-store" });
    const response = await res.json();
    const allProducts = response.data;

    if (!Array.isArray(allProducts)) {
      throw new Error("Data produk tidak valid");
    }

    const product = allProducts.find((p) => p.slug === params.slug);

    if (!product) {
      return {
        title: "Produk tidak ditemukan",
        description: "Produk yang Anda cari tidak tersedia.",
      };
    }

    return {
      title: product.name,
      description: product.description,
      keywords: Array.isArray(product.keywords) ? product.keywords.join(", ") : "",
      authors: [{ name: product.name }],
      applicationName: product.name,
      generator: "Next.js",
      metadataBase: new URL(BASE_URL),
      alternates: { canonical: BASE_URL },
      openGraph: {
        title: product.name,
        description: product.description,
        url: BASE_URL,
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
        description: product.description,
        creator: product.name,
        images: [`${BASE_URL}${product.image}`],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
      },
      category: "Business",
    };
  } catch (error) {
    console.error("❌ generateMetadata error:", error);
    return {
      title: "Kesalahan Data",
      description: "Tidak dapat menghasilkan metadata.",
    };
  }
}

export default async function ProductDetailPage({ params }) {
  const currentYear = new Date().getFullYear();

  try {
    // 👉 Ambil data satu per satu (tidak paralel)
    const allProductsRes = await fetch(`${BASE_URL}/api/product`, { cache: "no-store" });
    const siteRes = await fetch(`${BASE_URL}/api/internal/siteidentity`, { cache: "no-store" });
    const registerFormRes = await fetch(`${BASE_URL}/api/registerform`, { cache: "no-store" });

    if (!allProductsRes.ok || !siteRes.ok || !registerFormRes.ok) {
      return <div>Terjadi kesalahan saat mengambil data.</div>;
    }

    const response = await allProductsRes.json();
    const allProducts = response.data;

    if (!Array.isArray(allProducts)) {
      return <div>Data produk tidak valid. Harap coba lagi nanti.</div>;
    }

    const data = allProducts.find((product) => product.slug === params.slug);

    if (!data) {
      return <div>Produk dengan slug "{params.slug}" tidak ditemukan.</div>;
    }

    const site = await siteRes.json();
    const registerForm = await registerFormRes.json();
    const currentUrl = `${BASE_URL}/services/package/${params.slug}`;

    return (
      <HeaderFooterSqlite siteName={site.siteName} footerText={currentYear}>
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
    console.error("❌ Terjadi kesalahan saat mengambil data:", error);
    return <div>Terjadi kesalahan, coba beberapa saat lagi.</div>;
  }
}
