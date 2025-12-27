# Konsep Brand Checker

## Overview

Sistem pengecekan kualitas brand yang membantu pengusaha untuk mengevaluasi positioning brand mereka melalui serangkaian pertanyaan terstruktur.

## User Flow

### 1. Halaman Intro (`/brand-checker`)

**Target File:** `src/app/bonus/landingpageTemplate/exalvia/brand-checker/page.js`

**Purpose:** Halaman pengantar yang memberikan gambaran tentang fitur brand checker

**Content:**

- **Hero Section:**

  - Headline: "Cek Kualitas Brand Anda"
  - Subheadline: "Analisis positioning brand dalam 3 menit"
  - Visual: Illustrasi/Icon yang menarik

- **Fitur Highlights:**

  - 17 pertanyaan terstruktur
  - 6 kategori evaluasi
  - Hasil instan dengan rekomendasi
  - Gratis tanpa registrasi

- **Form Input:**

  - Input field: "Nama Brand" (required)
  - Placeholder: "Masukkan nama brand Anda"
  - Validasi: Minimal 3 karakter

- **CTA Button:**
  - Text: "Mulai Cek Brand"
  - Action: Navigate ke `/brand-checker/questions`
  - State: Disabled jika nama brand kosong

**Technical Requirements:**

- State management untuk nama brand
- Form validation
- Smooth navigation ke questions page
- Store brand name di sessionStorage/localStorage

---

### 2. Halaman Questions (`/brand-checker/questions`)

**Target File:** `src/app/bonus/landingpageTemplate/exalvia/brand-checker/questions/page.js`

**Purpose:** Halaman pertanyaan yang menampilkan 17 pertanyaan secara sequential

**Content:**

- **Progress Bar:**

  - Menunjukkan current question (1/17, 2/17, dst)
  - Visual progress indicator
  - Category label untuk pertanyaan saat ini

- **Question Card:**

  - Nomor pertanyaan
  - Teks pertanyaan
  - Category badge
  - Radio buttons untuk pilihan jawaban

- **Answer Options:**
  - 4 pilihan per pertanyaan (A, B, C, D)
  - Radio button styling yang konsisten
  - Hover dan focus states
  - Auto-advance setelah selection

**Interaction Flow:**

1. User memilih jawaban
2. System menyimpan jawaban
3. Auto-advance ke pertanyaan berikutnya (500ms delay)
4. Update progress bar
5. Tidak ada tombol next/back (sesuai requirement)

**Data Source:**

- Questions dari `ExalviaDatabase.js`
- Dynamic rendering berdasarkan data
- State management untuk jawaban

**Technical Requirements:**

- useState untuk current question index
- useState untuk answers array
- useEffect untuk auto-advance
- sessionStorage untuk persist answers
- Smooth transitions antar pertanyaan

---

### 3. Halaman Result (`/brand-checker/result`)

**Target File:** `src/app/bonus/landingpageTemplate/exalvia/brand-checker/result/page.js`

**Purpose:** Halaman hasil evaluasi brand dengan analisis lengkap

**Content:**

- **Completion Message:**

  - Headline: "Cek Brand Selesai!"
  - Brand name yang di-check
  - Timestamp selesai

- **Score Summary:**

  - Total score (0-100)
  - Level classification (Positioning Kacau/Lemah/Cukup Kuat/Kuat)
  - Visual score indicator (progress circle/bar)

- **Category Breakdown:**

  - Performance per kategori (Product Info, Target, Harga, dll)
  - Mini charts atau indicators
  - Highlight areas for improvement

- **Primary CTA:**
  - Button: "Lihat Hasil Lengkap"
  - Action: Navigate ke detailed result page
  - Prominent styling

**Technical Requirements:**

- Calculate final score dari answers (Q1-Q17)
- Apply normalization formula: `(Total Score - 17) / (68 - 17) * 100`
- Determine classification berdasarkan normalized score range
- Generate category breakdowns
- Store results untuk detailed view
- Handle red flag detection untuk specific patterns

---

### 4. Halaman Detailed Result (Optional Enhancement)

**Target File:** `src/app/bonus/landingpageTemplate/exalvia/brand-checker/result/[id]/page.js`

**Purpose:** Analisis mendalam dengan rekomendasi actionable

**Content:**

- **Detailed Score Analysis:**

  - Per-question breakdown
  - Category performance
  - Comparison dengan benchmarks

- **Recommendations:**

  - Action items per kategori
  - Priority improvements
  - Resource links

- **Sharing Options:**
  - Download PDF report
  - Share results
  - Save untuk future reference

---

## Technical Architecture

### State Management

```javascript
// Global state structure
{
  brandName: string,
  currentQuestion: number,
  answers: Array<{
    questionId: number,
    selectedOption: number,
    score: number
  }>,
  isCompleted: boolean,
  result: {
    rawScore: number,        // Total score 17-68
    normalizedScore: number, // Score 0-100 after formula
    classification: string,  // Positioning level
    categoryScores: Object,
    redFlags: Array<string>  // Warning messages
  }
}
```

