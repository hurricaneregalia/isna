"use client";
import { fetchServices, fetchServicesCategory } from "@/app/firebase/readData";
import React, { useEffect, useState } from "react";
import Loading from "../global/loading";
import BtnLinkPrimary from "../global/btnLinkPrimary";
import { FaArrowRight } from "react-icons/fa6";
import { LuCircleCheckBig } from "react-icons/lu";

export default function Services() {
  const [services, setServices] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState(null); // Untuk menyimpan data kategori

  useEffect(() => {
    const getServicesAndCategories = async () => {
      try {
        // Fetch data kategori
        const categoryData = await fetchServicesCategory();
        console.log("categories:", categoryData);
        setCategories(categoryData);

        // Fetch data layanan
        const serviceData = await fetchServices();
        console.log("services:", serviceData);

        // Filter services berdasarkan kategori jika kategori ada
        const filteredServices = Object.fromEntries(Object.entries(serviceData).filter(([key, service]) => service.category === 1));

        setServices(filteredServices);
      } catch (error) {
        console.error("Error fetching services or categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getServicesAndCategories();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!services || Object.keys(services).length === 0) {
    return <div>No services found</div>;
  }

  return (
    <div className="relative isolate text-base-content">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(services).map(([key, service]) => (
              <div key={key} className={`card bg-base-100 rounded-none rounded-bl-3xl ${service.marking ? "border border-primary shadow-xl shadow-indigo-500/50" : ""}`}>
                <div className="card-body p-0">
                  <div className=" bg-gray-900 text-gray-300 rounded-bl-3xl p-8">
                    <p className="font-normal">{service.name}</p>
                    <p className="text-3xl font-bold my-2 text-secondary">{service.price.toLocaleString("id-ID")}</p>
                    <p className="font-normal">{categories && categories[service.category] ? categories[service.category] : "Kategori tidak ditemukan"}</p>
                  </div>
                  <div className="space-y-2 my-5 px-8">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <LuCircleCheckBig className="text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-actions justify-end mt-auto p-8 pt-0">
                    <BtnLinkPrimary btnUrl={`/services/${key}`} btnTxt="Pilih" btnFull={true} iconRight={<FaArrowRight />} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
