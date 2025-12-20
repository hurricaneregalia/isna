# 🦶 Spesifikasi: ExalviaFooter

Bagian penutup halaman yang memberikan informasi hak cipta dan tautan akses cepat ke media sosial brand.

**Implementasi:** [ExalviaFooter.js](../../sections/ExalviaFooter.js)

---

## 🏗️ Tata Letak & Perilaku (Layout & Behavior)

- **Layout Style:** Horizontal Bar yang minimalis dan elegan.
- **Background:** Bersih (`bg-base-100`) atau mengikuti warna primer section terakhir.
- **Container Size:** `lg:w-10/12 sm:w-11/12 w-full mx-auto`.
- **Alignment:**
  - **Desktop:** Space Between (Copyright di kiri, Social Icons di kanan).
  - **Mobile:** Rata tengah tumpuk (`flex-col items-center gap-4`).
- **Border:** Terdapat garis pemisah tipis di bagian atas (`border-t border-base-300`).

---

## 🍱 Struktur Konten (Footer Section Structure)

Data diambil dari objek `footer` di `ExalviaDatabase.js`:

1.  **Copyright Area:**
    - Teks hak cipta (misal: "© 2025 Exalvia Copywriting. All rights reserved.").
    - Gaya: Teks kecil, pudar (`opacity-60`), menggunakan font `Montserrat`.
2.  **Social Links Area:**
    - Deretan ikon media sosial (Instagram, X, Facebook, LinkedIn, dll).
    - Gaya: Ikon minimalis menggunakan `react-icons`.
    - Hover: Ikon berubah warna menjadi warna brand (`text-primary`) dengan transisi halus.

---

## 🛠️ Instruksi Teknis untuk AI

1.  **Responsive Padding:** Gunakan `py-8 md:py-12` agar footer tidak terasa terlalu sesak.
2.  **Atomic Consistency:** Wajib menggunakan kelas tipografi yang sama dengan Body Text (Montserrat).
3.  **No Blur Policy:** Fokus pada kejelasan ikon dan teks.
4.  **Database Binding:** Hubungkan seluruh link sosial dan teks copyright ke database.

---

## 📸 Referensi Visual

![referensi layout footer](../../assets/referensi-layout_ExcalviaFooter.jpg)
