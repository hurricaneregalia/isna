import React from "react";

export default function HeadMetaData({ title, description }) {
  return (
    <head>
      <title>huntu</title>
      <meta name="description" content={description} />
    </head>
  );
}
