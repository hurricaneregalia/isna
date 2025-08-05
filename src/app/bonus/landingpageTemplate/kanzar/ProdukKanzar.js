// components/ProdukKanzar.js
import React from "react";
import Wrapper from "./ui/Wrapper";
import Headline from "./ui/Headline";
import Subheadline from "./ui/Subheadline";
import ProductImage from "./ui/ProductImage";

export default function ProdukKanzar() {
  const dataProdukKanzar = {
    title: "🌸 Revelyn Aurora Series",
    description: "Helm half face dengan kaca pelindung UV, desain feminin, dan super ringan — cocok untuk kamu yang aktif dan stylish.",
    products: [
      {
        name: "Dusty Pink",
        image: "https://images.pexels.com/photos/1820465/pexels-photo-1820465.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: "Rp 379.000",
        features: ["🧕 Hijab-Friendly", "🛡️ SNI Certified", "🧠 Super Ringan"],
      },
      {
        name: "Lilac Frost",
        image: "https://images.pexels.com/photos/3761125/pexels-photo-3761125.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: "Rp 379.000",
        features: ["🧕 Hijab-Friendly", "🛡️ SNI Certified", "🧠 Super Ringan"],
      },
      {
        name: "Nude Beige",
        image: "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=800",
        price: "Rp 379.000",
        features: ["🧕 Hijab-Friendly", "🛡️ SNI Certified", "🧠 Super Ringan"],
      },
    ],
  };

  return (
    <Wrapper className="bg-base-100">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <Headline text={dataProdukKanzar.title} />
        <Subheadline text={dataProdukKanzar.description} />
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {dataProdukKanzar.products.map((product, index) => (
          <div key={index} className="group bg-base-200 rounded-xl shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-xl active:shadow-lg">
            <div className="transition-transform duration-300 ease-in-out group-hover:scale-105 group-active:scale-100">
              <ProductImage src={product.image} alt={product.name} />
            </div>

            <h3 className="text-xl font-semibold text-base-content mb-2 transition-colors duration-300 group-hover:text-primary group-active:text-primary/80">{product.name}</h3>

            <p className="text-primary font-bold text-lg transition-transform duration-300 group-hover:scale-105 group-active:scale-100">{product.price}</p>

            <ul className="mt-3 space-y-1 text-base-content/75 text-sm transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-90">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button className="btn btn-outline btn-primary mt-4 w-full transition-transform duration-300 group-hover:scale-[1.03] group-active:scale-100">Beli Sekarang</button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
