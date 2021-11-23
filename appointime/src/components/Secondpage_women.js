import React from "react";
import "./style.css";
import SalonCard from "./SalonCard";
import img3 from "../images/homebanner.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Secondpage_women = () => {
  return (
    <>
      <Navbar/>  
      <div className="image1">
        <img
          src={img3}
          style={{
            height: "500px",
            width: "100%",
            marginTop:'10px'
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
    </>
  );
};

export default Secondpage_women;
