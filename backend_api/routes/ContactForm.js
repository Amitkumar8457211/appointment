const { GoogleSpreadsheet } = require("google-spreadsheet");
// const express = require("express");
const fs = require("fs");
const { StatusDescription } = require("../classes/StatusDescription");
const { ResponseWrapper } = require("../classes/responseWrapper");
const RESPONSES_SHEET_ID = "1_YlS5owc6n0OfPuILLDR9JaiX9rDYvnSCWuf3-6u3vU";
const CREDENTIALS = JSON.parse(
  fs.readFileSync("./config/western-well-396305-5d14ad187d68.json")
);
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const router = express.Router();
const routers = router.post("/contactform", async (req, res) => {
  const usermail = req?.body?.email || "";
  const date = new Date().toString();
  try {
    const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: CREDENTIALS.client_email,
      private_key: CREDENTIALS.private_key,
    });
    // load the documents info
    await doc.loadInfo();
    // Index of the sheet
    let sheet = doc.sheetsByIndex[0];
    // Get all the rows
    await sheet.addRow(req.body);
    try {
      const data = await axios.get(
        "https://script.google.com/macros/s/AKfycbyI8OlSN4WTMZ9fm90_7B68FHr3I9UWBthni8SHP1XqTUG38sGJAyXWtwxh2CNmQFGg_w/exec?id=1b3jPNfRwXbmMEhqjOY_z0vBKfZVVwrrnVD8vUEQO7p4"
      );
      const mail_config = data?.data?.mail_config[0];
      const mail_template = data?.data?.mail_template?.find((e) => {
        return e.name.toUpperCase().trim() == "CONTACTUS";
      });
      const transporter = nodemailer.createTransport({
        service: mail_config?.service, // Use your email service provider here
        auth: {
          user: mail_config?.mail_id, // Your email address
          pass: mail_config?.password, // Your email password (use an app-specific password if available)
        },
      });
      const mailbody = mail_template?.body?.replace("{user}", usermail);
      const mailOptions = {
        from: mail_config?.mail_id, // Sender's email address
        to: usermail, // Recipient's email address
        subject: mail_template?.subject, // Email subject
        html: mailbody, // Email text body
      };
      // Send the email
      transporter.sendMail(mailOptions, async (error, info) => {
        const msg = error
          ? "error in sending mail"
          : "mail send success :- " + info.response;
        axios.post(
          "https://script.google.com/macros/s/AKfycbykOdKMXj0TV8a1gDbe5VT4ediDC0gFh4HJBSDrfvaMstsKN9lSeVOAg6eRhVI0XGiang/exec?id=1mR3mezNsTJrw1S77JthLVKBVTY7Htk697RqAyEeNxnA&name=mail_status",
          {
            name: mail_template?.name,
            to: usermail,
            status: msg,
            date_time: date,
          }
        );
      });
      res.status(200).json({ status: true, response: "subscription done" });
    } catch (error) {
      res.status(500).json({
        error: "An error occurred while subscribing email" + error,
      });
    }
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "An error occurred while adding email" });
  }
});
module.exports = routers;
