import React, { Component } from "react";
import "./App.css";
import { Divider } from "@mui/material";
const colors = require("tailwindcss/colors");

export class MenuLanding extends Component {
  render() {
    return (
      <div class="flex flex-col items-center justify-center lg:w-full lg:h-screen w-full  ">
        <h1 className="text-5xl lg:text-8xl">find what you need</h1>
        <div className="bg-gradient-to-r from-red-light to-blue-light h-3 w-full m-10  .App-logo " />
        <h3 className="text-4xl  lg:text-7xl ">
          RATHER, CREATE YOUR OWN STORE...
        </h3>
      </div>
    );
  }
}

export default MenuLanding;
