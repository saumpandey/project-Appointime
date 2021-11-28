import React from "react";
import "./style.css";
import SalonCard from "./SalonCard";
import img4 from "../images/women-bg.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Secondpage_women = () => {
  return (
    <div>
      <Navbar/>  
      <div className="image1">
        <img
          src={img4}
          style={{
            height: "500px",
            width: "100%",
            marginTop:'20px',
            objectFit:'cover',
          }}
        />
        <div className="text2">
          Welcome to Salons <br />
          <p>Browse Your favourite Salon and get quick appointment!</p>
        </div>
      </div>

      <div className="main">
        <SalonCard />
      </div>

      <Footer/>
    </div>
  );
};

export default Secondpage_women;
