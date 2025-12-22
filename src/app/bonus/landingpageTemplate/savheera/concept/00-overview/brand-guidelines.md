# Brand Guidelines — Savheera

Landing Page Perhiasan untuk Momen Spesial

---

## 1. Tujuan Dokumen

Dokumen ini menjadi **panduan utama desain, konten, dan implementasi UI** untuk landing page Savheera.  
Semua keputusan visual, layout, warna, tipografi, dan struktur halaman **WAJIB mengikuti panduan ini** agar konsisten dengan karakter brand Savheera: elegan, aspiratif, dan berkelas.

Dokumen ini ditujukan untuk:

- Designer
- Frontend Developer (Tailwind + DaisyUI)
- AI Agent pembuat UI & konten

---

## 2. Brand Identity

- **Nama Brand:** Savheera
- **Kategori:** Perhiasan untuk momen spesial  
  (pernikahan, gala, ulang tahun, acara formal)
- **Nilai Brand:**  
  Elegan · Lembut · Aspiratif · Berkelas · Berkesan

Savheera tidak menjual sekadar perhiasan, tetapi **pengalaman dan emosi momen istimewa**.

---

## 3. Tone & Voice

### Tone

- Lembut
- Elegan
- Inspiratif
- Aspiratif

### Voice

- Membimbing dan menginspirasi
- Tidak hard selling
- Fokus pada makna dan momen

### Kata & Frasa yang Disarankan

> memukau, istimewa, elegan, momen tak terlupakan, berkesan, pilihan sempurna

---

## 4. Prinsip Desain Utama

1. **Elegan & Minimalis** — tidak ramai, tidak dekoratif berlebihan
2. **Konsistensi Visual** — warna, font, spacing seragam
3. **White Space yang Cukup** — memberi “napas” pada konten
4. **Fokus pada Produk & Emosi** — bukan gimmick visual

---

## 5. Sistem Warna (Color System)

### Palet Warna Savheera

- **Ivory:** `#FFFFF0`
- **Champagne:** `#F7E7CE`
- **Gold:** `#D4AF37`
- **Soft Rose:** `#F4C2C2`
- **Deep Navy:** `#1B1F3B`

### Aturan Intensitas Warna (60–30–10)

- **60%** → Warna netral (Ivory, Champagne)
- **30%** → Warna sekunder (Soft Rose, Navy)
- **10%** → Warna aksen (Gold)

Gold **hanya digunakan untuk CTA dan highlight penting**.

---

## 6. Implementasi DaisyUI Theme

Gunakan kelas css dari theme berikut sebagai **satu-satunya theme Savheera**:

```css
@plugin "daisyui/theme" {
  name: "savheera";
  default: false;
  prefersdark: false;
  color-scheme: "light";

  --color-base-100: #fffff0; /* Ivory */
  --color-base-200: #f7e7ce; /* Champagne */
  --color-base-300: #efe0c5; /* Variasi netral ringan */
  --color-base-content: #1b1f3b; /* Deep Navy */

  --color-primary: #d4af37; /* Gold */
  --color-primary-content: #1b1f3b;

  --color-secondary: #f4c2c2; /* Soft Rose */
  --color-secondary-content: #1b1f3b;

  --color-accent: #1b1f3b; /* Deep Navy */
  --color-accent-content: #fffff0;

  --color-neutral: #1b1f3b; /* Deep Navy */
  --color-neutral-content: #fffff0;

  /* ===== Status Colors (dibuat soft, tidak agresif) ===== */
  --color-info: #c7d2e8;
  --color-info-content: #1b1f3b;

  --color-success: #cfe3d6;
  --color-success-content: #1b1f3b;

  --color-warning: #f1d8a8;
  --color-warning-content: #1b1f3b;

  --color-error: #e6b8b8;
  --color-error-content: #1b1f3b;

  --radius-selector: 1rem;
  --radius-field: 1rem;
  --radius-box: 2rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 1;
}
```

## 7. Tipografi

Gunakan **maksimal dua font family** untuk menjaga konsistensi dan kesan elegan.

- **Heading:** Serif elegan  
  (Playfair Display atau Georgia)
- **Body & UI:** Sans-serif modern  
  (Lato atau Open Sans)

### Ukuran Font

- Heading: 32–48px
- Subheading: 24–32px
- Body: 16–18px

Tidak diperbolehkan menambahkan font lain di luar ketentuan ini.

---

## 8. Spacing & White Space (Tailwind CSS)

- Gunakan sistem spacing konsisten (kelipatan 4 atau 8)
- Spacing section utama:
  - `py-20`
  - `py-24`
- Spacing antar elemen:
  - `gap-6`
  - `mb-8`

White space adalah bagian dari desain dan berfungsi menjaga kesan elegan serta keterbacaan konten.

---

## 9. Bentuk & UI Element

- **Border radius**
- elemen UI yang menggunakan border-radius:
  - Button
  - Card
  - Image container

---

## 10. Layout & Grid

- Gunakan grid layout rapi (Tailwind Grid atau Flex)
- Jaga keseimbangan antara teks dan visual
- Alignment konsisten di seluruh halaman
- Hindari penumpukan konten pada satu area

Layout harus terasa ringan dan bernapas.

---

## 11. Struktur Section Landing Page

Urutan section **WAJIB mengikuti alur berikut** untuk menjaga storytelling yang kuat:

1. **Problem**  
   Tantangan memilih perhiasan untuk momen spesial
2. **Solution**  
   Savheera sebagai jawaban elegan
3. **Features**  
   Material, desain, kenyamanan, dan detail perhiasan
4. **Proof**  
   Testimoni, foto acara nyata, dan social proof
5. **Pricing**  
   Informasi harga yang transparan dan rapi
6. **CTA**  
   Ajakan lembut dan elegan (tidak hard selling)
7. **Bonus**  
   Nilai tambah seperti gift box eksklusif atau konsultasi

---

## 12. Icon & Visual Pendukung

- Gunakan **satu gaya icon saja**
- Gunakan satu icon set (Lucide atau Heroicons)
- Ukuran dan stroke icon harus konsisten
- Icon berfungsi sebagai elemen pendukung, bukan fokus utama

---

## 13. Imagery & Interaction

- Foto editorial perhiasan di momen nyata
- Close-up detail material dan finishing
- Animasi ringan dan halus:
  - Hover lembut
  - Transition antar section yang smooth
- Hindari animasi agresif atau flashy

---

## 14. Accessibility & Responsiveness

- Kontras teks harus jelas terhadap background
- Desain mobile-friendly
- Navigasi sederhana dan intuitif
- Elegansi tetap terjaga di semua ukuran layar

---

## 15. Prinsip Akhir

**Savheera adalah tentang keanggunan yang tenang dan berkesan.**

Setiap desain dan konten harus terasa:

> tenang · berkelas · inspiratif · tak lekang oleh waktu
