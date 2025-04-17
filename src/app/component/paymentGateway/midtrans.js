"use client";
import { useEffect } from "react";

export default function Midtrans({ orderId, servicePrice, serviceId, serviceName, serviceCategory, serviceUrl, quantity = 1, baseUrl }) {
  const handlePayment = async () => {
    try {
      const res = await fetch("/api/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transaction_details: {
            order_id: orderId,
            gross_amount: quantity * servicePrice,
          },
          item_details: [
            {
              id: serviceId,
              price: servicePrice,
              quantity: quantity,
              name: serviceName,
              category: serviceCategory,
              url: serviceUrl,
            },
          ],
          finish_redirect_url: baseUrl + "/payment/success",
        }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Gagal request ke /api/transaction:", res.status, errorText);
        alert("Gagal memproses pembayaran. Silakan coba lagi.");
        return;
      }

      const data = await res.json();

      if (window.snap && data.token) {
        window.snap.pay(data.token, {
          onSuccess: (result) => {
            console.log("Success:", result);
            window.location.href = baseUrl + "/payment/success";
          },
          onPending: (result) => {
            console.log("Pending:", result);
            window.location.href = baseUrl + "/payment/unsuccess";
          },
          onError: (result) => {
            console.log("Error:", result);
            window.location.href = baseUrl + "/payment/error";
          },
        });
      } else {
        alert("Token pembayaran tidak tersedia.");
      }
    } catch (error) {
      console.error("Error saat handlePayment:", error);
      alert("Terjadi kesalahan internal.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY);
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <h1>Pembayaran Midtrans</h1>
      <button onClick={handlePayment} className="btn btn-primary" id="pembayaran">
        Bayar Sekarang
      </button>
    </>
  );
}
