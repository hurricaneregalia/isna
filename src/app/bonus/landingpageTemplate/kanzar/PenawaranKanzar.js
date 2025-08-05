import React from "react";
import Wrapper from "./ui/Wrapper";
import Headline from "./ui/Headline";
import Subheadline from "./ui/Subheadline";
import CustomImage from "./ui/CustomImage";

export default function PenawaranKanzar() {
  const dataPenawaranKanzar = {
    title: "💌 Revelyn Tahu Apa yang Wanita Butuhkan Saat Berkendara",
    description: "Helm Revelyn tidak dibuat asal — kami rancang khusus berdasarkan gaya hidup dan kebutuhan real wanita kota.",
    points: ["✅ Tampil kece di IG & TikTok", "✅ Helm ringan dan nyaman untuk ngantor, kuliah, dan hangout", "✅ Matching dengan style harianmu", "✅ Cocok untuk yang berhijab dan tidak"],
    promo: {
      badge: "⏳ Limited Promo!",
      details: ["🚨 Diskon 20% untuk pre-order batch Juli", "🎁 Gratis helm pouch eksklusif untuk 50 pembeli pertama", "📦 Tersedia COD & ready di Shopee / Tokopedia"],
    },
    imageUrl: "https://images.pexels.com/photos/1424999/pexels-photo-1424999.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Wanita bergaya dengan helm Revelyn dan latar urban",
  };

  return (
    <Wrapper className="bg-base-100">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        <Headline text={dataPenawaranKanzar.title} />
        <Subheadline text={dataPenawaranKanzar.description} />

        <ul className="space-y-2 text-base-content text-left max-w-xl mx-auto">
          {dataPenawaranKanzar.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <div className="mt-10 p-6 bg-pink-100 rounded-xl shadow-md space-y-4">
          <p className="text-pink-700 font-bold text-xl">{dataPenawaranKanzar.promo.badge}</p>
          <ul className="space-y-2 text-base-content">
            {dataPenawaranKanzar.promo.details.map((deal, i) => (
              <li key={i}>{deal}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <CustomImage src={dataPenawaranKanzar.imageUrl} alt={dataPenawaranKanzar.imageAlt} className="rounded-xl shadow-lg" aspectRatio="16/9" />
        </div>
      </div>
    </Wrapper>
  );
}
