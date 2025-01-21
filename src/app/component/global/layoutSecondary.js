import React from "react";
import TextDesctiption from "./textDesctiption";

export default function LayoutSecondary({ children, id, title, description, footer, headAlign }) {
  const footerFx = footer ? <div className="">{footer}</div> : null;
  return (
    <section className="py-20" id={id}>
      <div className={`container lg:w-8/12 px-8 mx-auto`}>
        <div className={`sm:w-2/3 w-full ${headAlign ? "" : "mx-auto  text-center"}`}>
          <p className="text-base/7 font-semibold text-primary capitalize">{id}</p>
          <TextDesctiption title={title} description={description} />
        </div>
        <div className="py-10">{children}</div>
        {footerFx}
      </div>
    </section>
  );
}
