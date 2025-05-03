import React from "react";

export default function Footer({ footerText, siteName, bg }) {
  const bgFx = bg ? bg : "bg-base-300";
  return (
    <footer className={`${bgFx} py-4 mt-auto text-center`}>
      &copy; {footerText} {siteName} - All rights reserved.
    </footer>
  );
}
