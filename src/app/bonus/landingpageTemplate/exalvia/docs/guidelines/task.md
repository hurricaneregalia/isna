# 🚀 Daftar Tugas Proyek Exalvia (Project Tasks)

Gunakan dokumen ini untuk melacak progres pembangunan landing page Exalvia.

---

## 🛠️ Fase 1: Persiapan & Fondasi Proyek (Project Setup)

Fase ini fokus pada penyiapan struktur folder dan konfigurasi teknis dasar sesuai dengan [PROJECT-REQUIREMENTS.md](./PROJECT-REQUIREMENTS.md).

- [x] **Restrukturisasi Dokumentasi:** Memindahkan file `.md` ke folder `docs/` dan memisahkan spesifikasi (`specs/`) dari panduan (`guidelines/`).
- [x] **Konfigurasi Tailwind & DaisyUI:** Memastikan tema warna (base & warning) dan font (`Instrument Serif`, `Montserrat`) sudah terpasang.
- [x] **Boilerplate Data:** Menyiapkan struktur objek di `src/app/bonus/landingpageTemplate/exalvia/database/ExalviaDatabase.js`.
- [x] **Main Layout:** Membangun file `Exalvia.js` sebagai kontainer utama yang memanggil semua section.
- [x] **UI Components Development:** Membangun komponen atomik (Button, Headline, Image) di folder `ui-components/` merujuk pada [UI-COMPONENTS.md](./UI-COMPONENTS.md).
- [x] **Inisialisasi Section:** Membuat file `.js` kosong/boilerplate untuk ke-17 section di folder `sections/`.

---

## 🏗️ Fase 2: Pembangunan Komponen Section

Membangun setiap section berdasarkan file spesifikasi di folder `docs/specs/`.
**Catatan Wajib:** Semua pembangunan harus merujuk pada [STYLE-GUIDE.md](./STYLE-GUIDE.md) dan [UI-COMPONENTS.md](./UI-COMPONENTS.md).

### 🟢 Spesifikasi Detail Selesai (Ready to Build)

Section berikut sudah memiliki instruksi AI yang lengkap dan referensi visual yang jelas.

- [x] **Navbar** ([Spesifikasi](../specs/ExalviaNavbar.md))
- [x] **Hero** ([Spesifikasi](../specs/ExalviaHero.md))
- [ ] **General Design Guidelines** ([Spesifikasi](../specs/GeneralDesign.md))

### ⏳ Menunggu Detail Spesifikasi (Draft Only)

Section berikut sudah memiliki file spesifikasi dasar, namun perlu diperdalam (instruksi AI & referensi visual) sebelum mulai dikerjakan.

- [ ] **Client Logo** ([Spesifikasi](../specs/ExalviaClientLogo.md))
- [ ] **Fact** ([Spesifikasi](../specs/ExalviaFact.md))
- [ ] **Fenomenon** ([Spesifikasi](../specs/ExalviaFenomenon.md))
- [ ] **Solution** ([Spesifikasi](../specs/ExalviaSolution.md))
- [ ] **Hadist** ([Spesifikasi](../specs/ExalviaHadist.md))
- [ ] **Features** ([Spesifikasi](../specs/ExalviaFeatures.md))
- [ ] **How It Works** ([Spesifikasi](../specs/ExalviaHowItWork.md))
- [ ] **Benefits** ([Spesifikasi](../specs/ExalviaBenefits.md))
- [ ] **Service** ([Spesifikasi](../specs/ExalviaService.md))
- [ ] **Flow** ([Spesifikasi](../specs/ExalviaFlow.md))
- [ ] **CTA 1** ([Spesifikasi](../specs/ExalviaCTA1.md))
- [ ] **Bonus** ([Spesifikasi](../specs/ExalviaBonus.md))
- [ ] **Testimonials** ([Spesifikasi](../specs/ExalviaTestimonials.md))
- [ ] **FAQ** ([Spesifikasi](../specs/ExalviaFAQ.md))
- [ ] **Footer** ([Spesifikasi](../specs/ExalviaFooter.md))

---

## 🎨 Fase 3: Finishing & Optimalisasi

- [ ] **Smooth Scroll & Navigation:** Memastikan link navbar berfungsi dengan efek scroll yang halus.
- [ ] **Mobile Responsiveness Check:** Peninjauan menyeluruh pada tampilan ponsel dan tablet.
- [ ] **Performance Audit:** Memastikan halaman memuat dengan sangat cepat (blazing fast).
- [ ] **Pembersihan Kode:** Menghapus komentar atau kode yang tidak terpakai.
