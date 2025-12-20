# 💡 Spesifikasi: ExalviaSolution

Section ini menyajikan solusi utama yang ditawarkan oleh Exalvia untuk menjawab tantangan dan masalah yang telah dibahas sebelumnya.

**Implementasi:** [ExalviaSolution.js](../../sections/ExalviaSolution.js)

---

## 🏗️ Tata Letak & Perilaku (Layout & Behavior)

- **Grid System:**
  - **Desktop:** Layout 2-kolom (`grid-cols-2`).
  - **Mobile:** Layout tumpuk (`flex-col`).
- **Container Size:** `lg:w-10/12 sm:w-11/12 w-full mx-auto`.
- **Vertical Alignment:** Rata tengah secara vertikal (`items-center`).
- **Architectural Style:**
  - Section ini dapat menggunakan latar belakang gelap atau kontras (`bg-neutral` atau serupa) untuk membedakannya dari section sebelumnya.
  - Padding luas: `py-20 md:py-32`.
  - Gunakan `rounded-bl-4xl` jika section ini memiliki latar belakang yang berbeda.

---

## 🍱 Struktur Konten (Solution Section Structure)

Data diambil dari objek `solution` di `ExalviaDatabase.js`:

### 1. Kolom Kiri: Deskripsi Solusi

- **Badge:** Menggunakan `ExalviaBadge` dengan teks `data.label`.
- **Headline:** Menggunakan `ExalviaHeadline` dengan teks `data.title`.
- **Description:** Menggunakan `ExalviaBodyText` dengan teks `data.description`.
- **Contrast Styling:** Jika latar belakang gelap, pastikan teks menggunakan warna kontras (putih/emas).

### 2. Kolom Kanan: Visual Representasi

- **Framed Image:** Sesuai referensi visual, gambar (`data.image`) ditampilkan di dalam bingkai digital yang elegan (seperti layar tablet atau frame arsitektural yang bersih).
- **Rounding & Border:** Bingkai harus memiliki rounding yang halus dan border tipis yang memberikan kesan premium.
- **Background Accent:** Tambahkan pola garis-garis digital atau sirkuit halus di belakang bingkai gambar untuk memperkuat kesan modern dan profesional.
- **Image Optimization:** Menggunakan `ExalviaImage` untuk penanganan resolusi dan performa.

---

## 🛠️ Instruksi Teknis untuk AI

1.  **High Contrast UI:** Gunakan kombinasi warna yang berani (misal: background gelap dengan teks `warning`) untuk menonjolkan bagian solusi ini.
2.  **Atomic Consistency:** Wajib menggunakan komponen `ExalviaBadge`, `ExalviaHeadline`, dan `ExalviaBodyText`.
3.  **No Blur Policy:** Fokus pada kejelasan visual dan garis-garis tajam. Hindari penggunaan `backdrop-blur`.
4.  **Database Binding:** Seluruh konten (teks dan gambar) wajib dimuat dari properti `solution` di database.

---

## 📸 Referensi Visual

![referensi layout solution](../../assets/referensi-layout_ExcalviaSolution.jpg)
