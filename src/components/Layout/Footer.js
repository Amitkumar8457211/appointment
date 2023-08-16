import React from "react";

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
                      <img
                        src="images/footer_logo.png"
                        alt="tmp direct logo"
                        className="img-fluid footer_logo"
                      />
                      <br />
                      Get in touch for a consultation to find out what
                      strategies will ensure the best experience for your
                      business and customers!
                    </p>
                    <p>
                      <a className="footer_readmore" href="#">
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
                            <a href="#">Services</a>
                          </li>
                          <li className="footer_menu_item">
                            <a href="#">Experience</a>
                          </li>
                          <li className="footer_menu_item">
                            <a href="#">About Us</a>
                          </li>
                          <li className="footer_menu_item">
                            <a href="#">Resource Center</a>
                          </li>
                          <li className="footer_menu_item">
                            <a href="#">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_details_text">
                  <div className="footer_text">
                    <h2 className="footer_title">Newsletter</h2>
                    <div className="footer_widget">
                      <p>
                        For more information about our company, kindly provide
                        your e-mail address.
                      </p>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            Join
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
