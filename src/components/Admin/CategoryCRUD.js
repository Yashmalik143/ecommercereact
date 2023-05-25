import { useRef, useState } from "react";
import { useEffect } from "react";
import { Table, Button, Toast,Form ,Modal } from "react-bootstrap";
import { ToastComponent } from "./ToastCheck";
export const GetCategory = () => {
  const inputRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [editingRowIndex, setEditingRowIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  const [state, setState] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name,setName] = useState({
    name : "",
    cat  : ""
  })
  const [categoryData, setcategoryData] = useState({
    id:0,
  name: 'swd',

  // Additional supplier fields as needed
});
  const handleClick = () => {
    console.log(showToast);
    setShowToast(true);
    console.log(showToast);
  };
  const handleEdit = (rowIndex, value) => {
    setEditingRowIndex(rowIndex);
    setEditedValue(value);
  };

  const handleSave = (categoryid) => {
    console.log(categoryid, editedValue);
    const categoryData = {
      id: categoryid,
      name: editedValue,
    };
    var str = "bearer " + JSON.parse(localStorage.getItem("token"));
    console.log(str);
    fetch("https://localhost:7277/api/Categories/update-categories", {
      method: "PUT",
      body: JSON.stringify(categoryData),
      headers: {
        "Content-Type": "application/json",
        authorization: str,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        console.warn("Category Updated Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setEditingRowIndex(null);
    setEditedValue("");
    setState(state + 1);
    GetCategoryData();
    let a = handleClick;
  };
  const handleInputChange = (event) => {
    setEditedValue(event.target.value);
  };
  const GetCategoryData = () => {
    fetch("https://localhost:7277/api/Categories/view-categories")
      .then((d) => d.json())
      .then((res) => {
        setCategories(res);
        console.log(categories);
      });
  };
  const handleDelete = (categoryid) => {
    const categoryData = {
      id: categoryid,
    };
    var str = "bearer " + JSON.parse(localStorage.getItem("token"));
    console.log(str);
    fetch("https://localhost:7277/api/Categories/Delete-by-id", {
      method: "DELETE",
      body: JSON.stringify(categoryData),
      headers: {
        "Content-Type": "application/json",
        authorization: str,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        alert("Category Deleted Successfully");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const ToastComp = (prop) => {
    return (
      <Toast
          show={showToast}
           bg = "dark"
          style={{ position: "absolute", top: "26rem", left: "44%" }}
          positon="top-center"
          onClose={() => setShowToast(false)}
          delay={2000} autohide
          size = "lg"
        >
          <Toast.Header>
            <strong classNameName="mr-auto">Message</strong>
          </Toast.Header>
          <Toast.Body>Name of Category {prop.data} Updated!</Toast.Body>
        </Toast>
    )
  }
  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
const handleChangeAdd = (e) =>{
 
  
//  setcategoryData({ ...categoryData, [e.target.name]:e.target.value});

  console.log(e.target.value)
  console.log(name)
}
  const handleSubmivaluevent=() => {
 
    // Handle form submission logic here

    // Close the popup form after submission
   console.log(categoryData)
  };

  function checkname(){
    console.log(categoryData.name)
  }
  function handleSubmit32() {
   // alert(`Name: ${inputRef.current.value}`);
    let aq= inputRef.current.value;
    console.log(aq)
    setcategoryData({ ...categoryData, name:aq});
   // console.log(categoryData);

   console.log(name)
setName(aq);
 
 
    
    console.log(name)

    var str = "bearer " + JSON.parse(localStorage.getItem("token"));
    console.log(str);
    // let a = fetch("https://localhost:7277/api/Categories/add-categories", {
    //   method: "POST",
    //   body: JSON.stringify(categoryData),
    //   headers: {
    //     "Content-Type": "application/json",
    //     authorization: str,
    //   },
    // })
    // .then(response => response.json())
    // .then(result => {
    //   console.log('Success:', result);
    //   alert("Category Added Successfully")
      
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
     handleClose();
     checkname()
  }
const PopupForm = () =>{


  return (
    // <div style  = {{top: "38rem",
    // color: "black",
    // position: "absolute",
    // left: "40%",    background: "#eeeeee63",
    // width: "42rem",
    // height:" 11rem",
    // padding: "5%"}}>
    
<div>
      {isOpen && (
        <div>
      
      
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form style={{padding:"4rem"}} onSubmit={handleSubmit32}>
          <label>
            Category Name : 
            <input
              type="text"
              name="name"
             
              onChange={handleChangeAdd}
              required
            />
          </label>
     
          <br />
          <Button  variant="outline-dark"  style={{margin:"2rem"}} type="submit">Add Category</Button>
        </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
          
      {/* <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group classNameName="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                ref={inputRef}
                onChange = {(e)=> setcategoryData({ ...categoryData, name: e.target.value })}
              />
            </Form.Group>
         
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleSubmit32()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
   {/* <Modal
        isOpen={isOpen}
        onRequestClose={isOpen}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <h2 >Hello</h2>
        <button onClick = {()=> setIsOpen(false)}>close</button>
        <div>I am a modal</div>
        <form onSubmit={handleSubmit32}>
          <input
           ref={inputRef}
             type="text"
             name="name"
             required/>
   
   <button type="submit">Submit</button>
        </form>
      </Modal> */}
       </div>
      )}
    </div>
  );
};


  useEffect(() => {
    GetCategoryData();
  }, []);

  return (
    <>
      <div style = {{textAlignLast :"center"}}> 
        <h1> Category CRUD </h1>

    <h1>{categoryData.name}</h1>
    
        <div>
          <Table striped bordered hover size="lg" variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Category Name</th>
                <th>Products</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {categories.length > 0 &&
              categories.map((Category, rowIndex) => (
                <tbody>
                  <tr key={Category.id}>
                    <td>{Category.id}</td>
                    <td>
                      {editingRowIndex === rowIndex ? (
                        <input
                          type="text"
                          defaultValue={Category.categoryName}
                          onChange={handleInputChange}
                        />
                      ) : (
                        Category.categoryName
                      )}
                    </td>
                    <td>
                      <Table striped bordered hover size="sm" variant="dark">
                        <thead>
                          <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                          </tr>
                        </thead>

                        {Category.catProduct.length > 0 &&
                          Category.catProduct.map((pro) => (
                            <tbody>
                              <tr key={pro.id}>
                                <th>{pro.id}</th>
                                <th>{pro.productName}</th>
                                <th>{pro.price}</th>
                              </tr>
                            </tbody>
                          ))}
                      </Table>
                    </td>
                    <td>
                    <ToastComp data = {Category.id}/>
                      {editingRowIndex === rowIndex ? (
                        <Button
                          variant="success"
                          onClick={() => {
                            setShowToast(true);
                            handleSave(Category.id);
                            GetCategoryData();
                          }}
                        >
                          Save
                        </Button>
                      ) : (
                        <Button
                          variant="info"
                          onClick={() => handleEdit(rowIndex, Category[0])}
                        >
                          Edit
                        </Button>
                      )}
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(Category.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
               
              ))}
               <tfoot>
                  <tr>
                    <td>
                     <Button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" variant = "Dark" onClick={handleButtonClick} style = {{color: "white"}}>
                      Add Category
                      </Button> 
                      <PopupForm/>
                    </td>
                  </tr>
                </tfoot>
          </Table>
        </div>
      </div>
    </>
  );
};
