// prisma/seed.js

import prisma from "@/app/lib/prisma";

const prisma = new prisma();

async function addSeedData() {
  try {
    const data = [
      { name: "light", description: "Tema terang dan bersih cocok untuk presentasi formal." },
      { name: "dark", description: "Tema gelap dengan tampilan modern dan elegan." },
      { name: "cupcake", description: "Tema manis dengan warna pastel lembut." },
      { name: "bumblebee", description: "Warna kuning-hitam mencolok, seperti lebah." },
      { name: "emerald", description: "Hijau zamrud yang segar dan profesional." },
      { name: "corporate", description: "Tema formal untuk tampilan perusahaan." },
      { name: "synthwave", description: "Tampilan neon retro bergaya 80-an." },
      { name: "retro", description: "Tema dengan nuansa jadul yang klasik." },
      { name: "cyberpunk", description: "Warna neon tajam khas dunia futuristik." },
      { name: "valentine", description: "Tema romantis dengan nuansa pink dan cinta." },
      { name: "halloween", description: "Tema horor dengan warna oranye dan hitam." },
      { name: "garden", description: "Warna hijau alami yang menyegarkan." },
      { name: "forest", description: "Tema hijau tua seperti hutan." },
      { name: "agua", description: "Nuansa biru laut yang menenangkan." },
      { name: "lofi", description: "Tema chill dengan nuansa lembut dan tenang." },
      { name: "pastel", description: "Warna pastel untuk tampilan lembut dan kalem." },
      { name: "fantasy", description: "Tema imajinatif seperti dunia dongeng." },
      { name: "wireframe", description: "Tampilan minimalis seperti kerangka UI." },
      { name: "black", description: "Tema hitam polos untuk tampilan elegan." },
      { name: "luxury", description: "Nuansa emas dan hitam untuk kesan mewah." },
      { name: "dracula", description: "Tema gelap dengan sentuhan ungu misterius." },
      { name: "cmyk", description: "Warna primer printer: cyan, magenta, yellow, black." },
      { name: "autumn", description: "Tema musim gugur dengan nuansa coklat dan jingga." },
      { name: "business", description: "Tema profesional dan bersih untuk bisnis." },
      { name: "acid", description: "Warna-warna tajam dan mencolok seperti neon." },
      { name: "lemonade", description: "Tema cerah dan menyegarkan seperti lemon." },
      { name: "night", description: "Warna gelap seperti malam yang tenang." },
      { name: "coffee", description: "Tema coklat kopi hangat dan santai." },
      { name: "winter", description: "Nuansa putih dan biru seperti musim dingin." },
      { name: "dim", description: "Warna gelap tetapi tidak terlalu tajam." },
      { name: "nord", description: "Tema dingin dari palet warna Nord." },
      { name: "sunset", description: "Warna oranye kemerahan seperti senja." },
      { name: "caramellatte", description: "Warna lembut seperti kopi karamel." },
      { name: "abyss", description: "Nuansa gelap misterius seperti jurang laut." },
      { name: "silk", description: "Warna lembut dan halus seperti kain sutra." },
    ];

    const result = await prisma.theme.createMany({
      data,
      skipDuplicates: true,
    });

    console.log(`${result.count} themes added successfully!`);
  } catch (error) {
    console.error("Error adding themes:", error);
  } finally {
    await prisma.$disconnect();
  }
}

addSeedData();
