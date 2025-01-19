import React from "react";
import Content from "../global/content";
import Hero from "./hero";
import Services from "./services";
import Grid2colums from "../global/grid2colums";
import ImageComponent from "../global/imageComponent";
import hero from "../../../../public/images/landingPage/hero/bgHero2.webp";
import TextDesctiption from "../global/textDesctiption";
import Grid1colums from "../global/grid1colums";

export default function LayoutLandingPage({ children }) {
  return (
    <Content>
      <Hero />
      <Grid1colums
        col1={<TextDesctiption title="Lorem ipsum" description="Lorem ipsum dolor sit amet gargantuar adilipsing elit" id="lorem" />}
        col2={
          <div className="grid grid-cols-3 gap-4">
            <ImageComponent src={hero} alt="hero" width={300} height={300} priority={false} />
            <ImageComponent src={hero} alt="hero" width={300} height={300} priority={false} />
            <ImageComponent src={hero} alt="hero" width={300} height={300} priority={false} />
          </div>
        }
      />
      <Grid1colums
        col1={
          <TextDesctiption
            title="Choose the right plan for you"
            description="Choose an affordable plan thats packed with the best features for engaging your audience, creating customer loyalty, and driving sales."
            id="layanan"
          />
        }
        col2={
          <div className="grid grid-cols-1 gap-4">
            <Services />
          </div>
        }
      />
    </Content>
  );
}
