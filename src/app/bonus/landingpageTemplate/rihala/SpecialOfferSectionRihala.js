import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    alt: "Sunset",
    caption: "Golden Sunset",
    className: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
    alt: "Forest",
    caption: "Forest Trail",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc",
    alt: "City",
    caption: "City Skyline",
    className: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    alt: "Ocean",
    caption: "Waves",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1750263147685-1bee1cdb8c44?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert",
    caption: "Desert Dunes",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1750688650545-d9e2a060dfe8?q=80&w=2212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mountains",
    caption: "Rocky Mountains",
    className: "",
  },
];

export default function SpecialOfferSectionRihala() {
  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-base-content">My Photography Portfolio</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:gap-4 space-y-4 sm:space-y-0">
          {photos.map((photo, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-xl group ${photo.className}`}>
              <Image
                src={photo.src + "?auto=format&fit=crop&w=800&q=80"}
                alt={photo.alt}
                fill
                className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
              />
              <div
                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neutral-900/70 to-transparent text-white text-sm sm:text-base px-4 py-5 transition-opacity duration-300 group-hover:opacity-0
  "
              >
                {photo.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
