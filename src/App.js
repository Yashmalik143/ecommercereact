import React from "react";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import Register from "./components/Register";
import SignIn from "./components/signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderPage from "./components/Order"
import MyOrder from "./components/MyOrders";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSignIn from "./components/Admin/AdminLogin";
import { AdminPanel } from "./components/Admin/Admin";
import AdminNavbar from "./components/Admin/AdminNavbar";
import MainLayout from "./MainLayout";
import { useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const myName = useSelector((state) => state.nameOfUser);

  if(myName === "admin1")
  return <AdminPanel/>
  else
  return <MainLayout/>
};

export default App;
