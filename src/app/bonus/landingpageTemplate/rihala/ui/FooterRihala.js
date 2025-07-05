import React from "react";

export default function FooterRihala() {
  return (
    <footer className="bg-base-200 text-base-content py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4 font-semibold text-lg">Campala Nature Trip</p>
        <p className="text-sm mb-2">Jl. Petualang No.10, Jakarta</p>
        <p className="text-sm mb-2">Email: info@campalanaturetrip.com</p>
        <p className="text-sm mb-4">Telp: +62 812-3456-7890</p>
        <p className="text-xs text-base-content/60">&copy; {new Date().getFullYear()} Campala Nature Trip. All rights reserved.</p>
      </div>
    </footer>
  );
}
