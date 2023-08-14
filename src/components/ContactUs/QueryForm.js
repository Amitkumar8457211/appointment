import React from "react";

export default function QueryForm() {
  return (
    <>
      <form className="mt-5 p-3 bg-light">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label>Company</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Title</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label>Address</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>City</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-md-4">
            <label>State</label>
            <select class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label>Zip</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Phone</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label>Email</label>
            <input type="type" class="form-control" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label>Company website</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group col-md-6">
            <label>How Can We Help You?</label>
            <select class="custom-select">
              <option selected>Choose...</option>
              <option>Sales Support Services</option>
              <option>Customer Care Services</option>
              <option>Inbound</option>
              <option>Outbound</option>
              <option>Fulfillment & Distribution</option>
              <option>E-Mail & Web Services</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label>Tell us how we can help you</label>
            <textarea class="form-control" rows="2"></textarea>
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
