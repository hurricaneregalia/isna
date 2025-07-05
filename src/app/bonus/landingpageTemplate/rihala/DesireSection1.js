import Image from "next/image";

const dataDocumentation = {
  title: "Dokumentasi penuh keceriaan",
  photos: [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "Pendaki di puncak gunung dengan latar belakang langit",
      caption: "Summit Achievement",
      className: "row-span-2",
    },
    {
      src: "https://images.pexels.com/photos/2309266/pexels-photo-2309266.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      alt: "Jalur pendakian lembah",
      caption: "Mountain Trail View",
      className: "",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      alt: "Tenda di ketinggian gunung",
      caption: "High Altitude Camp",
      className: "col-span-2",
    },
    {
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
      alt: "Pendaki menyeberangi batu besar",
      caption: "Rock Crossing",
      className: "",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661883853185-165f5869e6d3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pendaki di tepi tebing",
      caption: "Edge of the Cliff",
      className: "",
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      alt: "Ridgeline saat matahari terbit",
      caption: "Ridge Sunrise",
      className: "",
    },
  ],
};

export default function DesireSection1({ secId }) {
  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-20 mx-auto text-center capitalize">
          <p className="text-base font-semibold text-primary ">{secId}</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-base-content sm:text-5xl" data-aos="fade-up">
            {dataDocumentation.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:gap-4 space-y-4 sm:space-y-0">
          {dataDocumentation.photos.map((photo, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-xl group ${photo.className}`} data-aos="fade-up">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110" />
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
