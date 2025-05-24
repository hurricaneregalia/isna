// src/app/component/global/Product.js
import myPrisma from "@/app/lib/myPrisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Komponen ini adalah Server Component
export default async function Product({ categorySlug, limit }) {
  let products;

  if (categorySlug) {
    // Query produk berdasarkan kategori slug
    products = await myPrisma.product.findMany({
      where: {
        category: {
          slug: categorySlug,
        },
        status: "ACTIVE",
      },
      take: limit,
      include: {
        category: true,
        tags: true,
        gallery: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    // Query semua produk aktif
    products = await myPrisma.product.findMany({
      where: {
        status: "ACTIVE",
      },
      take: limit,
      include: {
        category: true,
        tags: true,
        gallery: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  if (!products.length) {
    return <div>Tidak ada produk ditemukan.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link href={"/product/" + product.slug} key={product.id}>
          <div className="border p-4 rounded shadow">
            <Image
              src={product.image || product.gallery?.[0]?.imageUrl || "/default-image.jpg"}
              width={300}
              height={300}
              alt={product.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-primary font-bold mt-1">Rp{product.price.toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
