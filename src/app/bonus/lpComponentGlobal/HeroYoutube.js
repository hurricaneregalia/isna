// src/app/bonus/lpComponentGlobal/HeroYoutube.js
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";
import { FaPlay } from "react-icons/fa";

export default function HeroYoutube({
  title = "Tonton Bagaimana Kami Meningkatkan Konversi 3X Lipat",
  subtitle = "Video singkat ini akan menjelaskan bagaimana landing page kami bekerja untuk bisnis Anda.",
  youtubeId = "_oDkbIgCdJg",
  cta = { text: "Mulai Sekarang", href: "#" },
  textColor = "text-gray-900",
  backgroundColor = "bg-base-100",
}) {
  return (
    <section className={`${backgroundColor} py-20 px-4 sm:px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Video container with 100% width & auto height */}
        <div
          id="ytWrapper"
          className="yt-wrapper bg-red-500 flex justify-center items-center
          "
        >
          <YouTubeEmbed id="ytVideo" videoid={youtubeId} params="controls=0&rel=0" />
        </div>

        {/* Judul */}
        <h1 className={`text-3xl md:text-5xl font-extrabold mb-4 tracking-tight ${textColor}`}>{title}</h1>

        {/* Subjudul */}
        {subtitle && <p className={`text-lg md:text-xl mb-8 ${textColor} opacity-80 leading-relaxed`}>{subtitle}</p>}

        {/* Tombol CTA */}
        <Link
          href={cta.href}
          className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white text-base font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300"
        >
          <FaPlay className="text-sm" />
          {cta.text}
        </Link>
      </div>
    </section>
  );
}
