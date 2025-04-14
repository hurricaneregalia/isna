import HeaderFooterSqlite from "@/app/component/global/headerFooterSqlite";
import axios from "axios";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa6";
import HeroPackage from "./heroPackage";
import FormPackage from "./formPackage";

const BASE_URL = process.env.NODE_ENV === "production" ? process.env.BASE_URL_PROD : process.env.NEXT_PUBLIC_BASE_URL;

async function getServiceBySlug(slug) {
  try {
    const res = await axios.get(`${BASE_URL}/api/lokal`);
    const data = res.data.servicesListItems;
    const galleries = res.data.servicesGalleryListItems;
    const registerForm = res.data.registerForms;

    const service = data.find((item) => item.slug === slug);
    if (!service) return null;

    // Filter gallery yang cocok dengan service.id
    const serviceGallery = galleries.filter((item) => item.servicesListItemId === service.id);

    return {
      ...service,
      servicesGalleryListItems: serviceGallery,
      registerForm,
    };
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function ServicePackagePage({ params }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <HeaderFooterSqlite>
      <div>
        <HeroPackage img={service.img} imageAlt={service.title} listItem={service.servicesGalleryListItems} />
        <div className="lg:p-20 sm:p-10 p-5 grid grid-cols-2 lg:w-2/3 w-full mx-auto">
          <div className="flex flex-col gap-1">
            <h1>{service.title}</h1>
            <h2 className=" text-3xl font-bold ">Rp. {service.price.toLocaleString("id-ID")}</h2>
            <div>
              <p className="bg-base-300 px-2 py-0 inline-block rounded-md">Kategory {service.category}</p>
            </div>
          </div>
          <div>
            <p className=" flex justify-end text-2xl gap-1 text-amber-300">
              {Array.from({ length: service.quality }, (_, index) => (
                <FaStar key={index} />
              ))}
            </p>
          </div>
        </div>
        <div className="lg:px-20 sm:px-10 px-5 lg:w-2/3 w-full mx-auto">
          <FormPackage listItem={service.registerForm} />
        </div>
      </div>
    </HeaderFooterSqlite>
  );
}
