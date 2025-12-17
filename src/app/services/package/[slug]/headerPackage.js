import React from "react";
import { FaCheck, FaStar, FaXmark } from "react-icons/fa6";
import { PiSealCheckFill } from "react-icons/pi";
import { MdAccessTime, MdCategory } from "react-icons/md";
import ListTagsDetail from "./ListTagsDetail";

export default function HeaderPackage({ title, quality, price, categoryTitle, description, bestFor, proccessTime, listTags, children, listItem }) {
  const sortedList = [...listItem].sort((a, b) => a.order - b.order);

  return (
    <div className="w-full mx-auto mt-6 sm:mt-10 text-neutral-content">
      {/* Main Content Container */}
      <div className="flex flex-col gap-6">
        {/* Title and Rating Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 text-white">{title}</h1>
            <div className="flex items-center gap-3 text-amber-400 text-lg">
              <div className="flex gap-1">
                {Array.from({ length: quality }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <span className="text-sm text-gray-400 font-medium">({quality}/5 Quality Score)</span>
            </div>
          </div>

          {/* Price Section */}
          <div className="w-full md:w-1/3 text-left md:text-right">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-500">
              <span className="text-lg font-normal text-gray-300 mr-1">Rp.</span>
              {price.toLocaleString("id-ID")}
            </h2>
          </div>
        </div>

        {/* Description & Tags */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
          <div className="lg:col-span-2 space-y-8">
            <div>
              {/* Metadata Badges */}
              <div className="grid grid-cols-1 gap-3">
                <div className="badge badge-lg badge-outline gap-2 p-4 text-sm border-white/20 text-gray-200">
                  <PiSealCheckFill className="text-success text-lg" />
                  <span>
                    Cocok: <span className="font-semibold text-white">{bestFor}</span>
                  </span>
                </div>
                <div className="badge badge-lg badge-outline gap-2 p-4 text-sm border-white/20 text-gray-200">
                  <MdCategory className="text-info text-lg" />
                  <span>
                    Kategori: <span className="font-semibold text-white">{categoryTitle}</span>
                  </span>
                </div>
                <div className="badge badge-lg badge-outline gap-2 p-4 text-sm border-white/20 text-gray-200">
                  <MdAccessTime className="text-warning text-lg" />
                  <span>
                    Proses: <span className="font-semibold text-white">{proccessTime} days</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="border border-white/30 rounded-bl-3xl sm:p-5 p-3 text-white grid gap-3">
              <h3 className=" font-bold">Deskripsi</h3>
              <p className=" opacity-70">
                {title} adalah {description}
              </p>
            </div>

            <div>
              <h3 className="text-white">Tags</h3>
              <ListTagsDetail listTags={listTags} />
            </div>
          </div>
          {/* Benefits List */}
          <div className="lg:col-span-1">
            <div className=" border-white/30 rounded-bl-3xl sm:p-5 p-3 border h-full">
              <h3 className="text-lg font-bold mb-6 text-white">Yang didapatkan</h3>
              <ul className="space-y-4">
                {sortedList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className={`mt-1 p-1.5 rounded-full shrink-0 ${item.isActive ? "bg-green-500/20 text-green-400" : "bg-red-500/10 text-red-400"}`}>
                      {item.isActive ? <FaCheck className="text-xs" /> : <FaXmark className="text-xs" />}
                    </div>
                    <span className={`text-sm sm:text-base leading-snug ${item.isActive ? "text-gray-200" : "text-gray-500 line-through decoration-gray-600"}`}>{item.benefit.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Children Content */}
      <div className="mt-8">{children}</div>
    </div>
  );
}
