import React from "react";
import TextDesctiption from "./textDesctiption";
import ImageComponent from "./imageComponent";

export default function LayoutSecondary({ children, id, title, description, footer, headAlign, src, imageAlt }) {
  const footerFx = footer ? <div className="">{footer}</div> : null;
  return (
    <section className="py-20" id={id}>
      <div className="container lg:w-8/12 px-8 mx-auto">
        <div className="flex flex-col-reverse sm:flex-row gap-20 mb-10">
          <div className="w-full">
            <p className="text-base/7 font-semibold text-primary capitalize">{id}</p>
            <div className="mt-6">
              <TextDesctiption title={title} description={description} />
            </div>
          </div>
          <div className="w-full">
            <ImageComponent src={src} alt={imageAlt} width={300} height={300} priority={false} />
          </div>
        </div>
        <div className="py-10">{children}</div>
        {footerFx}
      </div>
    </section>
  );
}
