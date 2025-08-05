// components/TestimoniKanzar.js
import React from "react";
import Wrapper from "./ui/Wrapper";
import Headline from "./ui/Headline";
import Image from "next/image";

export default function TestimoniKanzar() {
  const dataTestimoniKanzar = {
    title: "Apa Kata Mereka tentang Revelyn?",
    testimonials: [
      {
        name: "Dewi",
        quote: "Helmnya ringan banget dan warnanya cantik! Aku jadi lebih pede tiap riding.",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100",
        product: "Dusty Pink",
      },
      {
        name: "@rara.miles",
        quote: "Helm Revelyn bener-bener jadi pelengkap gaya aku. Sekarang helm nggak aku tinggalin di motor lagi.",
        avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100",
        product: "Lilac Frost",
      },
    ],
  };

  return (
    <Wrapper className="bg-base-100">
      <div className="text-center mb-12">
        <Headline text={dataTestimoniKanzar.title} />
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {dataTestimoniKanzar.testimonials.map((item, index) => (
          <div key={index} className="group bg-base-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="relative w-14 h-14  aspect-square">
                <Image src={item.avatar} alt={item.name} fill className="rounded-full object-cover border-2 border-primary" />
              </div>
              <div>
                <p className="font-semibold opacity-75">Revelyn {item.product}</p>
                <p className="text-base-content/80 italic mb-2 transition-opacity duration-300 group-hover:opacity-100">{item.quote}</p>
                <p className="font-semibold text-primary">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
