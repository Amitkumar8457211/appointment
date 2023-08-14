import Head from "next/head";
import React from "react";

export default function page() {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>
      <section class="banner_section about_page inner_page">
        <div class="container">
          <div class="row">
            <div class="col-md-12 p-0">
              <span class="page_title">About Us</span>
            </div>
          </div>
        </div>
      </section>

      <section class="about_content pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title_main">
                <span class="main_text">For over 30 years</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="left_img">
                <div class="slide">
                  <img src="images/30_years.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right_text">
                <p>
                  For over 30 years, TMP has kept a promise to our clients and
                  customers: White Glove Service. Within our BPO framework, our
                  company advocates for your brand in all its unique
                  characteristics. The longevity of our business is met by
                  continued excellence with our team, constant evolution of our
                  products and services, and trust with our clients through our
                  transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about_content pt-5 pb-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title_main">
                <span class="main_text">Our People</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="right_text">
                <p>
                  Our People are our most valuable resource to maintain
                  high-quality service. It helps to have staff you know; our
                  retention rate is double the industry average! Our vetting
                  process ensures we have the staff with the highest integrity
                  available to meet our goals and our global outreach ensures we
                  have the right staff in the right location. We promote a
                  continuous learning environment to reinforce professional
                  development to ensure our team sustains excellence.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="left_img">
                <div class="slide">
                  <img src="images/our_people.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about_content pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title_main">
                <span class="main_text">Our Products</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="left_img">
                <div class="slide">
                  <img src="images/our_products.jpg" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right_text">
                <p>
                  Our Products will incorporate all your custom needs: CRM
                  Tools, IT Infrastructure, and Telecom platforms ensure that
                  TMP provide a complete end-to-end service that is hands free
                  for our clients! Whether your business requires 5 or 500
                  agents, we have a custom solution to meet your exact
                  requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
