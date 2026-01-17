function doPost(e) {
  try {
    // 1. Ambil Sheet yang aktif
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 2. Parse data JSON dari request body
    var requestData = JSON.parse(e.postData.contents);

    // 3. Helper function untuk memformat Array menjadi String rapi
    // Contoh: ["a", "b"] -> "1. a\n2. b"
    function formatList(arr) {
      if (!Array.isArray(arr) || arr.length === 0) return "-";
      return arr
        .map(function (item, index) {
          return index + 1 + ". " + item;
        })
        .join("\n");
    }

    // 4. Helper khusus untuk Array Object (Social Media)
    function formatSocialMedia(arr) {
      if (!Array.isArray(arr) || arr.length === 0) return "-";
      return arr
        .map(function (sm) {
          return sm.platform + ": " + sm.username;
        })
        .join("\n");
    }

    // 5. Helper khusus untuk Array Object (Sertifikasi)
    function formatCertifications(arr) {
      if (!Array.isArray(arr) || arr.length === 0) return "-";
      return arr
        .map(function (cert) {
          // Cek jika sertifikat kosong
          if (!cert.name) return "";
          return cert.name + " (" + cert.description + ")";
        })
        .filter(Boolean)
        .join("\n");
    }

    // 6. Helper khusus untuk Array Object (Kompetitor)
    function formatCompetitors(arr) {
      if (!Array.isArray(arr) || arr.length === 0) return "-";
      return arr
        .map(function (comp, i) {
          return "Kompetitor " + (i + 1) + ": " + comp.name + "\n" + "- Produk: " + comp.products + "\n" + "- Kelebihan: " + comp.strengths + "\n" + "- Kekurangan: " + comp.weaknesses;
        })
        .join("\n\n");
    }

    // 7. Susun data baris (Row Data) sesuai urutan kolom header
    var rowData = [
      new Date(), // Timestamp

      // -- IDENTITAS --
      requestData.fullName || "-",
      requestData.role || "-",
      requestData.contactEmail || "-",
      requestData.whatsappNumber || "-",

      // -- PROFIL BISNIS --
      requestData.brandName || "-",
      requestData.businessCategory || "-",
      requestData.yearEstablished || "-",
      requestData.brandOrigin || "-",
      requestData.businessScale || "-",
      requestData.website || "-",
      formatSocialMedia(requestData.socialMedia),

      // -- VISI MISI --
      formatList(requestData.brandVision),
      formatList(requestData.brandMission),
      formatList(requestData.shortTermGoal),
      formatList(requestData.longTermGoal),

      // -- TARGET AUDIENS --
      requestData.targetDescription || "-",
      requestData.targetAgeMin || "-",
      requestData.targetAgeMax || "-",
      requestData.targetGender || "-",
      requestData.targetMaritalStatus || "-",
      requestData.targetReligion || "-",
      requestData.targetEthnicity || "-",
      requestData.targetEducation || "-",
      requestData.targetLanguage || "-",
      requestData.targetLocation || "-",
      requestData.targetEconomy || "-",
      requestData.targetBackground || "-",
      requestData.targetLifestyle || "-",
      requestData.targetProblem || "-",

      // -- DETAIL PRODUK --
      requestData.businessType || "-",
      requestData.productStatus || "-",
      requestData.productName || "-",
      requestData.productVariants || "-",
      requestData.productDescription || "-",
      formatCertifications(requestData.productCertifications),
      requestData.productPriceRange || "-",
      requestData.priceStrategy || "-",
      requestData.priceReasoning || "-",
      requestData.productWarranty || "-",
      requestData.usp || "-",

      // -- IDENTITAS VISUAL --
      requestData.hasLogo || "-",
      requestData.logoMeaning || "-",
      requestData.primaryColor || "-",
      requestData.primaryFont || "-",
      requestData.visualStyle || "-",
      requestData.visualConsistency || "-",

      // -- CUSTOMER EXPERIENCE --
      requestData.mainTouchpoints || "-",
      formatList(requestData.positiveFeedback),
      formatList(requestData.negativeFeedback),

      // -- KOMPETITOR & PASAR --
      formatCompetitors(requestData.competitors),
      requestData.marketOpportunity || "-",

      // -- MASALAH BRAND --
      Array.isArray(requestData.commonProblems) ? requestData.commonProblems.join(", ") : "-",
      requestData.otherProblem || "-",
    ];

    // 8. Simpan ke baris baru paling bawah
    sheet.appendRow(rowData);

    // 9. Return Response Sukses
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Data saved successfully to Google Sheets",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // 10. Return Response Error
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Setup Fungsi Preflight request (CORS)
 * Penting agar browser mengizinkan request dari domain website Anda
 */
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

/**
 * FUNGSI SETUP HEADER
 * Jalankan fungsi ini SEKALI SAJA di editor Apps Script untuk membuat header kolom otomatis.
 * Cara: Pilih 'setupHeaders' di toolbar, lalu klik 'Run'.
 */
function setupHeaders() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Daftar Header Kolom
  var headers = [
    "Timestamp",

    // -- IDENTITAS --
    "Nama Lengkap",
    "Peran",
    "Email Kontak",
    "Nomor WhatsApp",

    // -- PROFIL BISNIS --
    "Nama Brand",
    "Kategori Bisnis",
    "Tahun Berdiri",
    "Asal Brand",
    "Skala Bisnis",
    "Website",
    "Media Sosial",

    // -- VISI MISI --
    "Visi Brand",
    "Misi Brand",
    "Tujuan Jangka Pendek",
    "Tujuan Jangka Panjang",

    // -- TARGET AUDIENS --
    "Deskripsi Target",
    "Usia Minimum",
    "Usia Maksimum",
    "Gender",
    "Status Pernikahan",
    "Agama",
    "Suku / Ras",
    "Pendidikan",
    "Bahasa Utama",
    "Lokasi Target",
    "Tingkat Ekonomi",
    "Latar Belakang / Profesi",
    "Gaya Hidup & Minat",
    "Masalah / Kebutuhan Target",

    // -- DETAIL PRODUK --
    "Jenis Bisnis",
    "Status Produk",
    "Nama Produk Utama",
    "Jumlah Varian",
    "Deskripsi Produk",
    "Sertifikasi",
    "Kisaran Harga",
    "Strategi Harga",
    "Alasan Harga",
    "Garansi / Layanan",
    "USP (Keunikan)",

    // -- IDENTITAS VISUAL --
    "Sudah Punya Logo?",
    "Makna Logo",
    "Warna Utama",
    "Font Utama",
    "Gaya Visual",
    "Konsistensi Visual",

    // -- CUSTOMER EXPERIENCE --
    "Touchpoint Utama",
    "Feedback Positif",
    "Feedback Negatif",

    // -- KOMPETITOR & PASAR --
    "Kompetitor",
    "Peluang Pasar",

    // -- MASALAH BRAND --
    "Masalah Umum",
    "Masalah Lainnya",
  ];

  // Tulis Header ke Baris 1
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Format Header (Bold, Frozen row)
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold");
  headerRange.setBackground("#f3f3f3"); // Abu-abu muda
  sheet.setFrozenRows(1); // Bekukan baris pertama

  Logger.log("Header berhasil dibuat!");
}
