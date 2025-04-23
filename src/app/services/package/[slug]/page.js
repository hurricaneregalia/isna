import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import React from "react";
import HeroPackage from "./heroPackage";
import HeaderPackage from "./headerPackage";
import FormPackage from "./formPackage";

const BASE_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL_PROD : process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }) {
  const res = await fetch(`${BASE_URL}/api/product/${params.slug}`);
  const data = await res.json();

  return {
    title: data.name,
    description: data.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const [productRes, siteRes, registerFormRes] = await Promise.all([
    fetch(`${BASE_URL}/api/product/${params.slug}`, { cache: "no-store" }),
    fetch(`${BASE_URL}/api/siteidentity`, { cache: "no-store" }),
    fetch(`${BASE_URL}/api/registerform`, { cache: "no-store" }),
  ]);

  if (!productRes.ok) return <div>Produk tidak ditemukan.</div>;
  if (!siteRes.ok) return <div>Gagal mengambil info situs.</div>;
  if (!registerFormRes.ok) return <div>Gagal mengambil data form pendaftaran.</div>;

  const product = await productRes.json();
  const site = await siteRes.json();
  const registerForm = await registerFormRes.json();
  const currentUrl = `${BASE_URL}/services/package/${params.slug}`;
  return (
    <HeaderFooterSqlite siteName={site.siteName} footerText={site.phone}>
      <div>
        <HeroPackage img={product.image} imageAlt={product.name} listItem={product.gallery} />
        <HeaderPackage title={product.name} quality={product.quality} price={product.price} categoryTitle={product.category.name} />
      </div>
      <div className="sm:px-13 px-5 lg:w-2/3 w-full mx-auto">
        <FormPackage
          listItem={registerForm.registerForms}
          serviceName={product.name}
          servicePrice={product.price}
          serviceCategory={product.category.name}
          sku={product.sku}
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
}
