# 🎭 Spesifikasi: ExalviaHero

Bagian pertama yang dilihat pengguna (Above the Fold). Dirancang untuk memberikan dampak visual yang kuat dan menyampaikan nilai utama (_Value Proposition_) secara instan.

---

## 🏗️ Tata Letak & Perilaku (Layout & Behavior)

- **Lebar:** `sm:w-10/12 w-full mx-auto rounded-bl-lg`
- **Tinggi:** Minimal **100vh** (satu layar penuh).
- **Posisi Konten:** Rata Kiri, bagian kana dibiarkan kosong karena akan terisi gambar latar belakang.
- **Latar Belakang:** Menggunakan gambar berkualitas tinggi yang mencerminkan profesionalitas dan nuansa Islami.
  - Wajib memiliki _overlay_ gelap atau gradien halus jika teks berada langsung di atas gambar agar keterbacaan tetap terjaga.

---

## 🍱 Struktur Konten (Hero Content)

Diambil dari objek `hero` di `ExalviaDatabase.js`:

1.  **Headline (H1):**
    - Menggunakan font `Instrument Serif`.
    - Ukuran: Skala Headline 1 (Sangat besar & tegas).
    - Teks: Kalimat persuasif utama.
2.  **Subheadline:**
    - Menggunakan font `Montserrat`.
    - Ukuran: Skala Body Text (Lebih kecil dari Headline).
    - Teks: Penjelasan tambahan atau manfaat utama.
3.  **CTA Button Area:**
    - **Primary Button:** Menggunakan kelas `btn-warning`. Label: "Lihat Layanan" atau serupa.
    - **Style:** Sedikit _rounded_ sesuai standar Style Guide.
4.  **Aset Gambar:**
    - Gambar latar belakang atau gambar produk/klien yang menonjol.

---

## 🛠️ Instruksi Teknis untuk AI

1.  **Typography Binding:** Hubungkan `data.headline`, `data.subheadline`, dan `data.buttonLabel` dari database.
2.  **Responsive Design:**
    - **Desktop:** Layout 2-kolom (Teks di kiri, Visual di kanan) atau Full-Background dengan teks di tengah.
    - **Mobile:** Stack vertikal. Headline harus tetap terbaca jelas (atur padding dan ukuran font).
3.  **Performance:** Pastikan gambar menggunakan teknik _lazy loading_ atau dioptimalkan untuk kecepatan akses awal.

---

## 📸 Referensi Visual

### Rencana Tata Letak (Layout Plan)

![referensi layout hero](../../assets/referensi-layout_ExcalviaHero.jpg)
