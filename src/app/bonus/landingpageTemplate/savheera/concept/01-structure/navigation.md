# Navigation: Savheera Landing Page

## Tujuan File

File ini memberikan panduan **konsep navigasi utama** untuk landing page.  
AI agent akan menggunakan ini untuk membuat **komponen navigasi `.js`** yang konsisten dengan brand guidelines.

## Folder Penyimpanan

[ui-components](../../ui-components)

## Struktur Navigasi

### 1. Header Navigation

- **Posisi:** Fixed di atas halaman
- **Elemen:**
  - Logo Savheera di kiri
  - Menu utama di kanan: Hero, Problem, Solution, Feature, Proof, Pricing, CTA, Bonus, Footer
  - Tombol utama (CTA) di kanan paling akhir, menggunakan **accent color**
- **Behavior:**
  - Sticky saat scroll
  - Menu responsive (hamburger menu di mobile)

### 2. Scroll & Anchor Behavior

- Setiap menu mengarah ke **section spesifik** dengan smooth scroll
- Highlight menu aktif sesuai section saat user scroll

### 3. Responsive Design

- Desktop: horizontal menu
- Tablet/Mobile: collapsible hamburger menu
- Tombol CTA tetap menonjol di semua device

### 4. Styling

- gunakan brand guidelines di [brand-guidelines.md](../00-overview/brand-guidelines.md)

## Catatan untuk AI Agent

- Gunakan panduan ini **untuk membuat komponen navigasi `.js`**.
- Navigasi harus **responsif, elegan, dan mudah digunakan**, sesuai brand tone.
- Jangan menambahkan elemen yang tidak ada di panduan ini.
