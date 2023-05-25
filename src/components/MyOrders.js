import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import SpinnerComponent from "./SpinnerComponent";
import ErrorPage from "../ErrorPage";
const MyOrders = () => {
  const [order, setOrders] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    var str = "bearer " + JSON.parse(localStorage.getItem("token"));
    console.log(str);
    fetch("https://localhost:7277/api/Order/view-orders", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        authorization: str,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setOrders(result);
        setIsLoading(false)
        console.log(order);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
      });
  },[]);

  if (error) return <ErrorPage />;
  if(isLoading) return <SpinnerComponent/>
  return (
    <>
      <div style={container}>
        <h1> My Orders</h1>
        <div>
          {order.length > 0 &&
            order.map((order) => (
              <Card style={{ width: "100%" , marginBottom : "2%" }}>
                <Card.Body>
                  <Card.Title style={{    textAlignLast: "left"}}><h1>
                      Order Id - {order.orderID}
                    </h1></Card.Title>
                  {order.productdet.length >0 && order.productdet.map((product) => (
                    <Card style={CardStyle}>
                      <Card.Img style={ImageStyle}
                        variant="top"
                        src={product.imgUrl}
                        />
                      <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
                        <Card.Text>
                          {product.productDesc}
                        </Card.Text>
                        <Card.Footer><h2>
                        Price ₹{product.price}
                          </h2></Card.Footer>
                      </Card.Body>
                    </Card>
                  ))}
                    
            
                </Card.Body>
                  <Card.Footer style = {{textAlign: "end"}}><h2>
                  Total Price ₹ {order.totalPrice}
                    </h2></Card.Footer>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
};

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
};
const CardStyle = {
  float: "left",
  width: "18rem",
  height: "Auto",
  backgroundColor: "#dfdfdf",
  paddingLeft: "5px",
  margin: "25px",
  
  borderRadius: "10px",
  boxShadow: "0px 10px 25px 0px rgba(0, 0, 0, 0.5)",
};
const ImageStyle = {
  width: "88%",
  height: "15rem",
  margin: "15px",
  pading: "px",
  borderRadius: "7px",
};
export default MyOrders;
