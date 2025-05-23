// src/app/components/landingPage/SectionFakta.jsx

import { FaArrowRight } from "react-icons/fa6";
import { prisma } from "@/app/lib/prisma";
import BtnLinkPrimary from "../../global/btnLinkPrimary";
import TextHeadingTitle from "../../global/textHeadingTitle";
import ImageComponent from "../../global/imageComponent";
import TextBody from "../../global/textBody";

export default async function SectionFakta({ secId, idColor, bg, reverse, btnTxt, btnUrl, iconRight, databaseId }) {
  const section = await prisma.section.findUnique({
    where: {
      id: "3", // Ganti ini dengan ID section yang benar (cuid)
    },
    include: {
      listItems: {
        include: {
          entries: true,
        },
      },
    },
  });

  if (!section) {
    return <div className="text-center py-12 text-red-500">Section dengan ID tersebut tidak ditemukan.</div>;
  }

  // layout constant
  const reverseFx = reverse ? "flex-col-reverse sm:flex-row-reverse" : "flex-col-reverse sm:flex-row";
  const bgFx = bg ? bg : "bg-base-200";
  const textFx = bg === "" || bg === "bg-transparent" ? "" : "text-base-content";
  const btnFx = btnTxt ? (
    <div className="mt-20">
      <BtnLinkPrimary btnTxt={btnTxt} btnUrl={btnUrl} iconRight={iconRight} />
    </div>
  ) : (
    ""
  );
  const textBodyFx = description ? <TextBody description={description} /> : null;
  const textIdFx = idColor ? "text-slate-500" : "text-amber-300";

  return (
    <section className={`py-20 ${bgFx} rounded-bl-3xl w-full`} id={id}>
      <div className="container lg:w-8/12 px-8 mx-auto">
        <div className={`flex gap-20 ${reverseFx} items-center`}>
          <div className="w-full" data-aos="fade-up">
            <p className={`font-semibold capitalize ${textIdFx}`}>{secId.replace(/-/g, " ")}</p>
            <div className={`${textFx} grid grid-1 gap-5`}>
              <TextHeadingTitle title={title} iconTitle={null} titleCase={2} h={2} />
              <span className=" opacity-75"> {textBodyFx}</span>
              {btnFx}
            </div>
          </div>
          <div className="w-full" data-aos="flip-left">
            <ImageComponent imageUrl={image} imageAlt={title} width="100%" priority={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
