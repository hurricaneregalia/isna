import React from "react";
import BtnLinkPrimary from "../global/btnLinkPrimary";
import { FaArrowRight, FaCheck, FaRegStar, FaRegStarHalfStroke, FaStar, FaXmark } from "react-icons/fa6";
import { PiCheckFatFill } from "react-icons/pi";

export default function ServicesSqlite({ listItem, subListItem }) {
  return (
    <div className="text-base-content">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="grid gap-4 md:grid-cols-3">
            {listItem && listItem.length > 0 ? (
              listItem.map((item, index) => {
                const list = subListItem.filter((service) => service.servicesListItemId === item.id);
                return (
                  <div
                    key={index}
                    className={`bg-base-100 rounded-none rounded-bl-3xl ${
                      item.isBest ? "border border-amber-300 shadow-xl shadow-amber-300/50" : ""
                    }`}
                    data-aos="fade-up"
                  >
                    <div className="card-body p-0">
                      <div className="bg-gray-900 text-gray-300 rounded-bl-3xl p-8 overflow-hidden">
                        <div className="text-2xl mb-5 flex gap-1 text-amber-300">
                          {Array.from({ length: item.quality }, (_, index) => (
                            <FaStar key={index} />
                          ))}
                        </div>
                        <p className="font-normal">{item.title}</p>
                        <p className="text-3xl font-bold my-2">{item.price.toLocaleString("id-ID")}</p>
                      </div>

                      <div className="space-y-2 my-5 px-8">
                        {list.length > 0 ? (
                          <ul className="space-y-2">
                            {list.map((service) => (
                              <li key={service.id} className="flex items-center gap-2">
                                {service.isActive === true ? <FaCheck className="text-green-500" /> : <FaXmark className="text-red-500" />}
                                <span className={service.isActive === true ? "" : "opacity-50 line-through"}>{service.title}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>No feature services available</p>
                        )}
                      </div>

                      <div className="card-actions justify-end mt-auto p-8 pt-0">
                        <BtnLinkPrimary
                          btnUrl={`/services/package/${item.slug}`} // Menggunakan item.id untuk URL dinamis
                          btnTxt="Pilih"
                          btnFull={true}
                          iconRight={<FaArrowRight />}
                          btnStyle={`${item.isBest ? "shadow-lg shadow-amber-200/50" : ""}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No items available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
