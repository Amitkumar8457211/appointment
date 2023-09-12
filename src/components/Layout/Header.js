"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

export default function Header() {
  const arr = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Blogs", href: "/blogs" },
    { title: "Contact Us", href: "/contactus" },
  ];

  let location = usePathname();
  location = location.split("/")[1];

  return (
    <>
      <header className="header_section">
        <div className="header_top">
          <div className="container-fluid">
            <div className="connect_us">
              <div className="social_icon">
                <i className="fa fa-phone"></i>
                <span>Call us: 1234 - 5678 - 9809</span>
                <i className="fa fa-envelope"></i>
                <span> Email us: support@altruistindia.com</span>
                <i className="fa fa-clock-o"></i>
                <span className="">Working Hours: 8am - 6pm</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header_section">
        <div className="header_main">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light pl-0 pr-0">
              <Link className="navbar-brand" href="/" title="/">
                <Image
                  width={45}
                  height={45}
                  src="/images/logo.png"
                  title="/images/logo.png"
                  alt="tmp_direct_logo"
                  unoptimized
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
                  {arr?.map((el, i) => {
                    return (
                      <li className="nav-item" key={i}>
                        <Link
                          className={
                            location === el.href.split("/")[1]
                              ? "nav-link active"
                              : "nav-link"
                          }
                          title={el?.href}
                          href={el?.href}
                        >
                          {el?.title || <Skeleton count={1} width={"50%"} />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                {/* <button className=" btn btn-outline-primary btn-sm">
                  Search
                </button> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
