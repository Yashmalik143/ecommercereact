import React from 'react';
import { NavLink } from 'react-router-dom';

const Features = () => {
  return (
    <div style={container}>
      <div>
      <h3 >Feature Products</h3>
      <div style={service}>
        <div>
        <NavLink to="/Products">
         <img src="https://mobilesacademy.com/files/2021/09/Apple-iPhone-13-Pro-Max.jpg" alt = "img" style={images}></img>
        </NavLink>
        </div>
        <div >
        <NavLink to="/Products">
          <img src="./images/hero.jpg" alt = "img" style={images}></img>
        </NavLink></div>
        <div >
        <NavLink to="/Products">
         <img src="https://mobilesacademy.com/files/2021/09/Apple-iPhone-13-Pro-Max.jpg" alt = "img" style={images}></img>
        </NavLink>
        </div>    
      </div>
      </div>
    </div>
  )
}
const container ={
  // display : "grid",
  textAlign:"center",
  Justycontent:"center",
  margin:"5px",
  width :"auto",
  fontSize:"25px ",
  color:"black",
  backgroundColor :"White",
  fontcolor:"#223b75",
  padding :"10px"   
}
const service ={
  fontSize:"10px",
  display: "grid",
  gridTemplateColumns: "1fr 1fr  1fr",
  padding:"20px",
  margin :"0px 0px 0px 10px"
}
const images={
  filter:"dropShadow(0 0 3px)",
  width :"15rem",
  height:"10rem",
  boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.5)" 

}
export default Features
