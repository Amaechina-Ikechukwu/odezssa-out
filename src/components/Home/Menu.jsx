import {
  Avatar,
  Button,
  ButtonGroup,
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
import { Link, NavLink } from "react-router-dom";

function LinkTab(props) {
  return (
    <Tab
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      className="p-4 shadow-sm"
      sx={{
        display: "flex",
        background: "rgb(255,255,255)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,1) 51%, rgba(111,238,255,0.05) 100%)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100vw",
      }}
    >
      <Box>
        <h1 className=" font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-light to-blue-light">
          odezssa
        </h1>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box className=" hidden ">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
          >
            <Tab icon={<MenuAlt1Icon width={20} />} aria-label="phone" />
            <Tab icon={<SearchIcon width={20} />} aria-label="favorite" />
          </Tabs>
        </Box>
        <Box>
          <Box className="flex flex-row justify-evenly mr-4 hidden">
            <NavLink
              className="hover:bg-red-200 p-4 rounded-md flex flex-row justify-evenly items-center"
              to="/home/market"
            >
              <HomeIcon width={20} className="text-red-400 mr-1" />
              <p className="text-red-400 font-bold">Home </p>
            </NavLink>
            <NavLink
              className="hover:bg-purple-200 p-4 rounded-md flex flex-row justify-evenly items-center"
              to="/home/market"
            >
              <ShoppingBagIcon width={20} className="text-purple-400 mr-1" />
              <p className="text-purple-400 font-bold">Market </p>
            </NavLink>
            <NavLink
              className="hover:bg-yellow-100 p-4 rounded-md flex flex-row justify-evenly items-center"
              to="/home/market"
            >
              <ClipboardListIcon width={20} className="text-yellow-400 mr-1" />
              <p className="text-yellow-400 font-bold">Wishlist </p>
            </NavLink>
            <NavLink
              className="hover:bg-blue-100 p-4 rounded-md flex flex-row justify-evenly items-center"
              to="/home/market"
            >
              <ChatAlt2Icon width={20} className="text-blue-400 mr-1" />
              <p className="text-blue-400 font-bold">Market </p>
            </NavLink>
          </Box>

          {/* <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon tabs example"
          >
            <Link to="/home/shops">
              {" "}
              <Tab icon={<HomeIcon />} aria-label="phone" />
            </Link>

            <Box>
              <Link to="/home/wishlist" />
              <Tab
                icon={<ClipboardListIcon />}
                aria-label="favorite"
                href="/home/wishlist"
              ></Tab>
            </Box>

            <LinkTab
              to="/home/chats"
              icon={<ChatAlt2Icon />}
              aria-label="person"
            />
          </Tabs> */}
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
        >
          <Avatar>A R</Avatar>
          <Typography className="hidden"> Alice Ray</Typography>
        </Box>
      </Box>
    </Box>
  );
}
