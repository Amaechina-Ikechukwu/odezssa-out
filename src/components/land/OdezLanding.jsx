import React, { Component } from "react";
const colors = require("tailwindcss/colors");

export class OdezLanding extends Component {
  render() {
    return (
      <div class=" lg:w-full lg:h-full bg-odes-img w-full h-4/5 md:h-4/5">
        <h1 class="font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-red-light to-blue-light ">
          odezssa
        </h1>
      </div>
    );
  }
}

export default OdezLanding;
