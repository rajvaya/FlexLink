
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";





console.log(import.meta.env.VITE_DOMAIN)

ReactDOM.render(
  <Auth0Provider
    // domain={process.env.domain}
    // clientId={process.env.clientID}
    domain={import.meta.env.VITE_DOMAIN}
    clientId={import.meta.env.VITE_CLIENTID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);