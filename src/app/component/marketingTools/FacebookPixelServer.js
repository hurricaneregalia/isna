// src/app/component/marketingTools/FacebookPixelServer.js
import { cookies, headers } from "next/headers";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

const FACEBOOK_TOKEN = process.env.FB_ACCESS_TOKEN;
const FACEBOOK_PIXEL_ID = process.env.FB_PIXEL_ID;

function sha256(value) {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

/**
 * Kirim event ke Facebook Conversions API
 * @param {string} eventName - Nama event, misal "ViewContent", "Purchase"
 * @param {object} userData - Data user yang di-hash (email, phone, ip, ua)
 * @param {object} customData - Data produk, transaksi dll yang akan dikirim ke Facebook
 * @param {string|null} testEventCode - Kode test event (opsional)
 */
async function sendFacebookCAPI({ eventName = "PageView", userData = {}, customData = {}, testEventCode = null }) {
  if (!FACEBOOK_PIXEL_ID || !FACEBOOK_TOKEN) {
    console.error("❌ FB_PIXEL_ID atau FB_ACCESS_TOKEN belum diset.");
    return;
  }

  const eventId = uuidv4(); // generate event_id unik

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_id: eventId,
        user_data: userData,
        custom_data: customData, // <-- wajib ini supaya data produk dll dikirim
      },
    ],
    access_token: FACEBOOK_TOKEN,
    ...(testEventCode && { test_event_code: testEventCode }),
  };

  console.log("📤 Payload Facebook CAPI yang dikirim:");
  console.log(JSON.stringify(payload, null, 2));

  const res = await fetch(`https://graph.facebook.com/v22.0/${FACEBOOK_PIXEL_ID}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  console.log("📬 Respons dari Facebook:");
  console.log(JSON.stringify(result, null, 2));
}

/**
 * Komponen server yang memanggil FacebookPixel API
 */
export default async function FacebookPixelServer({ eventName = "PageView", testEventCode = null, customData = {} }) {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const rawEmail = cookieStore.get("user_email")?.value || "";
  const rawPhone = cookieStore.get("user_phone")?.value || "";
  const userAgent = headerStore.get("user-agent") || "";
  const ip = headerStore.get("x-forwarded-for")?.split(",")[0] || "";
  const referrer = headerStore.get("referer") || "";

  console.log("📥 Data mentah:");
  console.log({ rawEmail, rawPhone, ip, userAgent, referrer });

  const userData = {
    client_user_agent: userAgent,
    client_ip_address: ip,
    ...(rawEmail ? { em: sha256(rawEmail) } : {}),
    ...(rawPhone ? { ph: sha256(rawPhone) } : {}),
  };

  // Tambahkan referrer ke customData
  const mergedCustomData = {
    ...customData,
    referrer,
  };

  await sendFacebookCAPI({
    eventName,
    userData,
    customData: mergedCustomData,
    testEventCode,
  });

  return null;
}
