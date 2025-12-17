import Image from "next/image";
import Link from "next/link";

export default function HeroNurbaz({ secId, data, fontTitle }) {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <Image src={data.imageUrl} alt="Professional man wearing premium watch" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" priority={true} className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/30"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative text-white">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">PREMIUM EDITION</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold leading-tight mb-4 ${fontTitle}`}>{data.title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-lg">{data.subtitle}</p>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#tampilanBiasa" aria-label="Scroll ke tampilan biasa">
          <div className="w-8 h-14 rounded-3xl border-2 border-gray-300 flex justify-center cursor-pointer">
            <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
          </div>
        </Link>
      </div>
    </section>
  );
}
