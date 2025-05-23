// src/app/component/landingpage/LandingPageDetail.js
import Image from "next/image";

export default function LandingPageDetail({ landingPage }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Image section */}
        <div className="relative w-full h-72 sm:h-96 lg:h-full">
          <Image
            src={landingPage.image}
            alt={landingPage.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-cover"
            priority
          />
        </div>

        {/* Content section */}
        <div className="p-6 sm:p-10 space-y-5">
          <h1 className="text-4xl font-bold text-gray-800 capitalize leading-snug">{landingPage.name}</h1>

          <p className="text-gray-600 text-lg leading-relaxed">{landingPage.description}</p>

          {landingPage.lpDesignStyle && (
            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Style: {landingPage.lpDesignStyle.name}
            </div>
          )}

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Cocok untuk:</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
              {landingPage.lpFor.map((item) => (
                <li key={item.id}>{item.description || "(Tidak ada deskripsi)"}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Tipe Konten:</h2>
            <div className="flex flex-wrap gap-2">
              {landingPage.lpContentTypes.map((item) => (
                <span key={item.id} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {item.type}
                </span>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-400 pt-4">Dibuat: {new Date(landingPage.createdAt).toLocaleDateString()}</div>
        </div>
      </div>
    </section>
  );
}
