import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-m3cv9i3m.us.auth0.com";
const clientId = "z3oLpjFqz81GGEAN4cOcjaHPTvaEaY6e";
ReactDOM.render(
  // <Auth0Provider
  //   domain={domain}
  //   clientId={clientId}
  //   redirectUri={window.location.origin}
  // >1
  // <>
  //   {" "}
  //   <App />
  // </>,

  // //  </Auth0Provider>
  // document.getElementById("root")
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
