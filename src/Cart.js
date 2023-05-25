import { Card, Button } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiRupee } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Deleteproduct ,deleteFromCart} from "./action";
const Cart = () => {
  const dispatch = useDispatch();

  const myName = useSelector((state) => state.SingleProduct);
  const arr = myName.cartItem;
  console.log(arr)
if(arr.length<=0)
return(

  <div style={container}>

    
  <span
    style={{
      position: "relative",
      top :"41%",
      marginTop: "14%",
      "font-size": "-webkit-xxx-large",
    }}
  > Your Cart is Empty 

  <br />

<a href = "/Products">
  <Button  variant="dark">Continue Shopping</Button></a>
    </span>

    </div>
)
  return (
    <>
      <div>
        {arr.length > 0 &&
          arr.map((pro) => (
            <div style={mystyle}>
              <Card style={CardStyle}>
                <Card.Img variant="top" style={ImageStyle} src={pro.imgUrl} />
                <Card.Body style={cardbody}>
                  <b>
                  <NavLink to= "/SingleProduct/:id" state={pro} style={{textDecoration :"none",  color :"black"}}>
                    <Card.Title>{pro.productName}</Card.Title>

                    <Card.Title>
                      <BiRupee style={{ fontSize: "17px" }} />
                      {pro.price}
                    </Card.Title>
                    </NavLink>
                  </b>

                  <Button variant="outline-dark" style = {{width :"16rem",borderRadius: "0px",
                  
                  borderColor: "black"}} onClick = {() => {
                    dispatch( Deleteproduct(pro.id))
                    dispatch(deleteFromCart())
                  
                    }}>
                    {" "}
                    <b>Remove </b>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        <NavLink to="/Order">
          <button
            style={{
              width: "60%",
              "background-color": "orange",
              "margin": "4%",
              "width": "95%",
              "padding": "1%",
              "text-align": "center",
              "color": " white",
              "font-size": "x-large",
              "border-radius": " 6px",
              "border-color": "inherit",
              "font-display": "block",
              "box-shadow": "rgba(0, 0, 0, 0.5) 0px 15px 20px 0px"
            }}
          >
          
            Proceed To Checkout
          </button>
        </NavLink>
      </div>
    </>
  );
};
const mystyle = {
  // backgroundColor:"#DFDFDF",
  display: "inline-flex",
  magrinLeft: "50px ",
  padding: "20px",
  // textAlign :'center',
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
export default Cart;
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