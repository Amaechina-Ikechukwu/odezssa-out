import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar } from "@mui/material";

export default function Seller() {
  return (
    <Box
      class="flex flex-col w-screen h-screen p-1 lg:p-5"
      component="form"
      noValidate
      autoComplete="off"
    >
      <h1 className="text-black text-5xl p-3 ">esteemed entrepreneur</h1>

      <div class="flex flex-col lg:flex-row justify-start w-full lg:px-4">
        <div class="flex flex-col  items-start justify-center lg:w-2/4 lg:border-purple-200 lg:border-2 p-3 lg:mr-8 rounded-lg lg:border-dashed w-full ">
          <div className="lg:w-4/5">
            <TextField
              id="outlined-basic"
              label="full name"
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <TextField
              id="outlined-basic"
              label="email address"
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <TextField
              id="outlined-basic"
              label="residence address"
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <TextField
              id="outlined-basic"
              label="choose a label name"
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <TextField
              id="outlined-basic"
              label="categories of items to be sold"
              variant="outlined"
              margin="normal"
              fullWidth
            />

            <TextField
              id="outlined-basic"
              label="phone number"
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
        </div>

        <div class="lg:ml-8 lg:border-purple-200 lg:border-dashed rounded-lg lg:border-2 p-3 lg:w-2/4 w-full">
          <div className="lg:w-4/5 flex flex-col items-center justify-center w-full">
            <div className="w-full">
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                margin="normal"
                fullWidth
              />

              <TextField
                id="outlined-basic"
                label="confirm password"
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>
            <div className="lg:ml-24 w-full flex flex-col items-center">
              <Avatar sx={{ width: 150, height: 150 }}>O</Avatar>
              <button className="h-10 rounded-lg lg:w-3/5 w-4/5 p-6 mt-2  flex items-center justify-center bg-gray-700">
                <h1 class="text-white text-2xl md:text-3xl ">upload image</h1>
              </button>
              <button className="h-10 rounded-lg w-4/5 p-8 mt-14 flex items-center justify-center bg-gradient-to-r from-red-light to-blue-light">
                <h1 class="text-white text-4xl  ">continue</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
