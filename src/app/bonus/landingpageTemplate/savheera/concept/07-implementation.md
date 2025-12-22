# Implementation: Savheera Jewelry Landing Page

## Tujuan File

Panduan ini menjelaskan langkah-langkah implementasi UI dan konten untuk landing page Savheera agar konsisten dengan brand guidelines.

## 1. Struktur Proyek

- **Components / Sections**

  - Semua section disimpan di:
    ```
    src/app/bonus/landingpageTemplate/savheera/sections
    ```
  - Penamaan mengikuti format:
    ```
    SavheeraHeroSection.js
    SavheeraProblemSection.js
    ...
    ```
  - Template format skrip untuk file section:

    ```js
    import React from "react";

    export default function NamaTemaNamaKomponen({ data, secId }) {
      return <div id={secId}>NamaTemaNamaKomponen</div>;
    }
    ```

  - Setiap file konsep section di `concept/02-content/*.md` wajib mencantumkan target file implementasi yang akan dibuat, contoh:

    ```md
    **Target file implementasi (akan dibuat):**

    - `src/app/bonus/landingpageTemplate/savheera/sections/SavheeraHeroSection.js`
    ```

  - Format Referensi Wireframe (wajib jika wireframe tersedia)

    - Wireframe disimpan di:
      - `src/app/bonus/landingpageTemplate/savheera/concept/01-structure/wireframe/`
    - Di setiap file konsep section (`concept/02-content/*.md`), tambahkan blok:

      ```md
      **Referensi wireframe layout:**

      ![referensi layout <nama section>](../01-structure/wireframe/wireframe_XX.<section>.jpg)
      ```

    - Contoh (Hero):

      ```md
      **Referensi wireframe layout:**

      ![referensi layout hero](../01-structure/wireframe/wireframe_02.hero.jpg)
      ```

    - Template perintah/prompt yang bisa kamu tulis untuk meminta AI menambahkan wireframe ke file konsep:

      ```text
      Di file src/app/bonus/landingpageTemplate/savheera/concept/02-content/<NAMA_FILE>.md,
      tambahkan gambar referensi wireframe section menggunakan markdown image.

      Alt text: "referensi layout <nama section>"
      Path relatif: ../01-structure/wireframe/<nama_file_wireframe>
      Letakkan tepat di bawah heading "**Referensi wireframe layout:**".
      ```

- **Database / Data**
  - Data statis (produk, testimoni) disimpan di:
    ```
    src/app/bonus/landingpageTemplate/savheera/database/SavheeraDatabase.js
    ```

## 2. Styling

- Gunakan Tailwind CSS + DaisyUI
- Ikuti **color system**: 60% netral, 30% sekunder, 10% aksen
- Gunakan spacing dan white space konsisten (`py-20`, `gap-6`, dll.)
- Border-radius: hanya pada button, card, dan image container

## 3. Animasi & Interaksi

- Hover & transition: gunakan **kelas default Tailwind**
- Fade-in saat elemen muncul di viewport: gunakan **AOS**
- Efek paralaks sederhana bisa menggunakan Tailwind utilities

## 4. Layout

- Gunakan **grid / flex** untuk alignment
- Jaga keseimbangan teks & visual
- Setiap section harus memiliki spacing yang cukup agar layout terasa ringan dan elegan

## 5. Responsiveness

- Pastikan mobile-first
- Navigasi & CTA tetap mudah diakses di layar kecil
- Semua elemen interaktif memiliki ukuran touch target yang memadai

## 6. Accessibility

- Gunakan label pada form dan alt text pada gambar
- Pastikan kontras teks cukup tinggi
- Navigasi dapat diakses dengan keyboard
- Gunakan prinsip WCAG AA

## 7. Testing & Deployment

- Gunakan tools seperti Lighthouse, Axe, atau Web Vitals untuk mengecek performa & aksesibilitas
- Optimalkan gambar dan script
- Pastikan load cepat dan smooth pada semua device

## 8. Pengelolaan Data

Semua data (termasuk teks, URL gambar, dan ikon React) **WAJIB disimpan** dalam satu file terpisah di: `src/app/bonus/landingpageTemplate/savheera/database/SavheeraDatabase.js`

Ini akan membantu dalam menjaga **konsistensi**, memudahkan **pemeliharaan**, dan membuat komponen lebih bersih dan modular.

### Contoh Penggunaan:

- **Teks**: Semua teks dinamis, termasuk tombol dan link, harus diambil dari file `SavheeraDatabase.js`.
- **URL Gambar**: Semua gambar yang digunakan dalam landing page (seperti gambar produk, foto testimonial) harus disimpan sebagai **URL** di file `SavheeraDatabase.js`.
- **Ikon React**: Semua ikon yang digunakan dalam komponen, seperti ikon tombol, harus diimpor dari **React Icons** dan didefinisikan di dalam file `SavheeraDatabase.js`.

### Mengapa ini penting:

- **Meminimalkan hardcode**: Data yang terpisah dari komponen akan menghindari pengulangan dan memudahkan pembaruan.
- **Modularitas**: Memisahkan data dan presentasi membuat kode lebih terstruktur dan mudah diubah.

### Contoh Struktur `SavheeraDatabase.js`:

```js
export const SavheeraDatabase = {
  heroText: "Perhiasan untuk Momen Spesial",
  heroSubtitle: "Keanggunan yang Tak Tertandingi di Setiap Acara",
  productImages: ["/images/product1.jpg", "/images/product2.jpg", "/images/product3.jpg"],
  icons: {
    cartIcon: <FaShoppingCart />,
    heartIcon: <FaHeart />,
  },
  ctaButton: "Beli Sekarang",
  footerText: "© 2025 Savheera Jewelry",
};
```
