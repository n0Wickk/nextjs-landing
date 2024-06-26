import React from "react";

import Hero from "./_hero";
import SocialProof from "./_social-proof";
import { HeroScroll } from "./_hero-scroll";
import Testimonial from "./_testimonial";
import Features from "./_features";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroScroll />
      <SocialProof />

      <Testimonial />

      <Features />
    </main>
  );
}
