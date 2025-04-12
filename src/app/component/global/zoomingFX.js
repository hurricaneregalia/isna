import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ZoomingFX({ children, cssStyle }) {
  return (
    <div className={cssStyle}>
      <Zoom>{children}</Zoom>
    </div>
  );
}
