import Link from "next/link";

export default function HeroText({
  title = "Bangun Brand Profesionalmu Sekarang",
  subtitle = "Gunakan landing page premium untuk meningkatkan konversi penjualan Anda.",
  cta = { text: "Mulai Sekarang", href: "#" },
  backgroundColor = "bg-gradient-to-r from-blue-500 to-pink-700",
  textColor = "text-white",
}) {
  return (
    <section className={`${backgroundColor} py-40 flex items-center`}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}>{title}</h1>
        <p className={`text-lg md:text-xl mb-8 ${textColor} opacity-90`}>{subtitle}</p>
        <Link href={cta.href} className="btn btn-primary text-white text-base">
          {cta.text}
        </Link>
      </div>
    </section>
  );
}
