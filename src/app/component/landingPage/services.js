"use client";
import { fetchServices } from "@/app/firebase/readData";
import React, { useEffect, useState } from "react";
import Loading from "../global/loading";
import { FaCheck } from "react-icons/fa";
import BtnLinkPrimary from "../global/btnLinkPrimary";
import { FaArrowRight } from "react-icons/fa6";

export default function Services() {
  const [services, setServices] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getservices = async () => {
      try {
        const data = await fetchServices();
        console.log("services:", data);
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getservices();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!services || services.length === 0) {
    return <div>No services found</div>;
  }

  return (
    <div className="relative isolate text-base-content">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="grid gap-4 md:grid-cols-3">
            {Object.entries(services).map(([key, service]) => (
              <div key={key} className={`card bg-base-100 rounded-none rounded-bl-3xl ${service.marking ? "border border-primary shadow-lg shadow-indigo-500/50" : ""}`}>
                <div className="card-body">
                  <div>
                    <p className="font-normal">{service.name}</p>
                    <p className="text-3xl font-bold my-2 text-primary">{service.price.toLocaleString("id-ID")}</p>
                    <p>{service.description}</p>
                  </div>
                  <div className="space-y-2 my-5">
                    <h3 className="font-semibold">Fitur</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <FaCheck className="text-purple-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card-actions justify-end mt-auto">
                    <BtnLinkPrimary href={`/services/${key}`} btnTxt="Pilih" btnFull={true} iconRight={<FaArrowRight />} />
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
