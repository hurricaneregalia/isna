import React from "react";
import HeaderFooterSqlite from "../component/global/headerFooterSqlite";
import Product from "../component/global/Product";

export default function ProductPage() {
  return (
    <HeaderFooterSqlite>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Product />
      </main>
    </HeaderFooterSqlite>
  );
}
