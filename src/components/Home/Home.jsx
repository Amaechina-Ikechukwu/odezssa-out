import { Box } from "@mui/system";
import React from "react";
import Front from "./ViewPage/Front";
import Menu from "./Menu";
import Market from "./Market";
import { Route, Router, Switch } from "react-router-dom";

export default function Home() {
  return (
    // <Router>
    //   <Switch>
    //     <div className="md:flex w-full">
    //       <Box className="md:flex hidden">
    //         <Menu />
    //       </Box>
    //     </div>
    //     <Menu />
    // <Route path="/front" component={Front} />
    // <Route path="/market" component={Market} />
    //   </Switch>
    // </Router>
    <div className="md:flex w-full">
      {/* <Box className="md:flex hidden">
        <Menu />
      </Box> */}
      <Box width={"100%"}>
        <Front />
      </Box>
    </div>
  );
}
