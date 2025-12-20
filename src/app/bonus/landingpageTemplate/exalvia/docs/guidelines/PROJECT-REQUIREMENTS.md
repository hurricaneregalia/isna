# 📋 Project Requirements - Exalvia

Dokumen ini mendefinisikan standar teknis, kebutuhan fungsional, dan peta jalan pengembangan untuk landing page Exalvia.

---

## 1. Gambaran Umum Proyek (Project Overview)

_Berdasarkan [brief.md](./brief.md)_

- **Apa ini?**
  Landing page yang menjual jasa copywriting dengan fokus pada bahasa promosi persuasif, khusus untuk produk-branded.
- **Untuk siapa?**
  Target audiens adalah Pengusaha Muslim di berbagai sektor (E-commerce, Kosmetik, Fashion, Teknologi, Startup, Luxury Goods, Agensi Pemasaran, Event Organizer, dan Konsultan).
- **Apa tujuannya?**
  Membangun kepercayaan audiens melalui visual Islami yang profesional, menunjukkan kredibilitas teknis, dan mengonversi pengunjung menjadi pelanggan (Membeli layanan atau menjelajahi informasi layanan).

---

## 2. Tumpukan Teknologi (Tech Stack)

| Teknologi        | Tujuan                                                                  |
| :--------------- | :---------------------------------------------------------------------- |
| **Next.js**      | Framework React utama untuk performa (SSG/SSR) dan SEO.                 |
| **Tailwind CSS** | Styling utility-first untuk layout yang cepat dan responsif.            |
| **DaisyUI**      | Library komponen UI untuk elemen interaktif dan sistem tema.            |
| **React Icons**  | Provider ikon (Lucide-React, Font Awesome, dll) untuk kebutuhan visual. |

---

## 3. Ketergantungan (Dependencies)

Daftar paket npm utama yang wajib dikonfigurasi:

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `daisyui`
- `react-icons`

---

## 4. Sistem Desain (Design System)

Semua pedoman visual, aturan warna (DaisyUI focus), dan tipografi merujuk sepenuhnya ke dokumen wajib:
👉 **[STYLE-GUIDE.md](./STYLE-GUIDE.md)**
👉 **[UI-COMPONENTS.md](./UI-COMPONENTS.md)** (Wajib: Blueprints Elemen Atomik)

---

## 5. Bagian Halaman (Page Sections Index)

Daftar section yang menyusun landing page Exalvia beserta tautan spesifikasinya:

| Section          | Deskripsi Singkat                                               | File Spesifikasi                                          |
| :--------------- | :-------------------------------------------------------------- | :-------------------------------------------------------- |
| **Navbar**       | Navigasi sticky dengan sistem perubahan warna latar belakang.   | [ExalviaNavbar.md](../specs/ExalviaNavbar.md)             |
| **Hero**         | Area utama dengan Headline persuasif dan latar belakang visual. | [ExalviaHero.md](../specs/ExalviaHero.md)                 |
| **Client Logo**  | Carousel logo klien dengan efek infinity marquee.               | [ExalviaClientLogo.md](../specs/ExalviaClientLogo.md)     |
| **Fact**         | Presentasi fakta atau data industri dalam layout 2-kolom.       | [ExalviaFact.md](../specs/ExalviaFact.md)                 |
| **Fenomenon**    | Pembahasan masalah/isu yang relevan bagi target audiens.        | [ExalviaFenomenon.md](../specs/ExalviaFenomenon.md)       |
| **Solution**     | Penjelasan solusi copywriting persuasif yang ditawarkan.        | [ExalviaSolution.md](../specs/ExalviaSolution.md)         |
| **Hadist**       | Penguatan kredibilitas Islami dengan format Arab & terjemahan.  | [ExalviaHadist.md](../specs/ExalviaHadist.md)             |
| **Features**     | Daftar fitur layanan dengan ikon visual yang menarik.           | [ExalviaFeatures.md](../specs/ExalviaFeatures.md)         |
| **How It Works** | Langkah-langkah atau alur kerja penggunaan jasa.                | [ExalviaHowItWork.md](../specs/ExalviaHowItWork.md)       |
| **Benefits**     | Nilai tambah dan keuntungan jika menggunakan jasa Exalvia.      | [ExalviaBenefits.md](../specs/ExalviaBenefits.md)         |
| **Service**      | Daftar paket layanan premium dengan indikator promo.            | [ExalviaService.md](../specs/ExalviaService.md)           |
| **Flow**         | Visualisasi alur kerja profesional (step-by-step).              | [ExalviaFlow.md](../specs/ExalviaFlow.md)                 |
| **CTA 1**        | Ajakan bertindak utama untuk konversi cepat.                    | [ExalviaCTA1.md](../specs/ExalviaCTA1.md)                 |
| **Bonus**        | Penawaran bonus tambahan dengan countdown timer.                | [ExalviaBonus.md](../specs/ExalviaBonus.md)               |
| **Testimonials** | Bukti kepuasan pelanggan dengan rating dan foto.                | [ExalviaTestimonials.md](../specs/ExalviaTestimonials.md) |
| **FAQ**          | Jawaban atas pertanyaan umum menggunakan sistem accordion.      | [ExalviaFAQ.md](../specs/ExalviaFAQ.md)                   |
| **Footer**       | Informasi penutup, kontak bisnis, dan link media sosial.        | [ExalviaFooter.md](../specs/ExalviaFooter.md)             |

---

## 6. Manajemen Konten (Content Management)

Wajib mematuhi aturan "Single Source of Truth":

1. **DILARANG KERAS** melakukan hardcode URL gambar, teks judul, deskripsi, atau data list di dalam komponen UI (`sections/` atau `ui-components/`).
2. **SEMUA** aset visual (URL Gambar, Ikon) dan konten tekstual harus didefinisikan di dalam `src/app/bonus/landingpageTemplate/exalvia/database/ExalviaDatabase.js`.
3. Komponen hanya bertugas merender data yang dilewatkan melalui `props`.

---

## 7. Struktur File (Recommended Project Organization)

```text
exalvia/
├── assets/             # Aset visual (gambar, ornamen, pattern).
├── components/         # Komponen UI kecil (Atom/Molecule) yang dapat digunakan kembali.
├── database/           # ExalviaDatabase.js (Single source of truth untuk semua konten).
├── docs/               # Pusat dokumentasi dan spesifikasi.
│   ├── guidelines/     # brief.md, STYLE-GUIDE.md, PROJECT-REQUIREMENTS.md, UI-COMPONENTS.md.
│   └── specs/          # Spesifikasi detail per section (.md files).
├── ui-components/      # Implementasi komponen atomik (Button, Headline, dll).
├── sections/           # Implementasi komponen section (.js files).
└── Exalvia.js         # Komponen Utama (Page Layout).
```
