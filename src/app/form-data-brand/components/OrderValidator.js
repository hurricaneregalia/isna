// OrderValidator Component
// Validates order ID from Midtrans and redirects if invalid
"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function OrderValidator({ orderId: propOrderId }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const orderId = propOrderId || searchParams.get("order_id");
  const [isValidating, setIsValidating] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    async function validateOrder() {
      if (!orderId) {
        router.push("/form-data-brand/not-found");
        return;
      }

      try {
        const response = await fetch(`/api/transaction?order_id=${orderId}`);
        const data = await response.json();

        if (!data.success || !data.data) {
          router.push("/form-data-brand/not-found");
          return;
        }

        setIsValid(true);
      } catch (error) {
        console.error("Error validating order:", error);
        router.push("/form-data-brand/not-found");
      } finally {
        setIsValidating(false);
      }
    }

    validateOrder();
  }, [orderId, router]);

  if (isValidating) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg mb-4"></div>
          <p className="text-gray-600">Memvalidasi order ID...</p>
        </div>
      </div>
    );
  }

  if (!isValid) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Order ID tidak valid</p>
          <button onClick={() => router.push("/form-data-brand/not-found")} className="btn btn-primary">
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return null; // Just validate, don't render anything
}
