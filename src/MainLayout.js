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
import AddSupplier from "./components/Admin/AddSupplier";
import AddCategory from "./components/Admin/AddCategory";
import UpdateCategory from "./components/Admin/UpdateCategory";
const MainLayout = () => {
  return (

 <>

 <Navbar/>
<Routes>

      <Route path="/" element = {<Home/> }/>
      <Route path="/About" element = {<About/> }/>
      <Route path="/Products" element = {<Products/> }/>
      <Route path="/Contact" element = {<Contact/> }/>
      <Route path="/Cart" element = {<Cart/> }/>
      <Route path="/SingleProduct/:id" element = {<SingleProduct/> }/>
      <Route path="*" element = {<ErrorPage/> }/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Order" element={<OrderPage/>}></Route>
      <Route path="/MyOrder" element={<MyOrder/>}></Route>
      <Route path="/Admin/AdminSignIn" element={<SignIn/>}></Route>
      
</Routes>
    

    <Footer/>


    </>
  );
};

export default MainLayout;
