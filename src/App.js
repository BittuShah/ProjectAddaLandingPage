import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import BackGround from "./photos/utility.jpg";

function App() {
  return (
    <div className="container-fluid text-center" style={main}>
      <div style={overlay} className="text-center"></div>
      <div style={content} className="text-left">
        <h1>
          THE NEXT <br /> BIG THING IS HERE
        </h1>
        <h4 style={{ marginTop: "20px" }}>
          OH, AND WE'RE LAUCHING OUR OWN THING THAT'S PRETTY COOL
        </h4>
      </div>
      <div className="row" style={emailBox}></div>
      <div className="row" style={box}>
        <div className="col-lg-6" style={{ paddingTop: "50px" }}>
          <h2>Get an elecronic mail when it's ready.</h2>
          <h4
            className="text-left"
            style={{ marginLeft: "115px", marginTop: "15px" }}
          >
            That's right - no stamps required.
          </h4>
        </div>
        <div className="col-lg-6">
          <form className="form-group" style={{ marginTop: "50px" }}>
            <label
              style={{
                marginLeft: "-460px",
                fontFamily: "Times New Roman, serif ",
                letterSpacing: "0.1em"
              }}
              htmlFor=""
            >
              EMAIL
            </label>
            <br />
            <div className="row">
              <div className="input-group">
                <input
                  className="form-control col-lg-6 offset-lg-2 padding-0"
                  type="text"
                  placeholder="Enter Email..."
                  style={{ marginRight: "0px" }}
                />
                <button className="btn btn-primary col-lg-3">
                  STAY CONFIRMED
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const main = {
  backgroundImage: `url(${BackGround})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "721px",
  padding: "0px",
  position: "relative",
  overflowX: "hidden"
};

const overlay = {
  backgroundColor: "black",
  height: "inherit",
  opacity: "0.5",
  position: "absolute",
  width: "inherit",
  padding: "0px"
};

const content = {
  position: "absolute",
  height: "200px",
  width: "800px",
  marginLeft: "100px",
  marginTop: "250px",
  color: "#e2e6e6"
};

const emailBox = {
  height: "230px",
  width: "1550px",
  backgroundColor: "black",
  opacity: "0.2",
  // marginTop: "490px",
  position: "relative",
  top: "490px",
  zIndex: "0"
};

const box = {
  // width: "775px",
  // border: "5px solid black",
  zIndex: "10",
  height: "220px",
  position: "relative",
  // backgroundColor: "red",
  top: "260px",
  color: "white"
};

export default App;
