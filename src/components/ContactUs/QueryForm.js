"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";

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
  const [loading, setLoading] = useState(false);

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

  const submitQuery = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/contactform/contactform`,
        {
          name: ContactDetails.name,
          company: ContactDetails.company,
          title: ContactDetails.title,
          address: ContactDetails.address,
          city: ContactDetails.city,
          state: ContactDetails.state,
          zip: ContactDetails.zip,
          phone: ContactDetails.phone,
          email: ContactDetails.email,
          company_website: ContactDetails.companyWebsite,
          help_support: ContactDetails.support,
          message: ContactDetails.help,
        }
      );

      if (res.data.message == "Contact Form submitted successfully") {
        setTimeout(async () => {
          await document.getElementById("resetbtn")?.click();
        }, 100);
        Swal.fire({
          icon: "success",
          html: res.data.message,
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        Swal.fire({
          icon: "warning",
          html: res.data.message,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      console.log(error);
      await document.getElementById("resetbtn")?.click();
    } finally {
      setLoading(false);
      await document.getElementById("resetbtn")?.click();
    }
  };
  return (
    <>
      <form onSubmit={submitQuery} className="mt-5 p-3 bg-light">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Name</label>
            <input
              type="text"
              required
              name={ContactDetails.name}
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
              name={ContactDetails.company}
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
              name={ContactDetails.title}
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
              name={ContactDetails.address}
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
              name={ContactDetails.city}
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
              name={ContactDetails.state}
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
              name={ContactDetails.zip}
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
              name={ContactDetails.phone}
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
              name={ContactDetails.email}
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
              name={ContactDetails.companyWebsite}
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
              name={ContactDetails.support}
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
              name={ContactDetails.help}
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
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          <>
            <div className="d-flex justify-content align-items-center">
              <button
                type="submit"
                className="btn btn-primary text-start"
                style={{ marginRight: "20px" }}
              >
                Send
              </button>
              <button
                type="reset"
                id="resetbtn"
                className="btn btn-danger text-end"
              >
                Reset
              </button>
            </div>
          </>
        )}
      </form>
    </>
  );
}
