// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCpZyDMuuWdciJmEsUIxlWf4B2y8Wi_M0A",
  authDomain: "taha-app-89e5c.firebaseapp.com",
  projectId: "taha-app-89e5c",
  storageBucket: "taha-app-89e5c.appspot.com",
  messagingSenderId: "785396185410",
  appId: "1:785396185410:web:ea580d83e6ad54da3ef0db",
  measurementId: "G-HF7RJ64DSR",
};

//  {
//   apiKey: "AIzaSyCpZyDMuuWdciJmEsUIxlWf4B2y8Wi_M0A",
//   authDomain: "taha-app-89e5c.firebaseapp.com",
//   projectId: "taha-app-89e5c",
//   storageBucket: "taha-app-89e5c.appspot.com",
//   messagingSenderId: "785396185410",
//   appId: "1:785396185410:web:72a0cc49180ec63c3ef0db",
//   measurementId: "G-7ZEYWGFFPM"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const premission = await Notification.requestPermission();
  console.log(premission);
  if (premission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BD2Bk9al7-Yhnct2vvWDF9MUr5h9snZtYT14kX86--3LyQfEL7m4a5T1QPxAjiAcjzXTRFglnucQh-MC2Jhwj2g",
      // taha
      // vapidKey:
      //   "BD2Bk9al7-Yhnct2vvWDF9MUr5h9snZtYT14kX86--3LyQfEL7m4a5T1QPxAjiAcjzXTRFglnucQh-MC2Jhwj2g",
    });
    localStorage.setItem("fcm_token", token);
    console.log(token);
  }
};
