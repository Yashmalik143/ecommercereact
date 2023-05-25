import React from 'react'
import { useState } from 'react';
import { Form  } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
const Register = () => {
  const [name,setName] = useState("");
  const [id,setId] = useState(0);


  const Register = () => {

    let a = fetch("https://localhost:7277/api/Users/add-customer", {
      method: "POST",
      body: JSON.stringify({ id, name }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }) .then((res) => res.json())
    .then((resi) => {
      console.log(resi);
    });
  }
 
  return (
    <div style={container}>
        <h2>
            Register
        </h2>
        <Form>
        Name :  
        <input style={myinput} type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Name"/><br></br>
        Email :
        <input style={myinput} type="email" onChange placeholder="Enter Email"/><br></br>
        Password :
        <input style={{padding:"6px",width:"300px",border:"3px",borderRadius: "10px ", borderColor:"#223b75",margin :"10px"
    ,fontSize:"15px"}} type="password" onChange placeholder="Enter Password"/><br></br>
      
        <button  style={mybutton} onClick={()=>{
         Register()
        }} type="submit" > Submit</button>
   
        </Form>
      
    </div>
  )
}
const mybutton={ backgroundColor: "Black",

  color: "white",
  fontSize: "18px",
  padding: "10px 15px",
  borderRadius: "25px ",
  borderColor:"#223b75",
  margin: "20px",
  cursor: "pointer",
  height:"50px",
  width :"200px",
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
export default Register


