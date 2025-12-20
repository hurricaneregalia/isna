# 🏢 Spesifikasi: ExalviaClientLogo

Section ini berfungsi sebagai elemen _Social Proof_ untuk membangun kredibilitas dengan menampilkan deretan logo klien atau partner yang telah bekerja sama.

---

## 🏗️ Tata Letak & Perilaku (Layout & Behavior)

- **Posisi:** Terletak tepat di bawah Hero Section untuk validasi instan.
- **Tampilan:** Sebuah baris horizontal tunggal yang bergerak secara otomatis (Infinite Marquee/Slider).
- **Perilaku Gerak:**
  - Gerakan halus dan terus menerus (Infinite Loop).
  - Kecepatan gerak lambat agar logo tetap mudah diidentifikasi.
  - Berhenti atau melambat saat kursor diarahkan ke area logo (Pause on Hover).
- **Gaya Visual:**
  - Setiap logo berada di dalam kontainer kartu kecil (**Logo Card**).
  - Kartu memiliki border tipis (`border-base-300`) dan latar belakang bersih (`bg-base-100`).
  - Bentuk kartu: Kotak atau persegi panjang dengan rounding halus (`rounded-md`).
- **Efek Visual:**
  - Logo ditampilkan dalam mode **Semi-Transparent** (opacity 50%) atau **Grayscale** secara default.
  - Berubah menjadi warna asli atau opacity 100% saat kursor berada di atas kartu.
  - Saat hover, kartu bisa memberikan elevasi sangat tipis atau border berubah warna (`border-primary/50`).
  - **Larangan:** Jangan gunakan efek blur pada transisi.

---

## 🍱 Struktur Konten (Client Logo Structure)

Data diambil dari objek `clientLogo` di `ExalviaDatabase.js`:

1.  **Judul Pengantar (Optional):**
    - Teks: `data.title` ("Telah Dipercaya Oleh Brand Terkemuka").
    - Gaya: Teks kecil, uppercase, rata tengah (`text-center`), menggunakan font `Montserrat`.
2.  **Slider/Grid Area:**
    - Berisi deretan **Logo Cards**.
    - Setiap kartu membungkus satu logo klien dengan padding yang proporsional.
    - Gunakan komponen `next/image` untuk setiap logo melalui `ExalviaImage` atau wrapper kustom yang dioptimalkan.

---

## 🛠️ Instruksi Teknis untuk AI

1.  **Data Binding:** Map array `data.logos` untuk menghasilkan elemen-elemen logo.
2.  **Marquee Implementation:**
    - Gunakan teknik CSS Animation (`@keyframes`) untuk membuat gerakan geser yang lancar.
    - Gandakan array logo (duplikasi) di dalam DOM untuk memastikan tidak ada celah kosong dalam _infinite loop_.
3.  **Responsive:**
    - **Desktop:** Tampilkan 5-6 logo secara sekaligus dalam satu viewport.
    - **Mobile:** Tampilkan 2-3 logo sekaligus dengan kecepatan gerak yang disesuaikan.
4.  **Styling:**
    - Pastikan semua logo memiliki tinggi yang seragam (misal: `h-10` atau `h-12`) dengan lebar otomatis (`object-contain`).
    - Gunakan filter CSS `grayscale(100%) brightness(150%)` untuk kesan premium yang menyatu, lalu kembalikan ke `grayscale(0%)` saat hover.

---

## 📸 Referensi Visual

![referensi layout client logo](../../assets/referensi-layout_ExcalviaClientLogo.jpg)
