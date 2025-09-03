import React from "react";
import clientInfo from "../config/clientInfo";

export default function BusinessInfo() {
  return (
    <section className="business-info">
      <h3>Proudly Serving</h3>
      <p>
        {clientInfo.location.city}, {clientInfo.location.state} and surrounding
        areas
      </p>
      <p>
        Call us at{" "}
        <a href={`tel:${clientInfo.contact.phone}`}>
          {clientInfo.contact.phone}
        </a>
      </p>
    </section>
  );
}
