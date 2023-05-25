import { useState } from "react";
import {Button ,Form } from "react-bootstrap"

const AddCategory = () => {
    const [categoryData, setcategoryData] = useState({
        id:0,
      name: '',
    
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
        name: '',

      });

      var str = "bearer " + JSON.parse(localStorage.getItem("token"));
    console.log(str);
    let a = fetch("https://localhost:7277/api/Categories/add-categories", {
      method: "POST",
      body: JSON.stringify(categoryData),
      headers: {
        "Content-Type": "application/json",
        authorization: str,
      },
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      alert("Category Added Successfully")
      
    })
    .catch(error => {
      console.error('Error:', error);
    });


    };
  
    return (
      <div >
        <h2>Add Category</h2>
        <form style={{padding:"4rem"}} onSubmit={handleSubmit}>
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
          <Button  variant="outline-dark"  style={{margin:"2rem"}} type="submit">Add Category</Button>
        </form>
      </div>
    );
  };
  
  export default AddCategory;