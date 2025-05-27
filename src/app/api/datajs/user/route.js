import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  const filePath = join(process.cwd(), "src/app/api/datajs/user/data.json");
  const data = await readFile(filePath, "utf-8");
  return new Response(data, {
    headers: { "Content-Type": "application/json" },
  });
}
