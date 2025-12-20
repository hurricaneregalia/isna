# ✨ Exalvia Style Guide (Buku Panduan Estetika)

Dokumen ini adalah acuan desain tunggal untuk memastikan konsistensi visual di seluruh landing page Exalvia. Ini adalah **dokumen hidup** yang akan terus diperbarui seiring perkembangan proyek.

---

## 🎨 1. Palet Warna (Color Palette)

Exalvia menggunakan sistem warna bawaan **DaisyUI** untuk memastikan kompatibilitas penuh dengan fitur _theme switcher_.

### Penggunaan Warna:

- **Latar Belakang:** Gunakan kelas `bg-base-100` untuk area utama dan `bg-base-200` atau `bg-base-300` untuk variasi section agar tetap sinkron dengan tema (Light/Dark).
- **CTA Utama (Tombol):** Wajib menggunakan kelas utility `btn-warning` untuk warna emas signature yang adaptif.
- **Teks:** Gunakan warna teks bawaan tema (`text-base-content`) atau `text-primary` untuk penekanan.

---

## ✍️ 2. Tipografi (Typography)

Sistem tipografi Exalvia memadukan kesan klasik (_Serif_) untuk wibawa dan modern (_Sans_) untuk keterbacaan.

### Font Family

- **Headlines (Judul):** `Instrument Serif` (Kesan klasik, tajam, dan prestisius).
- **Body & UI (Konten):** `Montserrat` (Bersih, modern, dan sangat terbaca).

### Skala Tipografi

| Elemen         | Font             | Weight  | Ukuran (Desktop) | Ket.                 |
| :------------- | :--------------- | :------ | :--------------- | :------------------- |
| **Headline 1** | Instrument Serif | 600-700 | 4.5rem (72px)    | Untuk Hero Section   |
| **Headline 2** | Instrument Serif | 600     | 3rem (48px)      | Judul Section        |
| **Headline 3** | Instrument Serif | 500     | 1.875rem (30px)  | Sub-judul/Card Title |
| **Body Text**  | Montserrat       | 400     | 1.125rem (18px)  | Deskripsi umum       |
| **UI/Buttons** | Montserrat       | 600     | 1rem (16px)      | Navigasi & Tombol    |

---

## 🏗️ 3. Pola Komponen (Component Patterns)

### Tombol (CTA Buttons)

- **Style:** DaisyUI `btn`.
- **Primary:** Gunakan `btn-warning`. Tekstur sedikit rounded (bisa `rounded-none` atau `rounded-sm` untuk kesan minimalis arsitektural).
- **Secondary:** Gunakan `btn-outline` atau `btn-ghost` dengan hover yang halus.

### Kartu (Cards) & Wadah (Containers)

- **Border:** Tipis (1px) dengan warna `border-base-300`.
- **Shadow:** Minimalis (`shadow-none` atau `shadow-sm`). Kesan mewah didapat dari kebersihan layout, bukan drop shadow yang berat.
- **Hover State:** Berikan perubahan warna border yang halus (misal ke `primary/30`) atau elevasi sangat tipis.
- **Icon Box:** Gunakan background transparan/semi-transparan dari warna brand (misal: `bg-primary/10`) untuk menonjolkan ikon tanpa terlihat mencolok.

### Badge & Label

- **Caps:** Selalu gunakan Uppercase untuk label section.
- **Letter Spacing:** Gunakan tracking lebar (`tracking-[0.2em]`) untuk kesan arsitektural dan premium.
- **Warna:** Gunakan `text-primary`.

### Section Wrapper

Setiap section harus mengikuti struktur:

```html
<section id="{secId}" className="sm:p-10 p-5">
  <div className="container lg:w-10/12 w-full mx-auto font-montserrat">...</div>
</section>
```

---

## 🪄 4. Efek Visual (Visual Effects)

### 🚫 Kebijakan Efek Visual (Visual Policy)

- **TIDAK ADA EFEK BLUR:** Dilarang menggunakan `backdrop-blur` atau efek blur lainnya karena alasan performa.
- **Navbar Behavior:**
  - Awal: Transparan.
  - Scroll: Berubah secara instan atau halus menjadi warna solid (Hitam atau `bg-base-100`) tanpa efek blur/shadow yang berat.

### Dekorasi Islami

- Gunakan **Subtle Arabic Pattern** sebagai background overlay dengan opacity rendah (2-5%).
- Ornamen Arab diletakkan pada titik fokus tertentu (misal: sekitar foto klien di testimonial atau header section).

---

## 📏 5. Spasi dan Tata Letak (Spacing & Layout)

### Grid System

- **Desktop:** Layout 2-kolom (Side-by-side) untuk konten berpasangan (Teks + Gambar).
- **Mobile/Tablet:** Stack vertikal (1-kolom).
- **Alignment:** Rata tengah (_Vertical Middle_) untuk elemen 2-kolom.

### White Space

- JANGAN takut menggunakan padding yang besar.
- Minimal `py-20` atau `sm:p-10` untuk memberi ruang "bernapas" pada konten (kesan mewah muncul dari kelonggaran tata letak).

