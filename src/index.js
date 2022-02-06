import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import profileReducer from "./callers/profile";

const domain = "dev-m3cv9i3m.us.auth0.com";
const clientId = "z3oLpjFqz81GGEAN4cOcjaHPTvaEaY6e";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={"http://localhost:3000/home"}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
