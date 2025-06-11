import HeroImage from "../lpComponentGlobal/HeroImage";
import HeroText from "../lpComponentGlobal/HeroText";
import Navbar from "../lpComponentGlobal/Navbar";

export default function Halvora({ landingPage }) {
  return (
    <>
      <Navbar brandName={landingPage.name} navBarBg="" />
      <HeroText />
      <HeroImage />
      <div className="p-10">
        <h1 className="text-3xl font-bold">{landingPage.name}</h1>
        <p>{landingPage.description}</p>
      </div>
    </>
  );
}
