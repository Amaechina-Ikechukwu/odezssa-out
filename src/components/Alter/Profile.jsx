import { Avatar, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../callers/profile";
import firebase from "firebase";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user } = useAuth0();
  console.log(user);
  const { name, picture, email } = user;
  const sub = user.sub.split("|");
  const id = sub[1];
  var data;
  const dispatch = useDispatch();
  const fire = () => {
    firebase
      .firestore()
      .collection("shopper")
      .doc("prof")
      .collection("profile")
      .doc(id)
      .get()
      .then((snapshot) => {
        data = snapshot.data();
        dispatch(getProfile(data));

        // console.log(data);
      });
  };

  React.useEffect(() => {
    fire();
  }, []);

  var profile = useSelector((state) => state.profile.value[0]);
  console.log(profile);
  var names = profile.Fullname;
  return (
    <Box className="h-screen">
      <Box>
        <Box
          height={"30vh"}
          className="flex flex-col items-center justify-center bg-gradient-to-r from-red-light to-blue-light  p-2"
        >
          <Box>
            <p className="text-6xl text-white"> {profile.Fullname}</p>
          </Box>
        </Box>
        <Divider className="mt-2">
          <Avatar sx={{ width: "90px", height: "90px" }} className=" mt-2">
            {`${names[0].split("").splice(0, 1)} ${names[1]
              .split("")
              .splice(0, 1)}`}
          </Avatar>
        </Divider>
      </Box>
      <Box height={"55vh"} sx={{ overflow: "auto" }}>
        <Box className="flex">
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

          <Box bgcolor={"white"} height={"100px"} padding={2}>
            {profile.country}
            {profile.email}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
