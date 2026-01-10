# 🧭 Spesifikasi: ExalviaNavbar

Komponen Navigasi Utama yang bersifat interaktif dan responsif, berfungsi sebagai pusat kendali navigasi pengguna dengan indikator posisi section yang cerdas.

**Implementasi:** [ExalviaNavbar.js](../../sections/ExalviaNavbar.js)

---

## 🏗️ Perilaku Layout (Layout Behavior)

- **Posisi:** Wajib **Sticky/Fixed** di bagian atas layar (`top-0`).
- **Rounding:** Memiliki efek `rounded-bl-4xl` untuk estetika arsitektural.
- **Transisi Latar Belakang & Warna:**
  - **Kondisi Awal (Top of Page):** Latar belakang **Transparan** (`bg-transparent`), padding luas (`py-8`), dan teks/ikon berwarna **Putih** (`text-white`).
  - **Kondisi Scroll:** Latar belakang berubah menjadi warna **Brand Primary** (`bg-primary`), padding merapat (`py-5`), dengan bayangan halus (`shadow-md`). **Dilarang menggunakan efek blur.**
- **Z-Index:** Menggunakan `z-10` untuk memastikan navigasi selalu berada di atas konten section.

---

## 🍱 Struktur Konten (Navbar Structure)

Navbar dibagi menjadi 3 area utama dengan lebar kontainer `lg:w-10/12 sm:w-11/12`:

### 1. Kolom Kiri: Identitas Brand (Flex-1)

- **Logo:** Image dari `data.logo`.
- **Brand Name:** Font `Instrument Serif`, warna Putih.
- **Fungsi:** Klik memicu `scrollToSection('hero')`.

### 2. Kolom Tengah: Navigasi Cerdas (Flex-none)

- **Active Tracking:** Menggunakan logika `IntersectionObserver` atau `scroll listener` untuk melacak section yang sedang aktif.
- **Visual Feedback:** Menu yang aktif akan berubah warna menjadi **Emas** (`text-warning`) dengan opacity 100%. Menu non-aktif tetap Putih dengan opacity 80%.
- **Smooth Scroll:** Setiap link (`#link`) memiliki fungsi pindah halaman yang halus dengan offset kompensasi tinggi navbar.

### 3. Kolom Kanan: Utilitas (Flex-1)

- **Theme Switcher:** Ikon `MdOutlineLightMode` / `MdOutlineDarkMode` dalam ukuran besar (size 30).
- **Mobile Menu Toggle:** Ikon hamburger yang muncul hanya pada layar kecil.

---

## 📱 Responsivitas Mobile

- **Drawer Menu:** Menggunakan tampilan layer penuh (`fixed inset-0`) dengan transisi geser.
- **Brand Profile:** Di dalam menu mobile, tampilkan Logo dan Nama Brand secara vertikal sebagai identitas.
- **Active Highlight:** Menu mobile juga mendukung indikator `text-warning` untuk section yang sedang aktif.

---

## 🛠️ Instruksi Teknis untuk AI

1.  **State Management:**
    - `scrolled`: Boolean untuk memicu perubahan warna background.
    - `activeSection`: String ID section yang sedang berada di viewport.
    - `isOpen`: Boolean untuk mengontrol drawer mobile.
2.  **Tracking Logic:** Implementasikan loop di dalam `useEffect` yang membandingkan `window.scrollY` atau `getBoundingClientRect().top` dari setiap ID section untuk menentukan `activeSection`.
3.  **Smooth Scrolling:** Gunakan `window.scrollTo` dengan `behavior: "smooth"` dan kurangi `offset` (sekitar 80px) agar judul section tidak tertutup navbar.

---

## 📸 Referensi Visual

![inspirasi layout landing page exalvia](../../assets/referensi-layout_ExcalviaNavbar.jpg)
