// src/app/component/landingPage/services.js
import React from "react";
import BtnLinkPrimary from "../global/btnLinkPrimary";
import { FaArrowRight, FaCheck, FaStar, FaXmark } from "react-icons/fa6";
import { PiSealCheckFill } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";

export default function Services({ listItem, subListItem, onlyCategory }) {
  const filteredItems = listItem?.filter((item) => (onlyCategory ? item.categorySlug === onlyCategory : true));
  return (
    <div className="text-base-content pb-20">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="grid gap-4 md:grid-cols-3">
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const list = subListItem.filter((service) => service.servicesListItemId === item.id);
                return (
                  <div
                    key={item.id}
                    className={`bg-base-100 rounded-none rounded-bl-3xl ${
                      item.isBest ? "border border-amber-300 shadow-xl shadow-amber-300/50" : ""
                    }`}
                    data-aos="fade-up"
                  >
                    <div className="card-body p-0 flex h-full">
                      <div className="bg-gray-900 text-gray-300 rounded-bl-3xl p-8 overflow-hidden">
                        <div className="text-2xl mb-5 flex gap-1 text-amber-300">
                          {Array.from({ length: item.quality }, (_, index) => (
                            <FaStar key={index} />
                          ))}
                        </div>
                        <p className="font-normal">{item.title}</p>
                        <p className="text-3xl font-bold my-2">{item.price.toLocaleString("id-ID")}</p>
                        <p className="font-normal flex items-start gap-1">
                          <PiSealCheckFill className="text-success mt-1 flex-shrink-0" />
                          <span>{item.bestFor}</span>
                        </p>

                        <div className="card-actions w-full mx-auto mt-5">
                          <BtnLinkPrimary
                            btnUrl={`/services/package/${item.slug}`}
                            btnTxt="Pilih"
                            btnFull={true}
                            iconRight={<FaArrowRight />}
                            btnStyle={item.isBest ? "shadow-amber-200/50" : ""}
                            btnCustom={
                              item.isBest === false
                                ? "border-1 border-amber-300 text-amber-300 hover:border-amber-500 bg-transparent hover:bg-amber-500"
                                : ""
                            }
                          />
                        </div>
                      </div>

                      <div className="space-y-2 my-5 px-8">
                        {list.length > 0 ? (
                          <ul className="space-y-2">
                            {list.map((service) => (
                              <li key={service.id} className="flex items-center gap-1">
                                {service.isActive ? <FaCheck className="text-green-500" /> : <FaXmark className="text-red-500" />}
                                <span className={service.isActive ? "" : "opacity-50 line-through"}>{service.title}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>No feature services available</p>
                        )}

                        <hr className="my-8 border-b-base-content border-dashed" />

                        <div className="mb-5 opacity-50 items-start flex gap-1">
                          <IoMdTime className="mt-1 flex-shrink-0" />
                          <p>
                            <span>Proses pembuatan</span>
                            <span className="font-bold"> {item.proccessTime}</span> <span>hari kerja.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="col-span-full text-center text-gray-500">Tidak ada layanan dalam kategori ini.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
