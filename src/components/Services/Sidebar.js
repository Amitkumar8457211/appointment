"use client";
import React, { useLayoutEffect, useState } from "react";

const Sidebar = () => {
  const [SidebarActive, setSidebarActive] = useState({
    mainText: "",
    leftImage: "",
    rightText: "",
  });

  console.log(SidebarActive?.rightText);

  var string1;
  string1 = SidebarActive?.rightText.split(".");

  useLayoutEffect(() => {
    document.getElementById(0).click();
  }, []);

  const sidebarArr = [
    {
      name: "Customer Care",
      mainText: "Customer Centricity",
      leftImage: "images/consumer_packaged_goods.jpg",
      rightText:
        "Our products and managed services make us a driven organization with a digital technology focus. Flexibility in ways to engage with the customers are available.Global Talent allows for a successful blend of on-site,off-shore and blended engagements",
    },
    {
      name: "Sales Support",
      mainText: "Investment in Talent and Resources",
      leftImage: "images/senior_living.jpg",
      rightText:
        "Our carefully vetted staff of experts have high competency in all technologies we have available to you.Home grown algorithms can be made to match our resources with the customer’s need.High retention rate of staff gives our team the familiarity with our services to allow for more efficient development and maintenance.",
    },
    {
      name: "IT Services",
      mainText: "Delivery Excellence",
      leftImage: "images/e_commerce.jpg",
      rightText:
        "Seamless solution integration allows your current systems to integrate and/or transfer data to ours.  PCI and SOC compliance reinforce our security and best practices in managing our technology and your privacy.",
    },
    {
      name: "E-Commerce & Fulfillment",
      mainText: "Domain Expertise",
      leftImage: "images/telecommunication.jpg",
      rightText:
        " We have a strong focus on emerging technologies. As digital outreach evolves in chat and self-service offerings, TMP is able to keep up and learn these new features as they develop.",
    },
    {
      name: "Industries",
      mainText: "There is no Content yet!",
      leftImage: "",
      rightText:
        "Content will be populated afterwards when the admin in logged in",
    },
  ];
  return (
    <section className="main_section mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <aside className="left_sidebar">
              <ul className="sidebar_menu">
                {sidebarArr?.map((evale, index) => {
                  return (
                    <li key={index}>
                      <a
                        key={index}
                        className={
                          SidebarActive === evale?.name
                            ? "sidebar-active"
                            : "sidebar"
                        }
                        onClick={() => {
                          setSidebarActive({
                            ...SidebarActive,
                            mainText: evale?.mainText,
                            leftImage: evale?.leftImage,
                            rightText: evale?.rightText,
                          });
                        }}
                        id={index}
                        style={{ cursor: "pointer" }}
                      >
                        {evale?.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
          <div className="col-md-9">
            <div className="right_content solution_content">
              {/* Customer Centricity */}
              <div className="title_main text-left">
                <span className="main_text">{SidebarActive?.mainText}</span>
              </div>
              <div className="left_img">
                <div className="slide">
                  <img
                    src={SidebarActive?.leftImage}
                    className="img-fluid"
                    alt="Image could not be Loaded"
                  />
                </div>
              </div>
              <div className="right_text mb-5">
                <p>{string1[0]}</p>
                <p>{string1[1]}</p>
                <p>{string1[2]}</p>
              </div>

              {/* Investment in Talent and Resources */}
              {/* <div className="title_main text-left">
                <span className="main_text">
                  Investment in Talent and Resources
                </span>
              </div>
              <div className="left_img">
                <div className="slide">
                  <img
                    src="images/senior_living.jpg"
                    className="img-fluid"
                    alt="Investment in Talent and Resources"
                  />
                </div>
              </div>
              <div className="right_text mb-5">
                <p>
                  Our carefully vetted staff of experts have high competency in
                  all technologies we have available to you.
                </p>
                <p>
                  Home grown algorithms can be made to match our resources with
                  the customer’s need.
                </p>
                <p>
                  High retention rate of staff gives our team the familiarity
                  with our services to allow for more efficient development and
                  maintenance.
                </p>
              </div>

             
              <div className="title_main text-left">
                <span className="main_text">Delivery Excellence</span>
              </div>
              <div className="left_img">
                <div className="slide">
                  <img
                    src="images/e_commerce.jpg"
                    className="img-fluid"
                    alt="Delivery Excellence"
                  />
                </div>
              </div>
              <div className="right_text mb-5">
                <p>
                  Seamless solution integration allows your current systems to
                  integrate and/or transfer data to ours.
                </p>
                <p>
                  PCI and SOC compliance reinforce our security and best
                  practices in managing our technology and your privacy.
                </p>
              </div>

             
              <div className="title_main text-left">
                <span className="main_text">Domain Expertise</span>
              </div>
              <div className="left_img">
                <div className="slide">
                  <img
                    src="images/telecommunication.jpg"
                    className="img-fluid"
                    alt="Domain Expertise"
                  />
                </div>
              </div>
              <div className="right_text">
                <p>
                  We have a strong focus on emerging technologies. As digital
                  outreach evolves in chat and self-service offerings, TMP is
                  able to keep up and learn these new features as they develop.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
