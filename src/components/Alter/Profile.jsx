import { Avatar, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Profile() {
  return (
    <Box className="h-screen">
      <Box>
        <Box
          height={"30vh"}
          className="flex flex-col items-center justify-center bg-gradient-to-r from-red-light to-blue-light  p-2"
        >
          <Box>
            <p className="text-6xl text-white">Alice Ray</p>
          </Box>
        </Box>
        <Divider className="mt-2">
          <Avatar sx={{ width: "90px", height: "90px" }} className=" mt-2">
            AR
          </Avatar>
        </Divider>
      </Box>
      <Box height={"55vh"} sx={{ overflow: "auto" }}>
        <Box className="flex">
          <Box
            width={"40%"}
            className=".card md:p-2 flex items-center justify-center  md:justify-start"
          >
            <Box className=" w-3/6   shadow-md rounded-md">
              <Box
                height={"100px"}
                className="bg-gradient-to-r from-red-light to-blue-light "
              ></Box>

              <Box bgcolor={"white"} height={"100px"} padding={2}></Box>
            </Box>
          </Box>
          <Box
            width={"40%"}
            className=".card md:p-2 flex items-center justify-center  md:justify-start"
          >
            <Box className=" w-3/6   shadow-md rounded-md">
              <Box
                height={"100px"}
                className="bg-gradient-to-r from-red-light to-blue-light "
              ></Box>

              <Box bgcolor={"white"} height={"100px"} padding={2}></Box>
            </Box>
          </Box>
          <Box
            width={"40%"}
            className=".card md:p-2 flex items-center justify-center  md:justify-start"
          >
            <Box className=" w-3/6   shadow-md rounded-md">
              <Box
                height={"100px"}
                className="bg-gradient-to-r from-red-light to-blue-light "
              ></Box>

              <Box bgcolor={"white"} height={"100px"} padding={2}></Box>
            </Box>
          </Box>
          <Box
            width={"40%"}
            className=".card md:p-2 flex items-center justify-center  md:justify-start"
          >
            <Box className=" w-3/6   shadow-md rounded-md">
              <Box
                height={"100px"}
                className="bg-gradient-to-r from-red-light to-blue-light "
              ></Box>

              <Box bgcolor={"white"} height={"100px"} padding={2}></Box>
            </Box>
          </Box>
          <Box
            width={"40%"}
            className=".card md:p-2 flex items-center justify-center  md:justify-start"
          >
            <Box className=" w-3/6   shadow-md rounded-md">
              <Box
                height={"100px"}
                className="bg-gradient-to-r from-red-light to-blue-light "
              ></Box>

              <Box bgcolor={"white"} height={"100px"} padding={2}></Box>
            </Box>
          </Box>
          <Box
            width={"40%"}
            className=".card md:p-2 flex items-center justify-center  md:justify-start"
          >
            <Box className=" w-3/6   shadow-md rounded-md">
              <Box
                height={"100px"}
                className="bg-gradient-to-r from-red-light to-blue-light "
              ></Box>

              <Box bgcolor={"white"} height={"100px"} padding={2}></Box>
            </Box>
          </Box>
          <Box
            width={"40%"}
            className=".card md:p-2 flex items-center justify-center  md:justify-start"
          >
            <Box className=" w-3/6   shadow-md rounded-md">
              <Box
                height={"100px"}
                className="bg-gradient-to-r from-red-light to-blue-light "
              ></Box>

              <Box bgcolor={"white"} height={"100px"} padding={2}></Box>
            </Box>
          </Box>
          <Box
            width={"40%"}
            className=".card md:p-2 flex items-center justify-center  md:justify-start"
          >
            <Box className=" w-3/6   shadow-md rounded-md">
              <Box
                height={"100px"}
                className="bg-gradient-to-r from-red-light to-blue-light "
              ></Box>

              <Box bgcolor={"white"} height={"100px"} padding={2}></Box>
            </Box>
          </Box>
          <Box
            width={"40%"}
            className=".card md:p-2 flex items-center justify-center  md:justify-start"
          >
            <Box className=" w-3/6   shadow-md rounded-md">
              <Box
                height={"100px"}
                className="bg-gradient-to-r from-red-light to-blue-light "
              ></Box>

              <Box bgcolor={"white"} height={"100px"} padding={2}></Box>
            </Box>
          </Box>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </Box>
      </Box>
    </Box>
  );
}
