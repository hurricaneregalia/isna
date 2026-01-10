# 🌪️ Spesifikasi: ExalviaFenomenon

Section ini bertujuan untuk membangkitkan kesadaran audiens terhadap masalah atau fenomena yang mereka hadapi sebelum menawarkan solusi.

**Implementasi:** [ExalviaFenomenon.js](../../sections/ExalviaFenomenon.js)

---

## 🏗️ Tata Letak & Perilaku (Layout & Behavior)

- **Grid System:**
  - **Desktop:** Layout 2-kolom (`grid-cols-2`). Urutan dibalik (**Reversed**): Visual di kiri, Narasi di kanan.
  - **Mobile:** Layout tumpuk (`flex-col`). Visual tetap di atas.
- **Container Size:** `lg:w-10/12 sm:w-11/12 w-full mx-auto`.
- **Vertical Alignment:** Rata tengah secara vertikal (`items-center`).
- **Architectural Style:** Penggunaan padding besar (`py-20 md:py-32`) untuk kesan premium.

---

## 🍱 Struktur Konten (Fenomenon Section Structure)

Data diambil dari objek `fenomenon` di `ExalviaDatabase.js`:

### 1. Kolom Kiri: Visual Komposisi (First on Desktop)

- **Main Image:** Menggunakan `ExalviaImage` dengan data `data.image`.
- **Rounding:** Menggunakan rounding yang kuat (`rounded-2xl` atau kustom arsitektural) agar senada dengan Hero.
- **Visual Accent:** Tambahkan ornamen geometris (seperti bentuk lingkaran bergaris pada referensi) di belakang atau di samping gambar.
- **Floating Info:** Sertakan elemen "info mengambang" di atas gambar (misal: kartu kecil berisi data statistik atau poin masalah) untuk menambah dimensi visual tanpa menggunakan efek blur.

### 2. Kolom Kanan: Narasi Masalah

- **Badge:** Menggunakan `ExalviaBadge` dengan teks `data.label`.
- **Headline:** Menggunakan `ExalviaHeadline` dengan teks `data.title`.
- **Description:** Menggunakan `ExalviaBodyText` dengan teks `data.description`.
- **Signature Accent:** Bisa ditambahkan elemen tipografi halus (seperti nama perancang atau quote singkat) di bagian bawah narasi sesuai referensi visual.

---

## 🛠️ Instruksi Teknis untuk AI

1.  **Layout Reversal:** Gunakan `order-first` atau `flex-row-reverse` pada desktop untuk menempatkan visual di sisi kiri dan teks di sisi kanan.
2.  **Atomic Consistency:** Wajib menggunakan setidaknya 3 komponen atomik (`ExalviaBadge`, `ExalviaHeadline`, `ExalviaBodyText`).
3.  **No Blur Policy:** Gunakan overlay solid, shadow tipis, atau elemen grafis murni untuk detail. Hindari semua bentuk blur.
4.  **Database Binding:** Hubungkan semua elemen (Badge, Judul, Deskripsi, Gambar) langsung ke objek `fenomenon` di database.

---

## 📸 Referensi Visual

![referensi layout fenomenon](../../assets/referensi-layout_ExcalviaFenomenon.jpg)
