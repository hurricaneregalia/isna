// src/app/product/[slug]/page.js
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import LandingPageDetail from "@/app/component/landingpage/LandingPageDetail";
import { prisma } from "@/app/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = params;

  const landingPage = await prisma.landingPage.findFirst({
    where: {
      slug,
      isActive: true,
    },
    include: {
      lpFor: true,
      lpContentTypes: true,
      lpDesignStyle: true,
    },
  });

  if (!landingPage) return notFound();

  return (
    <HeaderFooterSqlite>
      <LandingPageDetail landingPage={landingPage} />
    </HeaderFooterSqlite>
  );
}
