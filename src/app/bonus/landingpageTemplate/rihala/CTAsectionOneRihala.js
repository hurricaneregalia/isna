import LandingPageWaLink from "../LandingPageWaLink";

export default function CTAsectionOneRihala({ secId, data, whatsappNumber }) {
  return (
    <section className="bg-base-100 sm:px-10 px-0" id={secId}>
      <div className="sm:max-w-7xl w-full mx-auto sm:rounded-3xl rounded-none overflow-hidden" style={{ backgroundImage: `url('${data.backgroundImageUrl}')`, backgroundPosition: "center" }}>
        <div className=" bg-slate-800/80 px-6 py-16 text-center sm:px-16 md:pt-24 lg:px-24 lg:pt-24">
          <h2 className="text-3xl capitalize font-semibold tracking-tight text-white sm:text-4xl" data-aos="fade-up">
            {data.title}
          </h2>
          <p className="mt-6 text-lg leading-8 opacity-75 text-white">{data.description}</p>
          <div className="mt-10 flex items-center justify-center gap-x-2">
            <LandingPageWaLink
              whatsappNumber={whatsappNumber}
              whatsappText={data.whatsappTextKonsultasi}
              linkText="Konsultasi WA"
              id={`primaryBtn${data.ctaNumber}`}
              className="btn btn-outline btn-secondary font-semibold "
            />
            <LandingPageWaLink whatsappNumber={whatsappNumber} whatsappText={data.whatsappText} linkText="Atur Jadwal" id={`secondaryBtn${data.ctaNumber}`} className="btn btn-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
