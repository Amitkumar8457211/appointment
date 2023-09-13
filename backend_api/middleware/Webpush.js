// import webpush from "web-push";

// const sendNotification = async (res) => {
//   const fakeDatabase = [];

//   const notificationPayload = {
//     notification: {
//       title: "Abuzz Oxfordcaps",
//       body: "Booking started",
//       icon: "assets/icons/abuzzOC_logo.png",
//     },
//   };

//   const vapidKeys = webpush.generateVAPIDKeys();

//   console.log(vapidKeys, "vapidkeys");

//   const promises = [];
//   fakeDatabase.forEach((subscription) => {
//     // console.log(JSON.stringify(subscription));
//     promises.push(
//       webpush.sendNotification(
//         subscription,
//         JSON.stringify(notificationPayload)
//       )
//     );
//   });
//   Promise.all(promises)
//     .then(() => res.sendStatus(200))
//     .catch((error) => {
//       console.log(error);
//       process.exit(1);
//     });
// };

// export default sendNotification;

var http = require("http");
const webpush = require("web-push");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client

    // https://d3v.one/vapid-key-generator/
    const vapidKeys = {
      publicKey:
        "BNWzZNndbICZy10yvXjQdSwcM2dKIE_el5R7mlehmVO8-hDW_3U_UnuZC32jdXjlXKjFiwmOzv-iS2W8ULSqgYk",
      privateKey: "D_ZkfnlQuaw9cudPW1bTsOMI6nk6Q8H5pGBLk0fU1as",
    };
    //setting our previously generated VAPID keys
    webpush.setVapidDetails(
      "mailto:you@example.com",
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );
    //function to send the notification to the subscribed device
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
        console.log(err.body);
      });

    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
