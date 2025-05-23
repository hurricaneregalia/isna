// src/app/myapi/page.js
import React from "react";
import CanvasCursor from "../component/canvasCursor/CanvasCursor";
import Link from "next/link";
import { prisma } from "../lib/prisma";

export default async function MyApi() {
  // Query data directly using Prisma
  let items = [];
  try {
    items = await prisma.apiList.findMany(); // Query API list from database
  } catch (e) {
    console.error("❌ Error fetching data from database:", e.message);
  }

  return (
    <div>
      <main className="min-h-full h-screen notFoundBg">
        <div className="w-full h-full grid place-items-center bg-slate-900/80 px-6 py-24 sm:py-32 lg:px-8">
          <CanvasCursor />
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex gap-2">
              {items.length > 0 ? (
                items.map((item) => (
                  <Link
                    key={item.id}
                    className="list-col-grow capitalize btn shadow-none bg-slate-300 hover:bg-amber-500 border-0 text-slate-500 hover:text-slate-900"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/api/${item.name}`}
                  >
                    {item.name}
                  </Link>
                ))
              ) : (
                <p>Tidak ada data ditemukan</p>
              )}
            </div>
            <Link
              className="px-5 text-sm font-semibold btn shadow-none bg-amber-300 hover:bg-amber-500 border-0 text-slate-900 rounded-full"
              href="/"
            >
              home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
