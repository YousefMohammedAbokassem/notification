// App.js
import React, { useEffect, useState } from "react";
import { generateToken, messaging } from "./notifications/firebase";
import { onMessage } from "firebase/messaging";
// import { generateToken, messaging } from "./notifications/firebase";
// import { onMessage } from "firebase/messaging";
const App = () => {
  const [notification, setNotification] = useState({});
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      setNotification(payload.notification);
      console.log(payload)
    });
    console.log(notification);
  }, []);
  useEffect(() => {}, []);
  return (
    <div>
      app <br />
      {notification?.body}
      <br />
      {notification?.title}
    </div>
  );
};

export default App;
