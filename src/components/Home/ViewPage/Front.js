import { Container, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, NavLink, Redirect, Route, useHistory } from "react-router-dom";
import Categories from "./Categories";
import Promoted from "./Promoted";
import Vendors from "./Vendors";
import { useAuth0 } from "@auth0/auth0-react";
import firebase from "firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #CEA1A1",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 5,
  backgroundColor: "white",
};

export default function Front() {
  const { isAuthenticated, user } = useAuth0();
  if (user) {
    var sub = user.sub.split("|");
    var id = sub[1];
  }
  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const pop = () => {
    firebase
      .firestore()
      .collection("shopper")
      .doc("prof")
      .collection("profile")
      .doc(id)
      .get()
      .then((snapshot) => {
        if (snapshot.exists == false) {
          history.push("/signup");
        } else {
          // setOpen(true);
        }
      })
      .catch((e) => {});
  };

  React.useEffect(() => {
    pop();
  }, [pop]);
  return (
    <Box
      className=" w-full h-screen p-1"
      bgcolor="white"
      sx={{ overflow: "hidden" }}
    >
      <>
        {" "}
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
      </>

      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className="bg-gray-700"
      >
        <Box
          sx={{
            ...style,
            width: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="text-2xl font-bold text-gray-400 mb-2">
            We've noticed you haven't created a profile.... :)
          </p>
          {/* <Box>
            We've noticed you havent created your profile, Please Sign Up
            <NavLink
              activeClassName=" bg-gradient-to-r from-red-light to-blue-light text-blue-50  p-4 rounded-md flex flex-row justify-center  mb-2"
              className="hover:bg-gradient-to-r from-red-light to-blue-light hover:text-slate-50 text-gray-400 p-4 rounded-md flex flex-row justify-center items-center mb-2"
              to="/signup"
            >
              <p className=" font-bold text-3xl">Click Here </p>
            </NavLink>{" "}
          </Box> */}
          <h2 className="text-2xl  text-gray-400 mb-2" id="parent-modal-title">
            SIGN UP
          </h2>
          <div class="flex flex-col items-center justify-center   w-full  h-2/5 mt-7 ">
            <button className="h-10 rounded-lg w-full p-10 mb-2  flex items-center justify-center bg-gradient-to-b from-grad to-black">
              <Link to="/shopper">
                <h1 class="text-white text-5xl ">shopper</h1>
              </Link>
            </button>

            <button className="h-10 rounded-lg w-full p-10 mt-2 flex items-center justify-center bg-gradient-to-r from-red-light to-blue-light">
              <Link to="/seller">
                <h1 class="text-white text-5xl  ">seller</h1>
              </Link>
            </button>
          </div>
        </Box>
      </Modal>
    </Box>
  );
}
