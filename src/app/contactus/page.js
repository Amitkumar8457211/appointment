import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export const metadata = {
  title: "Contact Us",
  description: "Contact us Form",
};

const QueryForm = dynamic(() => import("@/components/ContactUs/QueryForm"), {
  loading: () => <h1> loading </h1>,
});

export default function page() {
  return (
    <>
      <section
        className="banner_section contact_page inner_page"
        style={{ backgroundRepeat: "no-repeat" }}
      >
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
                <Suspense
                  fallback={
                    <Skeleton
                      enableAnimation={true}
                      style={{ width: "auto", height: "300px" }}
                    />
                  }
                >
                  <QueryForm />
                </Suspense>

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
