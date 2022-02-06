import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Landing2 from "./components/Landing.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
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
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "./callers/profile";

import firebase from "firebase";
import Landing from "./components/Landing2.jsx";
import { fabClasses, getNativeSelectUtilityClasses } from "@mui/material";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo78KCs1zV7tt6E5Dn5JzhX5FkbjnMPFo",
  authDomain: "odezssa.firebaseapp.com",
  projectId: "odezssa",
  storageBucket: "odezssa.appspot.com",
  messagingSenderId: "535185765117",
  appId: "1:535185765117:web:c515bf3ad7606a91df4494",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  if (user) {
    var sub = user.sub.split("|");
    var id = sub[1];
    var isTrue;
  }
  const dispatch = useDispatch();
  let history = useHistory();
  const Push = () => {
    history.push("/signup");
    // window.location.assign("http://localhost:3000/signup");
  };
  const move = () => {
    history.push("/login");
  };

  const [checks, setChecks] = React.useState();
  const [see, setsee] = React.useState(false);
  const checkStore = () => {
    firebase
      .firestore()
      .collection("shopper")
      .doc("prof")
      .collection("profile")
      .doc(id)
      .get()
      .then((snapshot) => {
        isTrue = snapshot.exists;
        console.log(isTrue);
        setChecks(isTrue);
        localStorage.setItem("saved", "saved");
      });
  };

  const send = (data) => {
    dispatch(getProfile({ user: data[0] }));
    // console.log(Object.values(data));
  };

  React.useEffect(() => {
    console.log(checks);

    checkStore();

    if (isTrue === false) {
      Push();
    }

    // firebase
    //   .firestore()
    //   .collection("shopper")
    //   .doc("prof")
    //   .collection("profile")
    //   .doc(id)
    //   .get()
    //   .then((snapshot) => {
    //     var data = snapshot.data();
    //     // var dataarr = Object.entries(data);
    //     if (snapshot.exists) {
    //       dispatch(getProfile({ user: data.Fullname }));
    //       console.log(dispatch(getProfile({ user: data.Fullname })));
    //     }

    //     console.log(data);
    //     // console.log(`${dataarr[0][0]} ${dataarr[0][1]}`);
    //   });
  }, [move, Push]);

  if (!isAuthenticated) {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Landing2} />
          <Route path="/signup" component={Landing} />
          <Route path="/shopper" component={Shopper} />
          <Route path="/seller" component={Seller} />
        </Switch>
      </Router>
    );
  }

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Landing2} />
        <Route path="/signup" component={Landing} />
        <Route path="/shopper" component={Shopper} />
        <Route path="/seller" component={Seller} />
      </Switch>

      <Box bgcolor={"white"} className="flex flex-col lg:flex-row  ">
        {checks === false ? null : <Menu className="fixed" />}
        <Box
          sx={{ overflow: "auto" }}
          className=" lg:justify-end w-full h-full "
        >
          <Switch>
            <Route path="/home" component={() => <Front checks={checks} />} />

            <Route path="/market" component={Market} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/chats" component={Chats} />
            <Route path="/user/profile" component={Profile} />
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
