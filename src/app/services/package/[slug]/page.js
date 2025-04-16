import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import axios from "axios";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa6";
import HeroPackage from "./heroPackage";
import FormPackage from "./formPackage";
import { GenerateMetadata } from "@/app/component/global/generateMetadata";

const BASE_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL_PROD : process.env.NEXT_PUBLIC_BASE_URL;

async function getServiceBySlug(slug) {
  try {
    const res = await axios.get(`${BASE_URL}/api/lokal`);
    const data = res.data.servicesListItems;
    const galleries = res.data.servicesGalleryListItems;
    const registerForm = res.data.registerForms;
    const category = res.data.servicesCategories;
    const siteIdentity = res.data.siteIdentities[0];
    const metaDatas = res.data.metaData;
    const service = data.find((item) => item.slug === slug);
    if (!service) return null;

    const serviceGallery = galleries.filter((item) => item.servicesListItemId === service.id);
    const metaData = metaDatas.find((meta) => meta.serviceId === service.id);

    return {
      ...service,
      servicesGalleryListItems: serviceGallery,
      registerForm,
      servicesCategories: category,
      siteIdentities: siteIdentity,
      metaData: metaData || null,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return {};

  const categoryTitle = service.servicesCategories.find((cat) => cat.id === service.category)?.title;
  const meta = service.metaData;

  return GenerateMetadata({
    title: service.siteIdentities.siteName,
    desc: `Layanan ${service.title} ${meta?.desc} Hanya di ${BASE_URL}/services/package/${params.slug}`,
    keywords: [service.title, meta?.keywords],
    author: meta?.author,
    siteUrl: `${BASE_URL}/services/package/${params.slug}`,
    metadataBase: new URL(service.siteIdentities.siteUrl),
    siteName: service.siteIdentities.siteName,
    ogImage: meta?.ogImage,
    category: meta?.category,
    index: meta?.index,
    follow: meta?.follow,
  });
}

// ✅ Komponen utama halaman
export default async function ServicePackagePage({ params }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) notFound();
  const categoryTitle = service.servicesCategories.find((cat) => cat.id === service.category)?.title;

  return (
    <HeaderFooterSqlite siteName={service.siteIdentities.siteName} footerText={service.siteIdentities.siteCopyright}>
      <div>
        <HeroPackage img={service.img} imageAlt={service.title} listItem={service.servicesGalleryListItems} />
        <div className="sm:px-13 px-5 lg:w-2/3 w-full mx-auto mt-10">
          <div className="bg-slate-900 text-neutral-content lg:p-10 sm:p-5 p-5">
            <div className="flex w-full">
              <div className="w-1/2 overflow-hidden">
                <h1>{service.title}</h1>
              </div>
              <div className="w-1/2 ">
                <p className="flex justify-end text-lg sm:text-2xl gap-1 text-amber-300">
                  {Array.from({ length: service.quality }, (_, index) => (
                    <FaStar key={index} />
                  ))}
                </p>
              </div>
            </div>
            <div className=" flex flex-col w-full gap-2">
              <h2 className=" text-3xl font-bold ">Rp. {service.price.toLocaleString("id-ID")}</h2>
              <div>
                <p className="bg-slate-700  px-2 py-1 inline-block capitalize text-sm rounded-md">{categoryTitle || "Tidak diketahui"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-13 px-5 lg:w-2/3 w-full mx-auto">
          <FormPackage
            listItem={service.registerForm}
            serviceName={service.title}
            servicePrice={service.price}
            serviceCategory={categoryTitle}
            sku={service.sku}
            waNumber={service.siteIdentities.contactPhone}
          />
        </div>
      </div>
    </HeaderFooterSqlite>
  );
}
