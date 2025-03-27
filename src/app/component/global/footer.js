import React from "react";

export default function Footer({ footerText, siteName }) {
  return (
    <footer className="bg-base-200 text-base-content py-4 mt-auto text-center">
      {footerText} {siteName} - All rights reserved.
    </footer>
  );
}
