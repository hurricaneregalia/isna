// src/app/landingpage/page.js
import React from "react";
import HeaderFooterSqlite from "../component/global/headerFooterSqlite";
import LandingPage from "../component/landingPage/LandingPage";

export default function Templatepage() {
  return (
    <HeaderFooterSqlite>
      <LandingPage />
    </HeaderFooterSqlite>
  );
}
