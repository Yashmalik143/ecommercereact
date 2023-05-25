import React, { useEffect, useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { Card, Button, Table, CardGroup } from "react-bootstrap";
import { Deleteproduct,deleteFromCart } from "../action";
import { NavLink } from "react-router-dom";
import MyOrders from "./MyOrders";

const mystyle = {
  // backgroundColor:"#DFDFDF",
  display: "inline-flex",
  magrinLeft: "50px ",
  padding: "20px",
  // textAlign :'center',

  fontSize: "22px",
  fontWeight: "bold",
  border: "4px",
};
const mybutton = {
  backgroundColor: "black",

  color: "white",
  fontSize: "15px",
  padding: "4px",
  borderRadius: " 10px ",
  borderColor: "black",
  marginBottom: "10px",
  cursor: "pointer",
  height: "30px",
  width: "15rem",
};
const cardbody = {
  fontSize: "20px",
  margin: "5px",
};
const ImageStyle = {
  width: "15.8rem",
  height: "15rem",
  margin: "15px",
  pading: "px",
  borderRadius: "7px",
};

const CardStyle = {
  float: "left",
  width: "18rem",
  height: "Auto",
  // backgroundColor: "#c0c0c036",
  paddingLeft: "5px",
  margin: "1px",
color:"black",

  // boxShadow: "0px 15px 20px 0px rgba(0, 0, 0, 0.5)",
  borderColor:"white"
};

const OrderPage = () => {
  const myName = useSelector((state) => state.SingleProduct);
  const arr = myName.cartItem;
 
  console.log(arr)
  let total = 
    arr.reduce((accumulator, object) => {
      return( accumulator + object.price)
    }, 0)


  
let productId = []
   arr.forEach(element => {
    productId.push(element.id)
  });
  console.log(productId);
const [Success,setSuccess]= useState(false);
let dispatch = useDispatch();





  const data = {
    orderId: 0,
    productID : productId,
    shipingID : 0
      }


  console.log(JSON.stringify(data),productId)

  const postOrder = () => {
    var str = "bearer " + JSON.parse(localStorage.getItem("token"));
    console.log(str);
    let a = fetch("https://localhost:7277/api/Order/order-products", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        authorization: str,
      },
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      alert("Order Successfully Submited")
      setSuccess(true);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };
if(Success) return <MyOrders/>
  return (
    <>
      <CardGroup>
        <div>
          {arr.length > 0 &&
            arr.map((pro) => (
              <div style={mystyle}>
          
                <Card style={CardStyle}>
                <NavLink to= "/SingleProduct/:id" state={pro} style={{textDecoration :"none",  color :"black"}}>
                  <Card.Img variant="top" style={ImageStyle} src={pro.imgUrl} />
                  <Card.Body>
                    <Card.Title>{pro.productName}</Card.Title>
                   
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Price {pro.price}</small>
                  </Card.Footer>
                  <br />
                  </NavLink>
                  <Button  variant="outline-dark" style = {{width :"16rem",borderRadius: "0px",
                  
                  borderColor: "black"}} onClick = {() => {
                    dispatch( Deleteproduct(pro.id))
                    dispatch(deleteFromCart())
                  
                    }}>Remove from Cart</Button>
                </Card>
              </div>
            ))}
        </div>
      </CardGroup>
      <div style = {{margin :"1.5rem" , textAlignLast:"end"}}>
      <h1>Total ₹ {total}</h1>
      <br />
      <Button
         variant="outline-dark" size="lg" style = {{width :"16rem",borderRadius: "0px",
                  textAlignLast:"center",
         borderColor: "black"}}
        onClick={() => {
          postOrder();
        }}
      >
        Order
      </Button>
      </div>
    </>
  );
};

export default OrderPage;
