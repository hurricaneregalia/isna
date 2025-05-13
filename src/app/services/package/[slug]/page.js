import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import React from "react";
import HeroPackage from "./heroPackage";
import HeaderPackage from "./headerPackage";
import FormPackage from "./formPackage";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata(props) {
  const params = await props.params;
  try {
    const allProductsRes = await axios.get(`${BASE_URL}/api/product`);
    const allProducts = allProductsRes.data.data;

    if (!Array.isArray(allProducts)) {
      return {
        title: "Data produk tidak valid",
        description: "Data dari API tidak sesuai format.",
      };
    }

    const filtered = allProducts.filter((product) => product.slug === params.slug);

    if (filtered.length === 0) {
      return {
        title: "Produk tidak ditemukan",
        description: "Produk yang Anda cari tidak tersedia.",
      };
    }

    const data = filtered[0];

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
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data untuk metadata:", error);
    return {
      title: "Terjadi kesalahan",
      description: "Tidak dapat mengambil data produk.",
    };
  }
}

export default async function ProductDetailPage(props) {
  const params = await props.params;
  const currentYear = new Date().getFullYear();

  try {
    // Mengambil data produk, identitas situs, dan formulir pendaftaran
    const [allProductsRes, siteRes, registerFormRes] = await Promise.all([
      axios.get(`${BASE_URL}/api/product`),
      axios.get(`${BASE_URL}/api/siteidentity`),
      axios.get(`${BASE_URL}/api/registerform`),
    ]);

    const allProducts = allProductsRes.data.data;

    if (!Array.isArray(allProducts)) {
      return <div>Data produk tidak valid. Harap coba lagi nanti.</div>;
    }

    const filtered = allProducts.filter((product) => product.slug === params.slug);

    if (filtered.length === 0) {
      return <div>Produk dengan slug "{params.slug}" tidak ditemukan.</div>;
    }

    const data = filtered[0];
    const site = siteRes.data;
    const registerForm = registerFormRes.data;

    const currentUrl = `${BASE_URL}/services/package/${params.slug}`;

    return (
      <>
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
      </>
    );
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data:", error);
    return <div>Terjadi kesalahan, coba beberapa saat lagi.</div>;
  }
}
