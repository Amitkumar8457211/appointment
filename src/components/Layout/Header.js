"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { initializeApp } from "firebase/app";
import {onMessage,getToken,getMessaging} from "firebase/messaging";
import localforage from "localforage";

export default function Header() {
  const [hasMounted, setHasMounted] = useState(false);
  const arr = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Blogs", href: "/blogs" },
    { title: "Contact Us", href: "/contactus" },
  ];

  let location = usePathname();
  location = location.split("/")[1];

  const firebaseConfig = {
    apiKey: "AIzaSyAJnv_W0JUO3RRjb7t_Ar1DWUmNKpJY-CY",
    authDomain: "tmpwdirect-a3756.firebaseapp.com",
    projectId: "tmpwdirect-a3756",
    storageBucket: "tmpwdirect-a3756.appspot.com",
    messagingSenderId: "27634757272",
    appId: "1:27634757272:web:1a4793ff1fda760039aaed",
    measurementId: "G-XYESEH4K45"
  };

  const init = async (messaging) => {
    try {
      const tokenInLocalForage = await localforage.getItem("fcm_token");
      if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
      }
      const status = await Notification.requestPermission();
      if (status && status === "granted") {
        console.log("Permission graanted");
        const fcm_token = await getToken(messaging,{
          vapidKey: "BIaY1Y-JfSFqwu3W7UWXnJU9qb5t6HTyMQu9n7r8XdYezFZh1wVo2CuZafBXVfINyBjZMSMagheZslipYbXkZoc",
        });
        if (fcm_token) {
          localforage.setItem("fcm_token", fcm_token);
          return fcm_token;
        }
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const setToken = async (messaging) => {
    try {
      const token = await init(messaging);
      console.log("token", token);
      if (token) {
        onMessage(messaging, (payload) => {
          console.log('Message received. ', payload);
        });
      }
    }catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      setToken(messaging);
      navigator.serviceWorker.register("/firebase-messaging-sw.js").then((registration) => {
        console.log("Service Worker registered with scope:",registration);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });

      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
      });

    }
    setHasMounted(true);
  },[]);

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
                <span>Working Hours: 8am - 6pm</span>            
                { (hasMounted) ? 
                <div style={{width:'300px',height:'40px'}}>
                  <div style={{display:"inline-flex"}}>
                    <div className="gcse-search"></div>
                    <script async src="https://cse.google.com/cse.js?cx=91f320d4a5fb7484c"></script>
                  </div>
                </div> : <Skeleton  width={300} style={{height:'35px'}} count={1} />
                }          
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
