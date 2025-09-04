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

      <section id="services">
        {" "}
        <ServicesOverview />
      </section>
      <section id="about">
        {" "}
        <AboutUs />{" "}
      </section>
      <section id="gallery">
        {" "}
        <Gallery />
      </section>
      <section id="testimonials">
        {" "}
        <Testimonials />
      </section>
      <CallToAction />
      <section id="contact">
        {" "}
        <Contact />{" "}
      </section>
    </>
  );
}

export default Home;
