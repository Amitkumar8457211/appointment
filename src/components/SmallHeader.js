import React from "react";

export default function SmallHeader() {
  return (
    <>
      <header class="header_section">
        <div class="header_top">
          <div class="container-fluid">
            <div class="connect_us">
              <div class="social_icon">
                <i class="fa fa-phone"></i>
                <span>Call us: 1234 - 5678 - 9809</span>
                <i class="fa fa-envelope"></i>
                <span> Email us: ourmailo@copary.com </span>
                <i class="fa fa-clock-o"></i>
                <span class="">Working Hours: 8am - 6pm</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
