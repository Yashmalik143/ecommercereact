import React from 'react'
import { Form  } from "react-bootstrap";
const Contact = () => {
  return (
    <div style={container}>
        <h2>
            Contact Us
        </h2>
        <Form>
        Name :  
        <input style={myinput} type="text" onChange placeholder="Enter ID"/><br></br>
        Email :
        <input style={myinput} type="email" onChange placeholder="Enter Email"/><br></br>
        Message :
        <input style={{padding:"6px",width:"300px",border:"3px",borderRadius: "10px ", borderColor:"#223b75",margin :"10px",height:"100px",fontSize:"15px"}} htmlFor="message" onChange /><br></br>
        <button  style={mybutton} type="submit" > Submit</button>
        </Form>
      
    </div>
  )
}
const mybutton={ backgroundColor: "Black",

  color: "white",
  fontSize: "18px",
  padding: "10px 15px",
  borderRadius: "20px ",
  borderColor:"#223b75",
  margin: "20px",
  cursor: "pointer",
  height:"50px",
  width :"20rem",
  boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.5)" 

 
}

const container ={
  // display : "grid",
  textAlign:"center",
  Justycontent:"center",
  margin:"10px",
  fontSize:"20px ",
  backgroundColor :"#DFDFDF",
  fontcolor:"#223b75",
  padding :"10px"   
}
const myinput ={
    padding:"6px",
    width:"300px",
    border:"3px",
    fontSize:"16px",
    borderRadius: "10px ", 
    borderColor:"#223b75",
    marginLeft :"30px",
    marginTop:"10px"
}
export default Contact


