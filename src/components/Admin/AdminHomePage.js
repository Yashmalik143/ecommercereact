import AddCategory from "./AddCategory";
import AddSupplier from "./AddSupplier";
import { GetCategory } from "./CategoryCRUD";
import UpdateCategory from "./UpdateCategory";

const AdminHome = () =>{

    return <>

    <br />
<GetCategory></GetCategory>
    
    </>

}

const divStyle = {    width:" fit-content",
textAlignLast: "center",
border:" 8px solid #e7e7e7",
float: "left",
margin: "4rem",
padding: "2rem" }

export default AdminHome;
