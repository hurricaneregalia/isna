"use client";
import Footer from "./component/global/footer";
import Content from "./component/global/content";
import Header from "./component/global/header";
import { useEffect, useState } from "react";
import { fetchSiteIdentity } from "./firebase/dataSiteIdentity";
import { getAuth } from "firebase/auth";
import HeaderFooter from "./component/global/headerFooter";

export default function Home() {
  return (
    <HeaderFooter>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Content />
      </main>
    </HeaderFooter>
  );
}
