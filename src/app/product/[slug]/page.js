// src/app/product/[slug]/page.js
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/app/lib/prisma";
import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      category: true,
      gallery: true,
      benefits: {
        where: { isActive: true },
        orderBy: { order: "asc" },
        include: { benefit: true },
      },
      benefitPoints: {
        orderBy: { order: "asc" },
      },
    },
  });

  if (!product || product.status !== "ACTIVE") {
    notFound();
  }

  const currentYear = new Date().getFullYear();
  return (
    <HeaderFooterSqlite siteName="test" footerText={currentYear}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gambar utama produk */}
          <div>
            <Image
              src={product.image || product.gallery?.[0]?.imageUrl || "/default-image.jpg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded"
            />
            {/* Galeri tambahan */}
            {product.gallery.length > 1 && (
              <div className="flex space-x-2 mt-4 overflow-x-auto">
                {product.gallery.map((img, i) => (
                  <Image key={i} src={img.imageUrl} alt={`Gallery image ${i + 1}`} width={80} height={80} className="rounded border" />
                ))}
              </div>
            )}
          </div>

          {/* Detail Produk */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600 mt-1">{product.category?.name}</p>
            <p className="text-xl text-primary font-semibold mt-2">Rp{product.price.toLocaleString()}</p>

            <div className="mt-4 prose max-w-none">
              <h2>Deskripsi</h2>
              <p>{product.description || "Tidak ada deskripsi."}</p>
            </div>

            {/* Benefit Points */}
            {product.benefitPoints.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Manfaat Produk</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.benefitPoints.map((point) => (
                    <li key={point.id}>
                      {point.icon && <span className="mr-1">{point.icon}</span>}
                      {point.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefit dari relasi Benefit */}
            {product.benefits.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Fitur Khusus</h3>
                <ul className="space-y-2">
                  {product.benefits.map(({ benefit }) => (
                    <li key={benefit.id} className="flex items-start space-x-2">
                      {benefit.icon && <span>{benefit.icon}</span>}
                      <div>
                        <p className="font-medium">{benefit.title}</p>
                        {benefit.description && <p className="text-sm text-gray-600">{benefit.description}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderFooterSqlite>
  );
}
