"use client";
import { useEffect, useRef, useState } from "react";

export default function LogoBackground({ imageUrl }) {
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

      // Draw the image to the canvas first
      ctx.drawImage(img, 0, 0);

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Loop through each pixel and modify it to create the negative effect
      for (let i = 0; i < data.length; i += 4) {
        const red = data[i]; // Red channel
        const green = data[i + 1]; // Green channel
        const blue = data[i + 2]; // Blue channel
        const alpha = data[i + 3]; // Alpha channel (transparency)

        // Check if the pixel is near white and not transparent
        const isWhite = red > 200 && green > 200 && blue > 200;
        const isTransparent = alpha === 0;

        if (isTransparent) {
          // Preserve transparency if the pixel is transparent
          continue;
        }

        if (isWhite) {
          // If the pixel is white (or close to white), change it to blue (bg-blue-500)
          data[i] = 59; // Red channel to blue (bg-blue-500)
          data[i + 1] = 130; // Green channel to blue (bg-blue-500)
          data[i + 2] = 246; // Blue channel to blue (bg-blue-500)
        } else {
          // Otherwise, change color to white (to create the negative effect)
          data[i] = 255; // Red channel to white
          data[i + 1] = 255; // Green channel to white
          data[i + 2] = 255; // Blue channel to white
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
    <div className="flex justify-center">
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
