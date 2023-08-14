import Footer from "@/components/Footer";
import styles from "./page.module.css";
import Header from "@/components/Header";
import SmallHeader from "@/components/SmallHeader";
import SmallFooter from "@/components/SmallFooter";
import Head from "next/head";
import Slider from "@/components/HomePage/Slider";
import SmallSlider from "@/components/HomePage/SmallSlider";
import NavContent from "@/components/HomePage/NavContent";
import Testimonial from "@/components/HomePage/Testimonial";
import Updates from "@/components/HomePage/Updates";
import TopSlider from "@/components/HomePage/Slider";

export default function Home() {
  const chooseUsArr = [
    {
      heading: "Turn-Key Solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices elit id metus varius finibus. Suspendisse ac tellus eget risus suscipit egestas et ac sapien. Mauris blandit ultricies mauris eget hendrerit.",
      image: "images/turn_key_solutions.png",
    },
    {
      heading: "In-House IT Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices elit id metus varius finibus. Suspendisse ac tellus eget risus suscipit egestas et ac sapien. Mauris blandit ultricies mauris eget hendrerit.",
      image: "images/in_house_IT_evelopment.png",
    },
    {
      heading: "Multi-Application Integration",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices elit id metus varius finibus. Suspendisse ac tellus eget risus suscipit egestas et ac sapien. Mauris blandit ultricies mauris eget hendrerit.",
      image: "images/multi_application_integration.png",
    },
  ];

  const expertsArr = [
    {
      heading: "Aleen Valzac",
      text: "Allow us to provide end-to-end solutions to handle your customer traffic whether it is through calls, email, chat/sms, social media, and self-service AI.",
      image: "images/team_1.jpg",
    },
    {
      heading: "Aleen Valzac",
      text: "Allow us to provide end-to-end solutions to handle your customer traffic whether it is through calls, email, chat/sms, social media, and self-service AI.",
      image: "images/team_1.jpg",
    },
    {
      heading: "Aleen Valzac",
      text: "Allow us to provide end-to-end solutions to handle your customer traffic whether it is through calls, email, chat/sms, social media, and self-service AI.",
      image: "images/team_1.jpg",
    },
    {
      heading: "Aleen Valzac",
      text: "Allow us to provide end-to-end solutions to handle your customer traffic whether it is through calls, email, chat/sms, social media, and self-service AI.",
      image: "images/team_1.jpg",
    },
  ];

  const wideArr = [
    {
      heading: "Omnichannel Services",
      text: "Allow us to provide end-to-end solutions to handle your customer traffic whether it is through calls, email, chat/sms, social media, and self-service AI",
      image: "images/w1.png",
    },
    {
      heading: "Omnichannel Services",
      text: "Allow us to provide end-to-end solutions to handle your customer traffic whether it is through calls, email, chat/sms, social media, and self-service AI",
      image: "images/w1.png",
    },
    {
      heading: "Omnichannel Services",
      text: "Allow us to provide end-to-end solutions to handle your customer traffic whether it is through calls, email, chat/sms, social media, and self-service AI",
      image: "images/w1.png",
    },
    {
      heading: "Omnichannel Services",
      text: "Allow us to provide end-to-end solutions to handle your customer traffic whether it is through calls, email, chat/sms, social media, and self-service AI",
      image: "images/w1.png",
    },
  ];
  return (
    <>
      <Head>
        <title>TMP Direct</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
          crossorigin="anonymous"
        ></script>
      </Head>
      <TopSlider />
      <SmallSlider />
      <section className="partners_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">Improve Your Experience</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="title_dec">
                TMP Direct is an Award-Winning BPO company providing White-Glove
                service to our clients with 24x7 Omni-channel Support.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="left_img">
                <div className="slide">
                  <img
                    src="images/call_center.jpg"
                    className="img-fluid"
                    alt="Call Center"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_text">
                <h2>Customer Journey, NPS, Whiteglove</h2>
                <p>
                  The way consumers interact with their favorite brands is
                  constantly evolving; TMP Direct is prepared to assist clients
                  in the support of these ever-changing operations. TMP can
                  provide flexibility with “Best Shore” solutions by providing
                  teams in the U.S., along with a large offshore workforce
                  across the globe that provides support for voice, email, chat,
                  messaging, and fulfillment. Our support staff and custom IT
                  abilities provide our clients with a fully customizable
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partners_section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_main">
                <span className="main_text">A Wide Array of Services</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="title_dec">
                We have the experts to elevate your brand’s customer experience
              </div>
            </div>
          </div>
          <div className="row">
            {wideArr?.map((e, index) => {
              return (
                <>
                  <div className="col-md-3">
                    <div className="service_section">
                      <div className="service_icon w-25 m-auto text-center">
                        <img
                          src={e?.image}
                          className="img-fluid"
                          alt="Omnichannel Services"
                        />
                      </div>
                      <h2 className="text-center mb-3">{e?.heading}</h2>
                      <p className="text-left">{e?.text}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section class="experts_section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="image_text">
                <h1>World Class CX Experts</h1>
                <p>
                  Our team aims to protect your customers from the competition
                  using best practices in both retention and outreach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NavContent />
      <section class="counts_section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3 count1">
              <div class="count_text_section text-center">
                <h1 class="counter mb-3">12,000</h1>
                <p class="count_text">Staff worldwide</p>
              </div>
            </div>
            <div class="col-md-3 count2">
              <div class="count_text_section text-center">
                <h1 class="counter mb-3">300,000</h1>
                <p class="count_text">Satisfied customers</p>
              </div>
            </div>
            <div class="col-md-3 count3">
              <div class="count_text_section text-center">
                <h1 class="counter mb-3">34 Years</h1>
                <p class="count_text">In the industry</p>
              </div>
            </div>
            <div class="col-md-3 count4">
              <div class="count_text_section text-center">
                <h1 class="counter mb-3">6+</h1>
                <p class="count_text">Average # of services per client</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <section class="why_choose_us_section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title_main">
                <span class="main_text">Why choose Us</span>
              </div>
            </div>
          </div>
          <div class="row  mb-5">
            {chooseUsArr?.map((el, index) => {
              return (
                <>
                  <div class="col-md-4">
                    <div class="service_section">
                      <div class="service_icon w-25 m-auto text-center">
                        <img src={el?.image} class="img-fluid" />
                      </div>
                      <h2 class="text-center mb-3">{el?.heading}</h2>
                      <p class="text-left">{el?.text}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section class="our_experts_section pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title_main">
                <span class="main_text text-white">Our Experts</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="title_dec text-white">
                Meet Our Awesome & Hard working People
              </div>
            </div>
          </div>
          <div class="row">
            {expertsArr?.map((el, index) => {
              return (
                <>
                  <div class="col-md-3 mt-3">
                    <div class="experts_des">
                      <div class="service_icon m-auto text-center">
                        <img src={el?.image} class="img-fluid" />
                      </div>
                      <h2 class="text-center mb-3 blue_text">{el?.heading}</h2>
                      <p class="text-left">{el?.text}</p>
                    </div>
                  </div>
                </>
              );
            })}

            {/* <div class="col-md-3">
              <div class="experts_des">
                <div class="service_icon m-auto text-center">
                  <img src="images/team_1.jpg" class="img-fluid" />
                </div>
                <h2 class="text-center mb-3 blue_text">Aleen Valzac</h2>
                <p class="text-left">
                  We cater to all hours, service all time zones across the
                  globe, and offer multi-language support to ensure a timely
                  customer response.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="experts_des">
                <div class="service_icon m-auto text-center">
                  <img src="images/team_1.jpg" class="img-fluid" />
                </div>
                <h2 class="text-center mb-3 blue_text">Aleen Valzac</h2>
                <p class="text-left">
                  CPG, Telecom, Ecommerce, Home Improvement, Financial Services,
                  Healthcare, Insurance.
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="experts_des">
                <div class="service_icon m-auto text-center">
                  <img src="images/team_1.jpg" class="img-fluid" />
                </div>
                <h2 class="text-center mb-3 blue_text">Aleen Valzac</h2>
                <p class="text-left">
                  Our in-house development allows us to provide custom solutions
                  in application development, mobile apps, SEO, Reputation
                  Management, and telecom enhancement.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Updates />
      <section class="map_section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3015.5149376362447!2d-74.727421!3d40.904454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb4b06f723c4be5e2!2sTMP%20Direct!5e0!3m2!1sen!2sin!4v1618039746097!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}
