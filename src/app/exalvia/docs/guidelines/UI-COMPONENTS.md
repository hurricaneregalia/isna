# ⚙️ Spesifikasi Komponen UI (Atomic Components) - Exalvia

Dokumen ini berisi cetak biru (blueprints) untuk komponen UI kecil yang bersifat reusable. Semua pengembang AI wajib mengikuti struktur ini untuk memastikan konsistensi visual di seluruh landing page.

---

## 🏗️ 1. Tipografi (Typography Elements)

### A. ExalviaHeadline

Gunakan komponen ini untuk semua judul utama atau judul section.

- **Class Dasar:** `font-instrument-serif text-5xl font-semibold leading-tight`
- **Warna:** `text-base-content`

### B. ExalviaSubHeadline

Gunakan untuk teks penjelas di bawah Headline.

- **Class Dasar:** `font-montserrat text-lg md:text-xl opacity-90 font-medium`

### C. ExalviaBodyText

Gunakan untuk konten paragraf umum.

- **Class Dasar:** `font-montserrat text-base md:text-lg leading-relaxed opacity-80`

---

## 🔘 2. Tombol & Link (Buttons & Links)

Keduanya harus memiliki **style visual yang identik** agar konsisten, namun dibedakan secara fungsional kode.

### A. ExalviaButton (Fungsional)

- **Kegunaan:** Untuk trigger aksi javascript (seperti `onClick`, submit form, toggle theme).
- **Tag:** Menggunakan tag `<button>`.
- **Style Dasar (Primary):** DaisyUI `btn` + `btn-warning` + `shadow-none border-none rounded-sm`.
- **Style Dasar (Secondary):** DaisyUI `btn` + `btn-outline` + `rounded-sm`.
- **Props:** `text`, `icon`, `onClick`, `className`, `variant`.
- **Icon Position:** Ikon diletakkan **setelah (kanan)** teks.

### B. ExalviaLinkButton (Navigasi)

- **Kegunaan:** Untuk pindah halaman atau pindah section (Smooth Scroll).
- **Tag:** Menggunakan tag Next.js `<Link>`.
- **Style Dasar:** **WAJIB IDENTIK** dengan `ExalviaButton`.
- **Props:** `text`, `icon`, `href`, `className`, `variant`, `onClick`.
- **Icon Position:** Ikon diletakkan **setelah (kanan)** teks.

### C. Aturan Umum Tombol

- **Ukuran:** Responsif (`btn-md` di mobile, `btn-lg` di desktop).
- **Ikon:** Jika ada, diletakkan lewat props `icon`. Gunakan `react-icons`.
- **Hover:** Transisi harus halus (`transition-all duration-300`).

---

### B. ExalviaBadge

Teks label kecil di atas Headline untuk identitas section.

- **Style:** Uppercase, tracking-widest (jarak huruf lebar).
- **Class Dasar:** `text-xs md:text-sm font-bold text-primary tracking-[0.2em] mb-4 block uppercase`.

### C. ExalviaSectionHeader (Molecular)

Komponen pembungkus judul section.

- **Struktur:** `Badge` + `Headline` + `SubHeadline`.
- **Align:** Bisa `center` atau `left`.

---

## � 3. Komponen Kontainer (Container Components)

### A. ExalviaCard

Pembungkus konten bertipe kartu (Features, Testimonials, dll).

- **Style:** Flat design atau Very Subtle Shadow.
- **Class Dasar:** `bg-base-100 p-6 md:p-8 rounded-xl border border-base-300 transition-all duration-300 hover:border-primary/30 shadow-none`.

### B. ExalviaIconBox

Wadah untuk ikon agar terlihat premium.

- **Style:** Lingkaran atau square rounded.
- **Class Dasar:** `w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg text-2xl`.

#### Konsep Penggunaan Icon (Data-driven)

Konsep icon di template Exalvia adalah **data-driven**: icon disimpan di database sebagai **JSX element** dan dirender langsung di section (tanpa `iconLoader` / mapping string).

- **Sumber icon:** gunakan `react-icons`.
- **Bentuk data icon:** simpan sebagai JSX, contoh:
  ```js
  { title: "Riset Mendalam", description: "...", icon: <FaSearch /> }
  ```
- **Lokasi ideal menyimpan icon:** di `src/app/bonus/landingpageTemplate/exalvia/database/ExalviaDatabase.js` (karena semua konten section ada di sana).

##### Aturan Rendering di Section

Di file section (contoh `ExalviaBenefits.js`) render icon cukup dengan pola berikut:

```jsx
{
  item.icon && <ExalviaIconBox icon={item.icon} />;
}
```

Catatan: `ExalviaIconBox` mendukung prop `icon` berupa **JSX element** (`<FaSearch />`) maupun **component type** (`FaSearch`), tapi standar yang dipakai di database adalah **JSX element**.

### C. ExalviaRating

Menampilkan rating bintang.

- **Style:** Row of stars.
- **Class Dasar:** `flex gap-1 text-warning`.

### D. ExalviaCountDown

Komponen countdown reusable untuk kebutuhan urgency (mis. banner bonus).

- **Lokasi file:** `src/app/bonus/landingpageTemplate/exalvia/ui-components/ExalviaCountDown.js`
- **Props utama:**
  - `target`: tanggal target countdown (string/Date yang bisa diparse oleh `new Date(target)`), contoh: `"2025-12-31T23:59:59Z"`.

#### Konsep (Separation of Concerns)

Logika countdown (timer state + interval) **tidak ditaruh di section**, tapi dipisah menjadi komponen `ExalviaCountDown` agar:

- Section seperti `ExalviaBonus` tetap fokus ke layout + copy.
- Countdown bisa dipakai ulang di section lain tanpa copy-paste `useEffect`/`setInterval`.

#### Contoh pemakaian di section

```jsx
import ExalviaCountDown from "../ui-components/ExalviaCountDown";

<ExalviaCountDown target={data.countdownTarget} />;
```

---

## �🖼️ 4. Media & Visual (Image Wrapper)

### A. ExalviaImage

Wajib menggunakan komponen `next/image` untuk optimasi performa.

- **Struktur:**
  ```javascript
  <div className="relative w-full aspect-video md:aspect-square overflow-hidden rounded-lg shadow-sm">
    <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
  </div>
  ```
- **Larangan:** Dilarang menggunakan tag `<img>` biasa kecuali untuk logo SVG kecil.

---

## 🛡️ 4. Kontainer & Baris (Section Layouts)

### A. Grid Wrapper

Gunakan struktur 2-kolom yang konsisten:

- **Desktop:** `grid grid-cols-2 gap-10 items-center`
- **Mobile:** `flex flex-col gap-8`

---

## 🛠️ Instruksi Implementasi AI

1. **File Location:** Simpan implementasi komponen ini di folder `src/app/bonus/landingpageTemplate/exalvia/ui-components/`.
2. **Naming Convention:** Awali nama file dengan prefix `Exalvia` (Contoh: `ExalviaButton.js`).
3. **Props Binding:** Setiap komponen harus menerima props yang diperlukan (misal: `text`, `src`, `className`).
4. **No Blur:** Sekali lagi, dilarang keras menggunakan class `backdrop-blur` atau properti CSS `blur()`.
