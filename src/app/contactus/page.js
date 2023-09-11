import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export async function generateMetadata() {
  try {
    const api = `http://127.0.0.1:8000/contact/all`;

    const res = await fetch(api, { next: { revalidate: 30 } });
    const seores = await res.json();

    return {
      title: seores?.response?.seo?.[0]?.title,
      description: seores?.response?.seo?.[0]?.desc,
      keywords: seores?.response?.seo?.[0]?.keyword,
      og_image: seores?.response?.seo?.[0]?.og_image,
    };
  } catch (error) {
    console.log("error", error);
  }
}

const QueryForm = dynamic(() => import("@/components/ContactUs/QueryForm"), {
  loading: () => <h1> loading </h1>,
});

export default async function page() {
  let data = {};
  try {
    const api = `http://127.0.0.1:8000/contact/all`;

    const res = await fetch(api, { next: { revalidate: 30 } });

    data = await res.json();
    if (data.status) {
      data = data.response;
    }
  } catch (error) {
    console.log("error", error);
  }

  return (
    <>
      <section
        className="banner_section contact_page inner_page"
        style={{
          backgroundRepeat: "no-repeat",
          height: "400px",
          backgroundImage: `url(${data?.contact_us?.[0]?.banner_image})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-0">
              <span className="page_title">{data?.contact_us?.[0]?.title}</span>
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
