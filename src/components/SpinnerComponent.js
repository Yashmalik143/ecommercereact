import React from 'react'
import Spinner from "react-bootstrap/Spinner";
const SpinnerComponent = () => {
  return (
    <div style={container}>

    
    <span
      style={{
        position: "relative",
        top :"41%",
        marginTop: "14%",
        "font-size": "-webkit-xxx-large",
      }}
    >
      Loading{" "}
      <Spinner
        style={{ width: "1rem", height: "1rem", marginLeft: "0.2rem" }}
        animation="grow"
      ></Spinner>
      <Spinner
        style={{ width: "1rem", height: "1rem", marginLeft: "0.2rem" }}
        animation="grow"
      ></Spinner>
      <Spinner
        style={{ width: "1rem", height: "1rem", marginLeft: "0.2rem" }}
        animation="grow"
      ></Spinner>
    </span>
  </div>
  )
}
const container = {
    // display : "grid",
    textAlign: "center",
    Justycontent: "center",
    margin: "5px",
    fontSize: "20px ",
    backgroundColor: "#DFDFDF",
    fontcolor: "#223b75",
    padding: "10px",
    position: "relative",
    height : "40rem"
  };
export default SpinnerComponent
