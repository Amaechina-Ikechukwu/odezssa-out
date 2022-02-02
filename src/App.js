import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Landing from "./components/Landing.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Seller from "./components/auth/Seller";
import Shopper from "./components/auth/Shopper";
import Home from "./components/Home/Home";
import Market from "./components/Home/Market";
import Menu from "./components/Home/Menu";
import { Box } from "@mui/system";
import Front from "./components/Home/ViewPage/Front";
import Wishlist from "./components/Home/Wishlist";
import Chats from "./components/Home/Chats";
import Profile from "./components/Alter/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { initializeApp } from "firebase/app";
import Landing2 from "./components/Landing2.jsx";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MES_ID,
//   appId: process.env.APP_ID,
// };

// const app = initializeApp(firebaseConfig);
// const domain = process.env.AUTH0_DOMAIN;
// const clientId = process.env.AUTH0_CLIENT_ID;
// var see;

function App() {
  return (
    <Router>
      <Box bgcolor={"white"} className="flex flex-col lg:flex-row  ">
        <Menu className="fixed" />

        <Box
          sx={{ overflow: "auto" }}
          className=" lg:justify-end w-full h-full "
        >
          <Switch>
            <Route path="/" component={Front} />
            <Route path="/home/market" component={Market} />
            <Route path="/home/wishlist" component={Wishlist} />
            <Route path="/home/chats" component={Chats} />
            <Route path="/user/profile" component={Profile} />
          </Switch>
        </Box>
      </Box>
    </Router>
    // const { isAuthenticated } = useAuth0();
    // const [checks, setChecks] = React.useState();
    // // React.useEffect(() => {
    // if (localStorage.getItem("saved") !== null) {
    //   setChecks(localStorage.getItem("saved"));
    // }
    //   setChecks(localStorage.getItem("saved"));
    //   console.log(setChecks(localStorage.getItem("saved")));
    // }, []);

    // if (!isAuthenticated) {
    //   return (
    //     <Router>
    //       <Switch>
    //         <Route path="/" component={Landing} />
    //       </Switch>
    //     </Router>
    //   );
    // }
    // if (checks == undefined && isAuthenticated) {
    //   return (
    //     <Router>
    //       <Switch>
    //         <Route path="/" component={Landing2} />
    //         <Route path="/signup/shopper" component={Shopper} />
    //       </Switch>
    //     </Router>
    //   );
    // }
  );
}

export default App;
