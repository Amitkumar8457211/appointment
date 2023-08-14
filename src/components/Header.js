import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="header_section">
        <div className="header_main">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light pl-0 pr-0">
              <Link className="navbar-brand" href="/">
                <img
                  src="images/logo.png"
                  alt="tmp_direct_logo"
                  className="logo"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" href="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/experience">
                      Experience
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/resources">
                      Resource Center
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/contactus">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
