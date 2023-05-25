import { useState } from "react";
import {Button ,Form } from "react-bootstrap"

const UpdateCategory = () => {
    const [categoryData, setcategoryData] = useState({
        
      id: '',
      name: ''
    
      // Additional supplier fields as needed
    });
  
    const handleChange = (e) => {
      setcategoryData({ ...categoryData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send categoryData to the backend using an API call or other suitable method
      console.log(categoryData); // Example log for demonstration purposes
      // Reset the form after successful submission
      setcategoryData({
        id: '',
        name:''

      });

      var str = "bearer " + JSON.parse(localStorage.getItem("token"));
    console.log(str);
      fetch("https://localhost:7277/api/Categories/update-categories", {
      method: "PUT",
      body: JSON.stringify(categoryData),
      headers: {
        "Content-Type": "application/json",
        authorization: str,
        Accept : "application/json"
      },
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      alert("Category Updated Successfully")
      
    })
    .catch(error => {
      console.error('Error:', error);
    });


    };
  
    return (
      <div style={{    
        textAlignLast:"center",
        height: "40rem"}}>
        <h2>Update Category</h2>
        <Form style={{padding:"4rem"}} onSubmit={handleSubmit}>
            <label>
            Category Id : 
            <input
              type="Number"
              name="id"
              value={categoryData.id}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Category Name : 
            <input
              type="text"
              name="name"
              value={categoryData.name}
              onChange={handleChange}
              required
            />
          </label>
     
          <br />
          
          <Button  variant="outline-dark"  style={{margin:"2rem"}} type="submit">Update Category</Button>
        </Form>
      </div>
    );
  };
  
  export default UpdateCategory;