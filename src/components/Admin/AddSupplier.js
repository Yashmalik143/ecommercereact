import { useState } from "react";
import {Button ,Form } from "react-bootstrap"

const AddSupplier = () => {
    const [supplierData, setSupplierData] = useState({
        id:0,
      name: '',
    
      // Additional supplier fields as needed
    });
  
    const handleChange = (e) => {
      setSupplierData({ ...supplierData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send supplierData to the backend using an API call or other suitable method
      console.log(supplierData); // Example log for demonstration purposes
      // Reset the form after successful submission
      setSupplierData({
        name: '',

      });

      var str = "bearer " + JSON.parse(localStorage.getItem("token"));
    console.log(str);
    let a = fetch("https://localhost:7277/api/Users/add-suppiler", {
      method: "POST",
      body: JSON.stringify(supplierData),
      headers: {
        "Content-Type": "application/json",
        authorization: str,
      },
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      alert("Supplier Added Successfully")
      
    })
    .catch(error => {
      console.error('Error:', error);
    });


    };
  
    return (
      <div >
        <h2>Add Supplier</h2>
        <Form style={{padding:"4rem"}} onSubmit={handleSubmit}>
          <label>
            Supplier Name : 
            <input
              type="text"
              name="name"
              value={supplierData.name}
              onChange={handleChange}
              required
            />
          </label>
     
          <br />
          <Button  variant="outline-dark"  style={{margin:"2rem"}} type="submit">Add Supplier</Button>
        </Form>
      </div>
    );
  };
  
  export default AddSupplier;