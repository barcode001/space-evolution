import React from "react";
import clientInfo from "../config/clientInfo";
import Hero from "components/Hero";

function Home() {
  return (
    <div>
      <h1>Welcome to {clientInfo.businessName}</h1>
      <p>{clientInfo.tagline}</p>
      <Hero />
    </div>
  );
}

export default Home;
