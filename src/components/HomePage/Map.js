import React from "react";

export default function Map() {
  return (
    <>
      <section className="map_section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3015.5149376362447!2d-74.727421!3d40.904454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4b06f723c4be5e2!2sTMP%20Direct!5e0!3m2!1sen!2sin!4v1618039746097!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
