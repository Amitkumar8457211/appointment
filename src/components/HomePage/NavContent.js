import React from "react";

export default function NavContent() {
  return (
    <>
      <section class="consulting_section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title_main">
                <span class="main_text">Get your free consulting </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="title_dec">
                We have the best experts to elevate your business to the next
                level, try is and you will see!
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-4">
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Customer Service
                </a>
                <a
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Lead Management
                </a>
                <a
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Cross-Selling
                </a>
                <a
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Retention
                </a>
                <a
                  class="nav-link"
                  id="v-pills-NPS-tab"
                  data-toggle="pill"
                  href="#v-pills-NPS"
                  role="tab"
                  aria-controls="v-pills-NPS"
                  aria-selected="false"
                >
                  C-Sat / NPS
                </a>
                <a
                  class="nav-link"
                  id="v-pills-analytics-tab"
                  data-toggle="pill"
                  href="#v-pills-analytics"
                  role="tab"
                  aria-controls="v-pills-analytics"
                  aria-selected="false"
                >
                  Analytics & Insights
                </a>
                <a
                  class="nav-link"
                  id="v-pills-it-tab"
                  data-toggle="pill"
                  href="#v-pills-it"
                  role="tab"
                  aria-controls="v-pills-it"
                  aria-selected="false"
                >
                  IT
                </a>
                <a
                  class="nav-link"
                  id="v-pills-industries-tab"
                  data-toggle="pill"
                  href="#v-pills-industries"
                  role="tab"
                  aria-controls="v-pills-industries"
                  aria-selected="false"
                >
                  Industries Served
                </a>
              </div>
            </div>
            <div class="col-md-9 col-8">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  Aenean massa. Cum sociis natoque penatibus et magnis dis
                  parturient montes
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  Aenean massa. Cum sociis natoque penatibus et magnis dis
                  parturient montes
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  Aenean massa. Cum sociis natoque penatibus et magnis dis
                  parturient montes
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  Aenean massa. Cum sociis natoque penatibus et magnis dis
                  parturient montes
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-NPS"
                  role="tabpanel"
                  aria-labelledby="v-pills-NPS-tab"
                >
                  Aenean massa. Cum sociis natoque penatibus et magnis dis
                  parturient montes
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-analytics"
                  role="tabpanel"
                  aria-labelledby="v-pills-analytics-tab"
                >
                  {" "}
                  massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-industries"
                  role="tabpanel"
                  aria-labelledby="v-pills-industries-tab"
                >
                  {" "}
                  Cum sociis natoque penatibus et magnis dis parturient montes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