### Kebijakan Penggunaan Z-Index (Stacking Rules)

Untuk menjaga konsistensi dan menghindari konflik dengan elemen global (seperti Navbar), penggunaan `z-index` diatur dengan ketat sebagai berikut:

1. **DILARANG** menggunakan `z-index` untuk tujuan global atau pada container utama section (`<section>`).
2. **Pemanfaatan Stacking Context Alami**: Utamakan urutan elemen dalam DOM (elemen yang ditulis terakhir akan berada di atas secara otomatis).
3. **Aturan 3 Lapis (3-Layer Rule)**: Gunakan kelas `z-` pada elemen di dalam komponen **HANYA JIKA** terdapat 3 lapis elemen atau lebih yang saling bertumpuk di area yang sama.
4. **Scope Lokal**: Jika poin 3 terpenuhi, gunakan `z-index` rendah (misal: `z-10`, `z-20`) hanya untuk mengatur urutan tumpukan di dalam lingkup komponen tersebut.

---

---

## 🛠 6. Instruksi Database (ExalviaDatabase.js)

DILARANG melakukan hardcode data berikut di dalam komponen:

- Nama layanan/Produk.
- Isu/Masalah audiens.
- Testimoni.
- Link gambar/ikon.

**Yang boleh didefinisikan secara lokal:**

- Label tombol singkat (misal: "Beli Sekarang", "Konsultasi").
- ID Section (`secId`).

---

## 📜 Catatan Perubahan (Changelog)

| Versi    | Tanggal     | Perubahan                                                                                                     | Oleh           |
| :------- | :---------- | :------------------------------------------------------------------------------------------------------------ | :------------- |
| **1.0**  | 19 Des 2025 | Inisialisasi panduan gaya berdasarkan brief islami premium dan referensi layout.                              | Antigravity AI |
| **1.1**  | 19 Des 2025 | Migrasi sistem warna dari variabel OKLCH kustom ke kelas utility DaisyUI (`btn-warning`, `bg-base-...`).      | Antigravity AI |
| **1.2**  | 20 Des 2025 | Refaktor nama file aset (mengganti spasi dengan tanda hubung `-`) dan pembaruan URL di seluruh dokumen.       | Antigravity AI |
| **1.3**  | 20 Des 2025 | Restrukturisasi folder proyek (memisahkan implementasi `.js` dan dokumentasi `.md` ke folder `docs/`).        | Antigravity AI |
| **1.4**  | 20 Des 2025 | Penghapusan standar efek blur dan glassmorphism demi alasan performa halaman.                                 | Antigravity AI |
| **1.5**  | 20 Des 2025 | Refaktor nama proyek dari "Excalvia" menjadi "Exalvia" (koreksi typo) di seluruh file dan folder.             | Antigravity AI |
| **1.6**  | 20 Des 2025 | Penambahan standar visual untuk Badge, Card, Icon Box, dan Rating dalam sistem komponen atomik.               | Antigravity AI |
| **1.7**  | 20 Des 2025 | Implementasi Navbar & Hero dengan standar arsitektural (rounded corners) dan tracking section aktif.          | Antigravity AI |
| **1.8**  | 20 Des 2025 | Penyelesaian seluruh spesifikasi detail (v2) dan implementasi section Fact dengan elemen floating 3D.         | Antigravity AI |
| **1.9**  | 20 Des 2025 | Penegasan aturan "No Hardcoded Content" (termasuk Image URL) di database dan perbaikan gambar Fact.           | Antigravity AI |
| **1.10** | 20 Des 2025 | Implementasi section Fenomenon dengan layout reversed, floating card, dan aksen signature premium.            | Antigravity AI |
| **1.11** | 20 Des 2025 | Implementasi section Solution dengan tema kontras gelap, pola digital, dan visual framed-image.               | Antigravity AI |
| **1.12** | 20 Des 2025 | Penambahan aturan ketat penggunaan `z-index` (3-Layer Rule & Local Scope Only) untuk mencegah konflik global. | Antigravity AI |
| **1.13** | 20 Des 2025 | Implementasi section Hadist dengan fokus pada tipografi Arab.                                                 | Antigravity AI |
| **1.14** | 20 Des 2025 | Refaktor total Hadist menjadi layout "Wisdom Portal" dengan architectural rounding raksasa.                   | Antigravity AI |
| **1.15** | 20 Des 2025 | Update layout Hadist menjadi 2-kolom (Ikon besar di kiri, Teks Arab di kanan) sesuai spesifikasi terbaru.     | Antigravity AI |
| **1.16** | 20 Des 2025 | Implementasi section Features dengan grid 3-kolom, background image card, gradient overlay, dan hover effect scale. | Antigravity AI |
| **1.17** | 20 Des 2025 | Refaktor ulang section Hadist dengan layout "Wisdom Portal" 2-kolom (icon quotes kiri, teks Arab kanan), portal framing bg-neutral dengan shadow-2xl, dan background pattern arab. | Antigravity AI |