### Scoring System

#### Basic Rules

- **Total Questions:** 17 (Q1-Q17)
- **Score Range:** 1-4 points per question
- **Raw Score Range:** 17-68 points
- **Final Score:** Normalized to 0-100 scale

#### Normalization Formula

```javascript
normalizedScore = ((rawScore - 17) / (68 - 17)) * 100;
```

#### Classification Levels

| Score Range | Classification                 | Description                                     |
| ----------- | ------------------------------ | ----------------------------------------------- |
| 0-25%       | Positioning Kacau              | Pesan brand tidak fokus, sulit dipahami         |
| 26-50%      | Positioning Lemah              | Arah brand terlihat tapi tidak konsisten        |
| 51-75%      | Positioning Cukup Kuat         | Pesan brand cukup jelas dan mendukung penjualan |
| 76-100%     | Positioning Tajam & Siap Scale | Pesan brand sangat fokus dan siap scale         |

#### Red Flag Detection

System detects specific patterns that require warnings:

- **Q8 = opsi b** (Tidak pernah bertanya & minim penjualan)
- **Q11 = opsi a, b, atau c** (Spesifik masalah penjualan)
- **Q15 = opsi a** (Banyak logo berbeda)
- **Q16 = opsi b atau d** (Tidak ada warna khusus)

**Red Flag Rules:**

- Score calculated normally regardless of red flags
- Warning messages displayed even with high scores
- Red flags indicate specific areas needing attention

### Data Flow

1. **Intro Page:** Set brandName → Navigate to questions
2. **Questions Page:** Collect answers → Auto-advance → Complete → Navigate to result
3. **Result Page:** Calculate scores → Display results → Option untuk detailed view

### Storage Strategy

- **Session Storage:** Temporary data during session
- **Local Storage:** Optional untuk save progress
- **URL State:** Untuk navigation dan sharing

### Responsive Design

- Mobile-first approach
- Touch-friendly radio buttons
- Optimized untuk various screen sizes
- Smooth animations dan transitions

---

## Component Structure

### Shared Components

- `ProgressBar`: Indikator progress
- `QuestionCard`: Template untuk pertanyaan
- `ScoreDisplay`: Visual score representation
- `CategoryBadge`: Badge untuk kategori pertanyaan

### Page Components

- `BrandCheckerIntro`: Halaman pengantar
- `BrandCheckerQuestions`: Halaman pertanyaan
- `BrandCheckerResult`: Halaman hasil
- `BrandCheckerDetailed`: Analisis mendalam (optional)

---

## Implementation Priority

### Phase 1: Core Flow

1. Intro page dengan form
2. Questions page dengan auto-advance
3. Basic result page

### Phase 2: Enhancement

1. Detailed result analysis
2. Progress animations
3. Data persistence

### Phase 3: Advanced Features

1. PDF export
2. Social sharing
3. Benchmarking data

---

## Success Metrics

- **Completion Rate:** % users yang menyelesaikan semua pertanyaan
- **Time to Complete:** Rata-rata waktu untuk menyelesaikan
- **Drop-off Points:** Di mana users abandon
- **Result Engagement:** Interaksi dengan hasil
- **Red Flag Detection Rate:** % users yang mendapatkan peringatan khusus
- **Score Distribution:** Analisis distribusi skor pengguna

---

## Design Considerations

### UX Principles

- **Minimal Friction:** Tidak ada navigasi yang tidak perlu
- **Clear Progress:** User selalu tahu posisi mereka
- **Instant Feedback:** Immediate response pada actions
- **Mobile Optimized:** Touch-friendly dan responsive

### Visual Design

- **Consistent Branding:** Sesuai dengan Exalvia theme
- **Clear Typography:** Readable di semua devices
- **Meaningful Colors:** Untuk progress dan states
- **Smooth Animations:** Professional transitions

### Accessibility

- **Keyboard Navigation:** Full keyboard support
- **Screen Reader Support:** Proper ARIA labels
- **Color Contrast:** WCAG compliant
- **Focus Management:** Logical tab order

---

## System Limitations & Considerations

### Evaluation Scope

- **Focus Area:** Kejelasan dan fokus positioning brand
- **Not Evaluated:** Kreativitas, design aesthetics, technical quality
- **Purpose:** Assess market readiness and positioning clarity

### Data Integrity

- **Fixed Questions:** 17 questions dengan nilai tetap
- **Consistent Scoring:** 1-4 points per answer
- **Standardized Formula:** Normalization ke 0-100 scale
- **Red Flag Logic:** Specific pattern detection

### Interpretation Guidelines

- **High Score (76-100%):** Brand siap untuk scale pemasaran
- **Medium Score (51-75%):** Brand memiliki arah jelas butuh perbaikan
- **Low Score (0-50%):** Brand perlu positioning strategy overhaul
- **Red Flags:** Specific actionable items regardless of overall score
