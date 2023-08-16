import Sidebar from "@/components/Services/Sidebar";
import React from "react";

export default function page() {
  return (
    <>
      <section className="banner_section resource_center_page inner_page">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0">
              <span className="page_title">IT Services</span>
            </div>
          </div>
        </div>
      </section>
      <Sidebar />
    </>
  );
}
