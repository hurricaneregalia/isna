import React from "react";
import Content from "../global/content";
import Hero from "./hero";
import Services from "./services";
export default function LayoutLandingPage({ children }) {
  return (
    <Content>
      <Hero />
      <Services />
    </Content>
  );
}
