import Navbar from "../Navbar"
import AddCategory from "./AddCategory"
import AddSupplier from "./AddSupplier"
import AdminSignIn from "./AdminLogin"
import { Route, Routes ,NavLink} from "react-router-dom"
import AdminNavbar from "./AdminNavbar"
import UpdateCategory from "./UpdateCategory"
import { Button } from "react-bootstrap"
import SignIn from "../signup"
import AdminHome from "./AdminHomePage"
import { ToastComponent } from "./ToastCheck"

export const AdminPanel = () =>{
    return (
        <>
        {/* Add your new header component here */}
 
        <AdminNavbar/>
        <Routes>
   
       <Route path = "/" element={<AdminHome/>}></Route>
       <Route path = "/AdminHome" element={<AdminHome/>}></Route>
      <Route path="/Admin/AdminSignIn" element={<SignIn/>}></Route>
      <Route path="/Admin/AddSupplier" element={<AddSupplier/>}></Route>
      <Route path="/Admin/AddCategory" element={<AddCategory/>}></Route>
      <Route path="/Admin/UpdateCategory" element={<UpdateCategory/>}></Route>
  
        </Routes>

     
      </>
    )
}