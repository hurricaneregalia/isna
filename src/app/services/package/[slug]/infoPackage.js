import TextHeadingTitle from "@/app/component/global/textHeadingTitle";
import React from "react";

export default function InfoPackage({ iconTitle, serviceName, serviceCategory, servicePrice }) {
  return (
    <>
      <div>
        <TextHeadingTitle title="Informasi paket" iconTitle={iconTitle} titleCase={2} h={3} cssStyle="my-10" iconPosition="left" />
      </div>
      <div className=" flex flex-col gap-5">
        <label className="floating-label w-full" htmlFor="15-nama-paket">
          <input
            id="15-nama-paket"
            name="15-nama-paket"
            type="text"
            defaultValue={serviceName}
            placeholder={serviceName}
            className="input input-lg placeholder:capitalize w-full"
            disabled
          />
          <span className="capitalize">Nama paket</span>
        </label>
        <label className="floating-label w-full" htmlFor="17-kategori">
          <input
            id="17-kategori"
            name="17-kategori"
            type="text"
            defaultValue={serviceCategory}
            placeholder={serviceCategory}
            className="input input-lg placeholder:capitalize w-full"
            disabled
          />
          <span className="capitalize">kategori</span>
        </label>

        <label className="floating-label w-full" htmlFor="16-harga">
          <input
            id="16-harga"
            name="16-harga"
            type="number"
            defaultValue={servicePrice}
            placeholder={servicePrice}
            className="input input-lg placeholder:capitalize w-full"
            disabled
          />
          <span className="capitalize">harga paket</span>
        </label>
      </div>
      <hr className="my-5 opacity-0" />
    </>
  );
}
