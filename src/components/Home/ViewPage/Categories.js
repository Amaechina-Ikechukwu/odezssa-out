import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";
import { shadows } from "@mui/system";
import "./vendors.css";

export default function Categories() {
  return (
    <Box>
      <Typography className="p-1">Categories</Typography>
      <Box
        width={"100%"}
        className=".card md:p-2 flex items-center justify-center  md:justify-start"
      >
        <Box className=" w-4/5 h-3/4 md:h-1/4 md:w-1/4 shadow-md rounded-md">
          <Box
            height={"40px"}
            className="bg-gradient-to-r from-red-light to-blue-light "
          ></Box>

          <Box bgcolor={"white"} padding={2}>
            <Typography variant="h5">Bag</Typography>
            <Typography variant="h6">Price : $20</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
