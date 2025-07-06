import Image from "next/image";

export default function DocumentationSectionRihala({ secId, data }) {
  return (
    <section className="py-16 px-4 bg-base-100">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-20 mx-auto text-center capitalize">
          <p className="text-base font-semibold text-primary ">{secId}</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-base-content sm:text-5xl" data-aos="fade-up">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:gap-4 space-y-4 sm:space-y-0">
          {data.photos.map((photo, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-xl group ${photo.className}`} data-aos="fade-up">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
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
