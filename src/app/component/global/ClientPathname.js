// src/app/component/global/ClientPathname.js
"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientPathname({ children }) {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return children(currentPath);
}
