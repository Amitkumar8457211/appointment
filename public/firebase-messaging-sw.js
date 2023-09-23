// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAJnv_W0JUO3RRjb7t_Ar1DWUmNKpJY-CY",
  authDomain: "tmpwdirect-a3756.firebaseapp.com",
  projectId: "tmpwdirect-a3756",
  storageBucket: "tmpwdirect-a3756.appspot.com",
  messagingSenderId: "27634757272",
  appId: "1:27634757272:web:1a4793ff1fda760039aaed",
  measurementId: "G-XYESEH4K45"
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: './logo.png',
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js");

// const firebaseConfig = {
//     apiKey: "AIzaSyAJnv_W0JUO3RRjb7t_Ar1DWUmNKpJY-CY",
//     authDomain: "tmpwdirect-a3756.firebaseapp.com",
//     projectId: "tmpwdirect-a3756",
//     storageBucket: "tmpwdirect-a3756.appspot.com",
//     messagingSenderId: "27634757272",
//     appId: "1:27634757272:web:1a4793ff1fda760039aaed",
//     measurementId: "G-XYESEH4K45"
//   };

// const app = firebase.initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// messaging.onBackgroundMessage((payload) => {
//     console.log(
//       '[firebase-messaging-sw.js] Received background message ',
//       payload
//     );
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//       body: payload.notification.body,
//       icon: './logo.png',
//     };
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });