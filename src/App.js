import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import BackGround from "./photos/utility.jpg";

function App() {
  return (
    <div className="container-fluid" style={main}>
      <h1>Hello World!</h1>
    </div>
  );
}

const main = {
  backgroundImage: `url(${BackGround})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "721px"
};

export default App;
