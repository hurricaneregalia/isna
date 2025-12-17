export default function HeroSectionRihala({ data }) {
  return (
    <div
      style={{
        backgroundImage: `url('${data.backgroundImageUrl}')`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen bg-cover bg-center"
    >
      <div className="relative isolate px-6 pt-14 lg:px-8 h-screen bg-linear-to-t from-slate-800 to-transparent">
        {/* Background Atas */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.25 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        {/* Konten */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* Tagline */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 border border-white/50 text-sm text-white/70 ring-1 ring-base-content/10 hover:ring-base-content/30">
              {data.aboveTitle}{" "}
              <a href="#" className="ml-1 font-semibold text-primary hover:underline">
                Pelajari
              </a>
            </div>
          </div>

          {/* Judul & Subjudul */}
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">{data.title}</h1>
            <p className="mt-8 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">{data.subtitle}</p>

            {/* Tombol Aksi */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm font-semibold text-white/70 hover:underline">
                Pelajari
              </a>
              <a href="#" className="btn btn-primary px-6 py-2 text-sm font-semibold">
                Atur Jadwal
              </a>
            </div>
          </div>
        </div>

        {/* Background Bawah */}
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.25 -translate-x-1/2 bg-linear-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
