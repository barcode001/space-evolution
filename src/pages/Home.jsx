import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "components/Hero";
import ServicesOverview from "pages/ServicesOverview";
import AboutUs from "pages/AboutUs";
import Gallery from "components/Gallery";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness", // or GeneralContractor
  "@id": "https://www.spaceevolutionhouston.com/#business",
  name: "Space Evolution",
  url: "https://www.spaceevolutionhouston.com/",
  telephone: "346-479-1647",
  areaServed: "Houston, TX",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  image: "https://www.spaceevolutionhouston.com/images/logo.png",
  priceRange: "$$",
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.spaceevolutionhouston.com/#website",
  url: "https://www.spaceevolutionhouston.com/",
  name: "Space Evolution",
  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://www.spaceevolutionhouston.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

function Home() {
  return (
    <>
      <Helmet>
        <title>Space Evolution | Remodeling & Painting in Houston, TX</title>
        <meta
          name="description"
          content="Houston remodeling and painting pros. Kitchens, bathrooms, custom cabinets, drywall, exterior painting, patios, fencing, electrical & plumbing coordination."
        />
        <link rel="canonical" href="https://www.spaceevolutionhouston.com/" />
        {/* Open Graph / Twitter */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Space Evolution — Houston Remodeling"
        />
        <meta
          property="og:description"
          content="Kitchens, bathrooms, painting, patios, fencing and more."
        />
        <meta
          property="og:url"
          content="https://www.spaceevolutionhouston.com/"
        />
        <meta
          property="og:image"
          content="https://www.spaceevolutionhouston.com/images/og-home.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(siteJsonLd)}</script>
      </Helmet>

      <Hero />

      <section id="services">
        <ServicesOverview />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <CallToAction />
    </>
  );
}

export default Home;
