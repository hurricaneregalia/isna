// components/ProductSectionRihala.tsx
import { CheckIcon } from "@heroicons/react/20/solid";

const dataProduct = {
  sectionTitle: "Paket Pendakian Gunung",
  sectionSubtitle: "Paket terbaik untuk petualanganmu.",
  sectionDescription: "Kami menyediakan berbagai pilihan paket jasa pemandu naik gunung, dari pendaki pemula hingga ekspedisi profesional.",
  products: [
    {
      name: "Basic",
      id: "tier-basic",
      href: "#",
      price: "Rp 500.000",
      quota: "Hingga 5 orang",
      description: "Paket hemat untuk pendaki pemula yang ingin menjajal pengalaman naik gunung.",
      features: ["Pendakian 1 hari", "Pemandu berpengalaman", "Peralatan dasar (tenda, matras)", "Asuransi dasar"],
      featured: false,
    },
    {
      name: "Standard",
      id: "tier-standard",
      href: "#",
      price: "Rp 1.200.000",
      quota: "Hingga 10 orang",
      description: "Paket lengkap dengan fasilitas tambahan untuk kenyamanan selama pendakian.",
      features: ["Pendakian 2 hari 1 malam", "Pemandu + asisten", "Peralatan lengkap + sleeping bag", "Makan 3x sehari", "Asuransi standar"],
      featured: false,
    },
    {
      name: "Premium",
      id: "tier-premium",
      href: "#",
      price: "Rp 2.500.000",
      quota: "Hingga 20 orang",
      description: "Paket eksklusif untuk ekspedisi dengan pelayanan premium dan keamanan maksimal.",
      features: [
        "Pendakian 3 hari 2 malam",
        "Tim pemandu lengkap",
        "Peralatan premium + jaket gunung",
        "Dokumentasi profesional",
        "Asuransi lengkap + evakuasi darurat",
        "Transportasi PP dari kota terdekat",
      ],
      featured: true,
    },
  ],
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductSectionRihala({ secId }) {
  return (
    <div className="relative isolate bg-base-100 px-6 py-24 sm:py-32 lg:px-8 text-base-content">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-primary text-sm font-bold uppercase">{secId}</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl opacity-75" data-aos="fade-up">
          {dataProduct.sectionSubtitle}
        </h2>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg sm:text-xl" data-aos="fade-up">
        {dataProduct.sectionDescription}
      </p>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-5xl lg:grid-cols-3 lg:gap-x-8">
        {dataProduct.products.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames("rounded-box flex flex-col gap-5 p-8 shadow-md ring-1", tier.featured ? "bg-primary text-primary-content ring-primary" : "bg-base-200 ring-base-300")}
            data-aos="fade-up"
          >
            <div id="pricing">
              <h3 id={tier.id} className={classNames("text-lg font-semibold", tier.featured ? "text-white" : "text-primary")}>
                {tier.name}
              </h3>
              <p className="flex items-baseline m-0">
                <span className={classNames("text-4xl font-bold", tier.featured ? "text-white" : "text-base-content")}>{tier.price}</span>
              </p>
              <p className={classNames("text-base text-end m-0", tier.featured ? "text-gray-300" : "text-base-content/75")}>{tier.quota}</p>
            </div>
            <hr className="my-1 opacity-0" />
            <p className={classNames("text-sm", tier.featured ? "text-gray-200" : "text-base-content/75")}>{tier.description}</p>
            <ul role="list" className={classNames("space-y-3 text-sm", tier.featured ? "text-gray-100" : "text-base-content/75")}>
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 items-start" data-aos="fade-up">
                  <CheckIcon aria-hidden="true" className={classNames("h-5 w-5 flex-none", tier.featured ? "text-white" : "text-primary")} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <hr className="my-1 opacity-0" />
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames("mt-auto block w-full rounded-btn px-4 py-2 text-center text-sm font-semibold transition", tier.featured ? "btn btn-secondary" : "btn btn-primary ")}
            >
              Atur Jadwal
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
