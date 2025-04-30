import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs"; // Anda perlu menginstal bcrypt: npm install bcryptjs
import prisma from "../database/prisma";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt", // Atau 'database' jika Anda ingin menyimpan sesi di database
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          try {
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) return null;

            const passwordsMatch = await bcrypt.compare(password, user.password);

            if (passwordsMatch) return user;
          } catch (error) {
            console.error("Gagal memverifikasi user:", error);
            return null;
          }
        }

        console.log("Invalid credentials");
        return null;
      },
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  // Konfigurasi tambahan NextAuth lainnya dapat ditambahkan di sini
  // seperti halaman login kustom, callback, dll.
});
