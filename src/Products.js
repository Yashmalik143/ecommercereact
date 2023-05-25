import React from "react";
import { Card, Button } from "react-bootstrap";
import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SingleProduct, addToCartv ,Sort} from "./action";
import SpinnerComponent from "./components/SpinnerComponent";
import ErrorPage from "./ErrorPage";
import { NavLink } from "react-router-dom";
const Products = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const [prod, setProd] = useState([]);
  const [active, setActive] = useState("");
 
  const handleClick = (event) => {
    setActive(event.target.id);
    
  }

  const func = () =>{
    setIsLoading(true);
    fetch("https://localhost:7277/api/Product/view-all-products")
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        setProd(res);
        setIsLoading(false);

 
      })
      .catch((err) => {
        setError(true);
        console.log("Failed", err);
      });
  }
  useEffect(() => {
    func();
  }, []);
const sorting = ((e,data) =>{

 console.log(e.target.value)
  let sortingValue = e.target.value;
  let arr = [...data]
  let newSortedArr;
  if(sortingValue === "lowest")
  {
    newSortedArr= arr.sort((a,b) => a.price - b.price)
    console.log(newSortedArr);
    setProd(newSortedArr)
  }
  if(sortingValue === "highest")
  {
    newSortedArr= arr.sort((a,b) => b.price - a.price)
    console.log(newSortedArr);
    setProd(newSortedArr)
  }
  if(sortingValue === "a-z")
  {
    newSortedArr= arr.sort((a,b) => a.productName.localeCompare(b.productName))
    console.log(newSortedArr);
    setProd(newSortedArr)
  }
  if(sortingValue === "z-a")
  {
    newSortedArr= arr.sort((a,b) => b.productName.localeCompare(a.productName))
    console.log(newSortedArr);
    setProd(newSortedArr)
  }
  if(sortingValue === "Featured")
  {
    func()
  }

})
  if (error) return <ErrorPage />;
  if (isLoading)
    return (
      <>
        <SpinnerComponent />
      </>
    );
const categoryData = (data) =>{
  setIsLoading(true);
  fetch("https://localhost:7277/api/Categories/view-categories")
  .then((d) => d.json())
  .then((res) => {

    let a = res.filter(x => x.categoryName === data)
    setProd(a[0].catProduct);
   console.log(a)
   
    setIsLoading(false);


  })
  .catch((err) => {
    setError(true);
    console.log("Failed", err);
  });

}
const search =  (data) =>{

  let a = prod.filter((ele) =>{
    return ele.productName.toLowerCase().includes(data.toLowerCase())
  })

  console.log(a)
} 
  return (
    <>
  
   <div >
      <ul style={{textAlign : "center"}}>
      <Button variant="outline-dark" style = {buttonStylev} onClick={(e)=>{func()
      handleClick(e)}}>All</Button>
    <Button style = {buttonStylev} variant="outline-dark" onClick={()=>{categoryData("Books")}}>Books</Button>
    <Button style = {buttonStylev} variant="outline-dark" onClick={()=>{categoryData("Mobile")}}>Mobile</Button>
    <Button style = {buttonStylev} variant="outline-dark" onClick={()=>{categoryData("Laptop")}}>Lapotp</Button>

      </ul>
    </div>
   
      <div>
      <div style={{marginLeft:"3rem"}}>
      <form action="">
        <select name="sort" id="sort" onChange={(e)=>{
          e.preventDefault()
          sorting(e,prod)
        
      
        
        }}
          >
           <option value="Featured">Featured</option>
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Name (a-z)</option>
          <option value="z-a">Name (z-a)</option>
        </select>
      </form>
    </div>
        {prod.length > 0 &&
          prod.map((pro) => (
            <div style={mystyle}>
              <Card style={CardStyle}>
                <Card.Img variant="top" style={ImageStyle} src={pro.imgUrl} />
                <Card.Body style={cardbody}>
              <NavLink to= "/SingleProduct/:id" state={pro} style={{textDecoration :"none",  color :"black"}}>
                  <b>
                    <Card.Title>{pro.productName}</Card.Title>
                    
                  </b>
                  <b>
                    <Card.Title style={{textAlignLast: "right"}}>Price  ₹ {pro.price}</Card.Title>
                    
                  </b>
                  </NavLink>
                  <Button
                    variant="outline-dark" style = {{width :"16rem",borderRadius: "0px",
                  
                    borderColor: "black"}}
                    onClick={() => {
                      dispatch(SingleProduct(pro));
                      dispatch(addToCartv());
                    }}
                  >
                    {" "}
                    

                  Add To cart 
                    
                  </Button>
                </Card.Body>
              
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};
const buttonStylev={
  margin: "2%",
  borderRadius: "1rem",
  borderColor:"white",
}
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
  marginLeft :"1rem",
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

};
export default Products;
