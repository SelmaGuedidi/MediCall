import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import axios from "axios";
import { useLocation } from "react-router-dom";
const rtcProps = {
  appId: "fbc881668b3f40fda8550f47004670fd",
  channel: "demo", // your agora channel
  token:
    "007eJxTYHiZ81PgfvZmn4MFT7Kiyp6xtN4UP3jR+76ecZe/aEOYb6ICQ1pSsoWFoZmZRZJxmolBWkqihampQZqJuYGBiZk5kG8sUJXSEMjIIFNUxcLIAIEgPgtDSmpuPgMDAFcaHjs=", // use null or skip if using app in testing mode
};
function Agora() {
  const [videoCall, setVideoCall] = useState(true);
  const location = useLocation();
  const { appointment_id } = location.state;
  const callbacks = {
    EndCall: () => {
      setVideoCall(false);
      axios
        .delete(`http://localhost:3001/consultation/${appointment_id}`)
        .then((response) => {
          // Traitement de la réponse ici
          console.log(response);
          // Rediriger l'utilisateur vers une autre page ou effectuer d'autres actions
        })
        .catch((error) => {
          // Gérer les erreurs ici
          console.log(error);
        });
      window.location.href = "/pages/landing-pages/MySpace";
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
