import QueryForm from "@/components/ContactUs/QueryForm";
import Head from "next/head";
import React from "react";

export default function page() {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>
      <section className="banner_section contact_page inner_page">
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0">
              <span className="page_title">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about_content pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Contact Us</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="right_text">
                <p>
                  TMP Direct
                  <br />
                  600 International Drive, Mt Olive, NJ 07828, United States
                </p>
                <p>
                  To learn more about TMP Direct Products and Services, please
                  complete this form and a member of our team will get back to
                  you shortly, or you can reach us at 877-477-7845.
                </p>
                <QueryForm />
                <p>We look forward to hearing from you!</p>
                <p>
                  For information on career opportunities with TMP Direct,
                  please visit our Resource Center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
