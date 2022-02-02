import { Box } from "@mui/system";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";
import { shadows } from "@mui/system";
import "./vendors.css";

export default function Vendors() {
  return (
    <Box className="w-full flex flex-col items-center ">
      <Box
        width={"100%"}
        className="flex flex-col items-center justify-around  w-full h-full"
      >
        <Box
          width={"70%"}
          className="  flex bg-gradient-to-r from-red-light to-blue-light rounded-lg shadow-md  items-center justify-center  blur-lg mb-3 "
        >
          <Box className=" w-full h-4/5  rounded-lg">
            <Box height={"100px"} className=""></Box>

            <Box
              bgcolor="rgba(0,0,0,.25)"
              className="w-full justify-end text-white rounded-b-lg"
              padding={2}
            >
              <Typography variant="h5">Bag</Typography>
              <Typography variant="h6">Price : $20</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          width={"70%"}
          className="  flex bg-gradient-to-r from-red-light to-blue-light rounded-lg shadow-md  items-center justify-center  blur-lg mb-3"
        >
          <Box className=" w-full h-4/5  rounded-lg">
            <Box height={"100px"} className=""></Box>

            <Box
              bgcolor="rgba(0,0,0,.25)"
              className="w-full justify-end text-white rounded-b-lg"
              padding={2}
            >
              <Typography variant="h5">Bag</Typography>
              <Typography variant="h6">Price : $20</Typography>
            </Box>
          </Box>
        </Box>

        <Box
          width={"70%"}
          className="  flex bg-gradient-to-r from-red-light to-blue-light rounded-lg shadow-md  items-center justify-center  blur-lg mb-3"
        >
          <Box className=" w-full h-4/5  rounded-lg">
            <Box height={"100px"} className=""></Box>

            <Box
              bgcolor="rgba(0,0,0,.25)"
              className="w-full justify-end text-white rounded-b-lg"
              padding={2}
            >
              <Typography variant="h5">Bag</Typography>
              <Typography variant="h6">Price : $20</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
