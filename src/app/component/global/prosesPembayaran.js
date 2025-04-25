"use client";
export default function ProsesPembayaran() {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <p className="text-lg font-semibold mb-2">Proses...</p>
        <div className="mt-4">
          <div className="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
