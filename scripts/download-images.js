// scripts/download-images.js

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Konversi __filename dan __dirname untuk ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === DATA GAMBAR ===
const imageUrl = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.pexels.com/photos/2309266/pexels-photo-2309266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  "https://plus.unsplash.com/premium_photo-1661883853185-165f5869e6d3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
];

// === FUNGSI DOWNLOAD ===
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Gagal mengakses '${url}' (${res.statusCode})`));
          return;
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
        file.on("error", (err) => {
          fs.unlink(dest, () => reject(err));
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

// === MAIN ===
async function main() {
  const urls = imageUrl;
  console.log(`Ditemukan ${urls.length} URL gambar.`);

  const dir = path.join(__dirname, "images");
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  for (const url of urls) {
    const fileNameWithoutExt = path.basename(url.split("?")[0], path.extname(url.split("?")[0]));
    const finalFileName = `${fileNameWithoutExt}.jpg`;
    const filepath = path.join(dir, finalFileName);

    // Cek apakah file sudah ada
    if (fs.existsSync(filepath)) {
      console.log(`Lewati (sudah ada): ${finalFileName}`);
      continue;
    }

    try {
      console.log(`Downloading: ${url}`);
      await downloadImage(url, filepath);
      console.log(`Selesai simpan: ${finalFileName}`);
    } catch (err) {
      console.error(`Gagal download ${url}: ${err.message}`);
    }
  }

  console.log("✅ Semua download selesai.");
}

main();
//node scripts/download-images.js
