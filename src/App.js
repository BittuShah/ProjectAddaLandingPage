import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import HomePage from "./components/homePage";
// import BackGround from "./photos/new.jpg";
// import Logo from "./photos/1.png";
// import "./style.css";
// import styles from "./cssModules/style.module.css";
import AboutUs from "./components/aboutUs";
import { Switch, Route } from "react-router-dom";

function App() {
  // return <AboutUs />;

  return (
    <React.Fragment>
      <Switch>
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}

// const main = {
//   backgroundImage: `url(${BackGround})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "721px",
//   padding: "0px",
//   position: "relative",
//   overflowX: "hidden",
//   fontFamily: "cursive"
// };

// const overlay = {
//   backgroundColor: "black",
//   height: "inherit",
//   opacity: "0.5",
//   position: "absolute",
//   width: "inherit",
//   padding: "0px"
// };

// const logo = {
//   position: "absolute",
//   marginLeft: "-670px",
//   marginTop: "30px",
//   height: "200px",
//   width: "200px"
// };

// const content = {
//   position: "absolute",
//   height: "200px",
//   width: "800px",
//   marginLeft: "100px",
//   marginTop: "300px",
//   color: "white"
// };

// const emailBox = {
//   height: "230px",
//   width: "1550px",
//   backgroundColor: "black",
//   opacity: "0.2",
//   // marginTop: "490px",
//   position: "relative",
//   top: "490px",
//   zIndex: "0"
// };

// const box = {
//   // width: "775px",
//   // border: "5px solid black",
//   zIndex: "10",
//   height: "220px",
//   position: "relative",
//   // backgroundColor: "red",
//   top: "260px",
//   color: "white"
// };

export default App;
