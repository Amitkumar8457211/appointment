import React from "react";

export default function SmallHeader() {
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
                <span> Email us: support@altruistindia.com </span>
                <i className="fa fa-clock-o"></i>
                <span className="">Working Hours: 8am - 6pm</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
