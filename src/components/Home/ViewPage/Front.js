import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Vendors from "./Vendors";

export default function Front() {
  return (
    <Box width={"100%"}>
      <Box
        display={"grid"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
      >
        <Box width={"100%"}>
          <TextField
            id="outlined-basic"
            label="search market"
            variant="outlined"
            margin="normal"
            sx={{ width: "70vw" }}
          />
        </Box>
      </Box>
      <Box className="">
        <Vendors />
      </Box>
    </Box>
  );
}
