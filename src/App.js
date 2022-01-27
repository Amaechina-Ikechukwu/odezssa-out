import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Seller from "./components/auth/Seller";
import Shopper from "./components/auth/Shopper";
import Home from "./components/Home/Home";
import Market from "./components/Home/Market";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" exact component={Landing} />
        <Route path="/signup/seller" component={Seller} />
        <Route path="/signup/shopper" component={Shopper} />
      </Switch>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/market" component={Market} />
      </Switch>
    </Router>
  );
}

export default App;
