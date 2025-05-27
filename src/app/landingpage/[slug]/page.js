// src/app/product/[slug]/page.js
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import LandingPageDetail from "@/app/component/landingPage/LandingPageDetail";
import myPrisma from "@/app/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const landingPage = await myPrisma.landingPage.findFirst({
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
