const dataCTAsectionOne = {
  title: "Siap Mendaki Gunung Bersama Teman Anda?",
  description: "Dapatkan panduan lengkap untuk persiapan dan rute aman.",
  backgroundImageUrl: "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?q=80&w=2368&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export default function CTAsectionOneRihala() {
  return (
    <section className="bg-base-100 sm:px-10 px-0">
      <div
        className="sm:max-w-7xl w-full mx-auto sm:rounded-3xl rounded-none overflow-hidden"
        style={{ backgroundImage: `url('${dataCTAsectionOne.backgroundImageUrl}')`, backgroundPosition: "center" }}
      >
        <div className=" bg-slate-800/80 px-6 py-16 text-center sm:px-16 md:pt-24 lg:px-24 lg:pt-24">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" data-aos="fade-up">
            {dataCTAsectionOne.title}
          </h2>
          <p className="mt-6 text-lg leading-8 opacity-75 text-white">{dataCTAsectionOne.description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="text-sm font-semibold text-white/70 hover:underline">
              Konsultasi WA
            </a>
            <a href="#" className="btn btn-primary">
              Atur Jadwal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
