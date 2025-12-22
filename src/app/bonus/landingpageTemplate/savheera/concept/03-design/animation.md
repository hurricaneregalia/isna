# Animation & Interaction: Savheera Landing Page

## Tujuan File

File ini menjelaskan panduan animasi, hover effect, dan interaksi visual untuk landing page.  
AI agent akan menggunakan ini untuk membuat section `.js` dengan animasi yang **elegan, lembut, dan aspiratif** sesuai brand guidelines.

## Prinsip Animasi

1. **Elegan & Minimalis**

   - Animasi hanya untuk meningkatkan pengalaman visual
   - Hindari efek berlebihan atau flashy
   - Fokus pada smoothness dan subtlety

2. **Hover & Interaction**

   - Semua hover menggunakan **kelas default Tailwind**  
     Contoh:
     - Tombol: `hover:scale-105`, `transition-transform`, `duration-300`
     - Card: `hover:shadow-lg`, `transition-shadow`, `duration-300`
     - Link: `hover:text-primary`, `transition-colors`, `duration-300`

3. **Parallax**

   - Efek paralax dapat dibuat menggunakan **Tailwind default**:
     - Gunakan `transform`, `translate-y` dan `transition` untuk gerakan lembut saat scroll
     - Contoh: `translate-y-4`, `lg:translate-y-8`, `transition-transform`

4. **Fade In saat Muncul di Viewport**

   - Gunakan library **AOS** (Animate On Scroll) untuk efek fade in atau slide in
   - Contoh: `data-aos="fade-up"` atau `data-aos="fade-in"`

5. **Consistency**
   - Semua animasi menggunakan timing yang sama (`duration-300`)
   - Gunakan easing yang lembut (`ease-in-out`)
   - Hindari perubahan warna atau ukuran yang drastis

## Contoh Penggunaan

| Elemen          | Animasi / Interaction                     | Implementasi Tailwind / AOS                         |
| --------------- | ----------------------------------------- | --------------------------------------------------- |
| Hero Image      | Fade in dari bawah                        | `data-aos="fade-up"`                                |
| CTA Button      | Scale / slight lift on hover              | `hover:scale-105 transition-transform duration-300` |
| Feature Card    | Slide up / fade in saat scroll ke section | `data-aos="fade-up"` + `transition-transform`       |
| Navigation Menu | Background transparan → solid saat scroll | Tailwind: `transition-colors duration-300`          |
| Footer Links    | Color change on hover                     | `hover:text-primary transition-colors duration-300` |

## Catatan untuk AI Agent

- Gunakan panduan ini sebelum membuat file `.js` untuk section yang membutuhkan animasi
- Animasi harus mendukung **tone lembut dan elegan**
- Jangan menambahkan efek flashy, neon, atau agresif
- Semua interaksi harus **responsif** di desktop, tablet, dan mobile
- Gunakan **Tailwind default** untuk hover, transform, transition, dan parallax
- Gunakan **AOS** untuk fade in / slide in saat elemen muncul di viewport
