const { PrismaClient } = require("@prisma/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function main() {
  const products = await prisma.product.findMany(); // ganti sesuai modelmu
  fs.writeFileSync("data.json", JSON.stringify(products, null, 2));
  console.log("Data berhasil diekspor ke data.json");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
