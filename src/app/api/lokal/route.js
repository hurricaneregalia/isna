import path from "path";
import { promises as fs } from "fs"; // Menggunakan fs.promises untuk menangani file secara async

export async function GET(req) {
  try {
    // Tentukan path ke file JSON lokal
    const filePath = path.join(process.cwd(), "src", "app", "database", "isnadb.json");

    // Membaca file JSON secara async
    const fileData = await fs.readFile(filePath, "utf8");

    // Mengubah file JSON menjadi objek JavaScript
    const jsonData = JSON.parse(fileData);

    // Mengirimkan data JSON sebagai respons
    return new Response(JSON.stringify(jsonData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error("Gagal membaca file JSON:", err);
    return new Response("Error membaca file lokal", { status: 500 });
  }
}
