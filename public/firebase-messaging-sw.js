// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries

// import { firebaseConfig } from "../src/notifications/firebase";

// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyASpBQ3HNwrTN2E_uuaREOh74mwjVIN-k0",
  authDomain: "note-4f3d6.firebaseapp.com",
  projectId: "note-4f3d6",
  storageBucket: "note-4f3d6.appspot.com",
  messagingSenderId: "820621990963",
  appId: "1:820621990963:web:820c83b89452bd25eed746",
});

//  {
//   apiKey: "AIzaSyCpZyDMuuWdciJmEsUIxlWf4B2y8Wi_M0A",
//   authDomain: "taha-app-89e5c.firebaseapp.com",
//   projectId: "taha-app-89e5c",
//   storageBucket: "taha-app-89e5c.appspot.com",
//   messagingSenderId: "785396185410",
//   appId: "1:785396185410:web:72a0cc49180ec63c3ef0db",
//   measurementId: "G-7ZEYWGFFPM"
// };

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
