import React from "react";
import { FaArrowRight, FaCircleXmark, FaStar } from "react-icons/fa6";
import { PiSealCheckFill } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import LinkBtnOutlinePrimary from "./LinkBtnOutlinePrimary";
import LinkBtnPrimary from "./LinkBtnPrimary";
import productData from "@/app/api/datajs/product/data.json";
import { FaCheckCircle } from "react-icons/fa";

const filteredProducts = productData.filter((product) => product.category?.name === "landing page copywriting");

export default function ServicesJson() {
  return (
    <div id="productWrapper" className="grid gap-5 sm:grid-cols-3 w-full">
      {filteredProducts.map((product) => (
        <div key={product.id} id={product.id} className={`bg-base-100 rounded-bl-3xl ${product.isBest === true ? "border border-amber-300 shadow-xl shadow-amber-300/50" : ""}`} data-aos="fade-up">
          <div className="card-body p-0 flex h-full">
            <div className="bg-gray-900 text-gray-300 rounded-bl-3xl p-8 overflow-hidden">
              <div className="text-xl mb-5 flex gap-1 text-amber-300">
                {Array.from({ length: product.quality }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className="font-normal">{product.name}</p>
              <p className="text-3xl font-bold my-2">{product.price.toLocaleString("id-ID")}</p>
              <p className="font-normal flex items-start gap-1">
                <PiSealCheckFill className="text-success mt-1 flex-shrink-0" />
                <span>{product.bestFor}</span>
              </p>
              <div className="card-actions w-full mx-auto mt-5">
                {product.isBest ? (
                  <LinkBtnPrimary btnSm="y" href={`/services/package/${product.slug}`} linkText="Pilih" icon={<FaArrowRight />} css=" btn-block" />
                ) : (
                  <LinkBtnOutlinePrimary btnSm="y" href={`/services/package/${product.slug}`} linkText="Pilih" icon={<FaArrowRight />} css=" btn-block" />
                )}
              </div>
            </div>
            <div className="space-y-2 my-5 px-8 text-base-content">
              <ol className="list-decimal list-outside pl-4 space-y-3">
                {product.benefits
                  .sort((a, b) => a.order - b.order)
                  .map((b) => (
                    <li key={b.id}>
                      <div className="flex justify-between items-start">
                        <span className={b.isActive ? "" : "opacity-50 line-through"}>{b.benefit.title}</span>
                        {b.isActive ? <FaCheckCircle className="text-green-500 flex-shrink-0 ml-2 mt-1" /> : <FaCircleXmark className="text-red-500 flex-shrink-0 ml-2 mt-1" />}
                      </div>
                    </li>
                  ))}
              </ol>

              <hr className="my-6 border-b-base-content border-dashed" />
              <div className="mb-5 opacity-50 items-start flex gap-1">
                <IoMdTime className="mt-1 flex-shrink-0" />
                <p>
                  <span>Proses pembuatan</span>
                  <span className="font-bold"> {product.proccessTime}</span> <span>hari kerja.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
