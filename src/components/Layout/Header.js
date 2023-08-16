"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const arr = [
    { rajesh: "Services", href: "/services" },
    { rajesh: "Experience", href: "/experience" },
    { rajesh: "About Us", href: "/about" },
    { rajesh: "Blogs", href: "/blogs" },
    { rajesh: "Resource Center", href: "/resources" },
    { rajesh: "Contact Us", href: "/contactus" },
  ];

  let location = usePathname();
  location = location.split("/")[1];

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
                  {arr?.map((el, i) => {
                    return (
                      <>
                        <li className="nav-item">
                          <Link
                            className={
                              location === el.href.split("/")[1]
                                ? "nav-link active"
                                : "nav-link"
                            }
                            href={el?.href}
                          >
                            {el?.rajesh}
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
