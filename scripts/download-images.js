// scripts/download-images.js

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Konversi __filename dan __dirname untuk ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === DATA GAMBAR ===
const imageUrl = ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];

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
