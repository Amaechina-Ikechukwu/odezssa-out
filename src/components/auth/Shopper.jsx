import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar, Button } from "@mui/material";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import { useAuth0 } from "@auth0/auth0-react";
import firebase from "firebase";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import storage from "firebase/storage";
import { WindowSharp } from "@mui/icons-material";
// import { storage } from "firebase/firestore";

export default function Shopper() {
  const { user } = useAuth0();
  console.log(user);
  const { name, picture, email } = user;
  const sub = user.sub.split("|");
  const id = sub[1];
  const names = name.split(" ");
  // console.log(names[1].split("").splice(0, 1));
  const [fullName, setFullName] = useState(name);
  const [Email, setEmail] = useState(email);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [CPass, setCPass] = useState("");
  const [image, setImage] = useState();
  const [address, setAddress] = useState("");
  const [uri, setUri] = useState("");
  const [load, setLoad] = useState("");
  const [error, seterror] = useState("");
  let history = useHistory();
  const onPick = (event) => {
    setImage(event.target.files[0]);
    uploadImage(event);
  };
  const uploadImage = (e) => {
    e.preventDefault();
    const storageRef = firebase.storage().ref();

    // [START storage_monitor_upload]
    var uploadTask = storageRef.child(`profile`).put(image);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setLoad(parseInt(`${progress}`));
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        seterror(toString(error));
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          setUri(downloadURL);
          setLoad("");
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const submit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("shopper")
      .doc("prof")
      .collection("profile")
      .doc(id)
      .set({
        Fullname: fullName,
        password: password,
        image: uri,
        country: country,
        state: state,
        address: address,
        phone: phone,
      })
      .then(Push())
      .catch((e) => {
        seterror(e);
      });
  };
  const checkStore = () => {
    firebase
      .firestore()
      .collection("shopper")
      .doc("prof")
      .collection("profile")
      .doc(id)
      .get()
      .then((snapshot) => {
        if (snapshot.exists == true) {
          Push();
        } else {
          localStorage.setItem("saved", undefined);
        }
      })
      .catch((e) => {
        seterror(e);
      });
  };
  const Push = () => {
    window.location.assign("http://localhost/3000/home");
    console.log("pushed");
  };
  React.useEffect(() => {
    checkStore();
  }, [checkStore]);
  console.log(uri);
  return (
    <Box
      class="flex flex-col w-screen h-screen p-1 lg:p-5"
      component="form"
      noValidate
      autoComplete="off"
    >
      <h1 className="text-black text-5xl p-3 ">elegant shopper</h1>

      <div class="flex flex-col lg:flex-row justify-start w-full lg:px-4">
        <div class="flex flex-col  items-start justify-center lg:w-2/4 lg:border-purple-200 lg:border-2 p-3 lg:mr-8 rounded-lg lg:border-dashed w-full ">
          <div className="lg:w-4/5">
            <TextField
              id="outlined-basic"
              label="full name"
              variant="outlined"
              margin="normal"
              fullWidth
              defaultValue={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="email address"
              variant="outlined"
              margin="normal"
              fullWidth
              defaultValue={Email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="country"
              variant="outlined"
              margin="normal"
              fullWidth
              defaultValue={country}
              onChange={(e) => setCountry(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="state/city"
              variant="outlined"
              margin="normal"
              fullWidth
              defaultValue={state}
              onChange={(e) => setState(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="residence address"
              variant="outlined"
              margin="normal"
              fullWidth
              defaultValue={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <TextField
              id="outlined-basic"
              label="phone number"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div class="lg:ml-8 lg:border-purple-200 lg:border-dashed rounded-lg lg:border-2 p-3 lg:w-2/4 w-full">
          <div className="w-4/5 flex flex-col items-center justify-center w-full">
            <div className="w-full lg:w-4/5 ">
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setPassword(e.target.value)}
              />

              <TextField
                id="outlined-basic"
                label="confirm password"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setCPass(e.target.value)}
              />

              {password !== CPass && CPass.length > 5 ? (
                <div className="w-full bg-red-200  text-red-400 p-2 rounded-md mb-2">
                  Password does not match{" "}
                </div>
              ) : null}
            </div>
            <div className=" w-full flex flex-col items-center">
              <Avatar
                sx={{ width: 150, height: 150 }}
                src={image ? uri : user.picture}
              />
              {/* {image !== ""
                  ? null
                  : `${names[0].split("").splice(0, 1)}${names[1]
                      .split("")
                      .splice(0, 1)}`} */}
              <div className="w-full bg-yellow-100  text-yellow-600 p-2 rounded-md mt-1">
                The photo uploads automatically when selected, if you get an
                error, please press Upload button
              </div>

              <div className="w-full flex flex-row items-center justify-evenly">
                <button className="h-10 rounded-lg lg:w-2/5 w-2/5 p-6 mt-2  flex items-center justify-center bg-gray-500">
                  <input
                    class="text-white text-1xl md:text-1xl "
                    type="file"
                    name="file"
                    onChange={onPick}
                  />
                </button>
                <button
                  onClick={uploadImage}
                  className="h-10 rounded-lg lg:w-2/5 w-2/5 p-6 mt-2  flex items-center justify-center bg-gray-700"
                >
                  <h1 class="text-white text-1xl md:text-2xl ">
                    {load !== "" ? `${load}%` : "upload image"}
                  </h1>
                </button>
                {/* <input
                  class="text-gray-500 text-1xl md:text-2xl "
                  type="file"
                  name="file"
                /> */}
              </div>

              {/* {image !== "" ? (
                <div className="w-full bg-yellow-200  text-yellow-400 p-2 rounded-md">
                  The photo uploads automatically when selected, if you get an
                  error, please press Upload button
                </div>
              ) : null} */}

              {error !== "" ? (
                <div className="w-full bg-red-200  text-red-400 p-2 rounded-md">
                  {error}
                </div>
              ) : null}
              <button
                onClick={submit}
                className="h-10 rounded-lg w-4/5 p-8 mt-14 flex items-center justify-evenly bg-gradient-to-r from-red-light to-blue-light"
              >
                <h1 class="text-white text-2xl md:text-4xl  ">
                  start shopping
                </h1>
                <ArrowNarrowRightIcon className="w-20 text-white h-20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
