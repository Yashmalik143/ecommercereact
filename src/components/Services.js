import React from 'react'
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom'
import {MdDeliveryDining,MdOutlineContactEmergency} from "react-icons/md"
import {GiReturnArrow,GiReceiveMoney} from "react-icons/gi"



const Services = () => {
  return (
    <>
    <div style ={container} >
        <h2 style={{textAlign:"center"}}>Services</h2>
        <div >
        < div style = {service}>
            <NavLink to='/' style={{ textDecoration: 'none'}} >
            <Button variant="info"  style ={mybutton}>
                <MdDeliveryDining style={{fontSize:"20px"}}/><br></br>
            <b> Super fast and free dilevery </b>
            </Button>
            </NavLink>
            <NavLink to='/' style={{ textDecoration: 'none'}} >
            <Button variant="info"  style ={mybutton}>
           < MdOutlineContactEmergency style={{fontSize:"20px"}}/><br></br>
            <b>Non-contact shipping </b>
            </Button>
            </NavLink>
            <NavLink to='/' style={{ textDecoration: 'none'}} >
            <Button variant="info"  style ={mybutton}>
                <GiReturnArrow style={{fontSize:"20px"}}/><br></br>
            <b>Easy Returns </b>
            </Button>
            </NavLink>
            <NavLink to='/' style={{ textDecoration: 'none'}} >
            <Button variant="info"  style ={mybutton}>
            <GiReceiveMoney style={{fontSize:"30px"}}/><br></br>
            <b> money-back Gauranteed </b>
            </Button>
            </NavLink>
        </div>
        </div>      
    </div>
    </>
  )
}
const container ={
    // display : "grid",
    textAlign:"center",
    Justycontent:"center",
    margin:"5px",
    fontSize:"20px ",
    backgroundColor :"#DFDFDF",
    fontcolor:"#223b75",
    padding :"10px"   
}
const mybutton={ backgroundColor: "Black",

  color: "white",
  fontSize: "13px",
  padding: "10px 10px",
  borderRadius: "15px ",
  borderColor:"#223b75",
  margin: "10px 0px",
  cursor: "pointer",
  height:"70px",
  width :"200px",
  iconsSize:"10px"
 
}
const service ={
    fontSize:"10px",
    width:"auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    padding:"5px"
     
}
export default Services
