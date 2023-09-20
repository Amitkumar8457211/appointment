"use client";
import React, { useEffect, useState,useRef } from "react";
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsverified] = useState(false)
  const [dataa, setDataa] = useState({
    services: [],
  });

  const recaptchaRef = useRef(null);

  const getAllData = async () => {
    try {
      // setLoading(true);
      const api = `http://127.0.0.1:8000/contact/all`;

      const res = await axios(api, { next: { revalidate: 30 } });

      if (res.data.status == true) {
        setDataa({
          services: res?.data?.response?.data_options,
        });
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      // setLoading(false);
    }
  };

  const handleCaptchaSubmission = async(token) => {
    console.log("token",token);
    const res = await axios.get(`http://127.0.0.1:8000/captcha/verify?token=${token}`)
    setIsverified(res.data.status);
  }

  useEffect(() => {
    getAllData();
    setHasMounted(true);
  }, []);

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

      if (res.data.status == true) {
        setTimeout(async () => {
          await document.getElementById("resetbtn")?.click();
        }, 100);
        Swal.fire({
          icon: "success",
          html: res.data.response,
          timer: 3000,
          timerProgressBar: true,
        });
      } else {
        Swal.fire({
          icon: "warning",
          html: res.data.response,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      console.log(error);
      await document.getElementById("resetbtn")?.click();
      Swal.fire({
        icon: "error",
        html: "Something went wrong ! Please try again later",
        timer: 3000,
        timerProgressBar: true,
      });
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
            {dataa?.services?.length > 0 ? (
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

                {dataa?.services?.map((el, ind) => {
                  return (<option key={`${ind}state`}>{el?.state}</option>);
                })}
              </select>
            ) : (
              <Skeleton
                style={{
                  marginTop: "40px",
                  marginLeft: "40px",
                }}
                count={1}
                height={"40px"}
                width={"59%"}
              />
            )}
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
            {dataa?.services?.length > 0 ? (
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
                {dataa?.services?.map((val, index) => {
                  return (<option key={`${index}services`}>{val?.help}</option>);
                })}
              </select>
            ) : (
              <Skeleton
                style={{
                  marginTop: "40px",
                  marginLeft: "40px",
                }}
                count={1}
                height={"40px"}
                width={"59%"}
              />
            )}
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
        <div className="form-row">
          <div className="form-group col-md-12">     
            { (hasMounted) ? 
              <div style={{width:'300px',height:'80px'}}>
                <ReCAPTCHA
                  sitekey="6Lc-MDwoAAAAAFhjsKHxYIlslYWdFBfsvrpRUrwR"
                  ref={recaptchaRef}
                  onChange={handleCaptchaSubmission}
                />            
              </div> : <Skeleton  width={300} style={{height:'35px'}} count={1} />
            }      
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
                disabled={!isVerified}
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
