import { Box } from "@mui/system";
import React from "react";
import Front from "./ViewPage/Front";
import Menu from "./Menu";
import Market from "./Market";

export default function Home() {
  return (
    <div className="md:flex w-full">
      <Box className="md:flex hidden">
        <Menu />
      </Box>
      <Box width={"100%"}>
        <Front />
        <Market />
      </Box>
    </div>
  );
}
