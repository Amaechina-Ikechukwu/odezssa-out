import logo from "./logo.svg";
import "./App.css";
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

function App() {
  return (
    <Router>
      <Box className=" ">
        <Box className="md:flex ">
          <Menu />
        </Box>

        <Switch className="h-full">
          <Route path="/welcome" exact component={Landing} />
          <Route path="/signup/seller" component={Seller} />
          <Route path="/signup/shopper" component={Shopper} />
          <Route path="/home/shops" component={Front} />
          <Route path="/home/market" component={Market} />
          <Route path="/home/wishlist" component={Wishlist} />
          <Route path="/home/chats" component={Chats} />
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
