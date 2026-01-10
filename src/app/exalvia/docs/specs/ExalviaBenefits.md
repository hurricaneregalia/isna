# ✨ Spesifikasi: ExalviaBenefits

Section ini merinci keuntungan atau fungsionalitas spesifik yang didapatkan klien, disajikan dalam bentuk kartu yang rapi dan informatif.

**Implementasi:** [ExalviaBenefits.js](../../sections/ExalviaBenefits.js)

---

## 🏗️ Tata Letak & Perilaku (Layout & Behavior)

- **Header Section:** Menggunakan `ExalviaSectionHeader` (Badge + Headline + SubHeadline) dalam posisi rata tengah (_Centered_).
- **Benefits Grid:**
  - **Desktop:** Grid 4-kolom (`grid-cols-4`) atau 3-kolom tergantung jumlah data.
  - **Mobile:** Grid 1 atau 2 kolom.
- **Container Size:** `lg:w-10/12 sm:w-11/12 w-full mx-auto`.
- **Architectural Style:**
  - Padding luas: `py-20 md:py-32`.
  - Spacing antar kartu: `gap-4`.
  - Latar belakang section: Bersih (`bg-base-100`).

---

## 🍱 Struktur Konten (Benefits Section Structure)

Data diambil dari objek `benefits` di `ExalviaDatabase.js`:

### 1. Benefit Card

- **Layout:** Kartu dengan konten minimalis.
- **Top Bar:**
  - **Numbering:** Angka urut (`01`, `02`, dst) di sisi kiri atas dengan warna pudar.
  - **Icon Box:** Menggunakan `ExalviaIconBox` di sisi kanan atas.
- **Main Content:**
  - **Title:** Judul singkat menggunakan font `Montserrat` semi-bold.
  - **Description:** Penjelasan singkat menggunakan `ExalviaBodyText` dengan ukuran lebih kecil.
- **Styling:**
  - Basis: `ExalviaCard`.
  - Hover: Background berubah sedikit lebih terang atau border menjadi lebih tegas (`border-primary/20`).
  - Active: Salah satu kartu bisa memiliki state "Highligthed" (misal: background biru sangat muda).

---

## 🛠️ Instruksi Teknis untuk AI

1.  **Grid Efficiency:** Pastikan kartu tetap terbaca jelas pada layar tablet (Gunakan `md:grid-cols-2`).
2.  **No Blur Policy:** Gunakan solid background atau subtle shadow.
3.  **Atomic Usage:** Wajib menggunakan `ExalviaIconBox`, `ExalviaCard`, dan `ExalviaSectionHeader`.
4.  **Database Binding:** Hubungkan seluruh teks, ikon, dan urutan angka langsung ke database.

---

## 📸 Referensi Visual

![referensi layout benefits](../../assets/referensi-layout_ExcalviaBenefits.jpg)
