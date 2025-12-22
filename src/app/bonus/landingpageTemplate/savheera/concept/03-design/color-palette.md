# Color Palette — Savheera

Panduan warna ini menjadi acuan utama untuk desain landing page Savheera.  
Tujuannya adalah menjaga **konsistensi visual** dan menekankan karakter brand: elegan, aspiratif, dan berkelas.

---

## 1. Palet Warna Utama

| Nama Warna    | Hex     | Penggunaan Utama                                   |
| ------------- | ------- | -------------------------------------------------- |
| **Ivory**     | #FFFFF0 | Warna netral utama (background, white space)       |
| **Champagne** | #F7E7CE | Warna netral sekunder (section, card, subtle bg)   |
| **Gold**      | #D4AF37 | Warna aksen untuk CTA & highlight penting          |
| **Soft Rose** | #F4C2C2 | Warna sekunder (button sekunder, highlight lembut) |
| **Deep Navy** | #1B1F3B | Warna teks utama dan aksen gelap                   |
| **Info**      | #C7D2E8 | Status info lembut (tidak agresif)                 |
| **Success**   | #CFE3D6 | Status sukses lembut (tidak agresif)               |
| **Warning**   | #F1D8A8 | Status peringatan lembut (tidak agresif)           |
| **Error**     | #E6B8B8 | Status error lembut (tidak agresif)                |

---

## 2. Aturan Intensitas Warna (60–30–10)

- **60%** → Warna netral: Ivory, Champagne  
  _(Background utama, white space, section besar)_
- **30%** → Warna sekunder: Soft Rose, Deep Navy  
  _(Highlight lembut, card, secondary button)_
- **10%** → Warna aksen: Gold  
  _(CTA, ikon penting, elemen menarik perhatian)_

> Gold digunakan **hanya untuk elemen penting**, agar tetap elegan dan tidak berlebihan.

---

## 3. Implementasi Tailwind/DaisyUI Theme

Gunakan tema berikut sebagai satu-satunya implementasi warna Savheera:

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

## 4. Tips Penggunaan Warna

- Gunakan **white space** yang cukup agar warna netral mendominasi.
- **Gold** hanya untuk CTA atau highlight penting.
- Pastikan kontras teks Deep Navy jelas terhadap background netral.
- **Soft Rose** untuk sentuhan lembut, tidak mengurangi kesan elegan.
- Status colors dibuat **soft dan lembut**, agar tidak mengganggu fokus utama.
- Selalu ikuti proporsi **60–30–10** agar tampilan tetap harmonis.

---

## 5. Ringkasan Konsep

Warna Savheera dipilih untuk menekankan:

- **Elegan & Minimalis** → dominasi Ivory & Champagne
- **Fokus & Highlight** → Gold untuk elemen penting
- **Sentuhan Lembut & Inspiratif** → Soft Rose & Deep Navy
- **Status & Feedback UI** → Info, Success, Warning, Error dibuat lembut

Desain warna harus selalu mendukung kesan **tenang, berkelas, dan berkesan**.
