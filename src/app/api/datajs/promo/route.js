import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/app/api/datajs/promo/data.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return Response.json(data?.[0] || {});
  } catch (e) {
    console.error("API Error:", e.message);
    return new Response("Error loading promo data", { status: 500 });
  }
}
