# 📜 Spesifikasi: ExalviaHadist

Section ini adalah "Jantung Spiritual" dari landing page, menyajikan pesan sakral dalam sebuah bingkai arsitektural yang megah, memberikan jeda perenungan yang elegan bagi pengunjung.

**Implementasi:** [ExalviaHadist.js](../../sections/ExalviaHadist.js)

---

## 🏗️ Tata Letak & Perilaku (Layout & Behavior)

- **Layout Concept:** "The Wisdom Portal"
- **Grid System:** 2-Kolom kiri dan kanan.
- **Container Size:** `lg:w-10/12 w-full mx-auto`.
- **Architectural Style:**
  - Konten dibungkus dalam sebuah kontainer

---

## 🍱 Struktur Konten (Hadist Section Structure)

Data diambil dari objek `hadist` di `ExalviaDatabase.js`:

### 1. Dekorasi Portal (Visual Backdrop)

- **Background Pattern:**
  - Section pattern khas arab.

### 2. Area Pesan (The Core)

- **Label:** Teks "PESAN HIKMAH" di bagian paling atas dengan kelas `ExalviaBadge` atau teks uppercase dengan tracking sangat lebar.
- **Arabic Text:**
  - Teks Arab (`data.arabic`) diletakkan kolom kanan.
  - Ukuran: Sangat besar (`text-4xl md:text-6xl`).
  - Gaya: Gunakan `leading-loose` agar harakat tidak berhimpitan.
- **Gold Divider:** Sebuah garis pendek horizontal menggunakan warna `warning` sebagai pemisah antara teks Arab dan terjemahan.
- **Indonesian Translation:**
  - Teks: `data.translation`.
  - Gaya: Tipografi `Instrument Serif` (untuk kesan klasik) atau `Montserrat` italic yang bersih.
  - Ukuran: `text-xl md:text-2xl`.

### 3. Footer Portal (Source)

- **Author/Source:** Teks `data.source` & `data.context`.
- **Styling:** Diletakkan sebagai footer yang rapi, mungkin dengan aksen tanda kutip penutup yang artistik di belakangnya.

### Kolom kiri

- berisi icon double quotes yang besar.

---

## 🛠️ Instruksi Teknis untuk AI

1.  **Portal Framing:** Jangan gunakan `bg-base-200` pada seluruh section. Gunakan `bg-base-100` untuk section luar, dan buat `div` portal di dalamnya dengan `bg-neutral` atau warna gelap lainnya.
2.  **Shadow & Contrast:** Tambahkan `shadow-2xl` pada portal untuk memberikan efek kedalaman.
3.  **Typography Focus:** Teks Arab harus menjadi elemen paling dominan secara visual.
4.  **No Blur Policy:** Gunakan garis tajam dan kontras warna untuk memisahkan layer.

---

## 📸 Referensi Visual

![referensi layout hadist](../../assets/referensi-layout_ExcalviaHadist.jpg)
