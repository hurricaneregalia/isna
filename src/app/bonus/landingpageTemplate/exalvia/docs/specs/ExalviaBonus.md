# 🎁 Spesifikasi: ExalviaBonus

Section penawaran tambahan atau bonus eksklusif yang dirancang untuk mempercepat keputusan pembelian melalui insentif nilai tambah dan urgensi (Countdown).

**Implementasi:** [ExalviaBonus.js](../../sections/ExalviaBonus.js)

---

## 🏗️ Tata Letak & Perilaku (Layout & Behavior)

- **Structure:** Terbagi menjadi dua area utama:
  1. **Bonus Grid:** Menampilkan daftar item bonus.
  2. **Urgency Banner:** Area gelap berisi headline penutup, countdown, dan tombol CTA.
- **Container Size:** `lg:w-10/12 sm:w-11/12 w-full mx-auto`.
- **Architectural Style:**
  - Padding luas: `py-20 md:py-32`.
  - Banner bawah menggunakan `rounded-bl-4xl` dan background gelap.

---

## 🍱 Struktur Konten (Bonus Section Structure)

Data diambil dari objek `bonus` di `ExalviaDatabase.js`:

### 1. Bonus Item Card

- **Layout:** Row-based (Image di kiri/atas, Konten di kanan).
- **Visual:** Foto/Mockup bonus (`data.items[].image`) dengan ikon ceklis hijau sebagai penanda hak akses.
- **Details:**
  - **Pricing:** Harga asli yang dicoret (_strikethrough_) di pojok kanan atas untuk menunjukkan "Value" yang didapat secara gratis.
  - **Title & Description:** Penjelasan singkat mengenai isi bonus tersebut.
- **Styling:** `ExalviaCard` dengan shadow yang sangat tipis.

### 2. Urgency Action Area

- **Headline:** Judul penutup yang mendesak (misal: "Dapatkan Bonus Eksklusif Anda Sekarang!").
- **Countdown Timer:**
  - Komponen dinamis yang menghitung mundur: Hari, Jam, Menit, Detik.
  - Visual: Kotak-kotak berwarna kontras (misal: merah studio atau brand color).
- **CTA Button:** Tombol solid besar (`btn-warning`) sebagai instruksi final.

---

## 🛠️ Instruksi Teknis untuk AI

1.  **Countdown Logic:** Implementasikan logika `useEffect` di React untuk menghitung mundur waktu dari target date di database.
2.  **Visual Hierarchy:** Gunakan layout grid 2-kolom pada desktop untuk Bonus Items agar layar tidak terasa terlalu panjang.
3.  **No Blur Policy:** Gunakan solid contrast untuk box countdown. Jangan gunakan blur.
4.  **Database Binding:** Hubungkan semua item bonus, harga coret, dan target waktu countdown ke database.

---

## 📸 Referensi Visual

![referensi layout bonus](../../assets/referensi-layout_ExcalviaBonus.jpg)
