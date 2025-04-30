import { auth } from "@/app/lib/auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
// Fungsi untuk mengambil user dari database berdasarkan email
async function getUser(email) {
  try {
    // Pastikan Prisma Client Anda sudah di-import atau diinisialisasi di sini
    const { prisma } = await import("./lib/prisma"); // Sesuaikan path jika perlu
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
    console.error("Gagal mengambil user:", error);
    return null;
  }
}

export const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;

          // Di sini Anda perlu membandingkan password yang diinput dengan password di database
          // Gunakan library seperti bcrypt untuk melakukan perbandingan yang aman
          // Contoh (asumsi Anda memiliki fungsi comparePassword):
          // const passwordsMatch = await comparePassword(password, user.password);
          const passwordsMatch = password === "password"; // Contoh sederhana, JANGAN GUNAKAN INI DI PRODUKSI!

          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
};
