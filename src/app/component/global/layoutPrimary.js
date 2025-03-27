import React from "react";
import TextDesctiption from "./textDesctiption";

export default function LayoutPrimary({ children, id, title, description, footer, headAlign, bg, anime, iconTitle }) {
  const footerFx = footer ? <div className="">{footer}</div> : null;
  const textFx = bg === "" || bg === "bg-transparent" ? "" : "text-neutral-content";
  const animFX = anime ? "fade-up" : "";
  return (
    <section className={`py-20 ${bg} rounded-bl-3xl`} id={id}>
      <div className={`container lg:w-8/12 px-8 mx-auto`}>
        <div className={`sm:w-2/3 w-full ${headAlign ? "" : "mx-auto  text-center"}`}>
          <p className="text-base/7 font-semibold text-primary capitalize">{id.replace(/-/g, " ")}</p>
          <div className={textFx}>
            <TextDesctiption title={title} description={description} iconTitle={iconTitle} />
          </div>
        </div>
        <div className="py-10" data-aos={animFX}>
          {children}
        </div>
        {footerFx}
      </div>
    </section>
  );
}
