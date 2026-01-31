// FormHeader Component
// Header section with HeroBrandChecker and order ID display

import HeroBrandChecker from "../../exalvia/brand-checker/HeroBrandChecker";
import data from "../../exalvia/database/ExalviaDatabase";

export default function FormHeader({ orderId }) {
  return (
    <div className="mb-8">
      {/* Hero Section */}
      <HeroBrandChecker headline="Lengkapi Data Brand" secId="form-hero" backgroundImage={data.pagesResult.heroImage}>
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center text-center gap-4 py-10">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">Data Brand</h1>
          <p className="text-white/60 max-w-lg">Lengkapi data di bawah ini untuk membantu kami merumuskan pesan penjualan yang tepat untuk brand Anda.</p>
          {orderId && (
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <span className="text-white/80 text-sm">Order ID: </span>
              <span className="text-white font-mono font-bold">{orderId}</span>
            </div>
          )}
        </div>
      </HeroBrandChecker>

      {/* Form Description */}
      <div className="mt-6 text-center max-w-2xl mx-auto">
        <p className="text-gray-600">Lengkapi formulir berikut untuk membantu kami memahami brand Anda lebih baik. Proses ini akan memakan waktu sekitar 10-15 menit.</p>
      </div>
    </div>
  );
}
