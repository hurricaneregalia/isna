// src/app/services/package/[slug]/ListTagsDetail.js
import Link from "next/link";
import React from "react";

export default function ListTagsDetail({ listTags }) {
  return (
    <div id="tagsWrapper" className="flex flex-wrap gap-1 w-full overflow-hidden my-5">
      {listTags.map((item, index) => (
        <span
          key={index}
          className="opacity-75 btn btn-sm btn-outline bg-transparent hover:bg-amber-300 shadow-none max-w-full truncate transition-colors duration-300 ease-in-out"
        >
          #{item.slug}
        </span>
      ))}
    </div>
  );
}
