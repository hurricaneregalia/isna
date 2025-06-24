import Link from "next/link";

export default function CTASection({
  title = "Siap untuk mulai meningkatkan penjualan Anda?",
  subtitle = "Gunakan landing page profesional yang didesain untuk hasil maksimal.",
  cta = { text: "Hubungi Kami", href: "#" },
  backgroundColor = "bg-primary",
  textColor = "text-white",
}) {
  return (
    <section className={`${backgroundColor} py-16 px-6`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>{title}</h2>
        <p className={`text-lg mb-6 ${textColor} opacity-90`}>{subtitle}</p>
        <Link href={cta.href} className="btn btn-accent text-white text-base">
          {cta.text}
        </Link>
      </div>
    </section>
  );
}
