import React from "react";

export default function Title({ text, h = 2, css }) {
  const level = Math.min(Math.max(h, 1), 6); // pastikan antara 1–6
  const Tag = `h${level}`; // ini jadi string: 'h1', 'h2', dst

  return <Tag className={`${css} font-bold capitalize`}>{text}</Tag>; // React bisa pakai tag sebagai string
}
