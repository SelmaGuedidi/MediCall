import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
const rtcProps = {
  appId: "ba5ba81ef7c841ab91c83cb9d992e832",
  channel: "demo", // your agora channel
  token:
    "007eJxTYPBeGL2ArWL+JH2/RzbxZ9W/Tt4/20rqR7nE57/OgTqK8cIKDEmJpkmJFoapaebJFiaGiUmWhskWxslJlimWlkapFsZGFYqJKQ2BjAy32qSYGBkgEMRnYUhJzc1nYAAAAvIeGQ==", // use null or skip if using app in testing mode
};
function Agora() {
  const [videoCall, setVideoCall] = useState(true);
  const callbacks = {
    EndCall: () => {
      setVideoCall(false);
      window.location.replace("http://localhost:3000/pages/landing-pages/MySpace");
    },
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}

export default Agora;