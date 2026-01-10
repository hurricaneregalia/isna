"use client";

import React from "react";

export default function ExalviaFooter({ data, secId = "footer" }) {
  if (!data) return null;

  return (
    <footer id={secId} className="py-8 bg-primary text-white/50">
      <div className="lg:w-10/12 sm:w-11/12 w-full mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <p className="text-sm font-montserrat text-center md:text-left">{data.copyright}</p>
        <div className="flex items-center gap-4">
          {data.socials?.map((item, idx) => {
            return (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-circle transition-colors duration-200 text-sm font-montserrat">
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
