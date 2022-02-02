import { Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Categories from "./Categories";
import Promoted from "./Promoted";
import Vendors from "./Vendors";

export default function Front() {
  return (
    <Box
      className=" w-full h-screen p-1"
      bgcolor="white"
      sx={{ overflow: "hidden" }}
    >
      <Box
        height="10%"
        className="hidden md:hidden lg:block flex flex-row items-center justify-center w-full "
      >
        <TextField
          id="outlined-basic"
          label="search market"
          variant="outlined"
          margin="normal"
          sx={{ width: "70vw" }}
        />
      </Box>

      <Box
        className="h-full pt-2 flex flex-col "
        // sx={{
        //   display: "grid",

        //   gap: 1,
        // }}
      >
        <Box
          height="45%"
          sx={
            {
              // borderBottomWidth: 10,
              // borderBottomColor:
              //   "linear-gradient(180deg, rgba(255,255,255,.80) 35%, rgba(15,15,15,0.5186449579831933) 68%)",
              // borderBottomRightRadius: 10,
              // borderBottomLeftRadius: 10,
            }
          }
          className="flex flex-col p-1 mb-2 border-b-2 border-slate-200 rounded-b-md"
        >
          <Box className="flex  w-full items-start justify-start">
            <Typography className="p-1 ">Vendors</Typography>
          </Box>
          <Box height={"100%"} sx={{ overflow: "auto" }}>
            <Vendors />
          </Box>
        </Box>
        <Box className="flex flex-col  h-full">
          <Box height="35%" className="flex flex-col mb-2">
            <Box className="flex  w-full items-start justify-start">
              <Typography className="p-1 ">Caterogries</Typography>
            </Box>
            <Box height={"100%"} sx={{ overflow: "auto" }}>
              <Categories />
            </Box>
          </Box>
          {/* <Box height="30%">
            <Categories />
          </Box>
          <Box height="30%">
            <Promoted />
          </Box> */}
          <Box height="35%" className="flex flex-col ">
            <Box className="flex  w-full items-start justify-start">
              <Typography className="p-1 ">Promoted</Typography>
            </Box>
            <div className=" ">
              <Promoted />
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
