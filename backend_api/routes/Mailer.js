const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const router = express.Router();

function saveData(date, usermail) {
  return new Promise(async function (resolve, reject) {
    try {
      const data = await axios.post(
        "https://script.google.com/macros/s/AKfycbykOdKMXj0TV8a1gDbe5VT4ediDC0gFh4HJBSDrfvaMstsKN9lSeVOAg6eRhVI0XGiang/exec?id=1MUcv7zAkFu9TXnSM_lV-sxXTndCzvoPR0rv481JQWk8&name=get_mail",
        {
          date_time: date,
          email: usermail,
        }
      );

      if (data.data == "Success") {
        resolve({
          status: true,
        });
      } else {
        reject("Error in insert into sheet");
      }
    } catch (error) {
      reject(error);
    }
  });
}

function getmailconfig() {
  return new Promise(async function (resolve, reject) {
    try {
      const data = await axios.get(
        "https://script.google.com/macros/s/AKfycbyI8OlSN4WTMZ9fm90_7B68FHr3I9UWBthni8SHP1XqTUG38sGJAyXWtwxh2CNmQFGg_w/exec?id=1b3jPNfRwXbmMEhqjOY_z0vBKfZVVwrrnVD8vUEQO7p4"
      );
      const mail_config = data?.data?.mail_config[0];
      const mail_template = data?.data?.mail_template?.find((e) => {
        return e.name.toUpperCase().trim() == "NEWSLETTER";
      });

      if (mail_config && mail_template) {
        resolve({
          mail_config: mail_config,
          mail_template: mail_template,
        });
      } else {
        reject("Error in api called");
      }
    } catch (error) {
      reject(error);
    }
  });
}

const routers = router.post("/getmailnew", async (req, res) => {
  const usermail = req?.body?.email || "";
  const date = new Date().toString();
  try {
    const allResult = await Promise.allSettled([
      getmailconfig(),
      saveData(date, usermail),
    ]);
    if (
      !allResult[0].status == "fulfilled" &&
      !allResult[1].status == "fulfilled"
    ) {
      return res.status(500).json({ error: "something went wrong" });
    }
    const { mail_config, mail_template } = allResult[0].value;
    const mailbody = mail_template?.body?.replace("{user}", usermail);
    // Define the email message
    const mailOptions = {
      from: mail_config?.mail_id, // Sender's email address
      to: usermail, // Recipient's email address
      subject: mail_template?.subject, // Email subject
      html: mailbody, // Email text body
    };

    const transporter = nodemailer.createTransport({
      service: mail_config?.service, // Use your email service provider here
      auth: {
        user: mail_config?.mail_id, // Your email address
        pass: mail_config?.password, // Your email password (use an app-specific password if available)
      },
    });

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
      //   if (data.data != "Success") {
      //     res.status(500).json({ error: "Error in insert into sheet" });
      //   } else {
      //     res.status(200).json({ status: true, response: "subscription done" });
      //   }
    });
    res.status(200).json({ status: true, response: "subscription done" });
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ error: "An error occurred while adding email" });
  }
});

module.exports = routers;

// Create a transporter object using your SMTP server settings
// const transporter = nodemailer.createTransport({
//   service: "Gmail", // Use your email service provider here
//   auth: {
//     user: "chatgptuser413@gmail.com", // Your email address
//     pass: "jpsyxclentxldiuu", // Your email password (use an app-specific password if available)
//   },
// });

// // Define the email message
// const mailOptions = {
//   from: "chatgptuser413@gmail.com", // Sender's email address
//   to: "er.shyam413@gmail.com", // Recipient's email address
//   subject: "Hello from Node.js", // Email subject
//   html: "<h1>Hello from Node.js</h1><p>This is an HTML email sent from Node.js second times.</p>", // Email text body
// };

// // Send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error("Error sending email:", error);
//   } else {
//     console.log("Email sent:", info.response);
//   }
// });
