import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nameOf } from "../action";
import { NavLink, Navigate } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
const { default: jwt_decode } = require("jwt-decode");

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogged(true);
    }
  });
  const getToken = () => {
    localStorage.clear();
    let bdy = { id, name };
    console.log(bdy);

    fetch("https://localhost:7277/api/Users/login", {
      method: "POST",
      body: JSON.stringify({ id, name }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((resi) => {
        console.log(resi);
        localStorage.setItem("token", JSON.stringify(resi));
        getResult();
        setLogged(true);
      });
  };
  const getResult = () => {
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
  };

  const LogOut = () => {
    debugger;
    localStorage.clear();
    setLogged(false);
    dispatch(nameOf("Plz Log in"));
  };

  if (isLogged)
    return (
      <>
        <div style={container}>
          <button
            style={mybutton}
            type="submit"
            onClick={() => {
              LogOut();
            }}
          >
            logOut
          </button>
          <NavLink to="/MyOrder">
            <button style={mybutton}>Your Orders</button>
          </NavLink>
        </div>
      </>
    );
  return (
    <>
      <div style={container}>
        <Form onSubmit={(event) => event.preventDefault()}>
          <h2>Log in</h2>
          <h1>{id}</h1>
          <input
            style={myinput}
            type="text"
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
          />
          <br></br>
          <input
            style={myinput}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name "
          />
          <br></br>
          <button
            style={mybutton}
            type="submit"
            onClick={() => {
              getToken();
            }}
          >
            LogIn
          </button>
        </Form>
        <div>
          <hr style={{ width: "20rem", size: "10px", color: "grey" }}></hr>
          <p style={{ fontSize: "15px", color: "grey" }}>don't have account </p>
          <NavLink
            to="/Register"
            style={{
              textDecoration: "none",
              padding: "10px",
              fontSize: "18px",
              color: "black",
            }}
          >
            Register <CgLogIn />
          </NavLink>
        </div>
      </div>
    </>
  );
}

const mybutton = {
  backgroundColor: "Black",

  color: "white",
  fontSize: "16px",
  padding: "10px 15px",
  borderRadius: "15px ",
  borderColor: "#223b75",
  margin: "30px",
  cursor: "pointer",
  height: "50px",
  width: "10rem",
  boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.5)",
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

const myinput = {
  padding: "6px",
  width: "300px",
  border: "3px",
  fontSize: "16px",
  borderRadius: "10px ",
  borderColor: "#223b75",
  marginLeft: "30px",
  marginTop: "10px",
};
