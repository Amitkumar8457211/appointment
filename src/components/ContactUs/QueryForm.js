"use client";
import React, { useState } from "react";

export default function QueryForm() {
  const [ContactDetails, setContactDetails] = useState({
    name: "",
    company: "",
    title: "",
    address: "",
    city: "",
    state: null,
    zip: "",
    phone: "",
    email: "",
    companyWebsite: "",
    support: null,
    help: "",
  });

  const StateArr = ["HR", "HP", "AP", "J&K", "TN"];
  const serviceSelect = [
    "Sales Support Services",
    "Customer Care Services",
    "Inbound",
    "Outbound",
    "Fulfillment & Distribution",
    "E-Mail & Web Services",
    "Other",
  ];

  return (
    <>
      <form onSubmit={""} className="mt-5 p-3 bg-light">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Name</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  name: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Company</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  company: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Title</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  title: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Address</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  address: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  city: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-4">
            <label>State</label>
            <select
              className="form-control"
              required
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  state: e.target.value,
                });
              }}
            >
              <option value="">Please Select :-</option>
              {StateArr?.map((el, ind) => {
                return (
                  <>
                    <option>{el}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label>Zip</label>
            <input
              type="number"
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  zip: e.target.value,
                });
              }}
              onKeyDown={(e) =>
                ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
              }
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Phone</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  phone: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              required
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  email: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Company website</label>
            <input
              type="text"
              required
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  companyWebsite: e.target.value,
                });
              }}
              className="form-control"
            />
          </div>
          <div className="form-group col-md-6">
            <label>How Can We Help You?</label>
            <select
              className="custom-select"
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  support: e.target.value,
                });
              }}
              required
            >
              <option value="">Select any One :-</option>
              {serviceSelect?.map((val, index) => {
                return (
                  <>
                    <option>{val}</option>
                  </>
                );
              })}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Tell us how we can help you</label>
            <textarea
              className="form-control"
              onChange={(e) => {
                setContactDetails({
                  ...ContactDetails,
                  help: e.target.value,
                });
              }}
              rows="2"
            ></textarea>
          </div>
        </div>
        {/* Other form fields go here */}
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </>
  );
}
