import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import BackGround from "./photos/new.jpg";
import Logo from "./photos/1.png";

function App() {
  return (
    <div className="container-fluid text-center" style={main}>
      <div style={overlay} className="text-center"></div>
      <img src={Logo} alt="Logo of the website" style={logo} />

      <div style={content} className="text-left">
        <h1>
          THE NEXT <br /> BIG THING IS HERE
        </h1>
        <h5 style={{ marginTop: "20px" }}>
          OH, AND WE'RE LAUCHING OUR OWN THING THAT'S PRETTY COOL
        </h5>
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
                <button
                  className="btn btn-primary col-lg-3 p-0"
                  style={{
                    letterSpacing: "0.1em",
                    backgroundColor: "#ff7f50",
                    border: "none"
                  }}
                >
                  STAY CONNECTED
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
  overflowX: "hidden",
  fontFamily: "cursive"
};

const overlay = {
  backgroundColor: "black",
  height: "inherit",
  opacity: "0.5",
  position: "absolute",
  width: "inherit",
  padding: "0px"
};

const logo = {
  position: "absolute",
  marginLeft: "-670px",
  marginTop: "30px",
  height: "200px",
  width: "200px"
};

const content = {
  position: "absolute",
  height: "200px",
  width: "800px",
  marginLeft: "100px",
  marginTop: "300px",
  color: "white"
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
