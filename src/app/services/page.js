import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
const Sidebar = dynamic(() => import("@/components/Services/Sidebar"), {
  loading: () => (
    <div className="container-fluid">
      <Skeleton
        enableAnimation={true}
        style={{ width: "80%", height: "300px" }}
      />
    </div>
  ),
});

export const metadata = {
  title: "Services Section",
  description: "Service Section",
};

export default async function page() {
  let data = {};
  try {
    const api = `http://127.0.0.1:8000/services/services`;

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
      {data?.banner?.length ? (
        data.banner.map((e, ind) => {
          return (
            <section
              className="banner_section resource_center_page inner_page"
              key={ind}
              style={{ backgroundImage: `url(${e?.image})` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 p-0">
                    <span className="page_title">
                      {e?.title || <Skeleton count={1} />}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <div className="container-fluid">
          <Skeleton
            enableAnimation={true}
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      )}
      <Suspense
        fallback={
          <div className="container-fluid">
            <Skeleton
              enableAnimation={true}
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        }
      >
        <Sidebar />
      </Suspense>
    </>
  );
}
