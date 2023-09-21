const express = require("express");
const app = express();
const cors = require("cors");
const webpush = require("web-push");

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;
// const db = require("./models");
require("dotenv").config();
// Router

//Home routes
const HomeCarouselRouter = require("./routes/HomeCarousel");
const Blogsrouter = require("./routes/Blogs");
const servicesrouter = require("./routes/Services");
const Resourcerouter = require("./routes/Resource");
const AboutSection = require("./routes/About");
const GetmailId = require("./routes/Getmail");
const ContactForm = require("./routes/ContactForm");
const Articlerouter = require("./routes/Article");
const Mailerrouter = require("./routes/Mailer");
const ContactusPage = require("./routes/ContactusPage");
const CaptchaVerify = require("./routes/CaptchaVerify");

app.use("/home", HomeCarouselRouter);
app.use("/blogs", Blogsrouter);
app.use("/services", servicesrouter);
app.use("/resources", Resourcerouter);
app.use("/about", AboutSection);
app.use("/getmail", GetmailId);
app.use("/contactform", ContactForm);
app.use("/article", Articlerouter);
app.use("/getmailnew", Mailerrouter);
app.use("/contact", ContactusPage);
app.use("/captcha", CaptchaVerify);
//Home routes

app.get("/webpush", (req, res) => {
  const vapidKeys = webpush.generateVAPIDKeys();

  // https://d3v.one/vapid-key-generator/

  //setting our previously generated VAPID keys
  webpush.setVapidDetails(
    "mailto:you@example.com",
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );

  try {
    webpush
      .sendNotification(
        {
          endpoint:
            "https://fcm.googleapis.com/fcm/send/dYgbVHz_yNw:APA91bGbvuFegI96pyNgPcWxoz2s4z50BQhZA9sBUj4Xp3IpisDoi9OUJEhOUxRQ-70JFnIkAu2QLhtNmIHRX9rptx6EhYlrI9cmEdadJmx1mUoaDQFKuf2HqXtCD2cj4dtBzRtTZ-wW",
          expirationTime: null,
          keys: {
            p256dh:
              "BCJTmp_EsgpClFYLmsST1TAf68oApX7-UM-qSrEgNoA3TMZ6TKVL1jQObCLbhdss7vS7MWqcEbcLGO7ey7iHo-c",
            auth: "fiYIXGPPvTNnBMDf5iehPA",
          },
        },
        JSON.stringify({
          actions: [
            {
              action: "https://3fcf70f63155.ngrok.io/mobile#/pregame/2",
              title: "Take it",
              icon: "https://icons.iconarchive.com/icons/ampeross/qetto/128/icon-developer-icon.png",
            },
          ],
          icon: "https://icons.iconarchive.com/icons/ampeross/qetto/128/icon-developer-icon.png",
          badge:
            "https://3fcf70f63155.ngrok.io/images/android_notification_icon.png",
          image:
            "https://d1.awsstatic.com/GameDev%20Site%20Redesign/Lumberyard/Downloads/lumberyard_download_dyn-veg_page-header.2b03b5c24c726a878a53ffd6d42eca0265099b4e.jpg",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
          title: "My Notification!",
          body: "Hello everybody! This is a web push notification sent from the server, that may contain a promo message for the users.",
        })
      )
      .catch(function (err) {
        console.log(err.body, "error");
      });
  } catch (error) {
    console.log(err.body, "error");
  }
  //function to send the notification to the subscribed device

  res.end();
});

app.post("/startsubscription", (req, res) => {
  const fakeDatabase = [];
  const subscription = req.body;
  subscription ? fakeDatabase.push(subscription) : res.send(subscription);
});

app.listen(port, () => {
  try {
    console.log(`Server running on port http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
});
// });
