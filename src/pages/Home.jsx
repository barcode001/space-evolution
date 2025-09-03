import Hero from "components/Hero";
import React from "react";
import ServicesOverview from "pages/ServicesOverview";
import AboutUs from "pages/AboutUs";
import Gallery from "components/Gallery";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <Contact />
    </>
  );
}

export default Home;
