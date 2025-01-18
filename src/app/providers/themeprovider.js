"use client";
import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function ThemeProvider({ children }) {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return <div>{children}</div>;
}
