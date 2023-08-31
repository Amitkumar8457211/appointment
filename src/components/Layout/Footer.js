import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {
  return (
    <>
      <section className="footer_section">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="footer_details_text">
                  <div className="footer_text">
                    <p>
                      <Image
                        src="/images/footer_logo.png"
                        alt="tmp direct logo"
                        className="img-fluid footer_logo"
                        unoptimized
                        height={100}
                        width={100}
                      />
                      <br />
                      Get in touch for a consultation to find out what
                      strategies will ensure the best experience for your
                      business and customers!
                    </p>
                    <p>
                      <a className="footer_readmore" href="/contactus">
                        Get in Touch <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_details_text">
                  <div className="footer_text">
                    <h2 className="footer_title">Business Hours</h2>
                    <div className="footer_widget">
                      <h6 className="mb-2">Opening Days :</h6>
                      <div className="mb-2">
                        TMP Corporate Off. : 9am – 5pm EST
                      </div>
                      <div className="mb-2">Customer Service Hours: 24/7</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_details_text">
                  <div className="footer_text">
                    <h2 className="footer_title">Practice Areas</h2>
                    <div className="footer_widget">
                      <div className="footer_menu_container">
                        <ul className="footer_menu">
                          <li className="footer_menu_item">
                            <Link href="/">Home</Link>
                          </li>
                          <li className="footer_menu_item">
                            <Link href="/about">About Us</Link>
                          </li>
                          <li className="footer_menu_item">
                            <Link href="/services">Services</Link>
                          </li>
                          <li className="footer_menu_item">
                            <Link href="/blog">Blogs</Link>
                          </li>
                          <li className="footer_menu_item">
                            <Link href="/contactus">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FooterNewsletter />
            </div>
          </div>
        </footer>
      </section>
      <section className="footer_botton_section">
        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-4 footer_text">TMP Direct</div>
              <div className="col-md-6 col-8 text-right footer_text footer_text2">
                &copy; 2021 TMP Direct All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
