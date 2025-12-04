import React from "react";
import HeroKalamana from "./HeroKalamana";
import FaktaKalamana from "./FaktaKalamana";
import FenomenaKalamana from "./FenomenaKalamana";
import SolusiKalamana from "./SolusiKalamana";
import HadistKalamana from "./HadistKalamana";
import SeriusKalamana from "./SeriusKalamana";
import ManfaatKalamana from "./ManfaatKalamana";
import PentingKalamana from "./PentingKalamana";
import LayananKalamana from "./LayananKalamana";
import AlurKalamana from "./AlurKalamana";
import KeinginanKalamana from "./KeinginanKalamana";
import BonusKalamana from "./BonusKalamana";
import ClaimBonusKalamana from "./ClaimBonusKalamana";
import KalamanaDB from "../../database/KalamanaDB";

const dataKalamana = KalamanaDB;
const totalBonus = KalamanaDB.bonus.item.reduce((total, item) => total + item.price, 0);

export default function layoutLandingPage({ waNo }) {
  return (
    <>
      <HeroKalamana btnTxt="lihat fakta" data={dataKalamana.hero} linkTarget1="#fakta" />
      <div className="myContent space-y-30 py-30">
        <FaktaKalamana secId="fakta" data={dataKalamana.fakta} />
        <FenomenaKalamana secId="fenomena" data={dataKalamana.fenomena} />
      </div>
      <SolusiKalamana secId="solusi" data={dataKalamana.solusi} />
      <HadistKalamana secId="hadist" data={dataKalamana.hadist} />
      <SeriusKalamana secId="serius" data={dataKalamana.serius} />
      <div className="myContent space-y-30 py-30">
        <ManfaatKalamana secId="manfaat" data={dataKalamana.manfaat} />
        <PentingKalamana secId="penting" data={dataKalamana.penting} />
      </div>
      <LayananKalamana secId="mulai-sekarang" data={dataKalamana.layanan} />
      <div className="myContent space-y-30 py-30">
        <AlurKalamana secId="alur" data={dataKalamana.alur} />
        <KeinginanKalamana secId="keinginan" linkTarget1="#mulai-sekarang" linkTarget2="#" waNumber={waNo} data={dataKalamana.keinginan} />
        <BonusKalamana secId="bonus" data={dataKalamana.bonus} totalBonus={totalBonus} />
      </div>
      <ClaimBonusKalamana secId=" claim bonus" linkTarget1="#mulai-sekarang" data={dataKalamana.claimBonus} />
    </>
  );
}
