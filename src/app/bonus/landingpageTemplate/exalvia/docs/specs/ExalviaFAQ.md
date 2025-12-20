# ❓ Spesifikasi: ExalviaFAQ

Section Tanya Jawab (Frequently Asked Questions) untuk menjawab keraguan umum klien dan memperjelas detail layanan sebelum mereka menghubungi Anda.

**Implementasi:** [ExalviaFAQ.js](../../sections/ExalviaFAQ.js)

---

## 🏗️ Tata Letak & Perilaku (Layout & Behavior)

- **Header Section:** Centered Header menggunakan `ExalviaSectionHeader`.
- **FAQ List:**
  - **Layout:** Daftar vertikal (_Single Column_) yang bersih.
  - **Style:** Accordion (Buka-Tutup).
- **Container Size:** `lg:w-8/12 w-full mx-auto`.
- **Architectural Style:**
  - Padding luas: `py-20 md:py-32`.
  - Gunakan `ExalviaCard` sebagai bungkus seluruh daftar FAQ untuk memberikan elevasi atau pemisahan visual.

---

## 🍱 Struktur Konten (FAQ Section Structure)

Data diambil dari objek `faq` di `ExalviaDatabase.js`:

1.  **Support Contact Box:**
    - Info kontak singkat (misal: WhatsApp/Email) di atas daftar accordion sebagai opsi bantuan langsung.
2.  **Accordion Item:**
    - **Header (Question):** Pertanyaan yang sering diajukan. Ikon plus (`FaPlus`) atau chevron di sisi kanan yang berotasi saat dibuka.
    - **Content (Answer):** Jawaban detail yang muncul dengan transisi tinggi (_transition-all duration-500_).
    - **Styling:** Border bawah antar item untuk pemisahan, latar belakang bersih.

---

## 🛠️ Instruksi Teknis untuk AI

1.  **Transition Logic:** Gunakan state `activeId` untuk mengontrol accordion mana yang sedang terbuka.
2.  **Atomic Consistency:** Wajib menggunakan `ExalviaHeadline` dan `ExalviaBodyText` di dalam konten jawaban.
3.  **No Blur Policy:** Fokus pada interaksi klik yang halus dan tipografi yang tajam. Dilarang menggunakan backdrop filter.
4.  **Database Binding:** Hubungkan seluruh daftar pertanyaan dan jawaban ke database.

---

## 📸 Referensi Visual

![referensi layout faq](../../assets/referensi-layout_ExcalviaFAQ.jpg)
