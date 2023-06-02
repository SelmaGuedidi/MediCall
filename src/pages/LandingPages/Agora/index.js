import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import axios from "axios";
import { useLocation } from "react-router-dom";
import app_id from "../../../generic/generic_variables";

function Agora() {
  const [videoCall, setVideoCall] = useState(true);
  const location = useLocation();
  const { appointment_id, appointment_channel, token_call } = location.state;
  const rtcProps = {
    appId: app_id,
    channel: appointment_channel, // your agora channel
    token: token_call, // use null or skip if using app in testing mode
  };
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
