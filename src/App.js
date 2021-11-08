import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Seller from "./components/auth/Seller";
import Shopper from "./components/auth/Shopper";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/welcome" exact component={Landing} />
        <Route path="/signup/seller" component={Seller} />
        <Route path="/signup/shopper" component={Shopper} />
      </Switch>
    </Router>
  );
}

export default App;
