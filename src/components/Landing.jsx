import React, { Component } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #CEA1A1",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: 5,
};

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: false,
      open: false,
    };
  }

  handleClose = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  componentDidMount() {
    this.timer();
    console.log(this.timer());
  }

  timer = () =>
    setTimeout(() => {
      this.setState({
        a: true,
      });
    }, 3000);

  render() {
    return (
      <div className="flex items-center justify-center w-screen  h-screen  ">
        <div className=" flex lg:flex-row flex-col items-center justify-evenly lg:justify-evenly w-full  h-full sm:h-screen ">
          <div class="bg-odes-img bg-cover flex items-center justify-center sm:w-2/5  w-full h-full border-red-900">
            <h1 class="font-extrabold text-transparent text-7xl md:text-8xl bg-clip-text bg-gradient-to-r from-red-light to-blue-light h-auto">
              odezssa
            </h1>
          </div>

          {this.state.a === false ? (
            <div class="animate-pulse flex flex-col items-center justify-center lg:w-2/5 lg:h-screen  w-full text-center ">
              <h1 className="text-5xl lg:text-6xl xl:text-8xl">
                find what you need
              </h1>
              <div className="animate-wiggle bg-gradient-to-r from-red-light to-blue-light h-3 w-full m-10  .App-logo " />
              <h3 className="text-4xl lg:text-5xl  xl:text-7xl ">
                RATHER, CREATE YOUR OWN STORE...
              </h3>
            </div>
          ) : (
            <div class="flex flex-col items-center justify-center lg:w-2/5 lg:h-screen w-4/5    ">
              <button className="h-10 rounded-lg w-full p-10 mb-4  flex items-center justify-center bg-gradient-to-b from-grad to-black">
                <h1 class="text-white text-5xl  ">log in</h1>
              </button>

              <button
                onClick={this.handleClose}
                className="h-10 rounded-lg w-full p-10 mt-4 flex items-center justify-center bg-gradient-to-r from-red-light to-blue-light"
              >
                <h1 class="text-white text-5xl   ">sign up</h1>
              </button>
            </div>
          )}
        </div>

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box
            sx={{
              ...style,
              width: 400,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 id="parent-modal-title">SIGN UP</h2>
            <div class="flex flex-col items-center justify-center   w-full  h-2/5 mt-7 ">
              <button className="h-10 rounded-lg w-full p-10 mb-2  flex items-center justify-center bg-gradient-to-b from-grad to-black">
                <Link to="/signup/shopper">
                  <h1 class="text-white text-5xl ">shopper</h1>
                </Link>
              </button>

              <button
                onClick={this.handleClose}
                className="h-10 rounded-lg w-full p-10 mt-2 flex items-center justify-center bg-gradient-to-r from-red-light to-blue-light"
              >
                <Link to="/signup/seller">
                  <h1 class="text-white text-5xl  ">seller</h1>{" "}
                </Link>
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    );
  }
}

export default Landing;
