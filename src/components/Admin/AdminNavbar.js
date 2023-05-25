import React from "react";
import { Nav, NavLink, NavMenu} from "../NavbarStyle";
// import { NavLink } from 'react-router-dom'
import { GiShoppingCart } from "react-icons/gi";
import { AiTwotoneHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { SiProducthunt } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCartv,nameOf } from "../../action";
import { Button } from "react-bootstrap";
const { default: jwt_decode } = require("jwt-decode");

const mystyle = {
  color: "white",
  //   backgroundColor: "lightBlue",
  padding: "1px",
  fontFamily: "Arial",
  flexDirection: "row",
  float: "right",
  flex: "1",
};
const AdminNavbar = () => {
  const dispatch = useDispatch();
  // const myState = useSelector((state) => state.addToCart)
  const myName = useSelector((state) => state.nameOfUser);

  const cartArr = useSelector((state) => state.SingleProduct);
  const myState = cartArr.cartItem.length;
  console.log(myState);

  const [nm, setNm] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      var ab = jwt_decode(token);
      console.log(ab);

      var name =
        ab["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      var role =
        ab["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      var id =
        ab[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ];
      console.log({ name, role, id });
      dispatch(nameOf(name));
    } else {
      console.log("please log in");
    }
  }, []);

  return (
    <>
      <Nav >
        <b
          style={{ color: "white", fontSize: "50px", padding: "0px 10px 0 0 " ,}}
        >
          {" "}
          <FaShopify />
        </b>
        <NavMenu>
         <NavLink to="/AdminHome" >
          <AiTwotoneHome/>
         </NavLink>
         <h3 style={{color:"white"}}>Welcome to Admin Panel</h3>        
        </NavMenu>

        <NavLink
          to="/Admin/AdminSignIn"
          style={{ textDecoration: "none", padding: "4px", fontSize: "20px" }}
          className="navbar-link cart-trolley--link"
        >
          <CgLogIn
            style={{
              textDecoration: "none",
              padding: "10px",
              fontSize: "20px",
            }}
          />{" "}
          {myName}
        </NavLink>
      </Nav>
    </>
  );
};



export default AdminNavbar;
