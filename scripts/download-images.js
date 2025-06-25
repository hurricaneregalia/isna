// scripts/download-images.js
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === DATA BARU ===
const LANDING_DATA = {
  hero: {
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
  },
  problem: {
    imageUrl: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1304&auto=format&fit=crop",
  },
  solution: {
    gallery: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800&q=80",
    ],
  },
  cta: {
    imageUrl: "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?auto=format&fit=crop&w=1200&q=80",
  },
};

// === EKSTRAK URL ===
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

// === FUNGSI DOWNLOAD ===
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

// === MAIN ===
async function main() {
  const urls = extractUrls(LANDING_DATA);
  console.log(`Ditemukan ${urls.length} URL gambar.`);

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
