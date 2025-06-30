"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPageWaLink({ whatsappNumber, whatsappText, linkText, id, className, dataAos }) {
  const pathname = usePathname();
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  const fullUrl = origin + pathname;
  const fullMessage = encodeURIComponent(`${whatsappText}\n\n${fullUrl}`);
  const href = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

  return (
    <Link href={href} rel="noopener noreferrer" id={id} className={className} data-aos={dataAos ? dataAos : null}>
      {linkText}
    </Link>
  );
}
