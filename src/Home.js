import React from 'react'
import Herosection from './components/Herosection';
import Services from './components/Services';
import Features from "./components/features";
const Home = () => {
  return (
    <div>
      
      <Herosection/>
      <Features/>
      <div>
      <Services/>
      </div>
      
       
    </div>
  );
}

export default Home
