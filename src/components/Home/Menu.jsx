import { Avatar, Button, ButtonGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ChatAlt2Icon, HomeIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { ViewListIcon } from "@heroicons/react/solid";
import { ChatIcon } from "@heroicons/react/solid";
import { ClipboardListIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Box
      className=""
      bgColor="#F1F1F1"
      sx={{
        backgroundColor: "rgba(0,0,0,.08)",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
      }}
    >
      <Box>
        <h1 className=" font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-light to-blue-light">
          odezssa
        </h1>
      </Box>

      <Box
        sx={{
          borderTopRadius: "10px",
          gridTemplateColumns: "repeat(1, 1fr)",
          gap: 5,
        }}
        maxWidth="sm"
        display="grid"
      >
        <Button startIcon={<HomeIcon width={20} />}>Home</Button>
        <Link to="./home/market">
          <Button startIcon={<ShoppingBagIcon width={20} />}>Market </Button>
        </Link>

        <Button startIcon={<ClipboardListIcon width={20} />}>WishList</Button>
        <Button startIcon={<ChatAlt2Icon width={20} />}>Chats</Button>
      </Box>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Avatar>A R</Avatar>
        <Typography> Alice Ray</Typography>
      </Box>
    </Box>
  );
}
