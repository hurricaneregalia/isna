// src/app/product/[slug]/page.js
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import LandingPageDetail from "@/app/component/landingpage/LandingPageDetail";
import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const landingPage = await prisma.landingPage.findUnique({
    where: { slug },
    where: {
      slug: slug, // Pastikan slug yang dicari adalah milik landing page yang sesuai
      isActive: true, // Pastikan landing page yang ditemukan aktif
    },
    include: {
      lpFor: true,
      lpContentTypes: true,
      lpDesignStyle: true,
    },
  });

  if (!landingPage) return notFound(); // Menangani kasus jika tidak ada landing page aktif ditemukan

  return (
    <HeaderFooterSqlite>
      <LandingPageDetail landingPage={landingPage} />
    </HeaderFooterSqlite>
  );
}
