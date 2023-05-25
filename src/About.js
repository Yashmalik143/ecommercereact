import React from 'react'

const About = () => {
  return (
    <div style={mystyle}>
      <h1 style={{fontSize: "4rem"}}><u>About Us</u></h1>
      <p style={{fontSize: "2rem"}}>knowledge of Machine Learning, React Native, React, Python, Java, SpringBoot, Django, Flask, Wordpress. Never stop learning because life never stops teaching.</p>
    </div>
  )
}
const mystyle = {
	// backgroundColor:"#DFDFDF",
  backgroundImage: 'linear-gradient(to right, Black , grey)',
	backgroundRepeat:"no-repeat",
	backgroundSize:" cover",
	// width : "70rem",
	// alignItem :"center",
	// textAlign: "center",
	padding :"20px",
	color :"#dfdfd6"

}

export default About
