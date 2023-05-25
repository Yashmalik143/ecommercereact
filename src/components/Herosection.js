import React from 'react'
import {FaShopify,FaArrowCircleRight}from "react-icons/fa"
import { NavLink } from 'react-router-dom';

const Herosection = () => {
  return (
	<>
    <div style={mystyle}>
    <div >
      <h2> Welcome to ! </h2>
      <b style ={{ color:"#dfdfd4",fontSize:"10rem",padding:"2px 1px 0 0 "}}> <FaShopify/></b>
      <h3 > Unbeatable products and Unbeatable Price</h3>
    </div>
	<div style={{textAlign:"center"}} >
	  <NavLink to= "/Products">
	  <button style={Button}>
  		SHOP NOW <FaArrowCircleRight style ={{ fontSize:"22px",marginLeft:"5px"}}/>
	  </button>
	  </NavLink>
	</div>
	
	  </div>
	
   
	</>
  )
};
const Button = {
	backgroundColor: "black",
	color: "white",
	fontSize: "18px",
	padding: "10px 60px",
	textAlign:"center",
	borderRadius: "5px",
	margin: "30px 10px",
	// textAlign:" center",
	cursor: "pointer",
	boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.5)" 


}


const mystyle = {
	// backgroundColor:"#DFDFDF",
	backgroundImage:`url('https://media.istockphoto.com/id/1316043925/vector/print.jpg?s=612x612&w=0&k=20&c=JcV3VeVtwHTEYHAgO-aLJ2QT9oBBlGOYl_KbZls4w5A=')`,
	backgroundRepeat:"no-repeat",
	backgroundSize:" cover",
	// width : "70rem",
	alignItem :"center",
	textAlign: "center",
	padding :"20px",
	color :"#dfdfd6"

}



export default Herosection