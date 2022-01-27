import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";
import { shadows } from "@mui/system";

export default function Vendors() {
  return (
    <Box
      width={"100%"}
      className="p-2 flex items-center justify-center  md:justify-start"
    >
      <Box className="h-4/5 w-full md:w-1/4 md:1/4  shadow-md rounded-md">
        <Box
          height={"120px"}
          className="bg-gradient-to-r from-red-light to-blue-light "
        ></Box>

        <Box height={"120px"} bgcolor={"white"} padding={2}>
          <Typography variant="h5">Bag</Typography>
          <Typography variant="h6">Price : $20</Typography>
        </Box>
      </Box>
    </Box>
  );
}
