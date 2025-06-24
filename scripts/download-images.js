// scripts/download-images.js
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paste data objekmu di sini (atau import dari file lain)
const data = {
  hero: {
    backgroundImage: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
    // ... (saya hanya contohkan bagian ini)
  },
  tentang: {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  galeri: {
    products: [
      { image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77" },
      { image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa" },
      { image: "https://images.unsplash.com/photo-1549289524-06cf883b6e3a" },
      { image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb" },
    ],
  },
  testimoni: {
    reviews: [
      { image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
      { image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e" },
      { image: "https://images.unsplash.com/photo-1560250097-0b93528c311a" },
    ],
  },
  penutup: {
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  },
};

// Fungsi untuk ekstrak semua URL dari object secara rekursif
function extractUrls(obj) {
  let urls = [];

  function recurse(o) {
    if (typeof o === "string") {
      if (o.startsWith("http") && (o.includes(".jpg") || o.includes(".png") || o.includes("images.unsplash.com"))) {
        urls.push(o);
      }
    } else if (Array.isArray(o)) {
      o.forEach((item) => recurse(item));
    } else if (typeof o === "object" && o !== null) {
      Object.values(o).forEach((value) => recurse(value));
    }
  }

  recurse(obj);
  return urls;
}

// Download function using https module
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

async function main() {
  const urls = extractUrls(data);
  console.log(`Ditemukan ${urls.length} URL gambar.`);

  // Buat folder images kalau belum ada
  const dir = "./images";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  for (const url of urls) {
    const baseName = path.basename(url.split("?")[0]);
    const filename = baseName.includes(".") ? baseName : baseName + ".jpg";
    const filepath = path.join(dir, filename);

    try {
      console.log(`Downloading ${url} ...`);
      await downloadImage(url, filepath);
      console.log(`Selesai: ${filename}`);
    } catch (err) {
      console.error(`Error download ${url}:`, err.message);
    }
  }
}

main();
