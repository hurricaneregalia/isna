# Accessibility: Savheera Landing Page

## Tujuan File

Panduan ini menjelaskan prinsip dan praktik aksesibilitas untuk landing page Savheera.  
Tujuannya agar website tetap elegan, ramah pengguna, dan dapat diakses oleh semua orang.

## Prinsip Aksesibilitas

1. **Kontras Warna**
   - Gunakan kontras tinggi antara teks dan background
     - Contoh: Deep Navy (#1B1F3B) pada background Ivory/Champagne
   - Pastikan CTA tetap terlihat jelas dengan aksen Gold (#D4AF37)
2. **Navigasi & Struktur**

   - Gunakan heading (`h1`–`h6`) secara hierarkis untuk alur konten
   - Pastikan navigasi bisa diakses dengan keyboard
   - Gunakan **skip links** untuk langsung ke section utama

3. **Teks Alternatif**

   - Semua gambar memiliki `alt text` deskriptif
   - Fokus pada pengalaman momen spesial, bukan hanya produk
   - Contoh: `"Kalung emas elegan untuk gala malam"`

4. **Formulir & Interaksi**

   - Label harus jelas untuk setiap input form
   - Gunakan fokus outline default Tailwind agar tetap terlihat saat tabbing
   - Pastikan tombol CTA dapat diakses dengan keyboard dan screen reader

5. **Animasi & Motion**

   - Gunakan animasi ringan
   - Hindari animasi berkedip atau terlalu cepat yang bisa mengganggu pengguna sensitif
   - Gunakan AOS untuk fade-in saat elemen muncul, tetapi tetap lembut

6. **Responsiveness**

   - Pastikan konten tetap terbaca di semua ukuran layar
   - Interaksi seperti hover harus memiliki alternatif untuk touch device
   - Semua spacing (`py-20`, `gap-6`) konsisten agar konten mudah diikuti

7. **Testing**
   - Gunakan tools seperti Lighthouse, Axe, atau WAVE untuk mengecek accessibility
   - Pastikan skor AA atau lebih tinggi
