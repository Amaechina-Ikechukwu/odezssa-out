import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  Modal,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  ChatAlt2Icon,
  HomeIcon,
  MenuAlt1Icon,
  SearchCircleIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { ViewListIcon } from "@heroicons/react/solid";
import { ChatIcon } from "@heroicons/react/solid";
import { ClipboardListIcon, PhoneIcon } from "@heroicons/react/outline";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",

  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 5,
  backgroundColor: "white",
};
const styles = {
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

function LinkTab(props) {
  return (
    <Tab
      className="border-t-4"
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Menu() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openx, setOpenx] = React.useState(false);
  const { logout } = useAuth0();
  let history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClose = () => {
    setOpen(!open);
  };
  const Push = () => {
    localStorage.setItem("saved", "saved");
    history.push("/signup");
    console.log("pushed");
  };

  return (
    <Box className=" p-2 lg:border-r-2 flex flex-row   lg:flex-col items-center justify-around  md:items-center    ">
      <Box className=" flex flex-col justify start ">
        <h1 className=" font-bold text-3xl md:text-3xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-light to-blue-light">
          odezssa
        </h1>
      </Box>
      <Box className=" flex lg:flex-col items-center justify-end lg:justify-evenly h-full   w-full">
        <Box className="md:block lg:hidden ">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
            indicatorColor="disabled"
          >
            <Tab
              sx={{ borderWidth: "none" }}
              icon={
                <MenuAlt1Icon
                  width={20}
                  color={!value ? "rgba(0,0,0,.65)" : "rgba(0,0,0,.25)"}
                />
              }
              aria-label="phone"
              onClick={handleClose}
            />
            <Tab
              icon={
                <SearchIcon
                  width={20}
                  color={value ? "rgba(0,0,0,.65)" : "rgba(0,0,0,.25)"}
                />
              }
              aria-label="favorite"
            />
          </Tabs>
        </Box>
        <Box className="hidden md:hidden lg:block ">
          <Box className="flex flex-col items-center mb-2 justify-evenly mr-4 w-full mb-2 ">
            <NavLink
              activeClassName=" bg-gradient-to-b from-grad to-black hover:bg-gray-300  text-blue-50  p-4 rounded-md flex flex-row justify-evenly w-full mb-2 shadow-md opacity-80"
              className="hover:bg-gray-100 hover:text-slate-50 text-gray-400 p-4 rounded-md flex flex-row justify-evenly items-center w-full mb-2"
              to="/home"
            >
              <HomeIcon width={20} className=" mr-1 " />
              <p className="text-1xl font-normal">Home </p>
            </NavLink>
            <NavLink
              activeClassName="bg-gradient-to-b from-grad to-black text-blue-50  p-4 rounded-md flex flex-row justify-evenly  w-full mb-2 opacity-80"
              className="hover:bg-gray-100 hover:text-slate-50 text-gray-400 p-4 rounded-md flex flex-row justify-evenly items-center w-full mb-2"
              to="/market"
            >
              <ShoppingBagIcon width={20} className=" mr-1" />
              <p className="text-1xl  font-normal">Market </p>
            </NavLink>
            <NavLink
              activeClassName="bg-gradient-to-b from-grad to-black text-blue-50  p-4 rounded-md flex flex-row justify-evenly w-full mb-2 opacity-80"
              className="hover:bg-gray-100 hover:text-slate-50 text-gray-400 p-4 rounded-md flex flex-row justify-evenly items-center w-full mb-2"
              to="/wishlist"
            >
              <ClipboardListIcon width={20} className="mr-1" />
              <p className="text-1xl  font-normal">Wishlist </p>
            </NavLink>
            <NavLink
              activeClassName="bg-gradient-to-b from-grad to-black text-blue-50  p-4 rounded-md flex flex-row justify-evenly  w-full mb-2 opacity-80"
              className="hover:bg-gray-100 hover:text-slate-50 text-gray-400 p-4 rounded-md flex flex-row justify-evenly items-center w-full mb-2"
              to="/chats"
            >
              <ChatAlt2Icon width={20} className=" mr-1" />
              <p className="text-1xl  font-normal">Messages </p>
            </NavLink>
          </Box>
        </Box>
        <Divider></Divider>

        <Box className="p-2 w-full bg-gray-100 rounded-lg w-full mt-3 hidden lg:block">
          <button
            onClick={() => logout()}
            className="hover:bg-gray-100 hover:text-slate-50 text-gray-400 p-2 rounded-md flex flex-row justify-evenly items-center w-full "
          >
            log out
          </button>
          <button className="hover:bg-gray-100 hover:text-slate-50 text-gray-400 p-2 rounded-md flex flex-row justify-evenly items-center w-full ">
            settings
          </button>
        </Box>

        <NavLink
          to="/user/profile"
          activeClassName="shadow-md p-2 rounded-full border-2 lg:border-0 md:p-4 border-gray-200"
        >
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent={"center"}
            className=" rounded-full "
          >
            <Avatar className="rounded-full border-2 border-gray-400">
              A R
            </Avatar>
            <p className="hidden md:block"> Alice Ray</p>
          </Box>
        </NavLink>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            ...style,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box className="flex flex-col    ">
            <NavLink
              onClick={handleClose}
              activeClassName=" bg-gradient-to-r from-red-light to-blue-light text-blue-50  p-4 rounded-md flex flex-row justify-center  mb-2"
              className="hover:bg-gradient-to-r from-red-light to-blue-light hover:text-slate-50 text-gray-400 p-4 rounded-md flex flex-row justify-center items-center mb-2"
              to="/home"
            >
              <HomeIcon width={30} className=" mr-5" />
              <p className=" font-bold text-3xl">Home </p>
            </NavLink>
            <NavLink
              onClick={handleClose}
              activeClassName=" bg-gradient-to-r from-red-light to-blue-light text-blue-50  p-4 rounded-md flex flex-row justify-center  mb-2"
              className="hover:bg-gradient-to-r from-red-light to-blue-light hover:text-slate-50 text-gray-400 p-4 rounded-md flex flex-row justify-center items-center mb-2"
              to="/market"
            >
              <ShoppingBagIcon width={30} className=" mr-5" />
              <p className=" font-bold text-3xl">Market </p>
            </NavLink>
            <NavLink
              onClick={handleClose}
              activeClassName=" bg-gradient-to-r from-red-light to-blue-light text-blue-50  p-4 rounded-md flex flex-row justify-center  mb-2"
              className="hover:bg-gradient-to-r from-red-light to-blue-light hover:text-slate-50 text-gray-400 p-4 rounded-md flex flex-row justify-center items-center mb-2"
              to="/wishlist"
            >
              <ClipboardListIcon width={30} className=" mr-5 " />
              <p className=" font-bold text-3xl">Wishlist </p>
            </NavLink>
            <NavLink
              onClick={handleClose}
              activeClassName=" bg-gradient-to-r from-red-light to-blue-light text-blue-50  p-4 rounded-md flex flex-row justify-center  mb-2"
              className="hover:bg-gradient-to-r from-red-light to-blue-light hover:text-slate-50 text-gray-400 p-4 rounded-md flex flex-row justify-center items-center mb-2"
              to="/chats"
            >
              <ChatAlt2Icon width={30} className=" mr-5" />
              <p className=" font-bold text-3xl">Messages </p>
            </NavLink>
            <Divider></Divider>
            <Box className="p-2 w-full bg-gray-200 shadow-inner shadow-lg rounded-lg mt-3">
              <button
                onClick={() => logout()}
                className="hover:bg-gray-100 hover:text-slate-50 text-gray-400 p-2 rounded-md flex flex-row justify-evenly items-center w-full "
              >
                log out
              </button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={openx}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className="bg-gray-700"
      >
        <Box
          sx={{
            ...styles,
            width: 400,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="text-2xl font-bold text-gray-400 mb-2">
            We've noticed you haven't created a profile.... :)
          </p>

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
