import React from "react";
import IdSection from "./ui/IdSection";
import Title from "./ui/Title";
import Wrapper from "./ui/Wrapper";
import ListItemBonus from "./ui/ListItemBonus";
import BonusIcon from "./ui/BonusIcon";
import Bodytext from "./ui/BodyText";

export default function BonusKalamana({ secId, data }) {
  return (
    <Wrapper>
      <div className="flex flex-col-reverse sm:flex-row gap-10 items-center ">
        <div id="text" className="w-full space-y-5 ">
          <div className=" text-center sm:w-8/12 w-full space-y-5 sm:mb-15 mb-5 mx-auto">
            <IdSection secId={secId ? secId : "id-belum-di-set"} />
            <BonusIcon icon="🔥" />
            <Title text={data.title} h={2} css="text-3xl" />
            <Bodytext text={data.description} />
          </div>
          <ListItemBonus data={data.item} />
        </div>
      </div>
    </Wrapper>
  );
}
