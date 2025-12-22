# Performance: Savheera Jewelry Landing Page

## Tujuan File

File ini menjelaskan panduan optimasi performa untuk landing page Savheera.  
Tujuannya agar halaman cepat dimuat, interaktif, dan tetap elegan tanpa mengorbankan UX.

## Panduan Optimasi

1. **Loading & Bundling**

   - Gunakan **code splitting** untuk section yang besar
   - Minimalkan ukuran bundle JavaScript
   - Gunakan **lazy loading** untuk gambar dan video tanpa mengganggu spacing dan white space (`py-20`, `gap-6`)

2. **Gambar**

   - Gunakan format modern: `webp` atau `avif`
   - Kompres tanpa mengurangi kualitas visual
   - Gunakan ukuran gambar responsif (`srcset`) untuk mobile, tablet, desktop

3. **CSS & Tailwind**

   - Gunakan kelas Tailwind sesuai kebutuhan
   - Hapus kelas yang tidak dipakai untuk mengurangi ukuran CSS
   - Optimalkan penggunaan `transition` dan animasi agar tidak berat

4. **Fonts**

   - Gunakan maksimal 2 font family (serif untuk heading, sans-serif untuk body)
   - Gunakan font-display `swap` untuk mengurangi FOUT
   - Load font hanya sekali, hindari multiple requests

5. **JS & Animasi**

   - Gunakan animasi ringan
   - Hover / transform / fade in menggunakan Tailwind default
   - Fade in saat elemen muncul di viewport menggunakan AOS
   - Hanya gunakan library eksternal jika benar-benar diperlukan

6. **SEO & Accessibility**

   - Struktur heading yang jelas
   - Alt text untuk semua gambar
   - Navigasi dan CTA tetap cepat diakses
   - Pastikan kontras teks jelas terhadap background (Deep Navy vs Ivory/Champagne)

7. **Monitoring**
   - Pantau performa dengan Lighthouse atau Web Vitals
   - Optimalkan LCP, FID, dan CLS
   - Pastikan mobile performance tetap tinggi
