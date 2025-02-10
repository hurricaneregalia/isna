"use client";
import { useEffect, useRef, useState } from "react";

export default function LogoEffect({ imageUrl }) {
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const [modifiedImage, setModifiedImage] = useState(null);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set the willReadFrequently attribute to improve performance with frequent getImageData calls
    canvas.willReadFrequently = true;

    img.onload = () => {
      // Set canvas size to image size
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw image to canvas
      ctx.drawImage(img, 0, 0);

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Apply adaptive thresholding to preserve more detail
      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const i = (y * canvas.width + x) * 4;

          const red = data[i]; // Red channel
          const green = data[i + 1]; // Green channel
          const blue = data[i + 2]; // Blue channel

          // Calculate the brightness (luminance) of the pixel
          const brightness = 0.299 * red + 0.587 * green + 0.114 * blue;

          // Apply a threshold for the black color range
          const localThreshold = 50; // Set a threshold for what is considered black

          // If the pixel's brightness is lower than the threshold, it should be black, otherwise white
          let newColor = brightness < localThreshold ? 0 : 255; // Set to black if below threshold, white if above

          // Set the pixel color (black or white)
          data[i] = data[i + 1] = data[i + 2] = newColor;
        }
      }

      // Put modified image data back to canvas
      ctx.putImageData(imageData, 0, 0);

      // Convert the canvas to an image URL
      const modifiedImageURL = canvas.toDataURL();
      setModifiedImage(modifiedImageURL);
    };

    // Handle error loading image
    img.onerror = () => {
      console.error("Image failed to load");
    };
  }, [imageUrl]);

  return (
    <div>
      {/* Hidden image used for manipulation */}
      <img ref={imgRef} src={imageUrl} alt="Logo" style={{ display: "none" }} />

      {/* Display the modified image if it's ready */}
      {modifiedImage ? (
        <img src={modifiedImage} alt="Modified Logo" />
      ) : (
        <p>Loading...</p> // Show a loading text while the image is being manipulated
      )}

      {/* Hidden canvas (optional, can be removed if not needed for debugging) */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}
