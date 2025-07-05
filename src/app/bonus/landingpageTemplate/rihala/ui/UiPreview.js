"use client";

import React from "react";
import { sampleData } from "./sampleDataRihala";

// Komponen-komponen UI reusable
import TitleRihala from "./TitleRihala";
import SubtitleRihala from "./SubtitleRihala";
import BodyTextRihala from "./BodyTextRihala";
import ImageComponentRihala from "./ImageComponentRihala";
import ButtonPrimaryRihala from "./ButtonPrimaryRihala";
import ButtonSecondaryRihala from "./ButtonSecondaryRihala";
import ButtonAccentRihala from "./ButtonAccentRihala";
import FeatureCardRihala from "./FeatureCardRihala";
import TestimonialCardRihala from "./TestimonialCardRihala";
import ProductCardRihala from "./ProductCardRihala";
import IconWithTextRihala from "./IconWithTextRihala";
import SectionWrapperRihala from "./SectionWrapperRihala";
import HeroCtaRihala from "./HeroCtaRihala";
import NavbarRihala from "./NavbarRihala";
import FooterRihala from "./FooterRihala";
import BadgeRihala from "./BadgeRihala";
import ListBulletPointRihala from "./ListBulletPointRihala";
import PackageCardRihala from "./PackageCardRihala";
import GuaranteeBoxRihala from "./GuaranteeBoxRihala";
import FAQItemRihala from "./FAQItemRihala";

export default function UiPreview() {
  const { title, subtitle, bodyText, image, buttons, featureCard, testimonial, productCard, iconWithText, badge, listBullet, packageCard, guaranteeBox, faq, navLinks } = sampleData;

  return (
    <div className="bg-base-100 text-base-content">
      <NavbarRihala links={navLinks} />

      <SectionWrapperRihala secId="hero" aos="fade-up">
        <h2 className="text-lg font-bold mb-2">HeroCtaRihala</h2>
        <HeroCtaRihala
          title={title}
          subtitle={subtitle}
          primaryText={buttons.primary.text}
          primaryLink={buttons.primary.href}
          secondaryText={buttons.secondary.text}
          secondaryLink={buttons.secondary.href}
        />
      </SectionWrapperRihala>

      <SectionWrapperRihala secId="ui-kit" aos="fade-up">
        <h2 className="text-xl font-bold mb-6">📦 UI Components Preview</h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold">TitleRihala</h3>
            <TitleRihala text={title} />
          </div>

          <div>
            <h3 className="font-semibold">SubtitleRihala</h3>
            <SubtitleRihala text={subtitle} />
          </div>

          <div>
            <h3 className="font-semibold">BodyTextRihala</h3>
            <BodyTextRihala text={bodyText} />
          </div>

          <div>
            <h3 className="font-semibold">ImageComponentRihala</h3>
            <ImageComponentRihala src={image.src} alt={image.alt} width={1000} height={600} aos="flip-left" />
          </div>

          <div>
            <h3 className="font-semibold">ButtonPrimaryRihala</h3>
            <ButtonPrimaryRihala text={buttons.primary.text} href={buttons.primary.href} />
          </div>

          <div>
            <h3 className="font-semibold">ButtonSecondaryRihala</h3>
            <ButtonSecondaryRihala text={buttons.secondary.text} href={buttons.secondary.href} />
          </div>

          <div>
            <h3 className="font-semibold">ButtonAccentRihala</h3>
            <ButtonAccentRihala text={buttons.accent.text} href={buttons.accent.href} />
          </div>

          <div>
            <h3 className="font-semibold">FeatureCardRihala</h3>
            <FeatureCardRihala title={featureCard.title} description={featureCard.description} iconSrc={featureCard.icon} />
          </div>

          <div>
            <h3 className="font-semibold">TestimonialCardRihala</h3>
            <TestimonialCardRihala name={testimonial.name} testimonial={testimonial.text} photoSrc={testimonial.image} role={testimonial.role} />
          </div>

          <div>
            <h3 className="font-semibold">ProductCardRihala</h3>
            <ProductCardRihala name={productCard.name} description={productCard.description} price={productCard.price} imageSrc={productCard.imageSrc} />
          </div>

          <div>
            <h3 className="font-semibold">IconWithTextRihala</h3>
            <IconWithTextRihala iconSrc={iconWithText.iconSrc} text={iconWithText.text} />
          </div>

          <div>
            <h3 className="font-semibold">BadgeRihala</h3>
            <BadgeRihala text={badge.text} color={badge.color} />
          </div>

          <div>
            <h3 className="font-semibold">ListBulletPointRihala</h3>
            <ListBulletPointRihala points={listBullet.points} />
          </div>

          <div>
            <h3 className="font-semibold">PackageCardRihala</h3>
            <PackageCardRihala title={packageCard.title} price={packageCard.price} features={packageCard.features} />
          </div>

          <div>
            <h3 className="font-semibold">GuaranteeBoxRihala</h3>
            <GuaranteeBoxRihala title={guaranteeBox.title} description={guaranteeBox.description} />
          </div>

          <div>
            <h3 className="font-semibold">FAQItemRihala</h3>
            <FAQItemRihala question={faq.question} answer={faq.answer} />
          </div>
        </div>
      </SectionWrapperRihala>

      <FooterRihala />
    </div>
  );
}
